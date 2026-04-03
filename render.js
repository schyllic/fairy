// ═══ Fairy Calendar — render.js ═══

function wdAbbr(wd) {
  if (wd.endsWith('day'))   return wd.slice(0, -3);   // English
  if (wd.endsWith('दिनम्')) return wd.slice(0, -5);  // Sanskrit myth suffix
  if (wd.endsWith('वारः'))  return wd.slice(0, -4);  // Sanskrit std suffix
  const parts = wd.trim().split(/\s+/);
  if (parts.length > 1) return parts[parts.length - 1].slice(0, 3); // multi-word: last word
  return wd.slice(0, 3);
}

function _iroquoisName(idx) {
  const im = IROQUOIS_MONTHS[idx];
  if (!im) return '';
  const lang = (typeof state !== 'undefined') ? state.language : 'en';
  if (lang !== 'en' && IROQUOIS_MONTHS_I18N && IROQUOIS_MONTHS_I18N[lang] && IROQUOIS_MONTHS_I18N[lang][idx])
    return IROQUOIS_MONTHS_I18N[lang][idx];
  return im.en;
}

function _cherokeeName(idx) {
  const cm = CHEROKEE_MONTHS[idx];
  if (!cm) return '';
  const lang = (typeof state !== 'undefined') ? state.language : 'en';
  if (lang !== 'en' && CHEROKEE_MONTHS_I18N && CHEROKEE_MONTHS_I18N[lang] && CHEROKEE_MONTHS_I18N[lang][idx])
    return CHEROKEE_MONTHS_I18N[lang][idx];
  return cm.en;
}

// GREG_MONTH_NAMES kept for backward compat; use getGregMonths() for translated output
const GREG_MONTH_NAMES = ['January','February','March','April','May','June',
                          'July','August','September','October','November','December'];

const SOLAR_LABELS = {
  springEquinox:  {icon:'🌱', label:'Spring Equinox'},
  summerSolstice: {icon:'☀',  label:'Summer Solstice'},
  autumnEquinox:  {icon:'🍂', label:'Autumn Equinox'},
  winterSolstice: {icon:'❄',  label:'Winter Solstice'},
};
const PHASE_LABELS = {
  new:   {icon:'🌑', label:'New Moon'},
  first: {icon:'🌓', label:'First Quarter'},
  full:  {icon:'🌕', label:'Full Moon'},
  last:  {icon:'🌗', label:'Last Quarter'},
};

function moonIcons(fd) {
  let h = '';
  if (fd.moonPhase)  { const p=PHASE_LABELS[fd.moonPhase];  const _p1=tPhase(fd.moonPhase);  const _p2=tPhase2(fd.moonPhase);  h+=`<span class="icon" title="${_p1}${_p2&&_p2!==_p1?' · '+_p2:''}">${p.icon}</span>`; }
  if (fd.solarEvent) { const s=SOLAR_LABELS[fd.solarEvent]; const _s1=tSolar(fd.solarEvent); const _s2=tSolar2(fd.solarEvent); h+=`<span class="icon" title="${_s1}${_s2&&_s2!==_s1?' · '+_s2:''}">${s.icon}</span>`; }
  if (fd.perigee)    { const _pi=moonIllumPct(fd.gregDate); h+=`<span class="icon perigee-icon" title="Lunar Perigee">Ⓟ\u202f${_pi}%</span>`; }
  if (fd.apogee)     h+=`<span class="icon apogee-icon"  title="Lunar Apogee">@</span>`;
  if (fd.eclipse)    { const ei=fd.eclipse.type==='lunarEclipse'?'🌑':'☀'; h+=`<span class="icon eclipse-icon" title="${fd.eclipse.type} (${fd.eclipse.subtype})">${ei}✕</span>`; }
  if (fd.planets) {
    for (const ev of fd.planets) {
      if (ev.kind==='moonConj')
        h+=`<span class="icon planet-icon" title="${ev.planet} near Moon (${ev.sep}°)">${PLANET_SYMBOLS[ev.planet]}🌙</span>`;
      if (ev.kind==='planetConj')
        h+=`<span class="icon planet-icon" title="${ev.planets.join(' & ')} conjunction (${ev.sep}°)">${PLANET_SYMBOLS[ev.planets[0]]}${PLANET_SYMBOLS[ev.planets[1]]}</span>`;
    }
  }
  if (state.showMeteors && fd.meteor) { for (const m of fd.meteor) { if (m.isNearPeak) h+=`<span class="icon meteor-icon" title="${m.name}${m.isPeak?' peak':''} — ZHR ~${m.zhr}, ${m.note}">🌠</span>`; } }
  if (state.showComets  && fd.comet)  { for (const c of fd.comet) h+=`<span class="icon comet-icon" title="${c.name}${c.note?' — '+c.note:''}">☄</span>`; }
  if (state.showBirthdays && fd.birthday) { for (const b of fd.birthday) h+=`<span class="birthday-label">🎂 ${b.name}</span>`; }
  if (state.showHolidays && fd.holiday) { for (const hol of fd.holiday) h+=`<span class="holiday-label">${hol.name}</span>`; }
  return h;
}

function fmtGreg(date) {
  return `${getGregMonths()[date.getUTCMonth()].slice(0,3)} ${date.getUTCDate()}`;
}

function _hebrewDateStr(date) {
  const HNAMES = ['Nisan','Iyar','Sivan','Tammuz','Av','Elul',
                  'Tishri','Cheshvan','Kislev','Tevet','Shevat','Adar','Adar II'];
  for (const adj of [0, 1]) {
    const hy = date.getUTCFullYear() + 3760 + adj;
    const months = buildHebrewYear(hy);
    const nextYearStart = buildHebrewYear(hy + 1)[0].gregStart;
    for (let i = 0; i < months.length; i++) {
      const start = months[i].gregStart;
      const end = (i + 1 < months.length) ? months[i + 1].gregStart : nextYearStart;
      if (date >= start && date < end) {
        const day = Math.round((date - start) / 86400000) + 1;
        return `${HNAMES[months[i].num - 1]} ${day}`;
      }
    }
  }
  return '';
}

function _cherokeeMonthStr(fd) {
  if (!fd || !fd.fairyMonth) return '';
  const moonIdx = I18N.en.moons.indexOf(fd.fairyMonth);
  if (moonIdx < 0) return '';
  return CHEROKEE_MONTHS[moonIdx] ? `${_cherokeeName(moonIdx)} ${fd.fairyDay}` : '';
}

function _iroquoisMonthStr(fd) {
  if (!fd || !fd.fairyMonth) return '';
  const moonIdx = I18N.en.moons.indexOf(fd.fairyMonth);
  if (moonIdx < 0) return '';
  return IROQUOIS_MONTHS[moonIdx] ? `${_iroquoisName(moonIdx)} ${fd.fairyDay}` : '';
}

function _hinduMonthStr(fd) {
  if (!fd || !fd.fairyMonth) return '';
  const moonIdx = I18N.en.moons.indexOf(fd.fairyMonth);
  if (moonIdx < 0) return '';
  const hm = HINDU_MONTHS[moonIdx];
  return hm ? `${hm.dev} ${fd.fairyDay}` : '';
}

function _secondaryStr(fd, primaryType) {
  const sec = state.calendarType2;
  if (!sec || sec === primaryType) return null;
  if (sec === 'greg')     return fmtGreg(fd.gregDate);
  if (sec === 'fairy')    return `${tMoonShort(fd.fairyMonth)} ${fd.fairyDay}`;
  if (sec === 'hebrew')   return _hebrewDateStr(fd.gregDate);
  if (sec === 'cherokee') return _cherokeeMonthStr(fd);
  if (sec === 'iroquois') return _iroquoisMonthStr(fd);
  if (sec === 'hindu')    return _hinduMonthStr(fd);
  return null;
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function renderGreg(fy) {
  const root = document.getElementById('calendar-root');
  root.className = 'view-greg';
  const prevFY = buildFairyYear(fy.holYear - 1);
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-number">${fy.gregYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">${t('moons_badge')} \u00b7 ${t('bluemoon_year')}</span>` : '');
  const grid = el('div','greg-grid');
  const gm = getGregMonths();
  for (let m = 0; m < 12; m++) {
    const lastDay = new Date(Date.UTC(fy.gregYear, m+1, 0));
    const mon = el('div','greg-month');
    const mhdr = el('div','greg-month-header');
    const mFromStr = `${fy.gregYear}-${String(m+1).padStart(2,'0')}-01`;
    const plantIcon = state.theme === 'flower' ? getGregMonthPlantSVG(m) : '';
    mhdr.innerHTML = plantIcon + `<span>${gm[m]}</span><button class="info-btn" data-from="${mFromStr}" data-label="${gm[m]} ${fy.gregYear}">ⓘ</button>`;
    mon.appendChild(mhdr);
    const wr = el('div','greg-weekrow');
    getWeekdays().forEach((wd, wi) => { const d=el('div','greg-wday',wdAbbr(tWeekday(wi))); d.dataset.full=tWeekday(wi); const _w2=tWeekday2(wi); if(_w2)d.title=_w2; wr.appendChild(d); });
    mon.appendChild(wr);
    const dg = el('div','greg-days');
    const startDow = (new Date(Date.UTC(fy.gregYear,m,1)).getUTCDay() + 6) % 7;
    for (let i=0;i<startDow;i++) dg.appendChild(el('div','greg-cell empty-cell'));
    for (let d=1; d<=lastDay.getUTCDate(); d++) {
      const ds = `${fy.gregYear}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const fd = fy.dayMap.get(ds) || prevFY.dayMap.get(ds);
      const cell = el('div', 'greg-cell' + (fd?.isToday?' is-today':'') + (fd?.fairyDay===1?' new-moon-cell':''));
      if (ds === selectedDate) cell.classList.add('is-selected');
      if (state.showHolidays && fd?.holiday) cell.classList.add('holiday-cell');
      if (fd?.solarEvent) cell.classList.add('solar-cell');
      cell.dataset.date = ds;
      cell.appendChild(el('span','greg-daynum', String(d)));
      if (fd?.isToday) cell.appendChild(el('span','today-label', t('today')));
      if (fd) {
        const _sec = _secondaryStr(fd, 'greg');
        if (_sec) {
          const fl = el('span','fairy-label', _sec);
          if (state.calendarType2 === 'fairy' && fd.darkmoonPart) { fl.classList.add('darkmoon-label'); const _a1=tAnimal(fd.darkmoonPart); const _a2=tAnimal2(fd.darkmoonPart); fl.title=t('darkmoon_tooltip', _a1)+(_a2&&_a2!==_a1?' · '+_a2:''); }
          cell.appendChild(fl);
        }
        { const ib=el('button','info-btn today-info-btn'); ib.dataset.from=ds; ib.dataset.label=_dayLabel(ib.dataset.from, currentFY); ib.textContent='ⓘ'; if(!fd.isToday) ib.classList.add('day-info-btn'); cell.appendChild(ib); }
        const ic = moonIcons(fd);
        if (ic) { const ig=el('span','icon-group'); ig.innerHTML=ic; cell.appendChild(ig); }
      }
      dg.appendChild(cell);
    }
    mon.appendChild(dg);
    grid.appendChild(mon);
  }
  root.innerHTML=''; root.appendChild(yt); root.appendChild(grid);
}

function renderFairy(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-fairy';
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-animal">${t('year_animal', tAnimal(fy.yearAnimal))}</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">${t('moons_badge')} \u00b7 ${t('bluemoon_year')}</span>` : '');
  root.appendChild(yt);

  for (const moon of fy.moons) {
    const sec = el('section','fairy-moon');
    if (moon.name==='Darkmoon') sec.classList.add('moon-darkmoon');
    if (moon.name==='Bluemoon') sec.classList.add('moon-bluemoon');

    const hdr = el('div','fairy-moon-header');
    const plantIcon = state.theme === 'flower' ? getMoonPlantSVG(moon.name) : '';
    const moonDisplayName = tMoon(moon.name);
    const moonDisplayName2 = tMoon2(moon.name);
    const yearAnimalDisplay = t('year_animal', tAnimal(fy.yearAnimal));
    hdr.innerHTML = plantIcon
      + `<span class="moon-name"${moonDisplayName2?` title="${moonDisplayName2}"`:''} >${moonDisplayName}</span>`
      + `<button class="info-btn" data-from="${utcDateStr(moon.startDate)}" data-label="${moonDisplayName} \u00b7 ${yearAnimalDisplay} ${fy.holYear}">ⓘ</button>`
      + `<span class="moon-year-tag">${yearAnimalDisplay} ${fy.holYear}</span>`
      + `<span class="moon-greg-range">${fmtGreg(moon.startDate)} – ${fmtGreg(moon.endDate)}</span>`;
    sec.appendChild(hdr);

    if (moon.name==='Darkmoon') {
      const leg = el('div','darkmoon-legend');
      for (const part of ['Robin','Rabbit','Turkey','Bear','Fox']) {
        const _pa1 = tAnimal(part); const b = el('span',`dp-badge dp-${part.toLowerCase()}`, _pa1);
        const _pa2 = tAnimal2(part);
        if (_pa2 && _pa2 !== _pa1) b.title = _pa2;
        if (part===fy.yearAnimal) b.classList.add('dp-active');
        leg.appendChild(b);
      }
      sec.appendChild(leg);
    }

    const tbl = el('table','fairy-table');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    for (const [wi, wd] of getWeekdays().entries()) {
      const th = el('th', wi>=5?'weekend-col':null, wdAbbr(tWeekday(wi)));
      th.dataset.short = wd.slice(0,3);
      th.dataset.full  = tWeekday(wi);
      const _wd2 = tWeekday2(wi);
      if (_wd2) th.title = _wd2;
      thr.appendChild(th);
    }
    thead.appendChild(thr); tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr'), col=0;
    const firstWd = moon.days[0].fairyWeekdayIndex;
    for (let i=0;i<firstWd;i++) { const ec=el('td','fairy-cell empty-cell'); if(state.theme==='fairy'&&i===0) { ec.innerHTML=getFairyMoonSVG(moon.name); ec.classList.add('fairy-icon-cell'); } row.appendChild(ec); col++; }

    for (const fd of moon.days) {
      if (col===7) { tbody.appendChild(row); row=document.createElement('tr'); col=0; }
      const td = el('td','fairy-cell');
      const fdDateStr = utcDateStr(fd.gregDate);
      if (fd.isToday) td.classList.add('is-today');
      if (fdDateStr === selectedDate) td.classList.add('is-selected');
      if (fd.fairyWeekdayIndex>=5) td.classList.add('weekend-col');
      if (fd.darkmoonPart) td.classList.add(`dp-${fd.darkmoonPart.toLowerCase()}`);
      if (state.showHolidays && fd.holiday) td.classList.add('holiday-cell');
      if (fd.solarEvent) td.classList.add('solar-cell');
      td.dataset.date = fdDateStr;
      td.appendChild(el('span','fairy-daynum', String(fd.fairyDay)));
      if (fd.isToday) td.appendChild(el('span','today-label', t('today')));
      { const _sec = _secondaryStr(fd, 'fairy'); if (_sec) td.appendChild(el('span','fairy-greg-date', _sec)); }
      { const ib=el('button','info-btn today-info-btn'); ib.dataset.from=fdDateStr; ib.dataset.label=_dayLabel(ib.dataset.from, currentFY); ib.textContent='ⓘ'; if(!fd.isToday) ib.classList.add('day-info-btn'); td.appendChild(ib); }
      const ic=moonIcons(fd); if(ic){const ig=el('span','icon-group');ig.innerHTML=ic;td.appendChild(ig);}
      row.appendChild(td); col++;
    }
    const trailingCells=[];
    while(col>0&&col<7){const ec=el('td','fairy-cell empty-cell');trailingCells.push(ec);row.appendChild(ec);col++;}
    if(state.theme==='fairy'&&firstWd===0&&trailingCells.length>0) { const tc=trailingCells[trailingCells.length-1]; tc.innerHTML=getFairyMoonSVG(moon.name); tc.classList.add('fairy-icon-cell'); }
    if(col>0) tbody.appendChild(row);
    tbl.appendChild(tbody); sec.appendChild(tbl); root.appendChild(sec);
  }
}

// ─── Cherokee View ────────────────────────────────────────────────

function renderCherokee(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-fairy';

  const gregYear = fy.holYear - 10000;
  const yt = el('div', 'fairy-year-title');
  yt.innerHTML =
    `<span class="year-animal">ᏣᎳᎩ ᎧᏃᎮᏓ</span>` +
    ` <span class="year-number">${gregYear}</span>` +
    (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons</span>` : '');
  root.appendChild(yt);

  for (const [i, moon] of fy.moons.entries()) {
    const cm = CHEROKEE_MONTHS[i] || CHEROKEE_MONTHS[12];
    const sec = el('section', 'fairy-moon');

    const hdr = el('div', 'fairy-moon-header');
    hdr.innerHTML =
      `<span class="moon-name">${_cherokeeName(i)}</span>` +
      `<span class="moon-year-tag">${cm.syl} \u00b7 ${cm.rom}</span>` +
      `<button class="info-btn" data-from="${utcDateStr(moon.startDate)}" data-label="${cm.en} \u00b7 ${cm.rom} \u00b7 ${gregYear}">ⓘ</button>` +
      `<span class="moon-greg-range">${fmtGreg(moon.startDate)} \u2013 ${fmtGreg(moon.endDate)}</span>`;
    sec.appendChild(hdr);

    const tbl = el('table', 'fairy-table');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    for (const [wi, wd] of getWeekdays().entries()) {
      const th = el('th', wi >= 5 ? 'weekend-col' : null, wdAbbr(tWeekday(wi)));
      th.dataset.short = wd.slice(0, 3);
      th.dataset.full  = tWeekday(wi);
      const _wd2 = tWeekday2(wi);
      if (_wd2) th.title = _wd2;
      thr.appendChild(th);
    }
    thead.appendChild(thr); tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr'), col = 0;
    const firstWd = moon.days[0].fairyWeekdayIndex;
    for (let j = 0; j < firstWd; j++) { row.appendChild(el('td', 'fairy-cell empty-cell')); col++; }

    for (const fd of moon.days) {
      if (col === 7) { tbody.appendChild(row); row = document.createElement('tr'); col = 0; }
      const td = el('td', 'fairy-cell');
      const fdDateStr = utcDateStr(fd.gregDate);
      if (fd.isToday) td.classList.add('is-today');
      if (fdDateStr === selectedDate) td.classList.add('is-selected');
      if (fd.fairyWeekdayIndex >= 5) td.classList.add('weekend-col');
      if (fd.solarEvent) td.classList.add('solar-cell');
      if (state.showHolidays && fd.holiday) td.classList.add('holiday-cell');
      td.dataset.date = fdDateStr;
      td.appendChild(el('span', 'fairy-daynum', String(fd.fairyDay)));
      if (fd.isToday) td.appendChild(el('span', 'today-label', t('today')));
      { const _sec = _secondaryStr(fd, 'cherokee'); if (_sec) td.appendChild(el('span', 'fairy-greg-date', _sec)); }
      { const ib = el('button', 'info-btn today-info-btn'); ib.dataset.from = fdDateStr; ib.dataset.label = _dayLabel(fdDateStr, currentFY); ib.textContent = 'ⓘ'; if (!fd.isToday) ib.classList.add('day-info-btn'); td.appendChild(ib); }
      const ic = moonIcons(fd); if (ic) { const ig = el('span', 'icon-group'); ig.innerHTML = ic; td.appendChild(ig); }
      row.appendChild(td); col++;
    }
    while (col > 0 && col < 7) { row.appendChild(el('td', 'fairy-cell empty-cell')); col++; }
    if (col > 0) tbody.appendChild(row);
    tbl.appendChild(tbody); sec.appendChild(tbl); root.appendChild(sec);
  }
}

// ─── Iroquois (Haudenosaunee) View ───────────────────────────────

function renderIroquois(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-fairy';

  const gregYear = fy.holYear - 10000;
  const yt = el('div', 'fairy-year-title');
  yt.innerHTML =
    `<span class="year-animal">Haudenosaunee</span>` +
    ` <span class="year-number">${gregYear}</span>` +
    (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons</span>` : '');
  root.appendChild(yt);

  for (const [i, moon] of fy.moons.entries()) {
    const im = IROQUOIS_MONTHS[i] || IROQUOIS_MONTHS[12];
    const sec = el('section', 'fairy-moon');

    const hdr = el('div', 'fairy-moon-header');
    hdr.innerHTML =
      `<span class="moon-name">${_iroquoisName(i)}</span>` +
      (im.native ? `<span class="moon-year-tag">${im.native}</span>` : `<span class="moon-year-tag">${gregYear}</span>`) +
      `<button class="info-btn" data-from="${utcDateStr(moon.startDate)}" data-label="${im.en} \u00b7 ${gregYear}">ⓘ</button>` +
      `<span class="moon-greg-range">${fmtGreg(moon.startDate)} \u2013 ${fmtGreg(moon.endDate)}</span>`;
    sec.appendChild(hdr);

    const tbl = el('table', 'fairy-table');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    for (const [wi, wd] of getWeekdays().entries()) {
      const th = el('th', wi >= 5 ? 'weekend-col' : null, wdAbbr(tWeekday(wi)));
      th.dataset.short = wd.slice(0, 3);
      th.dataset.full  = tWeekday(wi);
      const _wd2 = tWeekday2(wi);
      if (_wd2) th.title = _wd2;
      thr.appendChild(th);
    }
    thead.appendChild(thr); tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr'), col = 0;
    const firstWd = moon.days[0].fairyWeekdayIndex;
    for (let j = 0; j < firstWd; j++) { row.appendChild(el('td', 'fairy-cell empty-cell')); col++; }

    for (const fd of moon.days) {
      if (col === 7) { tbody.appendChild(row); row = document.createElement('tr'); col = 0; }
      const td = el('td', 'fairy-cell');
      const fdDateStr = utcDateStr(fd.gregDate);
      if (fd.isToday) td.classList.add('is-today');
      if (fdDateStr === selectedDate) td.classList.add('is-selected');
      if (fd.fairyWeekdayIndex >= 5) td.classList.add('weekend-col');
      if (fd.solarEvent) td.classList.add('solar-cell');
      if (state.showHolidays && fd.holiday) td.classList.add('holiday-cell');
      td.dataset.date = fdDateStr;
      td.appendChild(el('span', 'fairy-daynum', String(fd.fairyDay)));
      if (fd.isToday) td.appendChild(el('span', 'today-label', t('today')));
      { const _sec = _secondaryStr(fd, 'iroquois'); if (_sec) td.appendChild(el('span', 'fairy-greg-date', _sec)); }
      { const ib = el('button', 'info-btn today-info-btn'); ib.dataset.from = fdDateStr; ib.dataset.label = _dayLabel(fdDateStr, currentFY); ib.textContent = 'ⓘ'; if (!fd.isToday) ib.classList.add('day-info-btn'); td.appendChild(ib); }
      const ic = moonIcons(fd); if (ic) { const ig = el('span', 'icon-group'); ig.innerHTML = ic; td.appendChild(ig); }
      row.appendChild(td); col++;
    }
    while (col > 0 && col < 7) { row.appendChild(el('td', 'fairy-cell empty-cell')); col++; }
    if (col > 0) tbody.appendChild(row);
    tbl.appendChild(tbody); sec.appendChild(tbl); root.appendChild(sec);
  }
}

// ─── Hindu (Panchanga) View ───────────────────────────────────────

function renderHindu(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-fairy';

  const gregYear = fy.holYear - 10000;
  const vs = gregYear + 57; // Vikrama Samvat (from Chaitra onward; approximate)
  const yt = el('div', 'fairy-year-title');
  yt.innerHTML =
    `<span class="year-animal">हिन्दू पञ्चाङ्ग</span>` +
    ` <span class="year-number">VS\u00a0${vs}</span>` +
    (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons</span>` : '');
  root.appendChild(yt);

  for (const [i, moon] of fy.moons.entries()) {
    const hm = HINDU_MONTHS[i] || HINDU_MONTHS[12];
    const isNewYear = (i === 3); // Chaitra = Vikrama Samvat new year
    const sec = el('section', 'fairy-moon');

    const hdr = el('div', 'fairy-moon-header');
    hdr.innerHTML =
      `<span class="moon-name">${hm.dev}</span>` +
      `<span class="moon-year-tag">${hm.iast} \u00b7 ${hm.en}${isNewYear ? ' \u00b7 \u0928\u0935 \u0935\u0930\u094d\u0937' : ''}</span>` +
      `<button class="info-btn" data-from="${utcDateStr(moon.startDate)}" data-label="${hm.en} \u00b7 ${hm.iast} \u00b7 VS\u00a0${vs}">ⓘ</button>` +
      `<span class="moon-greg-range">${fmtGreg(moon.startDate)} \u2013 ${fmtGreg(moon.endDate)}</span>`;
    sec.appendChild(hdr);

    const tbl = el('table', 'fairy-table');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    for (const [wi, wd] of getWeekdays().entries()) {
      const th = el('th', wi >= 5 ? 'weekend-col' : null, wdAbbr(tWeekday(wi)));
      th.dataset.short = wd.slice(0, 3);
      th.dataset.full  = tWeekday(wi);
      const _wd2 = tWeekday2(wi);
      if (_wd2) th.title = _wd2;
      thr.appendChild(th);
    }
    thead.appendChild(thr); tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr'), col = 0;
    const firstWd = moon.days[0].fairyWeekdayIndex;
    for (let j = 0; j < firstWd; j++) { row.appendChild(el('td', 'fairy-cell empty-cell')); col++; }

    for (const fd of moon.days) {
      if (col === 7) { tbody.appendChild(row); row = document.createElement('tr'); col = 0; }
      const td = el('td', 'fairy-cell');
      const fdDateStr = utcDateStr(fd.gregDate);
      if (fd.isToday) td.classList.add('is-today');
      if (fdDateStr === selectedDate) td.classList.add('is-selected');
      if (fd.fairyWeekdayIndex >= 5) td.classList.add('weekend-col');
      if (fd.solarEvent) td.classList.add('solar-cell');
      if (state.showHolidays && fd.holiday) td.classList.add('holiday-cell');
      td.dataset.date = fdDateStr;
      td.appendChild(el('span', 'fairy-daynum', String(fd.fairyDay)));
      if (fd.isToday) td.appendChild(el('span', 'today-label', t('today')));
      { const _sec = _secondaryStr(fd, 'hindu'); if (_sec) td.appendChild(el('span', 'fairy-greg-date', _sec)); }
      { const ib = el('button', 'info-btn today-info-btn'); ib.dataset.from = fdDateStr; ib.dataset.label = _dayLabel(fdDateStr, currentFY); ib.textContent = 'ⓘ'; if (!fd.isToday) ib.classList.add('day-info-btn'); td.appendChild(ib); }
      const ic = moonIcons(fd); if (ic) { const ig = el('span', 'icon-group'); ig.innerHTML = ic; td.appendChild(ig); }
      row.appendChild(td); col++;
    }
    while (col > 0 && col < 7) { row.appendChild(el('td', 'fairy-cell empty-cell')); col++; }
    if (col > 0) tbody.appendChild(row);
    tbl.appendChild(tbody); sec.appendChild(tbl); root.appendChild(sec);
  }
}

function renderWeek(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-week';
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-animal">${t('year_animal', tAnimal(fy.yearAnimal))}</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">${t('moons_badge')}</span>` : '');
  root.appendChild(yt);

  const allDays = fy.moons.flatMap(m => m.days);
  const tbl = el('table','week-table');
  const thead = document.createElement('thead');
  const thr = document.createElement('tr');
  for (const [wi, wd] of getWeekdays().entries()) {
    const th = el('th', wi>=5?'weekend-col':null, tWeekday(wi));
    th.dataset.short = wd.slice(0,3);
    th.dataset.full  = tWeekday(wi);
    thr.appendChild(th);
  }
  thead.appendChild(thr); tbl.appendChild(thead);

  const tbody = document.createElement('tbody');
  const firstWd = allDays[0]?.fairyWeekdayIndex ?? 0;
  let i = 0;
  while (i < allDays.length) {
    const row = document.createElement('tr');
    const wMoonName = allDays[i]?.fairyMonth||'';
    const wFromStr  = allDays[i]?.gregDate ? utcDateStr(allDays[i].gregDate) : '';
    let rowFirstNonEmpty = true;
    for (let c=0; c<7; c++) {
      const td = el('td','week-cell');
      if (c>=5) td.classList.add('weekend-col');
      if (i===0&&c<firstWd || i>=allDays.length) {
        td.classList.add('empty-cell');
      } else {
        const fd = allDays[i];
        if (rowFirstNonEmpty) {
          const infoBtn = el('button','info-btn week-cell-info');
          infoBtn.dataset.from = wFromStr; infoBtn.dataset.label = wMoonName;
          infoBtn.textContent = 'ⓘ';
          td.appendChild(infoBtn);
          rowFirstNonEmpty = false;
        }
        const fdDateStr = utcDateStr(fd.gregDate);
        if (fd.isToday) td.classList.add('is-today');
        if (fdDateStr === selectedDate) td.classList.add('is-selected');
        if (fd.fairyDay === 1) td.classList.add('new-moon-cell');
        if (fd.darkmoonPart) td.classList.add(`dp-${fd.darkmoonPart.toLowerCase()}`);
        if (state.showHolidays && fd.holiday) td.classList.add('holiday-cell');
        if (fd.solarEvent) td.classList.add('solar-cell');
        td.dataset.date = fdDateStr;
        const wfd = el('div','week-fairy-date',`${tMoonShort(fd.fairyMonth)} ${fd.fairyDay}`);
        wfd.dataset.short = `${tMoonShort(fd.fairyMonth).slice(0,3)} ${fd.fairyDay}`;
        td.appendChild(wfd);
        { const _sec = _secondaryStr(fd, state.calendarType); if (_sec) td.appendChild(el('div','week-greg-date', _sec)); }
        if (fd.isToday) td.appendChild(el('span','today-label', t('today')));
        { const ib=el('button','info-btn today-info-btn'); ib.dataset.from=fdDateStr; ib.dataset.label=_dayLabel(ib.dataset.from, currentFY); ib.textContent='ⓘ'; if(!fd.isToday) ib.classList.add('day-info-btn'); td.appendChild(ib); }
        const ic=moonIcons(fd); if(ic){const ig=el('span','icon-group');ig.innerHTML=ic;td.appendChild(ig);}
        i++;
      }
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  tbl.appendChild(tbody); root.appendChild(tbl);
}

// ─── Hebrew View ─────────────────────────────────────────────────

function renderHebrew(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-hebrew';

  const gregYear = fy.holYear - 10000;
  const hy = hebrewYearForGregYear(gregYear);
  const isLeap = _hLeap(hy);

  // Merge dayMaps from previous and current Gregorian year to cover the full Hebrew year
  const prevFY = buildFairyYear(fy.holYear - 1);
  const dayMap = new Map([...prevFY.dayMap, ...fy.dayMap]);

  const months = buildHebrewYear(hy);

  // Year title
  const yt = el('div', 'hebrew-year-label');
  yt.innerHTML = `<span class="hebrew-year-num">Hebrew Year ${hy}</span>`
    + (isLeap ? ` <span class="hebrew-leap-badge">${t('leap_year')}</span>` : '');

  // Sun–Sat weekday abbreviations (Hebrew week starts Sunday)
  const HEB_WDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Shab'];
  const grid = el('div', 'greg-grid');

  for (const month of months) {
    const mdata = HEBREW_MONTH_DATA[month.num];
    const mon = el('div', 'greg-month');

    // Month header
    const mhdr = el('div', 'greg-month-header');
    mhdr.innerHTML = `<span>${mdata.en}</span>`;
    mon.appendChild(mhdr);

    // Weekday header row
    const wr = el('div', 'greg-weekrow');
    HEB_WDAYS.forEach((wd, wi) => {
      const d = el('div', 'greg-wday', wd);
      if (wi === 6) d.classList.add('weekend-col');
      wr.appendChild(d);
    });
    mon.appendChild(wr);

    const dg = el('div', 'greg-days');
    // Hebrew week starts Sunday; getUTCDay() 0=Sun … 6=Sat
    const firstDow = month.gregStart.getUTCDay();
    for (let i = 0; i < firstDow; i++) dg.appendChild(el('div', 'greg-cell empty-cell'));

    for (let dayNum = 1; dayNum <= month.days; dayNum++) {
      const dayDate = new Date(month.gregStart.getTime() + (dayNum - 1) * 86400000);
      const ds = utcDateStr(dayDate);
      const fd = dayMap.get(ds);
      const dow = dayDate.getUTCDay();  // 0=Sun, 6=Sat

      const cell = el('div', 'greg-cell' + (fd?.isToday ? ' is-today' : '') + (dow === 6 ? ' hebrew-shabbat' : ''));
      if (ds === selectedDate) cell.classList.add('is-selected');
      if (fd?.solarEvent) cell.classList.add('solar-cell');
      cell.dataset.date = ds;

      cell.appendChild(el('span', 'greg-daynum', String(dayNum)));
      if (fd?.isToday) cell.appendChild(el('span', 'today-label', t('today')));
      { const _fdHeb = fd || { gregDate: dayDate, fairyMonth: '', fairyDay: 0 };
        const _sec = _secondaryStr(_fdHeb, 'hebrew');
        if (_sec) cell.appendChild(el('span', 'fairy-label', _sec)); }
      if (fd) {
        const ib = el('button', 'info-btn today-info-btn');
        ib.dataset.from = ds;
        ib.dataset.label = _dayLabel(ds, currentFY);
        ib.textContent = 'ⓘ';
        if (!fd.isToday) ib.classList.add('day-info-btn');
        cell.appendChild(ib);
        const ic = moonIcons(fd);
        if (ic) { const ig = el('span', 'icon-group'); ig.innerHTML = ic; cell.appendChild(ig); }
      }
      dg.appendChild(cell);
    }
    mon.appendChild(dg);
    grid.appendChild(mon);
  }
  root.appendChild(yt);
  root.appendChild(grid);
}

// ─── Sky View ────────────────────────────────────────────────────────

let _skyViewDate = null;  // current date for sky view (YYYY-MM-DD string)
let _skyRootClickController = null;

function renderSky(resetZoom = false) {
  const root = document.getElementById('calendar-root');
  root.className = 'view-sky';
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  const skyDate = new Date(_skyViewDate + 'T00:00:00Z');

  // Compute sky data
  const isPlaying = document.body.classList.contains('sky-playing');
  const catalogData = (typeof getVisibleCatalogStars === 'function') ? getVisibleCatalogStars(skyDate, { skipTier2: isPlaying }) : null;
  const constellations = catalogData ? catalogData.constellations : [];
  const visPlans = getVisiblePlanets(skyDate);
  const planetPositions = getPlanetAltAz(skyDate);
  const phase = moonPhaseInfo(skyDate);
  const moonIllum = Math.round(phase.illum * 100);
  const sunset   = sunsetTime(skyDate);
  const twilight = astroTwilightEnd(skyDate);
  const mrise    = moonriseTime(skyDate);
  const mset     = moonsetTime(skyDate);
  const tomorrow = new Date(skyDate.getTime() + 86400000);
  const sunrise  = sunriseTime(tomorrow);

  // Info bar — two groups for stable two-line layout on mobile
  const sunParts = [];
  if (sunset)   sunParts.push(`☀↓${sunset}`);
  if (twilight) sunParts.push(`✦${twilight}`);
  if (sunrise)  sunParts.push(`☀↑${sunrise}`);
  const moonParts = [];
  if (mrise)    moonParts.push(`🌙↑${mrise}`);
  if (mset)     moonParts.push(`🌙↓${mset}`);
  moonParts.push(`${moonIllum}%`);

  // Planet list + constellation list — always rendered at fixed height to prevent layout jump
  const _cMap = { pawnee: SKIDI_PAWNEE, hindu: HINDU_SKY }[state.skyCulture] || null;
  const _planetLabels = { pawnee: { Venus: 'Evening Star' }, hindu: HINDU_PLANET_NAMES }[state.skyCulture] || {};
  const planetInfo = `<div class="sky-view-planets">${visPlans.length > 0 ? visPlans.map(p => {
    const label = _planetLabels[p.name] || p.name;
    return `${PLANET_SYMBOLS[p.name]} ${label} (${p.elong}°)`;
  }).join(' · ') : ''}</div>`;
  const _visConstellations = _cMap ? constellations.filter(c => _cMap[c.name]) : constellations;
  const conList = `<div class="sky-view-constellations">${_visConstellations.length > 0 ? _visConstellations.map(c => {
    const label = _cMap?.[c.name]?.name || c.name;
    return `<span class="sky-view-con" data-cname="${c.name}">${label}</span>`;
  }).join(' · ') : ''}</div>`;

  // Moon position + phase (omit if user toggled moon off)
  const moonPos = getMoonAltAz(skyDate);
  const moonChart = (moonPos && state.skyShowMoon) ? { alt: moonPos.alt, az: moonPos.az, illum: phase.illum, waxing: phase.waxing } : null;

  // Build the chart SVG
  const chartHTML = catalogData
    ? renderSkyChart(catalogData, planetPositions, 180, moonChart)
    : '';

  // Back button in toolbar header
  const oldBack = document.getElementById('sky-back-btn');
  if (oldBack) oldBack.remove();
  if (_skyReturnState) {
    const backBtn = document.createElement('button');
    backBtn.className = 'btn sky-back-btn';
    backBtn.id = 'sky-back-btn';
    backBtn.textContent = '← Back';
    document.getElementById('toolbar-top').prepend(backBtn);
  }

  root.innerHTML =
    `<div class="sky-view${_skyLabelsOn ? '' : ' sky-labels-hidden'}">` +
      `<div class="sky-view-info"><span class="sky-info-sun">${sunParts.join(' · ')}</span><span class="sky-info-moon">${moonParts.join(' · ')}</span></div>` +
      planetInfo +
      conList +
      `<div class="sky-view-chart">${chartHTML}</div>` +
    `</div>`;

  // Attach zoom — skip during play (no interaction possible, saves AbortController churn)
  if (resetZoom) _resetSkyZoom();
  const svgEl = root.querySelector('.sky-chart-svg');
  if (svgEl) {
    if (!isPlaying) _attachSkyZoom(svgEl);
    _applySkyZoom(svgEl);
    if (!_skyLabelsOn) svgEl.classList.add('sky-labels-off');
  }

  // Back button → return to previous calendar view
  const backEl = document.getElementById('sky-back-btn');
  if (backEl) {
    backEl.addEventListener('click', () => {
      const ret = _skyReturnState;
      _skyReturnState = null;
      backEl.remove();
      selectedDate = ret.selectedDate;
      scrollToSelectedAfterRender = true;
      state.mode = ret.mode;
      state.calendarType = ret.calendarType;
      state.calendarSpan = ret.calendarSpan;
      refresh();
    });
  }

  // Constellation label click → detail modal
  root.querySelectorAll('.sky-view-con').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof showConstellationDetailStandalone === 'function') {
        showConstellationDetailStandalone(el.dataset.cname);
      }
    });
  });

  // Delegated clicks inside the chart SVG (abort previous to avoid accumulation)
  if (_skyRootClickController) _skyRootClickController.abort();
  _skyRootClickController = new AbortController();
  root.addEventListener('click', e => {
    const dir = e.target.closest('.sky-dir-label');
    if (dir && _skyChartState) {
      const rotDeg = parseInt(dir.dataset.az);
      const wrap = dir.closest('.sky-chart-wrap');
      if (wrap) {
        const { catalogData: cd, planets, moonData } = _skyChartState;
        _resetSkyZoom();
        wrap.outerHTML = renderSkyChart(cd, planets, rotDeg, moonData);
        const newSvg = root.querySelector('.sky-chart-svg');
        if (newSvg) _attachSkyZoom(newSvg);
      }
    }
    const lbl = e.target.closest
      ? e.target.closest('.sky-const-label')
      : (e.target.classList && e.target.classList.contains('sky-const-label') ? e.target : null);
    if (lbl && typeof showConstellationDetailStandalone === 'function') {
      showConstellationDetailStandalone(lbl.dataset.cname);
    }
  }, { signal: _skyRootClickController.signal });
}

function render(holYear, viewMode) {
  const root = document.getElementById('calendar-root');

  // Sky view doesn't need the fairy year — render immediately
  if (viewMode === 'sky') { renderSky(true); return; }

  root.innerHTML = '<div class="loading">Calculating calendar…</div>';
  setTimeout(() => {
    try {
      const fy = buildFairyYear(holYear);
      currentFY = fy;
      if (state.theme === 'animal') {
        const wp = ANIMAL_PATTERNS[fy.yearAnimal] || PATTERNS.animal;
        document.documentElement.style.setProperty('--pattern-bg-header', wp);
        document.documentElement.style.setProperty('--pattern-bg', animalPatternDark(wp));
        document.documentElement.style.setProperty('--pattern-bg-size', '120px 120px');
      }
      if      (viewMode==='greg')   renderGreg(fy);
      else if (viewMode==='fairy')  renderFairy(fy);
      else if (viewMode==='week')   renderWeek(fy);
      else if (viewMode==='hebrew')   renderHebrew(fy);
      else if (viewMode==='cherokee') renderCherokee(fy);
      else if (viewMode==='iroquois') renderIroquois(fy);
      else if (viewMode==='hindu')    renderHindu(fy);
      if (scrollToTodayAfterRender) {
        scrollToTodayAfterRender = false;
        requestAnimationFrame(() => {
          const todayEl = document.querySelector('.is-today');
          if (todayEl) {
            const monthBlock = todayEl.closest('.fairy-moon, .greg-month, .hebrew-month');
            if (monthBlock) {
              monthBlock.scrollIntoView({behavior:'smooth', block:'start'});
            } else {
              (todayEl.closest('tr') || todayEl).scrollIntoView({behavior:'smooth', block:'center'});
            }
            todayEl.classList.remove('shine');
            void todayEl.offsetWidth;
            setTimeout(() => { todayEl.classList.add('shine'); }, 400);
          }
        });
      }
      if (scrollToSelectedAfterRender && selectedDate) {
        scrollToSelectedAfterRender = false;
        requestAnimationFrame(() => {
          const el = document.querySelector('.is-selected');
          if (el) {
            el.scrollIntoView({behavior:'smooth', block:'center'});
            el.classList.remove('shine');
            void el.offsetWidth;
            setTimeout(() => { el.classList.add('shine'); }, 400);
          }
        });
      }
      if (restoreScrollFracAfterRender !== null) {
        const frac = restoreScrollFracAfterRender; restoreScrollFracAfterRender = null;
        requestAnimationFrame(() => {
          window.scrollTo(0, frac * Math.max(0, document.documentElement.scrollHeight - window.innerHeight));
        });
      }
    } catch(err) {
      root.innerHTML = `<div class="error">Error: ${err.message}</div>`;
      console.error(err);
    }
  }, 10);
}
