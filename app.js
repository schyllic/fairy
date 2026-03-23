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
let runtimeBirthdays = (typeof BIRTHDAYS !== 'undefined') ? [...BIRTHDAYS] : [];

try {
  const savedBdays = JSON.parse(localStorage.getItem(STORAGE.BIRTHDAYS) || 'null');
  if (Array.isArray(savedBdays)) runtimeBirthdays = savedBdays;
} catch(_) {}

try {
  const obs = JSON.parse(localStorage.getItem(STORAGE.OBSERVER) || '{}');
  if (obs.lat !== undefined) OBSERVER.lat = Number(obs.lat);
  if (obs.lon !== undefined) OBSERVER.lon = Number(obs.lon);
} catch(_) {}

let state = {
  holYear: new Date().getFullYear() + 10000,
  viewMode: 'fairy',
  theme: 'fairy',
  variant: 'a',
  weekNames: 'myth',
  showHolidays: true,
  showMeteors: true,
  showComets: true,
  showBirthdays: true,
  showOtherDate: true,
};

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE.STATE) || '{}');
  if (saved.holYear)    state.holYear    = Number(saved.holYear);
  if (saved.viewMode)   state.viewMode   = saved.viewMode;
  if (saved.theme)      state.theme      = saved.theme;
  if (saved.variant)    state.variant    = saved.variant;
  if (saved.weekNames)  state.weekNames  = saved.weekNames;
  if (saved.showHolidays !== undefined) state.showHolidays = saved.showHolidays;
  if (saved.showMeteors    !== undefined) state.showMeteors    = saved.showMeteors;
  if (saved.showComets     !== undefined) state.showComets     = saved.showComets;
  if (saved.showBirthdays  !== undefined) state.showBirthdays  = saved.showBirthdays;
  if (saved.showOtherDate  !== undefined) state.showOtherDate  = saved.showOtherDate;
} catch(_) {}

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
  return `${getWeekdays()[fd.fairyWeekdayIndex]} · ${GREG_MONTH_NAMES[gd.getUTCMonth()]} ${gd.getUTCDate()} / ${fd.fairyMonth} ${fd.fairyDay}`;
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
          `<button id="modal-today-btn" title="Show events from today">Today</button>` +
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
        const { catalogData, planets } = _skyChartState;
        _resetSkyZoom();
        wrap.outerHTML = renderSkyChart(catalogData, planets, rotDeg);
        const newSvg = document.querySelector('.sky-chart-svg');
        if (newSvg) _attachSkyZoom(newSvg);
      }
    }
  });
  document.getElementById('modal-today-btn').addEventListener('click', () => {
    const todayStr = localTodayStr();
    const todayGD = new Date(todayStr + 'T00:00:00Z');
    const holY = todayGD.getUTCFullYear() + 10000;
    let fy = currentFY;
    if (!fy || !fy.dayMap.get(todayStr)) {
      fy = buildFairyYear(holY);
      if (!fy.dayMap.get(todayStr)) fy = buildFairyYear(holY - 1);
    }
    showModal(todayStr, _dayLabel(todayStr, fy), fy);
  });
}

function closeModal() {
  document.getElementById('cal-modal').setAttribute('hidden', '');
}

// ─── Help Modal ───────────────────────────────────────────────────────

const HELP_HTML = `
<h3>The Year Number</h3>
<p>This calendar uses the <strong>Human Era</strong> (Holocene Era). Instead of counting from an arbitrary religious date, it adds 10,000 years to place the dawn of human civilization — the agricultural revolution — at Year 1. The result: 2026 CE = <strong>Year 12026</strong>.</p>
<p>This numbering was conceived independently for this calendar — it was only later discovered that scientist Cesare Emiliani had proposed the same idea decades earlier.</p>
<hr>
<h3>The Moons (Lunar Months)</h3>
<p>The calendar has 12 moons per year, each beginning on a new moon:</p>
<p>Snowmoon · Wakingmoon · Seedmoon · Bloommoon · Flowermoon · Berrymoon · Summermoon · Harvestmoon · Gathermoon · Leafmoon · Frostmoon · <strong>Darkmoon</strong></p>
<p><strong>Darkmoon</strong> is always the last moon of the year — the one containing the winter solstice.</p>
<p><strong>Bluemoon:</strong> When the solstice falls on day 19 or later of Darkmoon (Bear or Fox), a 13th moon (Bluemoon) is added after Darkmoon, making a 13-moon year.</p>
<p>The threshold isn't arbitrary. A solar year (~365.24 days) is about 10.88 days longer than 12 lunar months (~354.36 days). If the solstice falls on day 19 of Darkmoon, next year without correction it would land on day ~30 — right at the edge of the month, or just past it. Day 20 or later means the solstice would overshoot into the <em>following</em> moon entirely, so Darkmoon would no longer contain the solstice. The Bear/Fox rule is the exact astronomical threshold for when the calendar must self-correct. Adding Bluemoon resets the solstice back to Robin or Rabbit territory (~day 6) the following year, and the cycle begins again.</p>
<hr>
<h3>The Year Animal</h3>
<p>Darkmoon is divided into five named parts. Whichever part the winter solstice falls in names the year:</p>
<table class="help-table">
  <tr><th>Part</th><th>Days</th><th>Character</th></tr>
  <tr><td><strong>Robin</strong></td><td>1–6</td><td>Early and bright — the year begins before the dark has truly settled</td></tr>
  <tr><td><strong>Rabbit</strong></td><td>7–12</td><td>Alert and watchful, sitting at the threshold</td></tr>
  <tr><td><strong>Turkey</strong></td><td>13–18</td><td>Mid-dark, gathering and deliberate</td></tr>
  <tr><td><strong>Bear</strong></td><td>19–24</td><td>Deep in the dark — needs to sleep a little longer this year</td></tr>
  <tr><td><strong>Fox</strong></td><td>25–end</td><td>Deepest drift — already out hunting in the long night</td></tr>
</table>
<p>The year animal is a shorthand for the offset between the solar and lunar calendar. A Robin year means the solstice arrived early in Darkmoon; a Fox year means the calendar has drifted far and a Bluemoon is coming.</p>
<hr>
<h3>The Weekday Names</h3>
<p>In <strong>Myth</strong> mode, the days are named for Norse gods and celestial bodies. The standard English weekday names already hide these figures — this calendar brings them forward.</p>
<table class="help-table">
  <tr><th>Fairy</th><th>Standard</th><th>Named for</th></tr>
  <tr><td><strong>Heimday</strong></td><td>Monday</td><td><strong>Heimdall</strong> — watchman of Asgard, guardian of the Bifrost rainbow bridge. He stands at the threshold, ever-watching — a fitting start to the week.</td></tr>
  <tr><td><strong>Tyrsday</strong></td><td>Tuesday</td><td><strong>Tyr</strong> — god of justice and honorable combat. He sacrificed his hand to bind the wolf Fenrir, upholding the law of the gods.</td></tr>
  <tr><td><strong>Wodensday</strong></td><td>Wednesday</td><td><strong>Woden (Odin)</strong> — the All-Father, god of wisdom, poetry, and the dead. He hung himself on Yggdrasil for nine days to earn the knowledge of the runes.</td></tr>
  <tr><td><strong>Thorsday</strong></td><td>Thursday</td><td><strong>Thor</strong> — god of thunder and lightning, defender of both gods and humans.</td></tr>
  <tr><td><strong>Freyasday</strong></td><td>Friday</td><td><strong>Freya</strong> — goddess of love, beauty, gold, and magic. She leads the Valkyries and weeps tears of red gold.</td></tr>
  <tr><td><strong>Moonday</strong></td><td>Saturday</td><td><strong>The Moon.</strong> Saturday is named for Saturn, a Roman deity who has no place among these Norse gods. Monday is already Moon's day — but that means a billion people begin their work week cursing the Moon. Moving it to the weekend transforms it from a burden into a blessing, and gives it the night sky it deserves.</td></tr>
  <tr><td><strong>Sunday</strong></td><td>Sunday</td><td><strong>The Sun</strong> — unchanged.</td></tr>
</table>
<hr>
<h3>Icons on Calendar Days</h3>
<table class="help-table">
  <tr><th>Icon</th><th>Meaning</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>New moon, first quarter, full moon, last quarter</td></tr>
  <tr><td>☀</td><td>Solstice or equinox</td></tr>
  <tr><td>Ⓟ + %</td><td>Lunar perigee (Moon closest to Earth); illumination percentage</td></tr>
  <tr><td>@</td><td>Lunar apogee (Moon farthest from Earth)</td></tr>
  <tr><td>🌠</td><td>Meteor shower near peak</td></tr>
  <tr><td>☄</td><td>Comet in visibility window</td></tr>
  <tr><td>🎂</td><td>Birthday</td></tr>
  <tr><td>Colored border</td><td>US federal holiday</td></tr>
</table>
<hr>
<h3>The Night Sky Panel</h3>
<p>Click any <strong>ⓘ</strong> button to open the events panel. When viewing today, the <strong>Tonight</strong> section shows sunset time, astronomical twilight (when the sky is truly dark — sun 18° below horizon, roughly 1.5–2 hours after sunset), visible planets, active meteor showers, and evening constellations visible from your location.</p>
<hr>
<h3>Other Lunar Calendars</h3>
<p>Many cultures have tracked time by the moon. The most widely used today is the <strong>Hebrew calendar</strong>, which shares some features with this one — and differs in revealing ways.</p>
<p><strong>What they share:</strong> Both are <em>lunisolar</em> — they follow the moon for months but add an intercalary (leap) month to stay aligned with the solar year. Both start each month on the new moon.</p>
<p><strong>How the Hebrew calendar works:</strong> It has 12 months of 29–30 days. Seven times in every 19-year cycle (the Metonic cycle), a 13th month is inserted on a fixed arithmetic schedule. The year begins in autumn around the fall equinox (Rosh Hashanah). Months carry ancient Babylonian names: Nisan, Iyar, Sivan… The year count runs from a calculated date of creation, placing 2026 CE at approximately year 5786.</p>
<p><strong>How this calendar differs:</strong></p>
<table class="help-table">
  <tr><td><strong>Year anchor</strong></td><td>The Hebrew year begins in <em>autumn</em>. This calendar begins in <em>winter</em> — Snowmoon starts just after the darkest night. The year rises from darkness toward light.</td></tr>
  <tr><td><strong>Leap month rule</strong></td><td>Hebrew intercalation follows a fixed 19-year schedule. This calendar uses a purely astronomical trigger: Bluemoon is added only when the winter solstice drifts late enough in Darkmoon that skipping it would push next year's solstice outside Darkmoon entirely.</td></tr>
  <tr><td><strong>Accuracy</strong></td><td>The modern Hebrew calendar uses a standardized lunar month length fixed since the 4th century CE and no longer tracks actual moon observation. This calendar computes real new moons using Meeus astronomical algorithms — it reflects the actual sky.</td></tr>
  <tr><td><strong>Month names</strong></td><td>Hebrew months retain ancient Babylonian names. These months are named for what the natural world is doing.</td></tr>
  <tr><td><strong>The week</strong></td><td>The Hebrew week counts numbered days ending in Sabbath. This calendar names the days for the Norse gods who already secretly inhabit the English weekday names.</td></tr>
</table>
<p>The <strong>Islamic calendar</strong> is purely lunar with no intercalation, drifting through all seasons over ~33 years. The <strong>Chinese calendar</strong> is lunisolar and adds leap months similarly to Hebrew. Both are old and rich — this calendar is simply a new one, built for a specific family, in a specific place, watching a specific sky.</p>
`;

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
      `<div id="modal-body">${HELP_HTML}</div>` +
    `</div>`;
  document.body.appendChild(modal);
  modal.querySelector('#modal-backdrop').addEventListener('click', closeHelp);
  modal.querySelector('#modal-close').addEventListener('click', closeHelp);
}

function showHelp() {
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
        `<h2 id="modal-title">Settings</h2>` +
        `<div id="modal-header-btns">` +
          `<button id="modal-close" aria-label="Close">✕</button>` +
        `</div>` +
      `</div>` +
      `<div id="modal-body">` +
        `<h3 class="settings-section-head">Location</h3>` +
        `<p class="settings-hint">Used for sunset, twilight, and constellation calculations.</p>` +
        `<div class="settings-row">` +
          `<label for="settings-lat">Latitude</label>` +
          `<input type="number" id="settings-lat" min="-90" max="90" step="0.1" placeholder="e.g. 37.0">` +
          `<span class="settings-unit">° N</span>` +
        `</div>` +
        `<div class="settings-row">` +
          `<label for="settings-lon">Longitude</label>` +
          `<input type="number" id="settings-lon" min="-180" max="180" step="0.1" placeholder="e.g. -80.0">` +
          `<span class="settings-unit">° E</span>` +
        `</div>` +
        `<p class="settings-hint">Negative longitude = West. Times display in US Eastern timezone.</p>` +
        `<div class="settings-actions">` +
          `<button id="settings-save" class="btn">Save</button>` +
          `<button id="settings-cancel" class="btn">Cancel</button>` +
        `</div>` +
        `<hr class="settings-divider">` +
        `<h3 class="settings-section-head">Birthdays</h3>` +
        `<div id="birthday-list"></div>` +
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
        `</div>` +
      `</div>` +
    `</div>`;
  document.body.appendChild(modal);
  modal.querySelector('#modal-backdrop').addEventListener('click', closeSettings);
  modal.querySelector('#modal-close').addEventListener('click', closeSettings);
  modal.querySelector('#settings-cancel').addEventListener('click', closeSettings);
  modal.querySelector('#settings-save').addEventListener('click', saveSettings);
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
}

function showSettings() {
  document.getElementById('settings-lat').value = OBSERVER.lat;
  document.getElementById('settings-lon').value = OBSERVER.lon;
  _renderBirthdayList();
  document.getElementById('settings-modal').removeAttribute('hidden');
}

function _saveBirthdays() {
  try { localStorage.setItem(STORAGE.BIRTHDAYS, JSON.stringify(runtimeBirthdays)); } catch(_) {}
}

function _renderBirthdayList() {
  const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const list = document.getElementById('birthday-list');
  list.innerHTML = '';
  if (runtimeBirthdays.length === 0) {
    list.innerHTML = '<p class="settings-hint">No birthdays added yet.</p>';
    return;
  }
  const sorted = [...runtimeBirthdays].sort((a,b) => a.month - b.month || a.day - b.day);
  sorted.forEach(b => {
    const row = document.createElement('div');
    row.className = 'bday-list-item';
    row.innerHTML =
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
}

function closeSettings() {
  document.getElementById('settings-modal').setAttribute('hidden', '');
}

function saveSettings() {
  const lat = parseFloat(document.getElementById('settings-lat').value);
  const lon = parseFloat(document.getElementById('settings-lon').value);
  if (isNaN(lat) || lat < -90 || lat > 90) return;
  if (isNaN(lon) || lon < -180 || lon > 180) return;
  OBSERVER.lat = lat;
  OBSERVER.lon = lon;
  try { localStorage.setItem(STORAGE.OBSERVER, JSON.stringify({ lat, lon })); } catch(_) {}
  closeSettings();
  refresh();
}

function _formatEvent(ev) {
  if (ev.kind === 'phase')         { const p=PHASE_LABELS[ev.phase];  return {icon:p.icon, text:p.label}; }
  if (ev.kind === 'solar')         { const s=SOLAR_LABELS[ev.solar];  return {icon:s.icon, text:s.label}; }
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
    const fmtDs = ds => { const d=new Date(ds); return `${GREG_MONTH_NAMES[d.getUTCMonth()].slice(0,3)} ${d.getUTCDate()}`; };
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

function renderSkyChart(catalogData, planets = [], rotDeg = 0) {
  // catalogData: { tier1: [{alt,az,mag,name,con}], tier2: [...], constellations: [{name,centroidAz,centroidAlt}] }
  // Also supports legacy format for backwards compat (array of constellation objects)
  _skyChartState = { catalogData, planets, rotDeg };

  const cx = 170, cy = 170, R = 160;
  let svg = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#0a0a1a"/>`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${(R*30/90).toFixed(1)}" fill="none" stroke="#223" stroke-width="0.4" stroke-dasharray="2,3"/>`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${(R*60/90).toFixed(1)}" fill="none" stroke="#223" stroke-width="0.4" stroke-dasharray="2,3"/>`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#446" stroke-width="0.8"/>`;
  // Zenith crosshair (+ sign, not a dot)
  svg += `<line x1="${cx-4}" y1="${cy}" x2="${cx+4}" y2="${cy}" stroke="#667" stroke-width="0.6"/>`;
  svg += `<line x1="${cx}" y1="${cy-4}" x2="${cx}" y2="${cy+4}" stroke="#667" stroke-width="0.6"/>`;

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
      const grey = Math.round(170 + 50 * bright);
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="${r.toFixed(2)}" fill="rgb(${grey},${grey-8},${Math.round(grey*0.8)})" opacity="${bright.toFixed(2)}"/>`;
    }
    svg += `</g>`;
  }

  // Tier 1 stars — always visible
  if (data.tier1) {
    for (const s of data.tier1) {
      if (s.alt <= 0) continue;
      const pt = _projectAltAz(s.az, s.alt, cx, cy, R, rotDeg);
      const mag = s.mag;
      const r = Math.max(0.6, 2.4 - 0.4 * mag);
      const bright = Math.min(1, Math.max(0.35, 1.0 - 0.1 * mag));
      const g = Math.round(230 + 25 * bright);
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="${r.toFixed(1)}" fill="rgb(${g},${g-4},${g-10})" opacity="${bright.toFixed(2)}"/>`;
    }
  }

  // Constellation labels
  if (data.constellations) {
    for (const c of data.constellations) {
      const cpt = _projectAltAz(c.centroidAz, c.centroidAlt, cx, cy, R, rotDeg);
      const anchor = cpt.x >= cx ? 'start' : 'end';
      const dx = cpt.x >= cx ? 16 : -16;
      svg += `<text class="sky-const-label" data-cname="${c.name}" x="${(cpt.x+dx).toFixed(1)}" y="${(cpt.y+3).toFixed(1)}" font-size="8" fill="#ccd8ee" font-family="sans-serif" text-anchor="${anchor}" cursor="pointer" opacity="0.85">${c.name}</text>`;
    }
  }

  // Planets
  for (const p of planets) {
    const pp = _projectAltAz(p.az, p.alt, cx, cy, R, rotDeg);
    svg += `<circle cx="${pp.x.toFixed(1)}" cy="${pp.y.toFixed(1)}" r="6" fill="none" stroke="#ffaa22" stroke-width="1.5" opacity="0.9"/>`;
    svg += `<circle cx="${pp.x.toFixed(1)}" cy="${pp.y.toFixed(1)}" r="3.5" fill="#ffcc44" opacity="0.95"/>`;
    const anchor = pp.x >= cx ? 'start' : 'end';
    const dx = pp.x >= cx ? 9 : -9;
    svg += `<text x="${(pp.x+dx).toFixed(1)}" y="${(pp.y-7).toFixed(1)}" font-size="10" fill="#ffcc44" font-family="sans-serif" text-anchor="${anchor}" opacity="0.95">${p.symbol} ${p.name}</text>`;
  }

  const vb = '-20 -20 380 380';
  return `<div class="sky-chart-wrap"><svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" class="sky-chart-svg" data-base-vb="${vb}" aria-label="Sky chart">${svg}</svg></div>`;
}

// ─── Sky chart zoom (CSS transform-based) ───────────────────────────
let _skyZoom = { level: 1, tx: 0, ty: 0 };

function _resetSkyZoom() {
  _skyZoom = { level: 1, tx: 0, ty: 0 };
}

function _applySkyZoom(svgEl) {
  const z = _skyZoom.level;
  svgEl.style.transform = `scale(${z}) translate(${_skyZoom.tx}px, ${_skyZoom.ty}px)`;

  // Fade in background stars at zoom >= 1.5
  const bgGroup = svgEl.querySelector('.sky-bg-stars');
  if (bgGroup) {
    const opacity = z < 1.5 ? 0 : Math.min(0.85, (z - 1.5) * 1.7);
    bgGroup.setAttribute('opacity', opacity.toFixed(2));
  }
}

function _clampPan(svgEl) {
  const z = _skyZoom.level;
  if (z <= 1) { _skyZoom.tx = 0; _skyZoom.ty = 0; return; }
  const rect = svgEl.parentElement.getBoundingClientRect();
  const w = rect.width, h = rect.height;
  // Max pan: half the overflow on each side
  const maxTx = (w * (z - 1)) / (2 * z);
  const maxTy = (h * (z - 1)) / (2 * z);
  _skyZoom.tx = Math.max(-maxTx, Math.min(maxTx, _skyZoom.tx));
  _skyZoom.ty = Math.max(-maxTy, Math.min(maxTy, _skyZoom.ty));
}

function _attachSkyZoom(svgEl) {
  if (!svgEl) return;

  // Mouse wheel zoom
  svgEl.addEventListener('wheel', e => {
    e.preventDefault();
    const oldZ = _skyZoom.level;
    const factor = e.deltaY < 0 ? 1.2 : 1 / 1.2;
    const newZ = Math.max(1, Math.min(6, oldZ * factor));
    _skyZoom.level = newZ;

    // Zoom toward cursor: adjust pan so point under cursor stays fixed
    const rect = svgEl.parentElement.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / oldZ;
    const cy = (e.clientY - rect.top - rect.height / 2) / oldZ;
    const ratio = 1 - newZ / oldZ;
    _skyZoom.tx += cx * ratio;
    _skyZoom.ty += cy * ratio;

    _clampPan(svgEl);
    _applySkyZoom(svgEl);
  }, { passive: false });

  // Mouse drag for panning
  let dragging = false, lastX = 0, lastY = 0;
  svgEl.addEventListener('mousedown', e => {
    if (_skyZoom.level <= 1.05) return;
    dragging = true;
    lastX = e.clientX; lastY = e.clientY;
    svgEl.style.cursor = 'grabbing';
    e.preventDefault();
  });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    _skyZoom.tx += (e.clientX - lastX) / _skyZoom.level;
    _skyZoom.ty += (e.clientY - lastY) / _skyZoom.level;
    lastX = e.clientX; lastY = e.clientY;
    _clampPan(svgEl);
    _applySkyZoom(svgEl);
  });
  window.addEventListener('mouseup', () => {
    if (dragging) {
      dragging = false;
      svgEl.style.cursor = '';
    }
  });

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
      touchTx0 = _skyZoom.tx;
      touchTy0 = _skyZoom.ty;
    } else if (e.touches.length === 1 && _skyZoom.level > 1.05) {
      e.preventDefault();
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      dragging = true;
    }
  }, { passive: false });
  svgEl.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && touches0) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
      _skyZoom.level = Math.max(1, Math.min(6, touchZoom0 * dist / touchDist0));
      // Pan: track midpoint movement
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const midX0 = (touches0[0].x + touches0[1].x) / 2;
      const midY0 = (touches0[0].y + touches0[1].y) / 2;
      _skyZoom.tx = touchTx0 + (midX - midX0) / _skyZoom.level;
      _skyZoom.ty = touchTy0 + (midY - midY0) / _skyZoom.level;
      _clampPan(svgEl);
      _applySkyZoom(svgEl);
    } else if (e.touches.length === 1 && dragging) {
      e.preventDefault();
      _skyZoom.tx += (e.touches[0].clientX - lastX) / _skyZoom.level;
      _skyZoom.ty += (e.touches[0].clientY - lastY) / _skyZoom.level;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      _clampPan(svgEl);
      _applySkyZoom(svgEl);
    }
  }, { passive: false });
  svgEl.addEventListener('touchend', () => {
    touches0 = null;
    dragging = false;
  });

  // Double-click/tap to reset zoom
  svgEl.addEventListener('dblclick', e => {
    e.preventDefault();
    _resetSkyZoom();
    _applySkyZoom(svgEl);
  });
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
        const grey = Math.round(160 + 50 * bright);
        svg += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${r.toFixed(1)}" fill="rgb(${grey},${grey-8},${Math.round(grey*0.8)})" opacity="${bright.toFixed(2)}"/>`;
      }
    }
  }

  // Curated stars (bright, labeled — smaller but whiter)
  for (let k = 0; k < con.stars.length; k++) {
    const pt = gnomonic(con.stars[k][0], con.stars[k][1]);
    if (!pt) continue;
    const x = cx - (pt.x - midX) * sc;
    const y = cy - (pt.y - midY) * sc;
    const mag = con.stars[k][2];
    const r = Math.max(2, 4 - 0.4 * mag);
    const bright = Math.min(1, Math.max(0.45, 1.0 - 0.1 * mag));
    const g = Math.round(235 + 20 * bright);
    svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="rgb(${g},${g-3},${g-8})" opacity="${bright.toFixed(2)}"/>`;
    const label = con.stars[k][3];
    if (label) {
      svg += `<text x="${(x + r + 4).toFixed(1)}" y="${(y + 3).toFixed(1)}" font-size="10" fill="#ccd8ee" font-family="sans-serif">${label}</text>`;
    }
  }

  return `<div class="const-detail-wrap"><svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" class="const-detail-svg">${svg}</svg></div>`;
}

function showConstellationDetail(name) {
  if (!CONSTELLATIONS[name]) return;
  _savedModal = {
    title: document.getElementById('modal-title').textContent,
    body:  document.getElementById('modal-body').innerHTML,
  };

  const svgEl = _buildConstellationSVG(name);
  const lore = CONSTELLATION_LORE[name] || '';
  const loreEl = lore ? `<p class="const-lore">${lore}</p>` : '';
  document.getElementById('modal-title').textContent = name;
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
  const lore = CONSTELLATION_LORE[name] || '';
  const loreEl = lore ? `<p class="const-lore">${lore}</p>` : '';

  // Use the existing modal
  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-today-btn').style.display = 'none';
  document.getElementById('modal-body').innerHTML = svgEl + loreEl;
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
    const tomorrow = new Date(skyDate.getTime() + 86400000);
    const sunrise  = sunriseTime(tomorrow);
    const parts = [`🌙 ${moonIllum}%`];
    if (sunset)   parts.push(`↓${sunset}`);
    if (twilight) parts.push(`✦ ${twilight}`);
    if (sunrise)  parts.push(`↑${sunrise}`);
    const skyLabel = fromDateStr === todayStr ? 'Tonight' : 'Night Sky';
    eveningSkyHTML += `<div class="modal-section-head">${skyLabel} (${parts.join(', ')})</div>`;
    if (visPlans.length > 0)
      eveningSkyHTML += `<div class="constellation-list"><b>Planets:</b> ${visPlans.map(p=>`${PLANET_SYMBOLS[p.name]} ${p.name} (${p.elong}°)`).join(' · ')}</div>`;
    if (activeMeteors.length > 0)
      eveningSkyHTML += `<div class="constellation-list"><b>Meteor peaks:</b> ${activeMeteors.map(e=>`🌠 ${e.name} (~${e.zhr}/hr)`).join(' · ')}</div>`;
    if (hasSky) {
      eveningSkyHTML += `<div class="constellation-list">${constellationData.map(c=>c.name).join(' · ')}</div>`;
      const planetPositions = getPlanetAltAz(skyDate);
      if (catalogData) {
        eveningSkyHTML += renderSkyChart(catalogData, planetPositions, 180);
      } else {
        // Fallback: legacy constellation-only mode
        const legacyData = getVisibleConstellationPositions(skyDate);
        eveningSkyHTML += renderSkyChart({ tier1: [], tier2: [], constellations: legacyData }, planetPositions, 180);
      }
    }
  }

  let body = '';
  if (events.length === 0) {
    if (todayInWindow) body += `<div class="modal-today-marker">— Today —</div>`;
    body += '<p style="color:var(--color-text-secondary);font-size:0.9rem">No events in next 60 days.</p>';
    body += eveningSkyHTML;
  } else {
    let todayPlaced = false;
    let skyPlaced = !eveningSkyHTML;
    for (const ev of events) {
      if (todayInWindow && !todayPlaced && ev.dateStr >= todayStr) {
        body += `<div class="modal-today-marker">— Today —</div>`;
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
      const dateLabel = ((state.viewMode === 'fairy' || state.viewMode === 'week') && fd)
        ? `${fd.fairyMonth.replace(/moon$/i,'')} ${fd.fairyDay}`
        : `${GREG_MONTH_NAMES[_gd.getUTCMonth()].slice(0,3)} ${_gd.getUTCDate()}`;
      body += `<div class="modal-event">` +
        `<span class="modal-event-icon">${icon}</span>` +
        `<span class="modal-event-date">${dateLabel}</span>` +
        `<span class="modal-event-desc">${text}</span>` +
        `</div>`;
    }
    if (todayInWindow && !todayPlaced) {
      body += `<div class="modal-today-marker">— Today —</div>`;
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
  document.getElementById('modal-today-btn').style.display = (fromDateStr === todayStr) ? 'none' : '';
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('cal-modal').removeAttribute('hidden');

  // Attach sky chart zoom
  _resetSkyZoom();
  const skyChartSvg = document.querySelector('.sky-chart-svg');
  if (skyChartSvg) _attachSkyZoom(skyChartSvg);
}

// ─── App wiring ─────────────────────────────────────────────────────

const VARIANT_NAMES = ['a','b','c','d','e'];

function buildSwatches() {
  const group = document.getElementById('variant-group');
  group.querySelectorAll('.variant-btn').forEach(b => b.remove());
  const colors  = VARIANT_SWATCH_COLORS[state.theme]  || [];
  const borders = VARIANT_SWATCH_BORDERS[state.theme] || [];
  VARIANT_NAMES.forEach((v, idx) => {
    const btn = document.createElement('button');
    btn.className = 'variant-btn' + (v===state.variant?' active':'');
    btn.dataset.variant = v;
    const bg = colors[idx] || '#eee';
    const ln = borders[idx] || '#999';
    btn.style.background = `linear-gradient(${ln},${ln}) center/2px 100% no-repeat,linear-gradient(${ln},${ln}) center/100% 2px no-repeat,${bg}`;
    btn.title = `Color ${v.toUpperCase()}`;
    btn.addEventListener('click', () => {
      state.variant = v;
      applyTheme(state.theme, state.variant);
      document.querySelectorAll('.variant-btn').forEach(b => b.classList.toggle('active', b.dataset.variant === v));
      _saveState();
    });
    group.appendChild(btn);
  });
}

function refresh() {
  document.getElementById('year-input').value = state.holYear;
  document.title = `Fairy Calendar — Year ${state.holYear}`;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b.dataset.view===state.viewMode));
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme===state.theme));
  applyTheme(state.theme, state.variant);
  buildSwatches();
  // Swap toolbar nav: year controls vs sky date controls
  const isSky = state.viewMode === 'sky';
  document.getElementById('year-nav').hidden = isSky;
  document.getElementById('sky-nav').hidden = !isSky;
  if (isSky) {
    if (!_skyViewDate) _skyViewDate = localTodayStr();
    document.getElementById('sky-date-input').value = _skyViewDate;
  }
  render(state.holYear, state.viewMode);
  _saveState();
}

document.getElementById('prev-year').addEventListener('click', () => { state.holYear--; refresh(); });
document.getElementById('next-year').addEventListener('click', () => { state.holYear++; refresh(); });
document.getElementById('today-btn').addEventListener('click', () => {
  _skyPlayStop();
  state.holYear = new Date().getFullYear() + 10000;
  _skyViewDate = localTodayStr();
  scrollToTodayAfterRender = true;
  refresh();
});
document.getElementById('year-input').addEventListener('change', e => {
  const v = parseInt(e.target.value, 10);
  if (!isNaN(v)) { state.holYear=v; refresh(); }
});

// Sky view date nav (toolbar)
function _skySetDate(dateStr) {
  _skyViewDate = dateStr;
  document.getElementById('sky-date-input').value = dateStr;
  renderSky();
}
document.getElementById('sky-prev').addEventListener('click', () => {
  _skyPlayStop();
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  const prev = new Date(new Date(_skyViewDate + 'T00:00:00Z').getTime() - 86400000);
  _skySetDate(utcDateStr(prev));
});
document.getElementById('sky-next').addEventListener('click', () => {
  _skyPlayStop();
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  const next = new Date(new Date(_skyViewDate + 'T00:00:00Z').getTime() + 86400000);
  _skySetDate(utcDateStr(next));
});
// Sky timelapse play / fast-forward
let _skyPlayTimer = null;
let _skyPlaySpeed = 0; // 0=stopped, 1=play, 2=ff
const _skyPlayBtn = document.getElementById('sky-play');
const _skyFFBtn = document.getElementById('sky-ff');
function _skyAdvance() {
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  const next = new Date(new Date(_skyViewDate + 'T00:00:00Z').getTime() + 86400000);
  _skySetDate(utcDateStr(next));
}
function _skyPlayStop() {
  if (_skyPlayTimer) { clearInterval(_skyPlayTimer); _skyPlayTimer = null; }
  _skyPlaySpeed = 0;
  _skyPlayBtn.textContent = '\u25B6';
  _skyFFBtn.textContent = '\u25B6\u25B6';
}
function _skyPlayAt(speed) {
  _skyPlayStop();
  _skyPlaySpeed = speed;
  const ms = speed === 2 ? 80 : 800;
  _skyPlayTimer = setInterval(_skyAdvance, ms);
  if (speed === 2) {
    _skyFFBtn.textContent = '\u23F8';
  } else {
    _skyPlayBtn.textContent = '\u23F8';
  }
}
_skyPlayBtn.addEventListener('click', () => {
  if (_skyPlaySpeed === 1) _skyPlayStop(); else _skyPlayAt(1);
});
_skyFFBtn.addEventListener('click', () => {
  if (_skyPlaySpeed === 2) _skyPlayStop(); else _skyPlayAt(2);
});

document.getElementById('sky-date-input').addEventListener('change', e => {
  if (e.target.value) _skySetDate(e.target.value);
});
document.querySelectorAll('.view-btn').forEach(b => b.addEventListener('click', () => {
  _skyPlayStop();
  if (selectedDate) {
    scrollToSelectedAfterRender = true;
  } else {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
  }
  state.viewMode = b.dataset.view;
  refresh();
}));
document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => {
  state.theme = b.dataset.theme;
  applyTheme(state.theme, state.variant);
  document.querySelectorAll('.theme-btn').forEach(b2 => b2.classList.toggle('active', b2.dataset.theme === state.theme));
  buildSwatches(); // swatch colors change per theme
  if (currentFY) document.querySelectorAll('.year-hero-wrap').forEach(w => {
    w.innerHTML = getHeaderSVG(currentFY.yearAnimal, state.theme);
  });
  document.querySelectorAll('.fairy-moon-header').forEach(hdr => {
    const existing = hdr.querySelector('.moon-plant-svg');
    if (state.theme === 'flower') {
      if (!existing) {
        const moonName = hdr.querySelector('.moon-name')?.textContent;
        const svg = getMoonPlantSVG(moonName);
        if (svg) hdr.insertAdjacentHTML('afterbegin', svg);
      }
    } else {
      if (existing) existing.remove();
    }
  });
  document.querySelectorAll('.fairy-moon').forEach(sec => {
    const existingIcon = sec.querySelector('.fairy-moon-icon');
    if (state.theme === 'fairy') {
      if (!existingIcon) {
        const moonName = sec.querySelector('.moon-name')?.textContent;
        const emptyCells = [...sec.querySelectorAll('td.empty-cell')];
        const firstTbodyCell = sec.querySelector('tbody tr:first-child td:first-child');
        const startsWithEmpty = firstTbodyCell && firstTbodyCell.classList.contains('empty-cell');
        const target = startsWithEmpty ? emptyCells[0] : emptyCells[emptyCells.length-1];
        if (target) target.innerHTML = getFairyMoonSVG(moonName);
      }
    } else {
      if (existingIcon) existingIcon.remove();
    }
  });
  _saveState();
}));
{ const btn = document.getElementById('toggle-mythic-week');
  const update = () => btn.classList.toggle('active', state.weekNames === 'myth');
  btn.addEventListener('click', () => {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
    state.weekNames = state.weekNames === 'myth' ? 'std' : 'myth';
    _saveState();
    update();
    showToast(state.weekNames === 'myth' ? 'Mythic week on' : 'Mythic week off');
    refresh();
  });
  update();
}
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.remove('toast-hide');
  t.classList.add('toast-show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.classList.remove('toast-show'); t.classList.add('toast-hide'); }, 1800);
}

function _saveState() {
  try { localStorage.setItem(STORAGE.STATE, JSON.stringify(state)); } catch(_) {}
}

function _wireToggle(id, stateKey, labelOn, labelOff) {
  const btn = document.getElementById(id);
  if (!btn) return;
  const update = () => btn.classList.toggle('active', state[stateKey]);
  btn.addEventListener('click', () => {
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    restoreScrollFracAfterRender = sh > 0 ? window.scrollY / sh : 0;
    state[stateKey] = !state[stateKey];
    _saveState();
    update();
    showToast(state[stateKey] ? labelOn : labelOff);
    refresh();
  });
  update();
}
_wireToggle('toggle-holidays',   'showHolidays',   'Holidays on',   'Holidays off');
_wireToggle('toggle-meteors',    'showMeteors',    'Meteors on',    'Meteors off');
_wireToggle('toggle-comets',     'showComets',     'Comets on',     'Comets off');
_wireToggle('toggle-birthdays',  'showBirthdays',  'Birthdays on',  'Birthdays off');
{ const btn = document.getElementById('toggle-other-date');
  const root = document.getElementById('calendar-root');
  const apply = () => { root.classList.toggle('hide-other-date', !state.showOtherDate); btn.classList.toggle('active', state.showOtherDate); };
  btn.addEventListener('click', () => {
    state.showOtherDate = !state.showOtherDate;
    _saveState();
    apply();
    showToast(state.showOtherDate ? 'Other date on' : 'Other date off');
  });
  apply();
}
document.addEventListener('keydown', e => {
  if (e.target.tagName==='INPUT') return;
  if (e.key==='ArrowLeft')  { state.holYear--; refresh(); }
  if (e.key==='ArrowRight') { state.holYear++; refresh(); }
  if (e.key==='Escape')     { closeModal(); closeHelp(); closeSettings(); }
});

document.body.addEventListener('click', e => {
  const btn = e.target.closest('.info-btn');
  if (btn && currentFY) { showModal(btn.dataset.from, btn.dataset.label, currentFY); return; }

  const cell = e.target.closest('[data-date]');
  if (cell) {
    const ds = cell.dataset.date;
    if (selectedDate === ds) {
      selectedDate = null;
      document.querySelectorAll('[data-date].is-selected').forEach(c => c.classList.remove('is-selected'));
    } else {
      selectedDate = ds;
      document.querySelectorAll('[data-date].is-selected').forEach(c => c.classList.remove('is-selected'));
      document.querySelectorAll(`[data-date="${selectedDate}"]`).forEach(c => c.classList.add('is-selected'));
    }
  }
});

initModal();
initHelpModal();
initSettingsModal();
document.getElementById('help-btn').addEventListener('click', showHelp);
document.getElementById('settings-btn').addEventListener('click', showSettings);
document.getElementById('print-btn').addEventListener('click', () => {
  const fy = yearCache.get(state.holYear) || buildFairyYear(state.holYear);
  const pt = document.createElement('div');
  pt.id = 'print-titlepage';
  pt.innerHTML =
    `<div class="print-title-border">` +
      `<div class="print-title-inner">` +
        `<div class="print-title-pattern"></div>` +
        `<p class="print-title-sub">Mythic Lunar</p>` +
        `<p class="print-title-main">Calendar</p>` +
        `<p class="print-title-year">${fy.gregYear}</p>` +
        `<p class="print-title-holocene">Year ${fy.holYear} of the Human Era</p>` +
        `<p class="print-title-animal">${fy.yearAnimal} Year · ${fy.hasBluemoon ? '13 Moons' : '12 Moons'}</p>` +
      `</div>` +
    `</div>`;
  const ph = document.createElement('div');
  ph.id = 'print-help';
  ph.innerHTML = HELP_HTML;
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
