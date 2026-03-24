// ═══ Fairy Calendar — render.js ═══

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
  if (fd.moonPhase)  { const p=PHASE_LABELS[fd.moonPhase];  h+=`<span class="icon" title="${p.label}">${p.icon}</span>`; }
  if (fd.solarEvent) { const s=SOLAR_LABELS[fd.solarEvent]; h+=`<span class="icon" title="${s.label}">${s.icon}</span>`; }
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
  return `${GREG_MONTH_NAMES[date.getUTCMonth()].slice(0,3)} ${date.getUTCDate()}`;
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function renderGreg(fy) {
  const root = document.getElementById('calendar-root');
  root.className = 'view-greg' + (state.showOtherDate ? '' : ' hide-other-date');
  const prevFY = buildFairyYear(fy.holYear - 1);
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-number">${fy.gregYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons · Bluemoon Year</span>` : '');
  const grid = el('div','greg-grid');
  for (let m = 0; m < 12; m++) {
    const lastDay = new Date(Date.UTC(fy.gregYear, m+1, 0));
    const mon = el('div','greg-month');
    const mhdr = el('div','greg-month-header');
    const mFromStr = `${fy.gregYear}-${String(m+1).padStart(2,'0')}-01`;
    const plantIcon = state.theme === 'flower' ? getGregMonthPlantSVG(m) : '';
    mhdr.innerHTML = plantIcon + `<span>${GREG_MONTH_NAMES[m]}</span><button class="info-btn" data-from="${mFromStr}" data-label="${GREG_MONTH_NAMES[m]} ${fy.gregYear}">ⓘ</button>`;
    mon.appendChild(mhdr);
    const wr = el('div','greg-weekrow');
    for (const wd of getWeekdays()) wr.appendChild(el('div','greg-wday', wd.slice(0,3)));
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
      if (fd?.isToday) cell.appendChild(el('span','today-label','Today'));
      if (fd) {
        const fl = el('span','fairy-label', `${fd.fairyMonth.slice(0,3)} ${fd.fairyDay}`);
        if (fd.darkmoonPart) { fl.classList.add('darkmoon-label'); fl.title=`Darkmoon · ${fd.darkmoonPart}`; }
        cell.appendChild(fl);
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
  root.className = 'view-fairy' + (state.showOtherDate ? '' : ' hide-other-date');
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons · Bluemoon Year</span>` : '');
  root.appendChild(yt);

  for (const moon of fy.moons) {
    const sec = el('section','fairy-moon');
    if (moon.name==='Darkmoon') sec.classList.add('moon-darkmoon');
    if (moon.name==='Bluemoon') sec.classList.add('moon-bluemoon');

    const hdr = el('div','fairy-moon-header');
    const plantIcon = state.theme === 'flower' ? getMoonPlantSVG(moon.name) : '';
    hdr.innerHTML = plantIcon
      + `<span class="moon-name">${moon.name}</span>`
      + `<button class="info-btn" data-from="${utcDateStr(moon.startDate)}" data-label="${moon.name} · ${fy.yearAnimal} Year ${fy.holYear}">ⓘ</button>`
      + `<span class="moon-year-tag">${fy.yearAnimal} Year ${fy.holYear}</span>`
      + `<span class="moon-greg-range">${fmtGreg(moon.startDate)} – ${fmtGreg(moon.endDate)}</span>`;
    sec.appendChild(hdr);

    if (moon.name==='Darkmoon') {
      const leg = el('div','darkmoon-legend');
      for (const part of ['Robin','Rabbit','Turkey','Bear','Fox']) {
        const b = el('span',`dp-badge dp-${part.toLowerCase()}`, part);
        if (part===fy.yearAnimal) b.classList.add('dp-active');
        leg.appendChild(b);
      }
      sec.appendChild(leg);
    }

    const tbl = el('table','fairy-table');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    for (const [wi, wd] of getWeekdays().entries()) {
      const th = el('th', wi>=5?'weekend-col':null, wd.slice(0,3));
      th.dataset.short = wd.slice(0,3);
      thr.appendChild(th);
    }
    thead.appendChild(thr); tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr'), col=0;
    const firstWd = moon.days[0].fairyWeekdayIndex;
    for (let i=0;i<firstWd;i++) { const ec=el('td','fairy-cell empty-cell'); if(state.theme==='fairy'&&i===0) ec.innerHTML=getFairyMoonSVG(moon.name); row.appendChild(ec); col++; }

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
      if (fd.isToday) td.appendChild(el('span','today-label','Today'));
      td.appendChild(el('span','fairy-greg-date', fmtGreg(fd.gregDate)));
      { const ib=el('button','info-btn today-info-btn'); ib.dataset.from=fdDateStr; ib.dataset.label=_dayLabel(ib.dataset.from, currentFY); ib.textContent='ⓘ'; if(!fd.isToday) ib.classList.add('day-info-btn'); td.appendChild(ib); }
      const ic=moonIcons(fd); if(ic){const ig=el('span','icon-group');ig.innerHTML=ic;td.appendChild(ig);}
      row.appendChild(td); col++;
    }
    const trailingCells=[];
    while(col>0&&col<7){const ec=el('td','fairy-cell empty-cell');trailingCells.push(ec);row.appendChild(ec);col++;}
    if(state.theme==='fairy'&&firstWd===0&&trailingCells.length>0) trailingCells[trailingCells.length-1].innerHTML=getFairyMoonSVG(moon.name);
    if(col>0) tbody.appendChild(row);
    tbl.appendChild(tbody); sec.appendChild(tbl); root.appendChild(sec);
  }
}

function renderWeek(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-week' + (state.showOtherDate ? '' : ' hide-other-date');
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons</span>` : '');
  root.appendChild(yt);

  const allDays = fy.moons.flatMap(m => m.days);
  const tbl = el('table','week-table');
  const thead = document.createElement('thead');
  const thr = document.createElement('tr');
  for (const [wi, wd] of getWeekdays().entries()) {
    const th = el('th', wi>=5?'weekend-col':null, wd);
    th.dataset.short = wd.slice(0,3);
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
        const wfd = el('div','week-fairy-date',`${fd.fairyMonth.replace(/moon$/i,'')} ${fd.fairyDay}`);
        wfd.dataset.short = `${fd.fairyMonth.slice(0,3)} ${fd.fairyDay}`;
        td.appendChild(wfd);
        td.appendChild(el('div','week-greg-date', fmtGreg(fd.gregDate)));
        if (fd.isToday) td.appendChild(el('span','today-label','Today'));
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

// ─── Sky View ────────────────────────────────────────────────────────

let _skyViewDate = null;  // current date for sky view (YYYY-MM-DD string)

function renderSky() {
  const root = document.getElementById('calendar-root');
  root.className = 'view-sky';
  if (!_skyViewDate) _skyViewDate = localTodayStr();
  const skyDate = new Date(_skyViewDate + 'T00:00:00Z');

  // Compute sky data
  const catalogData = (typeof getVisibleCatalogStars === 'function') ? getVisibleCatalogStars(skyDate) : null;
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

  // Info bar
  const infoParts = [];
  if (sunset)   infoParts.push(`☀↓${sunset}`);
  if (twilight) infoParts.push(`✦${twilight}`);
  if (mrise)    infoParts.push(`🌙↑${mrise}`);
  if (mset)     infoParts.push(`🌙↓${mset}`);
  infoParts.push(`${moonIllum}%`);
  if (sunrise)  infoParts.push(`☀↑${sunrise}`);

  // Planet list
  const planetInfo = visPlans.length > 0
    ? `<div class="sky-view-planets">${visPlans.map(p => `${PLANET_SYMBOLS[p.name]} ${p.name} (${p.elong}°)`).join(' · ')}</div>`
    : '';

  // Constellation list
  const conList = constellations.length > 0
    ? `<div class="sky-view-constellations">${constellations.map(c => `<span class="sky-view-con" data-cname="${c.name}">${c.name}</span>`).join(' · ')}</div>`
    : '';

  // Moon position + phase
  const moonPos = getMoonAltAz(skyDate);
  const moonChart = moonPos ? { alt: moonPos.alt, az: moonPos.az, illum: phase.illum, waxing: phase.waxing } : null;

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
    `<div class="sky-view">` +
      `<div class="sky-view-info">${infoParts.join(' · ')}</div>` +
      planetInfo +
      conList +
      `<div class="sky-view-chart">${chartHTML}</div>` +
      `<div class="sky-view-hint">Scroll to zoom · Drag to pan · Double-click to reset</div>` +
    `</div>`;

  // Attach zoom
  _resetSkyZoom();
  const svgEl = root.querySelector('.sky-chart-svg');
  if (svgEl) _attachSkyZoom(svgEl);

  // Back button → return to previous calendar view
  const backEl = document.getElementById('sky-back-btn');
  if (backEl) {
    backEl.addEventListener('click', () => {
      const ret = _skyReturnState;
      _skyReturnState = null;
      backEl.remove();
      selectedDate = ret.selectedDate;
      scrollToSelectedAfterRender = true;
      state.viewMode = ret.view;
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

  // Delegated clicks inside the chart SVG
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
    const lbl = e.target.closest('.sky-const-label');
    if (lbl && typeof showConstellationDetailStandalone === 'function') {
      showConstellationDetailStandalone(lbl.dataset.cname);
    }
  });
}

function render(holYear, viewMode) {
  const root = document.getElementById('calendar-root');

  // Sky view doesn't need the fairy year — render immediately
  if (viewMode === 'sky') { renderSky(); return; }

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
      if      (viewMode==='greg')  renderGreg(fy);
      else if (viewMode==='fairy') renderFairy(fy);
      else if (viewMode==='week')  renderWeek(fy);
      if (scrollToTodayAfterRender) {
        scrollToTodayAfterRender = false;
        requestAnimationFrame(() => {
          const todayEl = document.querySelector('.is-today');
          if (todayEl) {
            todayEl.scrollIntoView({behavior:'smooth', block:'center'});
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
