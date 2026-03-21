/**
 * render.js — DOM rendering for Greg, Fairy, and Week view modes.
 */

import { buildFairyYear, FAIRY_WEEKDAYS } from './calendar.js';
import { utcDateStr } from './astro.js';

const GREG_MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const GREG_WEEKDAY_ABBR = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const SOLAR_LABELS = {
  springEquinox:  { icon: '🌱', label: 'Spring Equinox' },
  summerSolstice: { icon: '☀', label: 'Summer Solstice' },
  autumnEquinox:  { icon: '🍂', label: 'Autumn Equinox' },
  winterSolstice: { icon: '❄', label: 'Winter Solstice' },
};

const PHASE_LABELS = {
  new:   { icon: '🌑', label: 'New Moon' },
  first: { icon: '🌓', label: 'First Quarter' },
  full:  { icon: '🌕', label: 'Full Moon' },
  last:  { icon: '🌗', label: 'Last Quarter' },
};

const DARKMOON_COLORS = {
  Robin:  'var(--dp-robin)',
  Rabbit: 'var(--dp-rabbit)',
  Turkey: 'var(--dp-turkey)',
  Bear:   'var(--dp-bear)',
  Fox:    'var(--dp-fox)',
};

function moonIcons(fairyDay) {
  let html = '';
  if (fairyDay.moonPhase) {
    const p = PHASE_LABELS[fairyDay.moonPhase];
    html += `<span class="icon phase-icon" title="${p.label}">${p.icon}</span>`;
  }
  if (fairyDay.solarEvent) {
    const s = SOLAR_LABELS[fairyDay.solarEvent];
    html += `<span class="icon solar-icon" title="${s.label}">${s.icon}</span>`;
  }
  return html;
}

function formatGregDate(date) {
  return `${GREG_MONTH_NAMES[date.getUTCMonth()].slice(0,3)} ${date.getUTCDate()}`;
}

// ─── Greg Mode ────────────────────────────────────────────────────────────────

function renderGreg(fy) {
  const root = document.getElementById('calendar-root');
  root.className = 'view-greg';

  const frag = document.createDocumentFragment();
  const grid = document.createElement('div');
  grid.className = 'greg-grid';

  for (let month = 0; month < 12; month++) {
    const firstDay = new Date(Date.UTC(fy.gregYear, month, 1));
    const lastDay  = new Date(Date.UTC(fy.gregYear, month + 1, 0));

    const table = document.createElement('div');
    table.className = 'greg-month';

    const header = document.createElement('div');
    header.className = 'greg-month-header';
    header.textContent = GREG_MONTH_NAMES[month];
    table.appendChild(header);

    const weekRow = document.createElement('div');
    weekRow.className = 'greg-weekrow';
    for (const abbr of GREG_WEEKDAY_ABBR) {
      const th = document.createElement('div');
      th.className = 'greg-wday';
      th.textContent = abbr;
      weekRow.appendChild(th);
    }
    table.appendChild(weekRow);

    const daysGrid = document.createElement('div');
    daysGrid.className = 'greg-days';

    // Pad start
    const startDow = firstDay.getUTCDay(); // 0=Sun
    for (let i = 0; i < startDow; i++) {
      const empty = document.createElement('div');
      empty.className = 'greg-cell empty-cell';
      daysGrid.appendChild(empty);
    }

    for (let d = 1; d <= lastDay.getUTCDate(); d++) {
      const dateStr = `${fy.gregYear}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const fd = fy.dayMap.get(dateStr);

      const cell = document.createElement('div');
      cell.className = 'greg-cell' + (fd?.isToday ? ' is-today' : '');

      const gregNum = document.createElement('span');
      gregNum.className = 'greg-daynum';
      gregNum.textContent = d;
      cell.appendChild(gregNum);

      if (fd) {
        const fairyLabel = document.createElement('span');
        fairyLabel.className = 'fairy-label';
        fairyLabel.textContent = `${fd.fairyMonth} ${fd.fairyDay}`;
        if (fd.darkmoonPart) {
          fairyLabel.classList.add('darkmoon-label');
          fairyLabel.style.setProperty('--dp-color', DARKMOON_COLORS[fd.darkmoonPart]);
          fairyLabel.title = `Darkmoon · ${fd.darkmoonPart}`;
        }
        cell.appendChild(fairyLabel);

        const icons = moonIcons(fd);
        if (icons) {
          const iconSpan = document.createElement('span');
          iconSpan.className = 'icon-group';
          iconSpan.innerHTML = icons;
          cell.appendChild(iconSpan);
        }
      }

      daysGrid.appendChild(cell);
    }

    table.appendChild(daysGrid);
    grid.appendChild(table);
  }

  frag.appendChild(grid);
  root.innerHTML = '';
  root.appendChild(frag);
}

// ─── Fairy Mode ───────────────────────────────────────────────────────────────

function renderFairy(fy) {
  const root = document.getElementById('calendar-root');
  root.className = 'view-fairy';

  const yearLabel = document.createElement('div');
  yearLabel.className = 'fairy-year-title';
  yearLabel.innerHTML = `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>` +
    (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons · Bluemoon Year</span>` : '');
  root.appendChild(yearLabel);

  for (const moon of fy.moons) {
    const section = document.createElement('section');
    section.className = 'fairy-moon';
    if (moon.name === 'Darkmoon') section.classList.add('moon-darkmoon');
    if (moon.name === 'Bluemoon') section.classList.add('moon-bluemoon');

    // Section header
    const header = document.createElement('div');
    header.className = 'fairy-moon-header';
    const gregRange = `${formatGregDate(moon.startDate)} – ${formatGregDate(moon.endDate)}`;
    header.innerHTML =
      `<span class="moon-name">${moon.name}</span>` +
      `<span class="moon-year-tag">${fy.yearAnimal} Year ${fy.holYear}</span>` +
      `<span class="moon-greg-range">${gregRange}</span>`;
    section.appendChild(header);

    // Darkmoon part bands legend
    if (moon.name === 'Darkmoon') {
      const legend = document.createElement('div');
      legend.className = 'darkmoon-legend';
      for (const part of ['Robin','Rabbit','Turkey','Bear','Fox']) {
        const span = document.createElement('span');
        span.className = `dp-badge dp-${part.toLowerCase()}`;
        span.textContent = part;
        if (part === fy.yearAnimal) span.classList.add('dp-active');
        legend.appendChild(span);
      }
      section.appendChild(legend);
    }

    // Days table
    const table = document.createElement('table');
    table.className = 'fairy-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    for (const wd of FAIRY_WEEKDAYS) {
      const th = document.createElement('th');
      th.textContent = wd;
      const isWeekend = wd === 'Moonday' || wd === 'Sunday';
      if (isWeekend) th.classList.add('weekend-col');
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr');
    let col = 0;

    // Pad to first day's weekday position
    const firstWdIdx = moon.days[0].fairyWeekdayIndex;
    for (let i = 0; i < firstWdIdx; i++) {
      const td = document.createElement('td');
      td.className = 'fairy-cell empty-cell';
      row.appendChild(td);
      col++;
    }

    for (const fd of moon.days) {
      if (col === 7) {
        tbody.appendChild(row);
        row = document.createElement('tr');
        col = 0;
      }

      const td = document.createElement('td');
      td.className = 'fairy-cell';
      if (fd.isToday) td.classList.add('is-today');
      const isWeekend = fd.fairyWeekdayIndex >= 5;
      if (isWeekend) td.classList.add('weekend-col');
      if (fd.darkmoonPart) {
        td.classList.add(`dp-${fd.darkmoonPart.toLowerCase()}`);
      }

      const dayNum = document.createElement('span');
      dayNum.className = 'fairy-daynum';
      dayNum.textContent = fd.fairyDay;
      td.appendChild(dayNum);

      const gregLbl = document.createElement('span');
      gregLbl.className = 'fairy-greg-date';
      gregLbl.textContent = formatGregDate(fd.gregDate);
      td.appendChild(gregLbl);

      const icons = moonIcons(fd);
      if (icons) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'icon-group';
        iconSpan.innerHTML = icons;
        td.appendChild(iconSpan);
      }

      row.appendChild(td);
      col++;
    }

    // Fill remaining cells in last row
    while (col > 0 && col < 7) {
      const td = document.createElement('td');
      td.className = 'fairy-cell empty-cell';
      row.appendChild(td);
      col++;
    }
    if (col > 0) tbody.appendChild(row);

    table.appendChild(tbody);
    section.appendChild(table);
    root.appendChild(section);
  }
}

// ─── Week Mode ────────────────────────────────────────────────────────────────

function renderWeek(fy) {
  const root = document.getElementById('calendar-root');
  root.className = 'view-week';

  const yearLabel = document.createElement('div');
  yearLabel.className = 'fairy-year-title';
  yearLabel.innerHTML = `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>` +
    (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons</span>` : '');
  root.appendChild(yearLabel);

  // Collect all days
  const allDays = [];
  for (const moon of fy.moons) {
    for (const fd of moon.days) allDays.push(fd);
  }

  const table = document.createElement('table');
  table.className = 'week-table';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const moonTh = document.createElement('th');
  moonTh.className = 'week-moon-col';
  moonTh.textContent = 'Moon';
  headerRow.appendChild(moonTh);
  for (const wd of FAIRY_WEEKDAYS) {
    const th = document.createElement('th');
    th.textContent = wd;
    if (wd === 'Moonday' || wd === 'Sunday') th.classList.add('weekend-col');
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  // Collect all days and pad to first weekday column
  const firstDayWd = allDays[0]?.fairyWeekdayIndex ?? 0;
  let i = 0;

  while (i < allDays.length) {
    const row = document.createElement('tr');

    // Left moon label cell
    const moonCell = document.createElement('td');
    moonCell.className = 'week-moon-col';
    moonCell.textContent = allDays[i]?.fairyMonth || '';
    row.appendChild(moonCell);

    for (let c = 0; c < 7; c++) {
      const td = document.createElement('td');
      td.className = 'week-cell';
      if (c >= 5) td.classList.add('weekend-col');

      const isPadStart = (i === 0 && c < firstDayWd);
      const isExhausted = (i >= allDays.length);

      if (isPadStart || isExhausted) {
        td.classList.add('empty-cell');
      } else {
        const fd = allDays[i];
        if (fd.isToday) td.classList.add('is-today');
        if (fd.darkmoonPart) td.classList.add(`dp-${fd.darkmoonPart.toLowerCase()}`);

        const fairyDate = document.createElement('div');
        fairyDate.className = 'week-fairy-date';
        fairyDate.textContent = `${fd.fairyMonth} ${fd.fairyDay}`;
        td.appendChild(fairyDate);

        const gregDate = document.createElement('div');
        gregDate.className = 'week-greg-date';
        gregDate.textContent = formatGregDate(fd.gregDate);
        td.appendChild(gregDate);

        const icons = moonIcons(fd);
        if (icons) {
          const iconSpan = document.createElement('span');
          iconSpan.className = 'icon-group';
          iconSpan.innerHTML = icons;
          td.appendChild(iconSpan);
        }

        i++;
      }

      row.appendChild(td);
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  root.appendChild(table);
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function render(holYear, viewMode) {
  const root = document.getElementById('calendar-root');

  // Show loading state
  root.innerHTML = '<div class="loading">Calculating calendar…</div>';

  // Use setTimeout to allow the loading state to paint
  setTimeout(() => {
    try {
      const fy = buildFairyYear(holYear);
      if (viewMode === 'greg') renderGreg(fy);
      else if (viewMode === 'fairy') renderFairy(fy);
      else if (viewMode === 'week') renderWeek(fy);
    } catch (err) {
      root.innerHTML = `<div class="error">Error rendering calendar: ${err.message}</div>`;
      console.error(err);
    }
  }, 10);
}
