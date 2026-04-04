// ═══ Fairy Calendar — app.js ═══

const STORAGE = {
  STATE:     'fairy-cal-state',
  BIRTHDAYS: 'fairy-cal-birthdays',
  OBSERVER:  'fairy-cal-observer',
  TOOLBAR:   'fairy-cal-toolbar-open',
};

let currentFY    = null;
let selectedDate = null;
let scrollToTodayAfterRender     = false;
let scrollToSelectedAfterRender  = false;
let restoreScrollFracAfterRender = null;
let _skyReturnState = null; // {mode, calendarType, calendarSpan, scrollY, selectedDate}
let _bdaySkyObs    = null; // saved OBSERVER fields during a birthday sky view
let _updateLocHint = null;  // set by initSettingsModal, called by showSettings
let runtimeBirthdays = (typeof BIRTHDAYS !== 'undefined') ? [...BIRTHDAYS] : [];

try {
  const savedBdays = JSON.parse(localStorage.getItem(STORAGE.BIRTHDAYS) || 'null');
  if (Array.isArray(savedBdays)) runtimeBirthdays = savedBdays;
} catch(_) {}

try {
  const obs = JSON.parse(localStorage.getItem(STORAGE.OBSERVER) || '{}');
  if (obs.lat !== undefined) OBSERVER.lat = Number(obs.lat);
  if (obs.lon !== undefined) OBSERVER.lon = Number(obs.lon);
  if (obs.tz)       OBSERVER.tz = obs.tz;
  if (obs.cityName) OBSERVER.cityName = obs.cityName;
} catch(_) {}

let state = {
  holYear: new Date().getFullYear() + 10000,
  mode: 'sky',           // 'sky' | 'calendar'
  calendarType: 'fairy', // 'fairy' | 'greg' | 'hebrew'
  calendarSpan: 'month', // 'month' | 'week'
  skyShowMoon: true,
  skyCulture: 'western', // 'western' | 'pawnee' | 'hindu'
  theme: 'fairy',
  variant: 'a',
  colorScheme: 'dark',
  weekNames: 'myth',
  language: 'en',
  language2: null,
  showHolidays: true,
  showMeteors: true,
  showComets: true,
  showBirthdays: true,
  calendarType2: 'greg', // null | 'fairy' | 'greg' | 'hebrew'
};

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE.STATE) || '{}');
  if (saved.holYear)    state.holYear    = Number(saved.holYear);
  // Migrate from old viewMode
  if (saved.mode) {
    state.mode = saved.mode;
  } else if (saved.viewMode) {
    if (saved.viewMode === 'sky') {
      state.mode = 'sky';
    } else {
      state.mode = 'calendar';
      if (saved.viewMode === 'week') { state.calendarSpan = 'week'; }
      else { state.calendarType = saved.viewMode; } // 'fairy', 'greg', 'hebrew'
    }
  }
  if (saved.calendarType && ['fairy','greg','hebrew','cherokee','iroquois','hindu'].includes(saved.calendarType)) state.calendarType = saved.calendarType;
  if (saved.calendarSpan && ['month','week'].includes(saved.calendarSpan)) state.calendarSpan = saved.calendarSpan;
  if (saved.skyShowMoon !== undefined) state.skyShowMoon = saved.skyShowMoon;
  if (saved.skyCulture && ['western','pawnee','hindu'].includes(saved.skyCulture)) state.skyCulture = saved.skyCulture;
  if (saved.theme) state.theme = saved.theme;
  // Variant + color scheme: load saved, or migrate from old palette
  if (saved.variant && 'abcde'.includes(saved.variant)) state.variant = saved.variant;
  else if (saved.palette) {
    const PM = { midnight:'a','deep-sea':'b',grove:'c',rose:'a',violet:'b',forest:'c',golden:'d',ember:'d',parchment:'a',sky:'d' };
    state.variant = PM[saved.palette] || 'a';
    state.colorScheme = ['midnight','deep-sea','grove'].includes(saved.palette) ? 'dark' : 'light';
  }
  if (saved.colorScheme && ['dark','light'].includes(saved.colorScheme)) state.colorScheme = saved.colorScheme;
  if (saved.weekNames)  state.weekNames  = saved.weekNames;
  if (saved.showHolidays !== undefined) state.showHolidays = saved.showHolidays;
  if (saved.showMeteors    !== undefined) state.showMeteors    = saved.showMeteors;
  if (saved.showComets     !== undefined) state.showComets     = saved.showComets;
  if (saved.showBirthdays  !== undefined) state.showBirthdays  = saved.showBirthdays;
  // calendarType2: load saved, or migrate from old showOtherDate
  if ('calendarType2' in saved) {
    state.calendarType2 = (saved.calendarType2 === null || ['fairy','greg','hebrew','cherokee','iroquois','hindu'].includes(saved.calendarType2)) ? saved.calendarType2 : 'greg';
  } else if (saved.showOtherDate !== undefined) {
    const _defSec = { fairy: 'greg', greg: 'fairy', hebrew: 'greg', cherokee: 'fairy', iroquois: 'fairy', hindu: 'greg' };
    state.calendarType2 = saved.showOtherDate ? (_defSec[state.calendarType] ?? 'greg') : null;
  }
  if (saved.language && I18N[saved.language]) state.language = saved.language;
  if ('language2' in saved && (saved.language2 === null || (saved.language2 && I18N[saved.language2]))) state.language2 = saved.language2;
} catch(_) {}

function _computeViewMode() {
  if (state.mode === 'sky') return 'sky';
  if (state.calendarSpan === 'week') return 'week';
  return state.calendarType;
}

// ─── Info Modal ──────────────────────────────────────────────────────

function _dayLabel(dateStr, fy) {
  let fd = fy && fy.dayMap.get(dateStr);
  if (!fd) {
    // Today might not be in the currently viewed fairy year — try the actual year
    const gd = new Date(dateStr + 'T00:00:00Z');
    const holY = gd.getUTCFullYear() + 10000;
    if (!fy || holY !== fy.holYear) {
      const tryFY = buildFairyYear(holY);
      fd = tryFY.dayMap.get(dateStr);
      if (!fd) { // solstice edge: try previous holocene year
        const tryFY2 = buildFairyYear(holY - 1);
        fd = tryFY2.dayMap.get(dateStr);
      }
    }
  }
  if (!fd) return dateStr;
  const gd = fd.gregDate;
  return `${getWeekdays()[fd.fairyWeekdayIndex]} · ${getGregMonths()[gd.getUTCMonth()]} ${gd.getUTCDate()} / ${tMoon(fd.fairyMonth)} ${fd.fairyDay}`;
}

function initModal() {
  const modal = document.createElement('div');
  modal.id = 'cal-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    `<div id="modal-backdrop"></div>` +
    `<div id="modal-box">` +
      `<div id="modal-header">` +
        `<div id="modal-header-left">` +
          `<h2 id="modal-title"></h2>` +
        `</div>` +
        `<button id="modal-close" aria-label="Close">✕</button>` +
      `</div>` +
      `<div id="modal-body"></div>` +
    `</div>`;
  document.body.appendChild(modal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-body').addEventListener('click', e => {
    const lbl = e.target.closest('.sky-const-label');
    if (lbl) { showConstellationDetail(lbl.dataset.cname); return; }
    const dir = e.target.closest('.sky-dir-label');
    if (dir && _skyChartState) {
      const rotDeg = parseInt(dir.dataset.az);
      const wrap = dir.closest('.sky-chart-wrap');
      if (wrap) {
        const { catalogData, planets, moonData } = _skyChartState;
        _resetSkyZoom();
        wrap.outerHTML = renderSkyChart(catalogData, planets, rotDeg, moonData);
        const newSvg = document.querySelector('.sky-chart-svg');
        if (newSvg) _attachSkyZoom(newSvg);
      }
    }
  });
}

function closeModal() {
  document.getElementById('cal-modal').setAttribute('hidden', '');
}

// ─── Help Modal ───────────────────────────────────────────────────────

function initHelpModal() {
  const modal = document.createElement('div');
  modal.id = 'help-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    `<div id="modal-backdrop"></div>` +
    `<div id="modal-box">` +
      `<div id="modal-header">` +
        `<h2 id="modal-title">About This Calendar</h2>` +
        `<div id="modal-header-btns">` +
          `<button id="modal-close" aria-label="Close">✕</button>` +
        `</div>` +
      `</div>` +
      `<div id="modal-body"><div id="help-modal-body"></div></div>` +
    `</div>`;
  document.body.appendChild(modal);
  modal.querySelector('#modal-backdrop').addEventListener('click', closeHelp);
  modal.querySelector('#modal-close').addEventListener('click', closeHelp);
}

function showHelp() {
  document.getElementById('help-modal-body').innerHTML = getHelpHtml();
  document.querySelector('#help-modal #modal-title').textContent = t('help_title');
  document.getElementById('help-modal').removeAttribute('hidden');
}

function closeHelp() {
  document.getElementById('help-modal').setAttribute('hidden', '');
}

// ─── Settings Modal ───────────────────────────────────────────────────────

function initSettingsModal() {
  const modal = document.createElement('div');
  modal.id = 'settings-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    `<div id="modal-backdrop"></div>` +
    `<div id="modal-box">` +
      `<div id="modal-header">` +
        `<button id="modal-close" aria-label="Close">✕</button>` +
        `<h2 id="modal-title">Settings</h2>` +
        `<div id="modal-header-row">` +
          `<span class="settings-picker-group">` +
            `<span class="settings-picker-label" id="label-lang">Language</span>` +
            `<button id="lang-current-btn" class="btn lang-current-btn" title="Primary language"></button>` +
            `<button id="lang2-current-btn" class="btn lang-current-btn lang2-btn" title="Tooltip language"></button>` +
          `</span>` +
          `<span class="settings-picker-group">` +
            `<span class="settings-picker-label" id="label-cal">Calendar</span>` +
            `<button class="btn lang-current-btn" id="cal-primary-btn" title="Primary calendar"></button>` +
            `<button class="btn lang-current-btn" id="cal2-btn" title="Other date calendar"></button>` +
          `</span>` +
        `</div>` +
      `</div>` +
      `<div id="modal-body">` +
        `<h3 class="settings-section-head" id="settings-loc-head">Location</h3>` +
        `<div class="city-search-wrap">` +
          `<input type="text" id="settings-city-search" autocomplete="off" ` +
                 `placeholder="Search city / state / country ..." class="city-search-input">` +
          `<div id="city-dropdown" class="city-dropdown" hidden></div>` +
        `</div>` +
        `<div class="settings-row location-row">` +
          `<label for="settings-lat" id="settings-lat-lbl">Lat</label>` +
          `<input type="number" id="settings-lat" min="-90" max="90" step="0.1" placeholder="37.0">` +
          `<span class="settings-unit">° N</span>` +
          `<label for="settings-lon" id="settings-lon-lbl">Lon</label>` +
          `<input type="number" id="settings-lon" min="-180" max="180" step="0.1" placeholder="-80.0">` +
          `<span class="settings-unit">° E</span>` +
          `<button id="settings-loc-detect" class="btn">Detect</button>` +
        `</div>` +
        `<p class="settings-hint" id="settings-loc-hint"></p>` +
        `<hr class="settings-divider">` +
        `<h3 class="settings-section-head" id="settings-bday-head">Birthdays</h3>` +
        `<div class="settings-row bday-add-row">` +
          `<input type="text" id="bday-name" class="bday-input" placeholder="Name" maxlength="40">` +
          `<select id="bday-month" class="bday-select">` +
            `<option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option>` +
            `<option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option>` +
            `<option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option>` +
            `<option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>` +
          `</select>` +
          `<input type="number" id="bday-day" class="bday-input bday-day-input" min="1" max="31" placeholder="Day">` +
          `<button id="bday-add-btn" class="btn">Add</button>` +
          `<button id="bday-share-btn" class="btn">Backup / Share…</button>` +
          `<button id="bday-export-btn" class="btn">Save to file…</button>` +
          `<button id="bday-import-file-btn" class="btn">Load from file…</button>` +
          `<input type="file" id="bday-import-file-input" accept=".json" style="display:none">` +
        `</div>` +
        `<div id="birthday-list"></div>` +
      `</div>` +
    `</div>`;
  document.body.appendChild(modal);
  modal.querySelector('#modal-backdrop').addEventListener('click', closeSettings);
  modal.querySelector('#modal-close').addEventListener('click', closeSettings);
  modal.querySelector('#cal-primary-btn').addEventListener('click', () => { closeSettings(); showCalendarModal('primary'); });
  modal.querySelector('#cal2-btn').addEventListener('click', () => { closeSettings(); showCalendarModal('secondary'); });
  modal.querySelector('#lang-current-btn').addEventListener('click', () => { closeSettings(); showLanguageModal('primary'); });
  modal.querySelector('#lang2-current-btn').addEventListener('click', () => { closeSettings(); showLanguageModal('secondary'); });
  const _applyLocation = () => {
    const lat = parseFloat(document.getElementById('settings-lat').value);
    const lon = parseFloat(document.getElementById('settings-lon').value);
    if (isNaN(lat) || lat < -90 || lat > 90 || isNaN(lon) || lon < -180 || lon > 180) return;
    OBSERVER.lat = lat; OBSERVER.lon = lon;
    try { localStorage.setItem(STORAGE.OBSERVER, JSON.stringify({ lat, lon, tz: OBSERVER.tz || '', cityName: OBSERVER.cityName || '' })); } catch(_) {}
    refresh();
  };
  const _cityInput    = modal.querySelector('#settings-city-search');
  const _cityDropdown = modal.querySelector('#city-dropdown');
  const _cityLabel = c => c[0] + (c[4] ? ', ' + c[4] : '') + ', ' + c[5];
  _updateLocHint = () => {
    const hint = document.getElementById('settings-loc-hint');
    if (!hint) return;
    const latEl = document.getElementById('settings-lat');
    const lonEl = document.getElementById('settings-lon');
    const lat = parseFloat(latEl.value);
    const lon = parseFloat(lonEl.value);
    const latOk = !isNaN(lat) && lat >= -90 && lat <= 90;
    const lonOk = !isNaN(lon) && lon >= -180 && lon <= 180;
    latEl.classList.toggle('input-error', !!latEl.value && !latOk);
    lonEl.classList.toggle('input-error', !!lonEl.value && !lonOk);
    if (!latOk || !lonOk) {
      const msgs = [];
      if (latEl.value && !latOk) msgs.push('Latitude must be −90 to 90.');
      if (lonEl.value && !lonOk) msgs.push('Longitude must be −180 to 180.');
      hint.textContent = msgs.join(' ');
      return;
    }
    const ns = lat >= 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
    const ew = lon >= 0 ? 'Eastern Longitude' : 'Western Longitude';
    let cityPart = '';
    if (typeof CITIES !== 'undefined' && CITIES.length) {
      let best = CITIES[0], bestD = Infinity;
      for (const c of CITIES) {
        const d = (c[1] - lat) ** 2 + (c[2] - lon) ** 2;
        if (d < bestD) { bestD = d; best = c; }
      }
      const dKm = Math.round(111 * Math.sqrt((best[1] - lat) ** 2 + (best[2] - lon) ** 2));
      cityPart = ` · near: ${_cityLabel(best)} (${dKm} km)`;
    }
    hint.textContent = `${ns}, ${ew}${cityPart}`;
  };
  const _selectCity = city => {
    document.getElementById('settings-lat').value = city[1];
    document.getElementById('settings-lon').value = city[2];
    OBSERVER.tz = city[3];
    OBSERVER.cityName = _cityLabel(city);
    _cityInput.value = _cityLabel(city);
    _cityDropdown.setAttribute('hidden', '');
    _applyLocation();
  };
  _cityInput.addEventListener('input', () => {
    const q = _cityInput.value.trim().toLowerCase();
    _cityDropdown.innerHTML = '';
    if (q.length < 1) { _cityDropdown.setAttribute('hidden', ''); return; }
    const matches = (typeof CITIES !== 'undefined' ? CITIES : [])
      .filter(c => (c[0] + ' ' + c[4] + ' ' + c[5]).toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) { _cityDropdown.setAttribute('hidden', ''); return; }
    matches.forEach(city => {
      const item = document.createElement('div');
      item.className = 'city-dropdown-item';
      item.textContent = _cityLabel(city);
      item.addEventListener('mousedown', e => { e.preventDefault(); _selectCity(city); });
      _cityDropdown.appendChild(item);
    });
    _cityDropdown.removeAttribute('hidden');
  });
  _cityInput.addEventListener('blur', () => {
    setTimeout(() => _cityDropdown.setAttribute('hidden', ''), 150);
  });
  modal.querySelector('#settings-lat').addEventListener('change', () => {
    OBSERVER.cityName = ''; _cityInput.value = ''; _applyLocation(); _updateLocHint();
  });
  modal.querySelector('#settings-lon').addEventListener('change', () => {
    OBSERVER.cityName = ''; _cityInput.value = ''; _applyLocation(); _updateLocHint();
  });
  modal.querySelector('#settings-loc-detect').addEventListener('click', () => {
    if (!navigator.geolocation) return;
    const btn = modal.querySelector('#settings-loc-detect');
    btn.disabled = true;
    btn.textContent = '…';
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = Math.round(pos.coords.latitude  * 10) / 10;
        const lon = Math.round(pos.coords.longitude * 10) / 10;
        document.getElementById('settings-lat').value = lat;
        document.getElementById('settings-lon').value = lon;
        OBSERVER.cityName = '';
        modal.querySelector('#settings-city-search').value = '';
        _applyLocation();
        _updateLocHint();
        if (typeof CITIES !== 'undefined' && CITIES.length) {
          let best = CITIES[0], bestD = Infinity;
          for (const c of CITIES) {
            const d = (c[1] - lat) ** 2 + (c[2] - lon) ** 2;
            if (d < bestD) { bestD = d; best = c; }
          }
          const dKm = Math.round(111 * Math.sqrt((best[1] - lat) ** 2 + (best[2] - lon) ** 2));
          if (dKm > 400) showToast('⚠ Location may be IP-based');
        }
        btn.disabled = false;
        btn.textContent = 'Detect';
      },
      () => {
        btn.disabled = false;
        btn.textContent = 'Detect';
      }
    );
  });
  modal.querySelector('#bday-add-btn').addEventListener('click', () => {
    const name  = modal.querySelector('#bday-name').value.trim();
    const month = parseInt(modal.querySelector('#bday-month').value, 10);
    const day   = parseInt(modal.querySelector('#bday-day').value, 10);
    if (!name || isNaN(day) || day < 1 || day > 31) return;
    runtimeBirthdays.push({ name, month, day });
    _saveBirthdays();
    modal.querySelector('#bday-name').value = '';
    modal.querySelector('#bday-day').value  = '';
    _renderBirthdayList();
    refresh();
  });
  modal.querySelector('#bday-share-btn').addEventListener('click', () => {
    if (runtimeBirthdays.length === 0) { showToast(t('no_birthdays_share')); return; }
    const code = _encodeBirthdays(runtimeBirthdays);
    const url = location.href.split('#')[0] + '#' + code;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => showToast(t('link_copied'))).catch(() => showToast(t('copy_failed')));
    } else {
      showToast(t('copy_failed'));
    }
  });
  modal.querySelector('#bday-export-btn').addEventListener('click', () => {
    if (runtimeBirthdays.length === 0) { showToast(t('no_birthdays_share')); return; }
    const json = JSON.stringify(runtimeBirthdays, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'birthdays.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });
  const fileInput = modal.querySelector('#bday-import-file-input');
  modal.querySelector('#bday-import-file-btn').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!Array.isArray(parsed)) throw new Error();
        const valid = parsed.filter(b => b.name && b.month >= 1 && b.month <= 12 && b.day >= 1 && b.day <= 31);
        if (valid.length === 0) { showToast('No valid birthdays found'); return; }
        if (runtimeBirthdays.length === 0) {
          runtimeBirthdays = valid;
          _saveBirthdays();
          _renderBirthdayList();
          refresh();
          showToast(`Restored ${valid.length} birthday${valid.length !== 1 ? 's' : ''}`);
        } else {
          _showBirthdayImportReview(valid);
        }
      } catch(_) { showToast('Could not read file'); }
    };
    reader.readAsText(file);
    fileInput.value = '';
  });
}

function initBirthdayDialog() {
  const dialog = document.createElement('div');
  dialog.id = 'bday-sky-dialog';
  dialog.setAttribute('hidden', '');
  dialog.innerHTML = `
    <div id="bday-sky-backdrop"></div>
    <div id="bday-sky-box">
      <div id="bday-sky-header">
        <h2 id="bday-sky-title"></h2>
        <button id="bday-sky-close" class="btn" aria-label="Close">✕</button>
      </div>
      <div class="settings-row">
        <label for="bday-sky-year">Birth year</label>
        <input type="number" id="bday-sky-year" min="1800" max="${new Date().getFullYear()}" step="1" placeholder="1990" style="width:6rem">
      </div>
      <hr class="settings-divider">
      <div class="city-search-wrap">
        <input type="text" id="bday-sky-city-search" autocomplete="off"
               placeholder="Search city / state / country …" class="city-search-input">
        <div id="bday-sky-city-dropdown" class="city-dropdown" hidden></div>
      </div>
      <div class="settings-row location-row">
        <label for="bday-sky-lat">Lat</label>
        <input type="number" id="bday-sky-lat" min="-90" max="90" step="0.1" placeholder="37.0">
        <span class="settings-unit">° N</span>
        <label for="bday-sky-lon">Lon</label>
        <input type="number" id="bday-sky-lon" min="-180" max="180" step="0.1" placeholder="-80.0">
        <span class="settings-unit">° E</span>
      </div>
      <button id="bday-sky-submit" class="btn" disabled>View Birth Sky</button>
    </div>`;
  document.body.appendChild(dialog);

  const _cityLabel = c => c[0] + (c[4] ? ', ' + c[4] : '') + ', ' + c[5];

  const _validate = () => {
    const year = parseInt(dialog.querySelector('#bday-sky-year').value);
    const lat  = parseFloat(dialog.querySelector('#bday-sky-lat').value);
    const lon  = parseFloat(dialog.querySelector('#bday-sky-lon').value);
    const ok = year >= 1800 && year <= new Date().getFullYear()
            && lat >= -90 && lat <= 90
            && lon >= -180 && lon <= 180;
    dialog.querySelector('#bday-sky-submit').disabled = !ok;
  };

  const _selectCity = city => {
    dialog.querySelector('#bday-sky-lat').value = city[1];
    dialog.querySelector('#bday-sky-lon').value = city[2];
    dialog.querySelector('#bday-sky-city-search').value = _cityLabel(city);
    dialog.querySelector('#bday-sky-city-dropdown').setAttribute('hidden', '');
    dialog.dataset.bdaySkyTz   = city[3];
    dialog.dataset.bdaySkyCity = _cityLabel(city);
    _validate();
  };

  dialog.querySelector('#bday-sky-city-search').addEventListener('input', () => {
    const q = dialog.querySelector('#bday-sky-city-search').value.trim().toLowerCase();
    const dd = dialog.querySelector('#bday-sky-city-dropdown');
    dd.innerHTML = '';
    if (q.length < 1) { dd.setAttribute('hidden', ''); return; }
    const matches = (typeof CITIES !== 'undefined' ? CITIES : [])
      .filter(c => (c[0] + ' ' + c[4] + ' ' + c[5]).toLowerCase().includes(q))
      .slice(0, 8);
    if (!matches.length) { dd.setAttribute('hidden', ''); return; }
    matches.forEach(city => {
      const item = document.createElement('div');
      item.className = 'city-dropdown-item';
      item.textContent = _cityLabel(city);
      item.addEventListener('mousedown', e => { e.preventDefault(); _selectCity(city); });
      dd.appendChild(item);
    });
    dd.removeAttribute('hidden');
  });

  dialog.querySelector('#bday-sky-city-search').addEventListener('blur', () => {
    setTimeout(() => dialog.querySelector('#bday-sky-city-dropdown').setAttribute('hidden', ''), 150);
  });

  dialog.querySelector('#bday-sky-lat').addEventListener('input', () => {
    dialog.dataset.bdaySkyCity = '';
    dialog.dataset.bdaySkyTz   = '';
    dialog.querySelector('#bday-sky-city-search').value = '';
    _validate();
  });
  dialog.querySelector('#bday-sky-lon').addEventListener('input', () => {
    dialog.dataset.bdaySkyCity = '';
    dialog.dataset.bdaySkyTz   = '';
    dialog.querySelector('#bday-sky-city-search').value = '';
    _validate();
  });
  dialog.querySelector('#bday-sky-year').addEventListener('input', _validate);

  const _close = () => dialog.setAttribute('hidden', '');
  dialog.querySelector('#bday-sky-close').addEventListener('click', _close);
  dialog.querySelector('#bday-sky-backdrop').addEventListener('click', _close);

  dialog.querySelector('#bday-sky-submit').addEventListener('click', () => {
    const name  = dialog.dataset.bdayName;
    const month = parseInt(dialog.dataset.bdayMonth);
    const day   = parseInt(dialog.dataset.bdayDay);
    const year  = parseInt(dialog.querySelector('#bday-sky-year').value);
    const lat   = parseFloat(dialog.querySelector('#bday-sky-lat').value);
    const lon   = parseFloat(dialog.querySelector('#bday-sky-lon').value);
    const tz    = dialog.dataset.bdaySkyTz   || OBSERVER.tz;
    const city  = dialog.dataset.bdaySkyCity || '';

    _bdaySkyObs = { lat: OBSERVER.lat, lon: OBSERVER.lon, tz: OBSERVER.tz, cityName: OBSERVER.cityName || '' };
    OBSERVER.lat = lat; OBSERVER.lon = lon; OBSERVER.tz = tz; OBSERVER.cityName = city;

    const dateStr = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    state.holYear = year + 10000;
    selectedDate  = dateStr;
    scrollToSelectedAfterRender = true;

    _close();
    _skyReturnState = { mode: state.mode, calendarType: state.calendarType,
                        calendarSpan: state.calendarSpan, scrollY: window.scrollY,
                        selectedDate: dateStr, isBirthdaySky: true };
    _skyViewDate = dateStr;
    state.mode = 'sky';
    refresh();
  });
}

function showSettings() {
  document.getElementById('settings-lat').value = OBSERVER.lat;
  document.getElementById('settings-lon').value = OBSERVER.lon;
  const _cityEl = document.getElementById('settings-city-search');
  if (_cityEl) _cityEl.value = OBSERVER.cityName || '';
  // Update language button + translated section heads
  const langMeta = LANGS.find(l => l.code === state.language) || LANGS[0];
  const langBtn = document.getElementById('lang-current-btn');
  langBtn.textContent = langMeta.native;
  langBtn.classList.add('active');
  const lang2Meta = state.language2 ? LANGS.find(l => l.code === state.language2) : null;
  const lang2Btn = document.getElementById('lang2-current-btn');
  lang2Btn.textContent = lang2Meta ? lang2Meta.native : '+ tips';
  lang2Btn.classList.toggle('active', !!state.language2);
  const _calNames = { fairy: 'Fairy', greg: 'Greg', hebrew: 'Hebrew', cherokee: 'Cherokee', iroquois: 'Iroquois', hindu: 'Hindu' };
  const cpBtn = document.getElementById('cal-primary-btn');
  cpBtn.textContent = _calNames[state.calendarType] || state.calendarType;
  cpBtn.classList.add('active');
  const c2Btn = document.getElementById('cal2-btn');
  c2Btn.textContent = state.calendarType2 ? (_calNames[state.calendarType2] || state.calendarType2) : '—';
  c2Btn.classList.toggle('active', !!state.calendarType2);
  document.getElementById('label-lang').textContent = t('language') || 'Language';
  document.getElementById('label-cal').textContent = 'Calendar';
  document.getElementById('settings-loc-head').textContent = t('location');
  document.getElementById('settings-bday-head').textContent = t('birthdays');
  document.getElementById('bday-add-btn').textContent = t('add');
  document.getElementById('bday-share-btn').textContent = t('share_link');
  document.querySelector('#settings-modal #modal-title').textContent = t('settings_title');
  if (_updateLocHint) _updateLocHint();
  document.getElementById('bday-name').placeholder = t('name_ph');
  document.getElementById('bday-day').placeholder  = t('day_ph');
  _renderBirthdayList();
  document.getElementById('settings-modal').removeAttribute('hidden');
}

function _saveBirthdays() {
  try { localStorage.setItem(STORAGE.BIRTHDAYS, JSON.stringify(runtimeBirthdays)); } catch(_) {}
}

function _encodeBirthdays(list) {
  return 'bday1:' + btoa(unescape(encodeURIComponent(JSON.stringify(list))));
}

function _decodeBirthdays(code) {
  const trimmed = code.trim();
  if (!trimmed.startsWith('bday1:')) throw new Error('Invalid code');
  const parsed = JSON.parse(decodeURIComponent(escape(atob(trimmed.slice(6)))));
  if (!Array.isArray(parsed)) throw new Error('Invalid data');
  return parsed.filter(b =>
    b && typeof b.name === 'string' && b.name.trim() &&
    Number.isInteger(b.month) && b.month >= 1 && b.month <= 12 &&
    Number.isInteger(b.day) && b.day >= 1 && b.day <= 31
  ).map(b => ({ name: b.name.trim(), month: b.month, day: b.day }));
}

function _showBirthdayImportReview(incoming) {
  const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // Classify each incoming birthday
  const items = incoming.map(b => {
    const exactDup = runtimeBirthdays.some(e => e.name === b.name && e.month === b.month && e.day === b.day);
    const nameDup  = !exactDup && runtimeBirthdays.some(e => e.name === b.name);
    return { ...b, exactDup, nameDup };
  });

  // Build review overlay
  const overlay = document.createElement('div');
  overlay.id = 'bday-import-overlay';
  overlay.className = 'bday-import-overlay';

  let html = `<div class="bday-import-box">` +
    `<h3 class="bday-import-title">Review ${incoming.length} birthday${incoming.length !== 1 ? 's' : ''}</h3>` +
    `<div class="bday-import-list">`;

  items.forEach((b, i) => {
    const disabled = b.exactDup ? ' disabled' : '';
    const checked  = b.exactDup ? '' : ' checked';
    let badge = '';
    if (b.exactDup) badge = `<span class="bday-collision-badge bday-dup-badge">already have this</span>`;
    else if (b.nameDup) badge = `<span class="bday-collision-badge bday-warn-badge">⚠ name exists</span>`;
    html += `<div class="bday-import-item${b.exactDup ? ' bday-import-dup' : ''}">` +
      `<input type="checkbox" class="bday-import-chk" data-idx="${i}"${checked}${disabled}>` +
      `<input type="text" class="bday-import-name" data-idx="${i}" value="${b.name.replace(/"/g, '&quot;')}" maxlength="40"${b.exactDup ? ' disabled' : ''}>` +
      `<span class="bday-import-date">${MONTH_ABBR[b.month-1]} ${b.day}</span>` +
      badge +
    `</div>`;
  });

  html += `</div>` +
    `<div class="bday-import-actions">` +
      `<button id="bday-import-confirm" class="btn">Add selected</button>` +
      `<button id="bday-import-cancel" class="btn">Cancel</button>` +
    `</div>` +
  `</div>`;
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  overlay.querySelector('#bday-import-cancel').addEventListener('click', () => overlay.remove());
  overlay.querySelector('#bday-import-confirm').addEventListener('click', () => {
    const checks = overlay.querySelectorAll('.bday-import-chk');
    const names  = overlay.querySelectorAll('.bday-import-name');
    let added = 0;
    checks.forEach((chk, i) => {
      if (chk.checked && !chk.disabled) {
        const name = names[i].value.trim();
        if (name) {
          runtimeBirthdays.push({ name, month: items[i].month, day: items[i].day });
          added++;
        }
      }
    });
    if (added > 0) {
      _saveBirthdays();
      _renderBirthdayList();
      refresh();
      showToast(`Added ${added} birthday${added !== 1 ? 's' : ''}`);
    }
    overlay.remove();
  });
}

function _renderBirthdayList() {
  const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const list = document.getElementById('birthday-list');
  list.innerHTML = '';
  if (runtimeBirthdays.length === 0) {
    list.innerHTML = `<p class="settings-hint">${t('no_bdays_yet')}</p>`;
    return;
  }
  const sorted = [...runtimeBirthdays].sort((a,b) => a.month - b.month || a.day - b.day);
  sorted.forEach(b => {
    const row = document.createElement('div');
    row.className = 'bday-list-item';
    row.innerHTML =
      `<button class="info-btn bday-go-btn" data-month="${b.month}" data-day="${b.day}" title="Go to date">ⓘ</button>` +
      `<span class="bday-list-name">${b.name}</span>` +
      `<span class="bday-list-date">${MONTH_ABBR[b.month-1]} ${b.day}</span>` +
      `<button class="bday-delete-btn" data-name="${b.name}" data-month="${b.month}" data-day="${b.day}" aria-label="Remove">✕</button>`;
    list.appendChild(row);
  });
  list.querySelectorAll('.bday-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const { name, month, day } = btn.dataset;
      runtimeBirthdays = runtimeBirthdays.filter(b =>
        !(b.name === name && b.month === Number(month) && b.day === Number(day)));
      _saveBirthdays();
      _renderBirthdayList();
      refresh();
    });
  });
  list.querySelectorAll('.bday-go-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const gregYear = state.holYear - 10000;
      const m = String(btn.dataset.month).padStart(2, '0');
      const d = String(btn.dataset.day).padStart(2, '0');
      const dateStr = `${gregYear}-${m}-${d}`;
      _syncFromDate(dateStr);
      selectedDate = dateStr;
      scrollToSelectedAfterRender = true;
      closeSettings();
      refresh();
    });
  });
}

function closeSettings() {
  document.getElementById('settings-modal').setAttribute('hidden', '');
}

// ─── Language Modal ────────────────────────────────────────────────────────

let _langSlot = 'primary'; // 'primary' | 'secondary'

function initLanguageModal() {
  const modal = document.createElement('div');
  modal.id = 'language-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    `<div id="lang-modal-backdrop"></div>` +
    `<div id="lang-modal-box">` +
      `<div id="lang-modal-header">` +
        `<h2 id="lang-modal-title">Language</h2>` +
        `<button id="lang-modal-close" aria-label="Close">✕</button>` +
      `</div>` +
      `<div id="lang-modal-body">` +
        `<div class="lang-grid">` +
          `<button id="lang-none-btn" class="lang-grid-btn" style="display:none">` +
            `<span class="lang-native">—</span>` +
            `<span class="lang-english">None</span>` +
          `</button>` +
          LANGS.map(l =>
            `<button class="lang-grid-btn" data-lang="${l.code}">` +
              `<span class="lang-native">${l.native}</span>` +
              `<span class="lang-english">${l.name}</span>` +
            `</button>`
          ).join('') +
        `</div>` +
      `</div>` +
    `</div>`;
  document.body.appendChild(modal);
  modal.querySelector('#lang-modal-backdrop').addEventListener('click', closeLanguageModal);
  modal.querySelector('#lang-modal-close').addEventListener('click', closeLanguageModal);
  const _applyLang = () => {
    _saveState();
    closeLanguageModal();
    refresh();
    showSettings();
  };
  modal.querySelector('#lang-none-btn').addEventListener('click', () => {
    state.language2 = null;
    _applyLang();
  });
  modal.querySelectorAll('.lang-grid-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (_langSlot === 'secondary') state.language2 = btn.dataset.lang;
      else state.language = btn.dataset.lang;
      _applyLang();
    });
  });
}

function showLanguageModal(slot = 'primary') {
  _langSlot = slot;
  const activeCode = slot === 'secondary' ? state.language2 : state.language;
  document.querySelectorAll('#language-modal .lang-grid-btn[data-lang]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === activeCode);
  });
  const noneBtn = document.getElementById('lang-none-btn');
  if (noneBtn) {
    noneBtn.style.display = slot === 'secondary' ? '' : 'none';
    noneBtn.classList.toggle('is-active', slot === 'secondary' && !state.language2);
  }
  document.getElementById('lang-modal-title').textContent =
    slot === 'secondary' ? t('language') + ' 2' : t('language');
  document.getElementById('language-modal').removeAttribute('hidden');
}

function closeLanguageModal() {
  document.getElementById('language-modal').setAttribute('hidden', '');
}

// ─── Calendar Picker Modal ─────────────────────────────────────────────────

let _calSlot = 'primary'; // 'primary' | 'secondary'

const CAL_OPTIONS = [
  { key: 'fairy',    label: 'Fairy'    },
  { key: 'greg',     label: 'Greg'     },
  { key: 'hebrew',   label: 'Hebrew'   },
  { key: 'cherokee', label: 'Cherokee' },
  { key: 'iroquois', label: 'Iroquois' },
  { key: 'hindu',    label: 'Hindu'    },
];

function initCalendarModal() {
  const modal = document.createElement('div');
  modal.id = 'calendar-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    `<div id="cal-modal-backdrop"></div>` +
    `<div id="cal-modal-box">` +
      `<div id="cal-modal-header">` +
        `<h2 id="cal-modal-title">Calendar</h2>` +
        `<button id="cal-modal-close" aria-label="Close">✕</button>` +
      `</div>` +
      `<div id="cal-modal-body">` +
        `<div class="lang-grid">` +
          `<button id="cal-none-btn" class="lang-grid-btn" style="display:none">` +
            `<span class="lang-native">—</span>` +
            `<span class="lang-english">None</span>` +
          `</button>` +
          CAL_OPTIONS.map(c =>
            `<button class="lang-grid-btn" data-cal="${c.key}">` +
              `<span class="lang-native">${c.label}</span>` +
            `</button>`
          ).join('') +
        `</div>` +
      `</div>` +
    `</div>`;
  document.body.appendChild(modal);
  modal.querySelector('#cal-modal-backdrop').addEventListener('click', closeCalendarModal);
  modal.querySelector('#cal-modal-close').addEventListener('click', closeCalendarModal);
  const _applyCal = () => { _saveState(); closeCalendarModal(); refresh(); showSettings(); };
  modal.querySelector('#cal-none-btn').addEventListener('click', () => {
    state.calendarType2 = null;
    _applyCal();
  });
  modal.querySelectorAll('.lang-grid-btn[data-cal]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (_calSlot === 'secondary') state.calendarType2 = btn.dataset.cal;
      else state.calendarType = btn.dataset.cal;
      _applyCal();
    });
  });
}

function showCalendarModal(slot = 'primary') {
  _calSlot = slot;
  const active = slot === 'secondary' ? state.calendarType2 : state.calendarType;
  document.querySelectorAll('#calendar-modal .lang-grid-btn[data-cal]').forEach(btn =>
    btn.classList.toggle('is-active', btn.dataset.cal === active));
  const nb = document.getElementById('cal-none-btn');
  nb.style.display = slot === 'secondary' ? '' : 'none';
  nb.classList.toggle('is-active', slot === 'secondary' && !state.calendarType2);
  document.getElementById('cal-modal-title').textContent =
    slot === 'secondary' ? 'Other Date' : 'Calendar';
  document.getElementById('calendar-modal').removeAttribute('hidden');
}

function closeCalendarModal() {
  document.getElementById('calendar-modal').setAttribute('hidden', '');
}


function _formatEvent(ev) {
  if (ev.kind === 'phase')         { const p=PHASE_LABELS[ev.phase];  return {icon:p.icon, text:tPhase(ev.phase)}; }
  if (ev.kind === 'solar')         { const s=SOLAR_LABELS[ev.solar];  return {icon:s.icon, text:tSolar(ev.solar)}; }
  if (ev.kind === 'perigee')       return {icon:'Ⓟ', text:'Lunar Perigee — Moon closest to Earth'};
  if (ev.kind === 'apogee')        return {icon:'@', text:'Lunar Apogee — Moon farthest from Earth'};
  if (ev.kind === 'lunarEclipse')  return {icon:'🌑✕', text:`Lunar Eclipse (${ev.subtype})`};
  if (ev.kind === 'solarEclipse')  return {icon:'☀✕', text:`Solar Eclipse (${ev.subtype})`};
  if (ev.kind === 'birthday')      return {icon:'🎂', text:`${ev.names.join(', ')}'s Birthday`};
  if (ev.kind==='opposition')    return {icon:PLANET_SYMBOLS[ev.planet], text:`${ev.planet} at Opposition — up all night`};
  if (ev.kind==='greatElongation') return {icon:PLANET_SYMBOLS[ev.planet], text:`${ev.planet} — Greatest Elongation (${ev.isEvening?'Evening':'Morning'} Star, ${ev.elong}°)`};
  if (ev.kind==='moonConj')      return {icon:`${PLANET_SYMBOLS[ev.planet]}🌙`, text:`Moon near ${ev.planet} (${ev.sep}°)`};
  if (ev.kind==='planetConj')    return {icon:`${PLANET_SYMBOLS[ev.planets[0]]}${PLANET_SYMBOLS[ev.planets[1]]}`, text:`${ev.planets[0]} & ${ev.planets[1]} conjunction (${ev.sep}°)`};
  if (ev.kind==='meteorShower') {
    const fmtDs = ds => { const d=new Date(ds); return `${getGregMonths()[d.getUTCMonth()].slice(0,3)} ${d.getUTCDate()}`; };
    const range = ev.windowStart && ev.windowEnd ? ` · active ${fmtDs(ev.windowStart)}–${fmtDs(ev.windowEnd)}` : '';
    return {icon:'🌠', text:`${ev.name} meteor shower peak — ZHR ~${ev.zhr}${range}`};
  }
  if (ev.kind==='cometStart')   return {icon:'☄',  text:`${ev.name}${ev.note?' — '+ev.note:''} (visible now)`};
  return {icon:'•', text:ev.kind};
}

function _projectAltAz(az, alt, cx, cy, R, rotDeg) {
  const azR = (az - rotDeg + 180) * Math.PI / 180;
  const r = R * (90 - alt) / 90;
  return { x: cx - r * Math.sin(azR), y: cy - r * Math.cos(azR) };
}

// Store last chart data for re-rendering on rotation
let _skyChartState = null;
let _skyZoomAbortController = null;

function renderSkyChart(catalogData, planets = [], rotDeg = 0, moonData = null) {
  // catalogData: { tier1, tier2, constellations }
  // moonData: { alt, az, illum, waxing } or null
  _skyChartState = { catalogData, planets, rotDeg, moonData };

  const cx = 170, cy = 170, R = 160;
  let svg = `<defs><clipPath id="skyBound"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath></defs>`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#0a0a1a"/>`;
  svg += `<circle class="sky-overlay" cx="${cx}" cy="${cy}" r="${(R*30/90).toFixed(1)}" fill="none" stroke="#223" stroke-width="0.4" stroke-dasharray="2,3"/>`;
  svg += `<circle class="sky-overlay" cx="${cx}" cy="${cy}" r="${(R*60/90).toFixed(1)}" fill="none" stroke="#223" stroke-width="0.4" stroke-dasharray="2,3"/>`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#446" stroke-width="0.8"/>`;
  // Zenith crosshair (+ sign, not a dot)
  svg += `<line class="sky-overlay" x1="${cx-4}" y1="${cy}" x2="${cx+4}" y2="${cy}" stroke="#667" stroke-width="0.6"/>`;
  svg += `<line class="sky-overlay" x1="${cx}" y1="${cy-4}" x2="${cx}" y2="${cy+4}" stroke="#667" stroke-width="0.6"/>`;

  // Compass directions — all 8 always visible
  const dirs = [
    {label:'N',az:0},{label:'NE',az:45},{label:'E',az:90},{label:'SE',az:135},
    {label:'S',az:180},{label:'SW',az:225},{label:'W',az:270},{label:'NW',az:315}
  ];
  for (const d of dirs) {
    const a = (d.az - rotDeg + 180) * Math.PI / 180;
    const inter = d.az % 90 !== 0;
    const dr = R + (inter ? 16 : 14);
    const dx = cx - dr * Math.sin(a);
    const dy = cy - dr * Math.cos(a);
    const active = (d.az === rotDeg);
    const fill = active ? '#ffdd66' : inter ? '#6688aa' : '#88aacc';
    const weight = active ? 'bold' : 'normal';
    const fs = inter ? '7.5' : '11';
    svg += `<text class="sky-dir-label" data-az="${d.az}" x="${dx.toFixed(1)}" y="${(dy + (inter ? 3 : 4)).toFixed(1)}" font-size="${fs}" fill="${fill}" font-weight="${weight}" font-family="sans-serif" text-anchor="middle" cursor="pointer">${d.label}</text>`;
  }

  const data = catalogData;

  // Tier 2 stars — hidden, revealed on zoom
  if (data.tier2 && data.tier2.length > 0) {
    svg += `<g class="sky-bg-stars" opacity="0">`;
    for (const s of data.tier2) {
      if (s.alt <= 0) continue;
      const pt = _projectAltAz(s.az, s.alt, cx, cy, R, rotDeg);
      const r = Math.max(0.3, 1.0 - 0.12 * s.mag);
      const bright = Math.min(0.6, Math.max(0.1, 0.75 - 0.1 * s.mag));
      const warmth = 1.0 - bright;
      const rr = Math.round(160 + 60 * bright + 20 * warmth);
      const gg = Math.round(150 + 55 * bright - 5 * warmth);
      const bb = Math.round(120 + 60 * bright - 30 * warmth);
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="${r.toFixed(2)}" fill="rgb(${rr},${gg},${bb})" opacity="${bright.toFixed(2)}"/>`;
    }
    svg += `</g>`;
  }

  // Tier 1 stars — always visible
  if (data.tier1) {
    for (const s of data.tier1) {
      if (s.alt <= 0) continue;
      const pt = _projectAltAz(s.az, s.alt, cx, cy, R, rotDeg);
      const mag = s.mag;
      const r = Math.max(0.5, 1.6 - 0.3 * mag);
      const bright = Math.min(1, Math.max(0.35, 1.0 - 0.1 * mag));
      const warmth = Math.max(0, 0.6 - bright);
      const rr = Math.round(230 + 25 * bright);
      const gg = Math.round(226 + 25 * bright - 8 * warmth);
      const bb = Math.round(218 + 22 * bright - 25 * warmth);
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="${r.toFixed(1)}" fill="rgb(${rr},${gg},${bb})" opacity="${bright.toFixed(2)}"/>`;
    }
  }

  // Constellation labels — clipped to sky circle
  const _SKY_CULTURE_MAPS = { pawnee: SKIDI_PAWNEE, hindu: HINDU_SKY };
  const _cultureMap = _SKY_CULTURE_MAPS[state.skyCulture] || null;
  if (data.constellations) {
    svg += `<g clip-path="url(#skyBound)">`;
    for (const c of data.constellations) {
      const cd = _cultureMap?.[c.name] || null;
      if (_cultureMap && !cd) continue;
      const cpt = _projectAltAz(c.centroidAz, c.centroidAlt, cx, cy, R, rotDeg);
      const anchor = cpt.x >= cx ? 'start' : 'end';
      const dx = cpt.x >= cx ? 16 : -16;
      const _dispName = cd ? cd.name : c.name;
      svg += `<text class="sky-const-label" data-cname="${c.name}" x="${(cpt.x+dx).toFixed(1)}" y="${(cpt.y+3).toFixed(1)}" font-size="8" fill="#ccd8ee" font-family="sans-serif" text-anchor="${anchor}" cursor="pointer" opacity="0.85">${_dispName}</text>`;
    }
    svg += `</g>`;
  }

  // Planets — small dots slightly larger than brightest stars, natural hues
  const _planetColors = { Mercury:'#a8a89e', Venus:'#fff6d8', Mars:'#e8633a', Jupiter:'#e8c87a', Saturn:'#d4b86a' };
  for (const p of planets) {
    const pp = _projectAltAz(p.az, p.alt, cx, cy, R, rotDeg);
    const col = _planetColors[p.name] || '#e0e0cc';
    if (p.name === 'Saturn') {
      // Ring tilt: edge-on ~Mar 2025, period 29.46yr; B = sub-Earth latitude
      const sd = _skyViewDate ? new Date(_skyViewDate + 'T00:00:00Z') : new Date();
      const jy = sd.getUTCFullYear() + sd.getUTCMonth() / 12;
      const B = 26.73 * Math.sin(2 * Math.PI * (jy - 2025.22) / 29.46);
      const rRx = 4.8, rRy = Math.max(0.35, rRx * Math.abs(Math.sin(B * Math.PI / 180)));
      const x = pp.x.toFixed(1), y = pp.y.toFixed(1);
      const x0 = (pp.x - rRx).toFixed(1), x1 = (pp.x + rRx).toFixed(1);
      const rRxS = rRx.toFixed(1), rRyS = rRy.toFixed(1);
      // Back arc (behind planet), then dot, then front arc (in front of planet)
      svg += `<path d="M ${x0} ${y} A ${rRxS} ${rRyS} 0 0 1 ${x1} ${y}" fill="none" stroke="${col}" stroke-width="0.9" opacity="0.35"/>`;
      svg += `<circle cx="${x}" cy="${y}" r="2.2" fill="${col}" opacity="0.95"/>`;
      svg += `<path d="M ${x1} ${y} A ${rRxS} ${rRyS} 0 0 1 ${x0} ${y}" fill="none" stroke="${col}" stroke-width="0.9" opacity="0.6"/>`;
    } else {
      svg += `<circle cx="${pp.x.toFixed(1)}" cy="${pp.y.toFixed(1)}" r="2.2" fill="${col}" opacity="0.95"/>`;
    }
    const anchor = pp.x >= cx ? 'start' : 'end';
    const dx = pp.x >= cx ? 5 : -5;
    const _SKY_PLANET_LABELS = { pawnee: { Venus: 'Evening Star' }, hindu: HINDU_PLANET_NAMES };
    const _pLabel = _SKY_PLANET_LABELS[state.skyCulture]?.[p.name] || p.name;
    svg += `<text class="sky-label" x="${(pp.x+dx).toFixed(1)}" y="${(pp.y-4).toFixed(1)}" font-size="8" fill="${col}" font-family="sans-serif" text-anchor="${anchor}" opacity="0.75">${p.symbol} ${_pLabel}</text>`;
  }

  // Moon
  let moonDefs = '';
  if (moonData && moonData.alt > 0) {
    const mp = _projectAltAz(moonData.az, moonData.alt, cx, cy, R, rotDeg);
    const mr = 7; // moon radius on chart
    const illum = moonData.illum, wax = moonData.waxing;
    const mk = (1 - 2 * illum) * mr;
    const clipId = 'moonclip';
    const edgePath = `M ${mp.x.toFixed(1)} ${(mp.y - mr).toFixed(1)} A ${mr} ${mr} 0 0 ${wax ? 1 : 0} ${mp.x.toFixed(1)} ${(mp.y + mr).toFixed(1)}`;
    const termPath = `A ${Math.abs(mk).toFixed(1)} ${mr} 0 0 ${((mk > 0) !== wax) ? 1 : 0} ${mp.x.toFixed(1)} ${(mp.y - mr).toFixed(1)}`;
    moonDefs = `<defs><clipPath id="${clipId}"><path d="${edgePath} ${termPath}"/></clipPath></defs>`;
    // Dark disc + lit surface + maria texture
    svg += `<circle cx="${mp.x.toFixed(1)}" cy="${mp.y.toFixed(1)}" r="${mr+1}" fill="#0a0a1a" opacity="0.5"/>`;
    svg += `<circle cx="${mp.x.toFixed(1)}" cy="${mp.y.toFixed(1)}" r="${mr}" fill="#1a1a2e"/>`;
    svg += `<circle cx="${mp.x.toFixed(1)}" cy="${mp.y.toFixed(1)}" r="${mr}" fill="#e8e0c8" clip-path="url(#${clipId})"/>`;
    // Maria (dark patches) clipped to lit area
    svg += `<g clip-path="url(#${clipId})">`;
    svg += `<ellipse cx="${(mp.x-mr*0.18).toFixed(1)}" cy="${(mp.y-mr*0.22).toFixed(1)}" rx="${(mr*0.22).toFixed(1)}" ry="${(mr*0.18).toFixed(1)}" fill="#b8b0a0" opacity="0.5"/>`;
    svg += `<ellipse cx="${(mp.x+mr*0.12).toFixed(1)}" cy="${(mp.y-mr*0.18).toFixed(1)}" rx="${(mr*0.13).toFixed(1)}" ry="${(mr*0.10).toFixed(1)}" fill="#b0a898" opacity="0.45"/>`;
    svg += `<ellipse cx="${(mp.x+mr*0.22).toFixed(1)}" cy="${(mp.y+mr*0.05).toFixed(1)}" rx="${(mr*0.16).toFixed(1)}" ry="${(mr*0.12).toFixed(1)}" fill="#b0a898" opacity="0.4"/>`;
    svg += `<ellipse cx="${(mp.x-mr*0.28).toFixed(1)}" cy="${(mp.y+mr*0.08).toFixed(1)}" rx="${(mr*0.20).toFixed(1)}" ry="${(mr*0.28).toFixed(1)}" fill="#b8b0a0" opacity="0.35"/>`;
    svg += `<ellipse cx="${(mp.x-mr*0.05).toFixed(1)}" cy="${(mp.y+mr*0.30).toFixed(1)}" rx="${(mr*0.18).toFixed(1)}" ry="${(mr*0.12).toFixed(1)}" fill="#b0a898" opacity="0.4"/>`;
    svg += `<ellipse cx="${(mp.x+mr*0.42).toFixed(1)}" cy="${(mp.y-mr*0.12).toFixed(1)}" rx="${(mr*0.10).toFixed(1)}" ry="${(mr*0.08).toFixed(1)}" fill="#a8a090" opacity="0.45"/>`;
    svg += `</g>`;
    // Glow
    svg += `<circle cx="${mp.x.toFixed(1)}" cy="${mp.y.toFixed(1)}" r="${mr+2}" fill="none" stroke="#e8e0c8" stroke-width="0.5" opacity="${(0.15 + 0.35 * illum).toFixed(2)}"/>`;
    // Label
    const anchor = mp.x >= cx ? 'start' : 'end';
    const dx = mp.x >= cx ? mr + 4 : -(mr + 4);
    svg += `<text class="sky-label" x="${(mp.x + dx).toFixed(1)}" y="${(mp.y + 3).toFixed(1)}" font-size="8" fill="#e8e0c8" font-family="sans-serif" text-anchor="${anchor}" opacity="0.8">${t('moon_label')}</text>`;
  }

  const vb = '-20 -20 380 380';
  return `<div class="sky-chart-wrap"><svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" class="sky-chart-svg" data-base-vb="${vb}" aria-label="Sky chart">${moonDefs}${svg}</svg></div>`;
}

// ─── Sky chart zoom (CSS transform-based) ───────────────────────────
// tx/ty are in screen pixels. Transform order: translate first, then scale.
let _skyZoom = { level: 1, tx: 0, ty: 0 };
let _skyZoomBaseW = 0; // original width of the wrap container

function _resetSkyZoom() {
  _skyZoom = { level: 1, tx: 0, ty: 0 };
  const resetBtn = document.getElementById('sky-zoom-reset');
  if (resetBtn) resetBtn.hidden = true;
}

function _applySkyZoom(svgEl) {
  const z = _skyZoom.level;
  // translate(screen px) then scale — translate is in screen space
  svgEl.style.transform = z <= 1
    ? '' : `translate(${_skyZoom.tx}px, ${_skyZoom.ty}px) scale(${z})`;

  // Fade in background stars at zoom >= 1.5
  const bgGroup = svgEl.querySelector('.sky-bg-stars');
  if (bgGroup) {
    const opacity = z < 1.5 ? 0 : Math.min(0.85, (z - 1.5) * 1.7);
    bgGroup.setAttribute('opacity', opacity.toFixed(2));
  }
  const resetBtn = document.getElementById('sky-zoom-reset');
  if (resetBtn) resetBtn.hidden = z <= 1.05;
}

function _clampPan() {
  const z = _skyZoom.level;
  if (z <= 1) { _skyZoom.tx = 0; _skyZoom.ty = 0; return; }
  // Max screen-pixel offset: half the overflow
  const max = _skyZoomBaseW * (z - 1) / 2;
  _skyZoom.tx = Math.max(-max, Math.min(max, _skyZoom.tx));
  _skyZoom.ty = Math.max(-max, Math.min(max, _skyZoom.ty));
}

function _attachSkyZoom(svgEl) {
  if (!svgEl) return;
  // Abort previous listeners to prevent accumulation across re-renders
  if (_skyZoomAbortController) _skyZoomAbortController.abort();
  _skyZoomAbortController = new AbortController();
  const { signal } = _skyZoomAbortController;

  const wrap = svgEl.parentElement;
  _skyZoomBaseW = wrap.getBoundingClientRect().width;
  const resetBtn = document.getElementById('sky-zoom-reset');
  if (resetBtn) resetBtn.addEventListener('click', () => { _resetSkyZoom(); _applySkyZoom(svgEl); }, { signal });

  // Mouse wheel zoom toward cursor
  svgEl.addEventListener('wheel', e => {
    e.preventDefault();
    const oldZ = _skyZoom.level;
    const factor = e.deltaY < 0 ? 1.2 : 1 / 1.2;
    const newZ = Math.max(1, Math.min(6, oldZ * factor));

    // Cursor position relative to wrap center (screen px)
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    // Adjust pan so the point under the cursor stays fixed
    // Before: screen_pos = (content_pos * oldZ) + old_tx
    // After:  screen_pos = (content_pos * newZ) + new_tx
    // => new_tx = old_tx + (mx - old_tx) * (1 - newZ/oldZ)
    const r = 1 - newZ / oldZ;
    _skyZoom.tx += (mx - _skyZoom.tx) * r;
    _skyZoom.ty += (my - _skyZoom.ty) * r;
    _skyZoom.level = newZ;

    _clampPan();
    _applySkyZoom(svgEl);
  }, { passive: false, signal });

  // Mouse drag for panning (1:1 screen pixels)
  let dragging = false, lastX = 0, lastY = 0;
  svgEl.addEventListener('mousedown', e => {
    if (_skyZoom.level <= 1.05) return;
    dragging = true;
    lastX = e.clientX; lastY = e.clientY;
    svgEl.style.cursor = 'grabbing';
    e.preventDefault();
  }, { signal });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    _skyZoom.tx += e.clientX - lastX;
    _skyZoom.ty += e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    _clampPan();
    _applySkyZoom(svgEl);
  }, { signal });
  window.addEventListener('mouseup', () => {
    if (dragging) { dragging = false; svgEl.style.cursor = ''; }
  }, { signal });

  // Touch: pinch zoom + drag pan
  let touches0 = null, touchDist0 = 0, touchZoom0 = 1, touchTx0 = 0, touchTy0 = 0;
  svgEl.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      e.preventDefault();
      touches0 = [
        { x: e.touches[0].clientX, y: e.touches[0].clientY },
        { x: e.touches[1].clientX, y: e.touches[1].clientY }
      ];
      touchDist0 = Math.hypot(touches0[1].x - touches0[0].x, touches0[1].y - touches0[0].y);
      touchZoom0 = _skyZoom.level;
      touchTx0 = _skyZoom.tx; touchTy0 = _skyZoom.ty;
    } else if (e.touches.length === 1 && _skyZoom.level > 1.05) {
      e.preventDefault();
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
      dragging = true;
    }
  }, { passive: false, signal });
  svgEl.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && touches0) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
      _skyZoom.level = Math.max(1, Math.min(6, touchZoom0 * dist / touchDist0));
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const midX0 = (touches0[0].x + touches0[1].x) / 2;
      const midY0 = (touches0[0].y + touches0[1].y) / 2;
      _skyZoom.tx = touchTx0 + (midX - midX0);
      _skyZoom.ty = touchTy0 + (midY - midY0);
      _clampPan();
      _applySkyZoom(svgEl);
    } else if (e.touches.length === 1 && dragging) {
      e.preventDefault();
      _skyZoom.tx += e.touches[0].clientX - lastX;
      _skyZoom.ty += e.touches[0].clientY - lastY;
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
      _clampPan();
      _applySkyZoom(svgEl);
    }
  }, { passive: false, signal });
  svgEl.addEventListener('touchend', () => { touches0 = null; dragging = false; }, { signal });

  // Double-click to reset
  svgEl.addEventListener('dblclick', e => {
    e.preventDefault();
    _resetSkyZoom();
    _applySkyZoom(svgEl);
  }, { signal });
}

let _savedModal = null;

// ─── Shared constellation detail SVG builder ────────────────────────
// Gnomonic projection of curated stars + catalog field stars
function _buildConstellationSVG(name) {
  const con = CONSTELLATIONS[name];
  if (!con) return '';
  const cx = 150, cy = 150;
  const size = 300;

  let svg = `<rect width="${size}" height="${size}" fill="#0a0a1a" rx="6"/>`;

  // Gnomonic projection center from curated stars
  const meanRA = con.stars.reduce((s, st) => s + st[0], 0) / con.stars.length;
  const meanDec = con.stars.reduce((s, st) => s + st[1], 0) / con.stars.length;
  const cRA = meanRA * Math.PI / 12, cDec = meanDec * Math.PI / 180;

  function gnomonic(raH, decDeg) {
    const raR = raH * Math.PI / 12, decR = decDeg * Math.PI / 180;
    const cosc = Math.sin(cDec)*Math.sin(decR) + Math.cos(cDec)*Math.cos(decR)*Math.cos(raR - cRA);
    if (cosc < 0.1) return null;  // behind projection
    return {
      x: (Math.cos(decR)*Math.sin(raR - cRA)) / cosc,
      y: (Math.cos(cDec)*Math.sin(decR) - Math.sin(cDec)*Math.cos(decR)*Math.cos(raR - cRA)) / cosc
    };
  }

  // Project curated stars to determine bounds
  const curatedFlat = con.stars.map(s => gnomonic(s[0], s[1])).filter(Boolean);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of curatedFlat) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); }
  // Pad bounds by 30% to show surrounding field stars
  const padX = (maxX - minX) * 0.3 || 0.01;
  const padY = (maxY - minY) * 0.3 || 0.01;
  minX -= padX; maxX += padX; minY -= padY; maxY += padY;
  const sc = 240 / Math.max(maxX - minX, maxY - minY);
  const midX = (minX + maxX) / 2, midY = (minY + maxY) / 2;

  // Stellarium illustration overlay (rendered before field stars, behind everything)
  const showDrawing = localStorage.getItem('constShowDrawing') === 'true';
  const imgData = typeof CONSTELLATION_IMAGES !== 'undefined' ? CONSTELLATION_IMAGES[name] : null;
  if (imgData && imgData.anchors.length >= 3) {
    // Project anchor RA/Dec to SVG coordinates
    const aSvg = imgData.anchors.map(a => {
      const pt = gnomonic(a.ra, a.dec);
      if (!pt) return null;
      return { sx: cx - (pt.x - midX) * sc, sy: cy - (pt.y - midY) * sc };
    });
    if (aSvg.every(Boolean)) {
      // Compute affine transform: from PNG pixel coords to SVG coords
      // We have 3 pairs: (px[i] -> svgXY[i])
      // Solve: [a b tx; c d ty] * [px; py; 1] = [sx; sy; 1]
      const [p0, p1, p2] = imgData.anchors.map(a => a.px);
      const [s0, s1, s2] = aSvg;
      // Set up 2x3 affine from 3 point pairs
      // [p0[0] p0[1] 1] [a] [s0.sx]
      // [p1[0] p1[1] 1] [b] [s1.sx]
      // [p2[0] p2[1] 1] [tx] [s2.sx]
      const det = p0[0]*(p1[1]-p2[1]) + p1[0]*(p2[1]-p0[1]) + p2[0]*(p0[1]-p1[1]);
      if (Math.abs(det) > 0.001) {
        const a  = ((s0.sx*(p1[1]-p2[1]) + s1.sx*(p2[1]-p0[1]) + s2.sx*(p0[1]-p1[1])) / det);
        const b  = ((s0.sx*(p2[0]-p1[0]) + s1.sx*(p0[0]-p2[0]) + s2.sx*(p1[0]-p0[0])) / det);
        const tx = ((s0.sx*(p1[0]*p2[1]-p2[0]*p1[1]) + s1.sx*(p2[0]*p0[1]-p0[0]*p2[1]) + s2.sx*(p0[0]*p1[1]-p1[0]*p0[1])) / det);
        const c  = ((s0.sy*(p1[1]-p2[1]) + s1.sy*(p2[1]-p0[1]) + s2.sy*(p0[1]-p1[1])) / det);
        const d  = ((s0.sy*(p2[0]-p1[0]) + s1.sy*(p0[0]-p2[0]) + s2.sy*(p1[0]-p0[0])) / det);
        const ty = ((s0.sy*(p1[0]*p2[1]-p2[0]*p1[1]) + s1.sy*(p2[0]*p0[1]-p0[0]*p2[1]) + s2.sy*(p0[0]*p1[1]-p1[0]*p0[1])) / det);
        const tf = [a, c, b, d, tx, ty].map(v => v.toFixed(4)).join(',');
        const display = showDrawing ? '' : ' style="display:none"';
        svg += `<image href="constellations/${imgData.img}" width="512" height="512" transform="matrix(${tf})" opacity="0.22" class="const-drawing"${display}/>`;
      }
    }
  }

  // Catalog field stars (faint background)
  if (typeof STAR_CATALOG !== 'undefined' && typeof CON_ABBREV_TO_NAME !== 'undefined') {
    const nameToAbbrev = {};
    for (const [a,n] of Object.entries(CON_ABBREV_TO_NAME)) nameToAbbrev[n] = a;
    const abbrev = nameToAbbrev[name];
    if (abbrev) {
      for (const star of STAR_CATALOG) {
        if (star[3] !== abbrev) continue;
        const pt = gnomonic(star[0], star[1]);
        if (!pt) continue;
        const sx = cx - (pt.x - midX) * sc;
        const sy = cy - (pt.y - midY) * sc;
        if (sx < 4 || sx > size-4 || sy < 4 || sy > size-4) continue;
        const mag = star[2];
        const r = Math.max(0.5, 1.8 - 0.2 * mag);
        const bright = Math.min(0.6, Math.max(0.1, 0.7 - 0.08 * mag));
        const warmth = 1.0 - bright;
        const rr = Math.round(150 + 60 * bright + 20 * warmth);
        const gg = Math.round(140 + 55 * bright - 5 * warmth);
        const bb = Math.round(110 + 60 * bright - 30 * warmth);
        svg += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${r.toFixed(1)}" fill="rgb(${rr},${gg},${bb})" opacity="${bright.toFixed(2)}"/>`;
      }
    }
  }

  // Pre-compute curated star positions for lines + stars
  const starPositions = [];
  for (let k = 0; k < con.stars.length; k++) {
    const pt = gnomonic(con.stars[k][0], con.stars[k][1]);
    if (!pt) { starPositions.push(null); continue; }
    starPositions.push({
      x: cx - (pt.x - midX) * sc,
      y: cy - (pt.y - midY) * sc
    });
  }

  // Constellation stick-figure lines (drawn before stars so stars sit on top)
  if (con.lines) {
    svg += `<g class="const-lines">`;
    for (let i = 0; i < con.lines.length; i += 2) {
      const a = starPositions[con.lines[i]];
      const b = starPositions[con.lines[i + 1]];
      if (!a || !b) continue;
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="#334466" stroke-width="0.8" opacity="0.45"/>`;
    }
    svg += `</g>`;
  }

  // Curated stars (bright, labeled — smaller but whiter)
  for (let k = 0; k < con.stars.length; k++) {
    const pos = starPositions[k];
    if (!pos) continue;
    const x = pos.x, y = pos.y;
    const mag = con.stars[k][2];
    const r = Math.max(1.5, 2.8 - 0.3 * mag);
    const bright = Math.min(1, Math.max(0.45, 1.0 - 0.1 * mag));
    const warmth = Math.max(0, 0.6 - bright);
    const rr = Math.round(235 + 20 * bright);
    const gg = Math.round(232 + 20 * bright - 8 * warmth);
    const bb = Math.round(225 + 18 * bright - 25 * warmth);
    svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="rgb(${rr},${gg},${bb})" opacity="${bright.toFixed(2)}"/>`;
    const label = con.stars[k][3];
    if (label) {
      svg += `<text x="${(x + r + 4).toFixed(1)}" y="${(y + 3).toFixed(1)}" font-size="10" fill="#ccd8ee" font-family="sans-serif">${label}</text>`;
    }
  }

  const showLines = localStorage.getItem('constShowLines') !== 'false';
  const showDrawingPref = localStorage.getItem('constShowDrawing') === 'true';
  const linesHide = showLines ? '' : ' style="display:none"';
  const svgContent = svg.replace('<g class="const-lines">', `<g class="const-lines"${linesHide}>`);
  const hasDrawing = typeof CONSTELLATION_IMAGES !== 'undefined' && !!CONSTELLATION_IMAGES[name];
  const drawingChk = hasDrawing
    ? `<label class="const-ctrl-lbl"><input type="checkbox" id="const-chk-drawing"${showDrawingPref ? ' checked' : ''}> Drawing</label>`
    : '';
  const ctrlBar = `<div class="const-controls">` +
    `<label class="const-ctrl-lbl"><input type="checkbox" id="const-chk-lines"${showLines ? ' checked' : ''}> Lines</label>` +
    drawingChk +
    `</div>`;
  return `${ctrlBar}<div class="const-detail-wrap"><svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" class="const-detail-svg">${svgContent}</svg></div>`;
}

function _attachConstellationControls() {
  const linesChk = document.getElementById('const-chk-lines');
  if (linesChk) {
    linesChk.addEventListener('change', () => {
      localStorage.setItem('constShowLines', linesChk.checked);
      const linesEl = document.querySelector('.const-lines');
      if (linesEl) linesEl.style.display = linesChk.checked ? '' : 'none';
    });
  }
  const drawingChk = document.getElementById('const-chk-drawing');
  if (drawingChk) {
    drawingChk.addEventListener('change', () => {
      localStorage.setItem('constShowDrawing', drawingChk.checked);
      const imgEl = document.querySelector('.const-drawing');
      if (imgEl) imgEl.style.display = drawingChk.checked ? '' : 'none';
    });
  }
}

function showConstellationDetail(name) {
  if (!CONSTELLATIONS[name]) return;
  _savedModal = {
    title: document.getElementById('modal-title').textContent,
    body:  document.getElementById('modal-body').innerHTML,
  };

  const svgEl = _buildConstellationSVG(name);
  const _cMaps = { pawnee: SKIDI_PAWNEE, hindu: HINDU_SKY };
  const pd = _cMaps[state.skyCulture]?.[name] || null;
  const lore = pd?.lore || CONSTELLATION_LORE[name] || '';
  const loreEl = lore ? `<p class="const-lore">${lore}</p>` : '';
  document.getElementById('modal-title').textContent = pd ? `${pd.name}  ·  ${name}` : name;
  document.getElementById('modal-close').style.display = 'none';
  document.getElementById('modal-header-left').style.flexDirection = 'row';
  document.getElementById('modal-header-left').style.alignItems = 'center';
  const existing = document.querySelector('.const-back-btn');
  if (existing) existing.remove();
  const backBtn = document.createElement('button');
  backBtn.className = 'const-back-btn';
  backBtn.textContent = '← Sky chart';
  document.getElementById('modal-header').appendChild(backBtn);
  document.getElementById('modal-body').innerHTML = svgEl + loreEl;
  _attachConstellationControls();
  backBtn.addEventListener('click', () => {
    document.getElementById('modal-title').textContent = _savedModal.title;
    document.getElementById('modal-body').innerHTML = _savedModal.body;
    document.getElementById('modal-close').style.display = '';
    document.getElementById('modal-header-left').style.flexDirection = '';
    document.getElementById('modal-header-left').style.alignItems = '';
    backBtn.remove();
    _savedModal = null;
    // Re-attach zoom to restored sky chart
    _resetSkyZoom();
    const svg = document.querySelector('.sky-chart-svg');
    if (svg) _attachSkyZoom(svg);
  });
}

// Standalone constellation detail — opens the modal from sky view
function showConstellationDetailStandalone(name) {
  if (!CONSTELLATIONS[name]) return;

  const svgEl = _buildConstellationSVG(name);
  const _cMaps2 = { pawnee: SKIDI_PAWNEE, hindu: HINDU_SKY };
  const pd = _cMaps2[state.skyCulture]?.[name] || null;
  const lore = pd?.lore || CONSTELLATION_LORE[name] || '';
  const loreEl = lore ? `<p class="const-lore">${lore}</p>` : '';

  // Use the existing modal
  document.getElementById('modal-title').textContent = pd ? `${pd.name}  ·  ${name}` : name;

  document.getElementById('modal-body').innerHTML = svgEl + loreEl;
  _attachConstellationControls();
  document.getElementById('cal-modal').removeAttribute('hidden');
}

function showModal(fromDateStr, label, fy) {
  const toStr = utcDateStr(new Date(new Date(fromDateStr).getTime() + 60 * 86400000));
  const todayStr = localTodayStr();
  const events = fy.eventTimeline
    .filter(e => e.dateStr >= fromDateStr && e.dateStr <= toStr)
    .slice(0, 10);

  const todayInWindow = todayStr >= fromDateStr && todayStr <= toStr;

  // Pre-compute Evening Sky block, keyed to fromDate
  const skyDate = fy.dayMap.get(fromDateStr)?.gregDate || new Date(fromDateStr);
  const starNight = fy.eventTimeline.find(e =>
    e.kind === 'phase' && (e.phase === 'new' || e.phase === 'first') &&
    e.dateStr >= fromDateStr && e.dateStr <= toStr
  );
  const catalogData = (typeof getVisibleCatalogStars === 'function') ? getVisibleCatalogStars(skyDate) : null;
  const constellationData = catalogData ? catalogData.constellations : getVisibleConstellationPositions(skyDate);
  const visPlans = getVisiblePlanets(skyDate);
  const activeMeteors = fy.eventTimeline.filter(e =>
    e.kind === 'meteorShower' && e.dateStr >= fromDateStr && e.dateStr <= toStr
  );
  const moonIllum = moonIllumPct(skyDate);
  const hasSky = (catalogData && catalogData.tier1.length > 0) || constellationData.length > 0;

  let eveningSkyHTML = '';
  if (hasSky || visPlans.length > 0 || activeMeteors.length > 0) {
    const sunset   = sunsetTime(skyDate);
    const twilight = astroTwilightEnd(skyDate);
    const mrise    = moonriseTime(skyDate);
    const mset     = moonsetTime(skyDate);
    const tomorrow = new Date(skyDate.getTime() + 86400000);
    const sunrise  = sunriseTime(tomorrow);
    const parts = [];
    if (sunset)   parts.push(`☀↓${sunset}`);
    if (twilight) parts.push(`✦${twilight}`);
    if (mrise)    parts.push(`🌙↑${mrise}`);
    if (mset)     parts.push(`🌙↓${mset}`);
    parts.push(`${moonIllum}%`);
    if (sunrise)  parts.push(`☀↑${sunrise}`);
    const skyLabel = fromDateStr === todayStr ? t('tonight') : t('night_sky');
    eveningSkyHTML += `<div class="modal-section-head">${skyLabel} (${parts.join(', ')})</div>`;
    if (visPlans.length > 0)
      eveningSkyHTML += `<div class="constellation-list"><b>${t('planets')}</b> ${visPlans.map(p=>`${PLANET_SYMBOLS[p.name]} ${p.name} (${p.elong}°)`).join(' · ')}</div>`;
    if (activeMeteors.length > 0)
      eveningSkyHTML += `<div class="constellation-list"><b>${t('meteor_peaks')}</b> ${activeMeteors.map(e=>`🌠 ${e.name} (~${e.zhr}/hr)`).join(' · ')}</div>`;
    if (hasSky) {
      eveningSkyHTML += `<div class="constellation-list">${constellationData.map(c=>c.name).join(' · ')}</div>`;
      eveningSkyHTML += `<button class="btn modal-sky-btn" data-sky-date="${fromDateStr}">${t('view_sky_btn')}</button>`;
    }
  }

  let body = '';
  if (events.length === 0) {
    if (todayInWindow) body += `<div class="modal-today-marker">${t('today_marker')}</div>`;
    body += `<p style="color:var(--color-text-secondary);font-size:0.9rem">${t('no_events')}</p>`;
    body += eveningSkyHTML;
  } else {
    let todayPlaced = false;
    let skyPlaced = !eveningSkyHTML;
    for (const ev of events) {
      if (todayInWindow && !todayPlaced && ev.dateStr >= todayStr) {
        body += `<div class="modal-today-marker">${t('today_marker')}</div>`;
        todayPlaced = true;
      }
      // Inject Evening Sky before first event after fromDateStr
      if (!skyPlaced && ev.dateStr > fromDateStr) {
        body += eveningSkyHTML;
        skyPlaced = true;
      }
      const {icon, text} = _formatEvent(ev);
      const fd = fy.dayMap.get(ev.dateStr);
      const _gd = fd?.gregDate || new Date(ev.dateStr);
      const dateLabel = ((state.mode === 'calendar' && (state.calendarType === 'fairy' || state.calendarSpan === 'week')) && fd)
        ? `${tMoonShort(fd.fairyMonth)} ${fd.fairyDay}`
        : `${getGregMonths()[_gd.getUTCMonth()].slice(0,3)} ${_gd.getUTCDate()}`;
      body += `<div class="modal-event">` +
        `<span class="modal-event-icon">${icon}</span>` +
        `<span class="modal-event-date">${dateLabel}</span>` +
        `<span class="modal-event-desc">${text}</span>` +
        `</div>`;
    }
    if (todayInWindow && !todayPlaced) {
      body += `<div class="modal-today-marker">${t('today_marker')}</div>`;
    }
    if (!skyPlaced) body += eveningSkyHTML;
  }

  // Reset constellation detail state if active
  const staleBack = document.querySelector('.const-back-btn');
  if (staleBack) staleBack.remove();
  document.getElementById('modal-close').style.display = '';
  document.getElementById('modal-header-left').style.flexDirection = '';
  document.getElementById('modal-header-left').style.alignItems = '';
  _savedModal = null;

  document.getElementById('modal-title').textContent = label;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('cal-modal').removeAttribute('hidden');

  // "View Sky" button inside the modal
  const skyBtn = document.querySelector('.modal-sky-btn');
  if (skyBtn) {
    skyBtn.addEventListener('click', () => {
      const date = skyBtn.dataset.skyDate;
      closeModal();
      _skyReturnState = { mode: state.mode, calendarType: state.calendarType, calendarSpan: state.calendarSpan, scrollY: window.scrollY, selectedDate: date };
      _skyViewDate = date;
      state.mode = 'sky';
      refresh();
    });
  }
}

// ─── App wiring ─────────────────────────────────────────────────────

const VARIANT_NAMES = ['a','b','c','d','e'];

function buildSwatches() {
  const group = document.getElementById('variant-group');
  group.querySelectorAll('.variant-btn').forEach(b => b.remove());
  const themeKey = state.colorScheme === 'dark' ? 'wizard' : state.theme;
  const colors  = VARIANT_SWATCH_COLORS[themeKey] || [];
  const borders = VARIANT_SWATCH_BORDERS[themeKey] || [];
  VARIANT_NAMES.forEach((v, idx) => {
    const btn = document.createElement('button');
    btn.className = 'variant-btn' + (v === state.variant ? ' active' : '');
    btn.dataset.variant = v;
    const bg = colors[idx] || '#eee';
    const ln = borders[idx] || '#999';
    btn.style.background = `linear-gradient(${ln},${ln}) center/2px 100% no-repeat,linear-gradient(${ln},${ln}) center/100% 2px no-repeat,${bg}`;
    btn.title = `Color ${v.toUpperCase()}`;
    btn.addEventListener('click', () => {
      state.variant = v;
      applyVariant(state.theme, v, state.colorScheme);
      document.querySelectorAll('.variant-btn').forEach(b => b.classList.toggle('active', b.dataset.variant === v));
      _saveState();
    });
    group.appendChild(btn);
  });
  const sb = document.getElementById('scheme-toggle');
  if (sb) sb.textContent = state.colorScheme === 'dark' ? '🌙' : '☀';
}

function _applyThemeSwitch(themeName) {
  applyTheme(themeName);
  applyVariant(themeName, state.variant, state.colorScheme);
  if (currentFY) document.querySelectorAll('.year-hero-wrap').forEach(w => {
    w.innerHTML = getHeaderSVG(currentFY.yearAnimal, themeName);
  });
  document.querySelectorAll('.greg-month-header').forEach((hdr, i) => {
    const existing = hdr.querySelector('.month-plant-svg');
    if (themeName === 'flower') {
      if (!existing) { const svg = getGregMonthPlantSVG(i); if (svg) hdr.insertAdjacentHTML('afterbegin', svg); }
    } else { if (existing) existing.remove(); }
  });
  document.querySelectorAll('.fairy-moon-header').forEach(hdr => {
    const existing = hdr.querySelector('.moon-plant-svg');
    if (themeName === 'flower') {
      if (!existing) { const moonName = hdr.querySelector('.moon-name')?.textContent; const svg = getMoonPlantSVG(moonName); if (svg) hdr.insertAdjacentHTML('afterbegin', svg); }
    } else { if (existing) existing.remove(); }
  });
  document.querySelectorAll('.fairy-moon').forEach(sec => {
    const existingIcon = sec.querySelector('.fairy-moon-icon');
    if (themeName === 'fairy') {
      if (!existingIcon) {
        const moonName = sec.querySelector('.moon-name')?.textContent;
        const emptyCells = [...sec.querySelectorAll('td.empty-cell')];
        const firstTbodyCell = sec.querySelector('tbody tr:first-child td:first-child');
        const startsWithEmpty = firstTbodyCell && firstTbodyCell.classList.contains('empty-cell');
        const target = startsWithEmpty ? emptyCells[0] : emptyCells[emptyCells.length-1];
        if (target) { target.innerHTML = getFairyMoonSVG(moonName); target.classList.add('fairy-icon-cell'); }
      }
    } else { if (existingIcon) { existingIcon.closest('td')?.classList.remove('fairy-icon-cell'); existingIcon.remove(); } }
  });
}


function _currentDateStr() {
  // Derive current date from holYear + stored sky date, or default to Jan 1
  if (_skyViewDate) return _skyViewDate;
  return `${state.holYear - 10000}-01-01`;
}

function _syncFromDate(dateStr) {
  _skyViewDate = dateStr;
  const gregYear = new Date(dateStr + 'T00:00:00Z').getUTCFullYear();
  state.holYear = gregYear + 10000;
}

function refresh() {
  const isSky = state.mode === 'sky';
  const viewMode = _computeViewMode();
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  document.getElementById('date-input').value = _skyViewDate;
  document.title = `Fairy Calendar — Year ${state.holYear}`;
  // Secondary-language tooltip helper (used throughout this function)
  const _tip2 = (el, key, ...args) => { const v=t2(key,...args); if(el){if(v)el.title=v;else el.removeAttribute('title');} };
  // Mode buttons
  document.querySelectorAll('.mode-btn[data-mode]').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === state.mode);
    if (b.dataset.mode === 'sky') { b.querySelector('.label-long').textContent = t('view_sky'); b.querySelector('.label-short').textContent = t('sky_short'); _tip2(b, 'view_sky'); }
    else if (b.dataset.mode === 'calendar') { b.innerHTML = `<span class="label-long">${t('mode_calendar')}</span><span class="label-short">${t('mode_calendar_short')}</span>`; _tip2(b, 'mode_calendar'); }
  });
  // Calendar span buttons
  document.querySelectorAll('.span-btn[data-span]').forEach(b => {
    b.classList.toggle('active', state.mode === 'calendar' && b.dataset.span === state.calendarSpan);
    if (b.dataset.span === 'month') { b.querySelector('.label-long').textContent = t('span_month'); _tip2(b, 'span_month'); }
    else if (b.dataset.span === 'week') { b.querySelector('.label-long').textContent = t('view_week'); _tip2(b, 'view_week'); }
  });
  { const el = document.getElementById('label-view'); if (el) el.textContent = t('label_view') + ':'; }
  document.getElementById('today-btn').textContent = t('today');
  document.getElementById('toggle-mythic-week').textContent = t('toggle_mythic');
  document.getElementById('toggle-holidays').textContent    = t('toggle_holidays');
  document.getElementById('toggle-birthdays').textContent   = t('toggle_birthdays');
  document.getElementById('toggle-meteors').textContent     = t('toggle_meteors');
  document.getElementById('toggle-comets').textContent      = t('toggle_comets');
  document.getElementById('sky-labels-btn').textContent     = t('sky_labels');
  // Icon-only toolbar buttons — primary-language titles (all icon, no text)
  document.getElementById('prev-year').title      = t('btn_prev_year');
  document.getElementById('next-year').title      = t('btn_next_year');
  document.getElementById('date-input').title     = t('btn_pick_date');
  document.getElementById('sky-back').title       = t('btn_reverse');
  document.getElementById('sky-play').title       = t('btn_play');
  document.getElementById('toolbar-toggle').title = t('btn_options');
  document.getElementById('settings-btn').title   = t('settings_title');
  document.getElementById('help-btn').title       = t('btn_about');
  document.getElementById('print-btn').title      = t('btn_print');
  // Secondary-language tooltips on toolbar controls
  _tip2(document.getElementById('today-btn'), 'today');
  _tip2(document.getElementById('toggle-mythic-week'), 'toggle_mythic');
  _tip2(document.getElementById('toggle-holidays'), 'toggle_holidays');
  _tip2(document.getElementById('toggle-birthdays'), 'toggle_birthdays');
  _tip2(document.getElementById('toggle-meteors'), 'toggle_meteors');
  _tip2(document.getElementById('toggle-comets'), 'toggle_comets');
  _tip2(document.getElementById('sky-labels-btn'), 'sky_labels');
  document.querySelectorAll('.theme-btn[data-theme]').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === state.theme);
    b.textContent = t('theme_' + b.dataset.theme);
    _tip2(b, 'theme_' + b.dataset.theme);
  });
  { const el = document.getElementById('label-theme'); if (el) el.textContent = t('label_theme'); }
  { const el = document.getElementById('label-color'); if (el) el.textContent = t('label_color'); }
  applyTheme(state.theme);
  applyVariant(state.theme, state.variant, state.colorScheme);
  buildSwatches();
  // Toggle sky-only controls and body class
  document.body.classList.toggle('view-sky-active', isSky);
  // Sky inline controls visibility
  document.getElementById('sky-inline-controls').hidden = !isSky;
  // Sky moon button active state
  const moonBtn = document.getElementById('sky-moon-btn');
  if (moonBtn) { moonBtn.textContent = t('moon_label'); moonBtn.classList.toggle('active', state.skyShowMoon); _tip2(moonBtn, 'moon_label'); }
  const pawneeBtn = document.getElementById('sky-pawnee-btn');
  if (pawneeBtn) { pawneeBtn.textContent = t('sky_pawnee'); _tip2(pawneeBtn, 'sky_pawnee'); }
  const jyotishaBtn = document.getElementById('sky-hindu-btn');
  if (jyotishaBtn) { jyotishaBtn.textContent = t('sky_jyotisha'); _tip2(jyotishaBtn, 'sky_jyotisha'); }
  // Moon phase in toolbar (cal-only, but update content regardless — CSS hides in sky)
  const moonDate = new Date(_skyViewDate + 'T00:00:00Z');
  const phase = moonPhaseInfo(moonDate);
  document.getElementById('toolbar-moon').innerHTML = getMoonPhaseSVG(phase.illum, phase.waxing);
  // Clean up back button when not in sky-from-modal mode
  if (!isSky || !_skyReturnState) {
    const oldBack = document.getElementById('sky-back-btn');
    if (oldBack) oldBack.remove();
  }
  render(state.holYear, viewMode);
  _saveState();
}

document.getElementById('prev-year').addEventListener('click', () => {
  state.holYear--;
  if (_skyViewDate) _skyViewDate = _skyViewDate.replace(/^\d{4}/, String(state.holYear - 10000));
  refresh();
});
document.getElementById('next-year').addEventListener('click', () => {
  state.holYear++;
  if (_skyViewDate) _skyViewDate = _skyViewDate.replace(/^\d{4}/, String(state.holYear - 10000));
  refresh();
});
document.getElementById('today-btn').addEventListener('click', () => {
  _skyPlayStop();
  state.holYear = new Date().getFullYear() + 10000;
  _skyViewDate = localTodayStr();
  selectedDate = _skyViewDate;
  scrollToTodayAfterRender = true;
  _toolbarCollapsible.setAttribute('hidden', '');
  _toolbarToggle.classList.remove('open');
  try { localStorage.setItem(STORAGE.TOOLBAR, JSON.stringify(false)); } catch(_) {}
  refresh();
  _showLabelToast('today');
});
document.getElementById('date-input').addEventListener('change', e => {
  if (!e.target.value) return;
  _syncFromDate(e.target.value);
  selectedDate = e.target.value;
  scrollToSelectedAfterRender = true;
  refresh();
});

// Sky view date nav (toolbar)
function _skySetDate(dateStr) {
  _syncFromDate(dateStr);
  document.getElementById('date-input').value = dateStr;
  // Update toolbar moon phase (cal-only, CSS hides in sky, but keep content current)
  const moonDate = new Date(dateStr + 'T00:00:00Z');
  const phase = moonPhaseInfo(moonDate);
  document.getElementById('toolbar-moon').innerHTML = getMoonPhaseSVG(phase.illum, phase.waxing);
  _saveState();
  if (state.mode === 'sky') renderSky();
  else render(state.holYear, _computeViewMode());
}
// Sky timelapse play (forward and backward)
let _skyPlayTimer = null;
let _skyPlayDir = 0; // 0=stopped, 1=forward, -1=backward
const _skyPlayBtn = document.getElementById('sky-play');
const _skyBackBtn = document.getElementById('sky-back');
function _skyAdvance() {
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  const next = new Date(new Date(_skyViewDate + 'T00:00:00Z').getTime() + _skyPlayDir * 86400000);
  _skySetDate(utcDateStr(next));
}
function _skyPlayStop(rerender = false) {
  if (_skyPlayTimer) { clearInterval(_skyPlayTimer); _skyPlayTimer = null; }
  _skyPlayDir = 0;
  _skyPlayBtn.textContent = '\u25B6';
  _skyBackBtn.textContent = '\u25C0';
  document.body.classList.remove('sky-playing');
  if (rerender && state.mode === 'sky') {
    renderSky();
  } else {
    const svgEl = document.querySelector('.sky-chart-svg');
    if (svgEl) _attachSkyZoom(svgEl);
  }
}
function _skyPlayStart(dir) {
  _skyPlayStop();
  _skyPlayDir = dir;
  _skyPlayTimer = setInterval(_skyAdvance, 80);
  document.body.classList.add('sky-playing');
  if (dir > 0) _skyPlayBtn.textContent = '\u23F8';
  else         _skyBackBtn.textContent = '\u23F8';
}
_skyPlayBtn.addEventListener('click', () => {
  if (_skyPlayDir === 1) _skyPlayStop(true); else _skyPlayStart(1);
});
_skyBackBtn.addEventListener('click', () => {
  if (_skyPlayDir === -1) _skyPlayStop(true); else _skyPlayStart(-1);
});
// Sky labels toggle
let _skyLabelsOn = false;
{ const btn = document.getElementById('sky-labels-btn');
  const apply = () => {
    btn.classList.toggle('active', _skyLabelsOn);
    const skyView = document.querySelector('.sky-view');
    if (skyView) skyView.classList.toggle('sky-labels-hidden', !_skyLabelsOn);
    const svgEl = document.querySelector('.sky-chart-svg');
    if (svgEl) svgEl.classList.toggle('sky-labels-off', !_skyLabelsOn);
  };
  btn.addEventListener('click', () => { _skyLabelsOn = !_skyLabelsOn; apply(); _showT2Toast('sky_labels'); });
  apply();
}
// Sky culture toggles (Pawnee / Jyotisha — mutually exclusive)
{ const pBtn = document.getElementById('sky-pawnee-btn');
  const hBtn = document.getElementById('sky-hindu-btn');
  const apply = () => {
    pBtn.classList.toggle('active', state.skyCulture === 'pawnee');
    hBtn.classList.toggle('active', state.skyCulture === 'hindu');
  };
  apply();
  pBtn.addEventListener('click', () => {
    state.skyCulture = state.skyCulture === 'pawnee' ? 'western' : 'pawnee';
    _saveState(); apply();
    if (state.mode === 'sky') renderSky();
  });
  hBtn.addEventListener('click', () => {
    state.skyCulture = state.skyCulture === 'hindu' ? 'western' : 'hindu';
    _saveState(); apply();
    if (state.mode === 'sky') renderSky();
  });
}
// Sky moon toggle
{ const btn = document.getElementById('sky-moon-btn');
  const apply = () => { btn.classList.toggle('active', state.skyShowMoon); };
  btn.addEventListener('click', () => {
    state.skyShowMoon = !state.skyShowMoon;
    _saveState();
    apply();
    _showT2Toast('moon_label');
    if (state.mode === 'sky') renderSky();
  });
  apply();
}

// Mode and calendar type / span button handlers
document.querySelectorAll('.mode-btn[data-mode]').forEach(b => b.addEventListener('click', () => {
  _skyPlayStop();
  if (selectedDate) {
    scrollToSelectedAfterRender = true;
  } else {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
  }
  state.mode = b.dataset.mode;
  if (_bdaySkyObs) { Object.assign(OBSERVER, _bdaySkyObs); _bdaySkyObs = null; }
  _skyReturnState = null;
  refresh();
  _showLabelToast(b.dataset.mode === 'sky' ? 'view_sky' : 'mode_calendar');
}));

document.querySelectorAll('.span-btn[data-span]').forEach(b => b.addEventListener('click', () => {
  if (selectedDate) {
    scrollToSelectedAfterRender = true;
  } else {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
  }
  state.mode = 'calendar';
  state.calendarSpan = b.dataset.span;
  if (_bdaySkyObs) { Object.assign(OBSERVER, _bdaySkyObs); _bdaySkyObs = null; }
  _skyReturnState = null;
  refresh();
  _showT2Toast(b.dataset.span === 'month' ? 'span_month' : 'view_week');
}));
document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => {
  state.theme = b.dataset.theme;
  _applyThemeSwitch(state.theme);
  document.querySelectorAll('.theme-btn').forEach(b2 => b2.classList.toggle('active', b2.dataset.theme === state.theme));
  buildSwatches();
  _saveState();
}));
{ const btn = document.getElementById('scheme-toggle');
  btn.addEventListener('click', () => {
    state.colorScheme = state.colorScheme === 'dark' ? 'light' : 'dark';
    applyVariant(state.theme, state.variant, state.colorScheme);
    if (state.theme === 'animal' && currentFY) {
      const wp = ANIMAL_PATTERNS[currentFY.yearAnimal] || PATTERNS.animal;
      document.documentElement.style.setProperty('--pattern-bg', state.colorScheme === 'dark' ? wp : animalPatternDark(wp));
    }
    buildSwatches();
    _saveState();
  });
}
{ const btn = document.getElementById('toggle-mythic-week');
  const update = () => btn.classList.toggle('active', state.weekNames === 'myth');
  btn.addEventListener('click', () => {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
    state.weekNames = state.weekNames === 'myth' ? 'std' : 'myth';
    _saveState();
    update();
    showToast(state.weekNames === 'myth' ? t('mythic_on') : t('mythic_off'),
              state.weekNames === 'myth' ? t2('mythic_on') : t2('mythic_off'));
    refresh();
  });
  update();
}

function showToast(msg, msg2) {
  const isMobile = window.matchMedia('(hover: none)').matches;
  const text = (msg2 && isMobile) ? `${msg} \u00b7 ${msg2}` : msg;
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = text;
  t.classList.remove('toast-hide');
  t.classList.add('toast-show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.classList.remove('toast-show'); t.classList.add('toast-hide'); }, 4000);
}
function _showT2Toast(key) {
  if (!state.language2) return;
  if (!window.matchMedia('(hover: none)').matches) return;
  const v = t2(key);
  if (v) showToast(v);
}
// For icon-only buttons: always show primary lang label on mobile (+ secondary if set)
function _showLabelToast(key) {
  if (!window.matchMedia('(hover: none)').matches) return;
  const sec = t2(key);
  showToast(sec ? `${t(key)} \u00b7 ${sec}` : t(key));
}

function _saveState() {
  try { localStorage.setItem(STORAGE.STATE, JSON.stringify(state)); } catch(_) {}
}

function _wireToggle(id, stateKey, keyOn, keyOff) {
  const btn = document.getElementById(id);
  if (!btn) return;
  const update = () => btn.classList.toggle('active', state[stateKey]);
  btn.addEventListener('click', () => {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
    state[stateKey] = !state[stateKey];
    _saveState();
    update();
    showToast(state[stateKey] ? t(keyOn) : t(keyOff),
              state[stateKey] ? t2(keyOn) : t2(keyOff));
    refresh();
  });
  update();
}
_wireToggle('toggle-holidays',   'showHolidays',   'holidays_on',   'holidays_off');
_wireToggle('toggle-meteors',    'showMeteors',    'meteors_on',    'meteors_off');
_wireToggle('toggle-comets',     'showComets',     'comets_on',     'comets_off');
_wireToggle('toggle-birthdays',  'showBirthdays',  'birthdays_on',  'birthdays_off');
document.addEventListener('keydown', e => {
  if (e.target.tagName==='INPUT') return;
  if (e.key==='ArrowLeft')  { state.holYear--; if (_skyViewDate) _skyViewDate = _skyViewDate.replace(/^\d{4}/, String(state.holYear - 10000)); refresh(); }
  if (e.key==='ArrowRight') { state.holYear++; if (_skyViewDate) _skyViewDate = _skyViewDate.replace(/^\d{4}/, String(state.holYear - 10000)); refresh(); }
  if (e.key==='Escape')     { closeModal(); closeHelp(); closeSettings(); closeLanguageModal(); }
});

function _openBirthdayDialog(name, month, day) {
  const dialog = document.getElementById('bday-sky-dialog');
  dialog.querySelector('#bday-sky-title').textContent = `View Birth Sky — ${name}`;
  dialog.querySelector('#bday-sky-year').value  = '';
  dialog.querySelector('#bday-sky-lat').value   = OBSERVER.lat;
  dialog.querySelector('#bday-sky-lon').value   = OBSERVER.lon;
  dialog.querySelector('#bday-sky-city-search').value = OBSERVER.cityName || '';
  dialog.dataset.bdayName  = name;
  dialog.dataset.bdayMonth = month;
  dialog.dataset.bdayDay   = day;
  dialog.dataset.bdaySkyTz   = OBSERVER.tz;
  dialog.dataset.bdaySkyCity = OBSERVER.cityName || '';
  dialog.querySelector('#bday-sky-submit').disabled = true;
  dialog.removeAttribute('hidden');
}

document.body.addEventListener('click', e => {
  const btn = e.target.closest('.info-btn');
  if (btn && btn.dataset.from && currentFY) { showModal(btn.dataset.from, btn.dataset.label, currentFY); return; }

  const cake = e.target.closest('.birthday-label');
  if (cake && currentFY) {
    _openBirthdayDialog(cake.dataset.bdayName,
      parseInt(cake.dataset.bdayMonth), parseInt(cake.dataset.bdayDay));
    return;
  }

  const cell = e.target.closest('[data-date]');
  if (cell) {
    const ds = cell.dataset.date;
    if (selectedDate === ds) {
      selectedDate = null;
      document.querySelectorAll('[data-date].is-selected').forEach(c => c.classList.remove('is-selected'));
    } else {
      selectedDate = ds;
      _skyViewDate = ds;
      document.getElementById('date-input').value = ds;
      document.querySelectorAll('[data-date].is-selected').forEach(c => c.classList.remove('is-selected'));
      document.querySelectorAll(`[data-date="${selectedDate}"]`).forEach(c => c.classList.add('is-selected'));
      // Update moon phase
      const moonDate = new Date(ds + 'T00:00:00Z');
      const phase = moonPhaseInfo(moonDate);
      document.getElementById('toolbar-moon').innerHTML = getMoonPhaseSVG(phase.illum, phase.waxing);
    }
  }
});

initModal();
initHelpModal();
initSettingsModal();
initLanguageModal();
initCalendarModal();
initBirthdayDialog();
document.getElementById('help-btn').addEventListener('click', showHelp);
document.getElementById('settings-btn').addEventListener('click', showSettings);
document.getElementById('help-btn-m').addEventListener('click', showHelp);
document.getElementById('settings-btn-m').addEventListener('click', showSettings);
document.getElementById('print-btn-m').addEventListener('click', () => document.getElementById('print-btn').click());
document.getElementById('print-btn').addEventListener('click', () => {
  const fy = yearCache.get(state.holYear) || buildFairyYear(state.holYear);
  const pt = document.createElement('div');
  pt.id = 'print-titlepage';
  pt.innerHTML =
    `<div class="print-title-border">` +
      `<div class="print-title-inner">` +
        `<div class="print-title-pattern"></div>` +
        `<p class="print-title-sub">${t('print_sub')}</p>` +
        `<p class="print-title-main">${t('print_title')}</p>` +
        `<p class="print-title-year">${fy.gregYear}</p>` +
        `<p class="print-title-holocene">${t('print_holocene', fy.holYear)}</p>` +
        `<p class="print-title-animal">${t('print_animal', tAnimal(fy.yearAnimal), fy.hasBluemoon ? '13' : '12')}</p>` +
      `</div>` +
    `</div>`;
  const ph = document.createElement('div');
  ph.id = 'print-help';
  ph.innerHTML = getHelpHtml();
  document.body.insertBefore(pt, document.body.firstChild);
  document.body.appendChild(ph);
  window.print();
  document.body.removeChild(pt);
  document.body.removeChild(ph);
});

const _toolbarCollapsible = document.getElementById('toolbar-collapsible');
const _toolbarToggle = document.getElementById('toolbar-toggle');
try {
  if (JSON.parse(localStorage.getItem(STORAGE.TOOLBAR) || 'false')) {
    _toolbarCollapsible.removeAttribute('hidden');
    _toolbarToggle.classList.add('open');
  }
} catch(_) {}
_toolbarToggle.addEventListener('click', () => {
  const open = _toolbarCollapsible.hasAttribute('hidden');
  if (open) { _toolbarCollapsible.removeAttribute('hidden'); _toolbarToggle.classList.add('open'); }
  else       { _toolbarCollapsible.setAttribute('hidden', ''); _toolbarToggle.classList.remove('open'); }
  try { localStorage.setItem(STORAGE.TOOLBAR, JSON.stringify(open)); } catch(_) {}
});

refresh();

// Check for birthday share link in URL hash
(function() {
  const hash = decodeURIComponent(location.hash.slice(1));
  if (hash.startsWith('bday1:')) {
    history.replaceState(null, '', location.pathname + location.search);
    try {
      const incoming = _decodeBirthdays(hash);
      if (incoming.length === 0) return;
      // If localStorage is empty, silently restore — no review needed
      if (runtimeBirthdays.length === 0) {
        runtimeBirthdays = incoming;
        _saveBirthdays();
        refresh();
        showToast(`Restored ${incoming.length} birthday${incoming.length !== 1 ? 's' : ''}`);
      } else {
        _showBirthdayImportReview(incoming);
      }
    } catch(_) {}
  }
})();
