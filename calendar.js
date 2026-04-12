// ═══ Fairy Calendar — calendar.js ═══

const KIND = {
  PHASE:          'phase',
  SOLAR:          'solar',
  PERIGEE:        'perigee',
  APOGEE:         'apogee',
  LUNAR_ECLIPSE:  'lunarEclipse',
  SOLAR_ECLIPSE:  'solarEclipse',
  OPPOSITION:     'opposition',
  ELONGATION:     'greatElongation',
  MOON_CONJ:      'moonConj',
  PLANET_CONJ:    'planetConj',
  METEOR:         'meteorShower',
  BIRTHDAY:       'birthday',
  HOLIDAY:        'holiday',
  COMET:          'cometStart',
};

const JS_TO_FAIRY_WEEKDAY = [6, 0, 1, 2, 3, 4, 5]; // Sun→6, Mon→0, Tue→1, Wed→2, Thu→3, Fri→4, Sat→5
const FAIRY_WEEKDAYS = ['Heimday','Tyrsday','Wodensday','Thorsday','Freyasday','Moonday','Sunday'];
const STD_WEEKDAYS   = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
function getWeekdays() { return state.weekNames === 'std' ? STD_WEEKDAYS : FAIRY_WEEKDAYS; }
const MOON_NAMES = ['Snowmoon','Wakingmoon','Seedmoon','Bloommoon','Flowermoon',
                    'Berrymoon','Summermoon','Harvestmoon','Gathermoon','Leafmoon','Frostmoon','Darkmoon'];

function getDarkmoonPart(dayNum) {
  if (dayNum >= 25) return 'Fox';
  if (dayNum >= 19) return 'Bear';
  if (dayNum >= 13) return 'Turkey';
  if (dayNum >= 7)  return 'Rabbit';
  return 'Robin';
}

function lastNewMoonBefore(newMoons, target) {
  let idx = -1;
  for (let i = 0; i < newMoons.length; i++) {
    if (newMoons[i] < target) idx = i; else break;
  }
  return idx;
}

function findDarkmoon(gregYear, allNewMoons, solstices) {
  const ws = solstices.winterSol;
  const idx = lastNewMoonBefore(allNewMoons, ws);
  if (idx < 0) throw new Error(`No new moon before winter solstice ${gregYear}`);
  const darkmoonStart = allNewMoons[idx];
  const dayOfSolstice = daysBetween(darkmoonStart, ws) + 1;
  return { darkmoonStart, dayOfSolstice, hasBluemoon: dayOfSolstice >= 19, winterSolstice: ws };
}

const yearCache = new Map();

function buildFairyYear(holYear) {
  if (yearCache.has(holYear)) return yearCache.get(holYear);
  const result = _buildFairyYear(holYear);
  yearCache.set(holYear, result);
  return result;
}

function _buildFairyYear(holYear) {
  const gregYear = holYear - 10000;

  // Collect new moons across 3-year window, deduplicated
  const seen = new Set();
  const allNewMoons = [
    ...getNewMoons(gregYear-1), ...getNewMoons(gregYear), ...getNewMoons(gregYear+1)
  ].filter(d => { const s=utcDateStr(d); if(seen.has(s)) return false; seen.add(s); return true; })
   .sort((a,b) => a-b);

  // All phases for day annotations
  const phaseMap = new Map();
  for (const {date,phase} of [...getMoonPhases(gregYear-1),...getMoonPhases(gregYear),...getMoonPhases(gregYear+1)]) {
    const s = utcDateStr(date);
    if (!phaseMap.has(s)) phaseMap.set(s, phase);
  }

  // Solstices / equinoxes
  const solThis = getSolsticesEquinoxes(gregYear);
  const solPrev = getSolsticesEquinoxes(gregYear-1);
  const solNext = getSolsticesEquinoxes(gregYear+1);

  const solarMap = new Map();
  const addSolar = (d,n) => { if(d) solarMap.set(utcDateStr(d),n); };
  addSolar(solThis.springEq,'springEquinox'); addSolar(solThis.summerSol,'summerSolstice');
  addSolar(solThis.autumnEq,'autumnEquinox'); addSolar(solThis.winterSol,'winterSolstice');
  addSolar(solPrev.winterSol,'winterSolstice'); addSolar(solNext.winterSol,'winterSolstice');
  addSolar(solNext.springEq,'springEquinox'); addSolar(solNext.summerSol,'summerSolstice'); addSolar(solNext.autumnEq,'autumnEquinox');

  // Birthdays — keyed by "MM-DD"
  const birthdayMap = new Map();
  const allBirthdays = runtimeBirthdays;
  for (const b of allBirthdays) {
    const key = `${String(b.month).padStart(2,'0')}-${String(b.day).padStart(2,'0')}`;
    if (!birthdayMap.has(key)) birthdayMap.set(key, []);
    birthdayMap.get(key).push(b);
  }

  // Holidays — keyed by "YYYY-MM-DD"
  const holidayMap = new Map();
  const _addHolEntry = (h, year) => {
    const ds = h.day
      ? `${year}-${String(h.month).padStart(2,'0')}-${String(h.day).padStart(2,'0')}`
      : utcDateStr(_resolveHolidayRule(h.rule, year));
    if (!holidayMap.has(ds)) holidayMap.set(ds, []);
    holidayMap.get(ds).push(h);
  };
  if (typeof HOLIDAY_PACKS !== 'undefined') {
    for (const packKey of [state.holidayPack1, state.holidayPack2]) {
      if (!packKey) continue;
      const pack = HOLIDAY_PACKS[packKey];
      if (!pack) continue;
      if (pack.computeMap) {
        for (const [ds, holidays] of pack.computeMap(gregYear)) {
          if (!holidayMap.has(ds)) holidayMap.set(ds, []);
          holidayMap.get(ds).push(...holidays);
        }
      } else if (pack.entries) {
        for (const h of pack.entries) _addHolEntry(h, gregYear);
      }
    }
  } else if (typeof US_HOLIDAYS !== 'undefined') {
    // Fallback if holiday-packs.js not loaded
    for (const h of US_HOLIDAYS) _addHolEntry(h, gregYear);
  }

  // Perigee / Apogee
  const perigeApogeeMap = new Map();
  for (const {date, type} of getPerigeApogee(gregYear)) {
    perigeApogeeMap.set(utcDateStr(date), type);
  }

  // Eclipses
  const eclipseMap = new Map();
  for (const {date, type, subtype} of detectEclipses([...getMoonPhases(gregYear-1), ...getMoonPhases(gregYear), ...getMoonPhases(gregYear+1)])) {
    eclipseMap.set(utcDateStr(date), {type, subtype});
  }

  // Planetary events
  const allPlanetEvts = getPlanetaryEvents(gregYear);
  const planetMap = new Map();
  for (const ev of allPlanetEvts) {
    if (!planetMap.has(ev.dateStr)) planetMap.set(ev.dateStr, []);
    planetMap.get(ev.dateStr).push(ev);
  }

  // Meteor showers
  const meteorMap = new Map();
  for (const ev of getMeteorShowerEvents(gregYear)) {
    if (!meteorMap.has(ev.dateStr)) meteorMap.set(ev.dateStr, []);
    meteorMap.get(ev.dateStr).push(ev);
  }

  // Comets (from comets.js — optional)
  const cometMap = new Map();
  for (const c of (typeof COMETS !== 'undefined' ? COMETS : [])) {
    const s = new Date(c.start).getTime(), e2 = new Date(c.end).getTime();
    for (let ms = s; ms <= e2; ms += 86400000) {
      const ds = utcDateStr(new Date(ms));
      if (!cometMap.has(ds)) cometMap.set(ds, []);
      cometMap.get(ds).push(c);
    }
  }

  // Find Darkmoon for this year and prior year
  const thisDark = findDarkmoon(gregYear, allNewMoons, solThis);
  const prevDark = findDarkmoon(gregYear-1, allNewMoons, solPrev);

  // Snowmoon starts 1 new moon after prevDarkmoon, or 2 if prior year had Bluemoon
  const prevDarkIdx = allNewMoons.findIndex(d => utcDateStr(d) === utcDateStr(prevDark.darkmoonStart));
  const snowmoonStart = allNewMoons[prevDarkIdx + (prevDark.hasBluemoon ? 2 : 1)];
  if (!snowmoonStart) throw new Error(`Cannot find Snowmoon start for year ${holYear}`);

  const snowmoonIdx  = allNewMoons.findIndex(d => utcDateStr(d) === utcDateStr(snowmoonStart));
  const darkmoonIdx  = allNewMoons.findIndex(d => utcDateStr(d) === utcDateStr(thisDark.darkmoonStart));
  if (darkmoonIdx < snowmoonIdx) throw new Error(`Darkmoon before Snowmoon for year ${holYear}`);

  // Build moon list — last moon is always Darkmoon regardless of count (11 or 12)
  const moonCount = darkmoonIdx - snowmoonIdx + 1;
  const moonList = [];
  for (let i = 0; i < moonCount; i++) {
    const idx = snowmoonIdx + i;
    moonList.push({
      name: (i === moonCount-1) ? 'Darkmoon' : MOON_NAMES[i],
      startDate: allNewMoons[idx],
      endNewMoon: allNewMoons[idx+1],
    });
  }
  if (thisDark.hasBluemoon) {
    const bs = allNewMoons[darkmoonIdx+1], be = allNewMoons[darkmoonIdx+2];
    if (bs && be) moonList.push({ name:'Bluemoon', startDate:bs, endNewMoon:be });
  }

  // Build FairyMoon + FairyDay objects
  const today = localTodayStr();
  const dayMap = new Map();
  const msPerDay = 86400000;

  const moons = moonList.map(({name, startDate, endNewMoon}) => {
    const startMs = Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate());
    const endMs   = Date.UTC(endNewMoon.getUTCFullYear(), endNewMoon.getUTCMonth(), endNewMoon.getUTCDate());
    const days = [];
    let dayNum = 1;
    for (let ms = startMs; ms < endMs; ms += msPerDay, dayNum++) {
      const gregDate = new Date(ms);
      const dateStr  = utcDateStr(gregDate);
      const fd = {
        fairyMonth: name, fairyDay: dayNum,
        fairyWeekdayIndex: JS_TO_FAIRY_WEEKDAY[gregDate.getUTCDay()],
        gregDate, isToday: dateStr === today,
        moonPhase:   phaseMap.get(dateStr) || null,
        solarEvent:  solarMap.get(dateStr) || null,
        darkmoonPart: name === 'Darkmoon' ? getDarkmoonPart(dayNum) : null,
        perigee:  perigeApogeeMap.get(dateStr) === 'perigee',
        apogee:   perigeApogeeMap.get(dateStr) === 'apogee',
        eclipse:  eclipseMap.get(dateStr) || null,
        planets:  planetMap.get(dateStr) || null,
        birthday: birthdayMap.get(dateStr.slice(5)) || null,
        holiday:  holidayMap.get(dateStr) || null,
        meteor:   meteorMap.get(dateStr) || null,
        comet:    cometMap.get(dateStr) || null,
      };
      days.push(fd);
      dayMap.set(dateStr, fd);
    }
    return { name, startDate, endDate: new Date(endMs - msPerDay), days };
  });

  const yearAnimal = getDarkmoonPart(thisDark.dayOfSolstice);

  // Build event timeline for modal
  const eventTimeline = [];
  for (const [ds, ph] of phaseMap)        eventTimeline.push({dateStr:ds, kind:'phase',        phase:ph});
  for (const [ds, ev] of solarMap)        eventTimeline.push({dateStr:ds, kind:'solar',        solar:ev});
  for (const [ds, t]  of perigeApogeeMap) eventTimeline.push({dateStr:ds, kind:t});
  for (const [ds, ec] of eclipseMap)      eventTimeline.push({dateStr:ds, kind:ec.type, subtype:ec.subtype});
  // Add birthdays for this year (keyed by YYYY-MM-DD using current gregYear)
  for (const [mmdd, blist] of birthdayMap) {
    eventTimeline.push({dateStr:`${gregYear}-${mmdd}`, kind:'birthday', names:blist.map(b=>b.name)});
  }
  for (const ev of allPlanetEvts) {
    if (ev.kind==='opposition'||ev.kind==='greatElongation'||
        (ev.kind==='moonConj'&&ev.sep<1.5)||(ev.kind==='planetConj'&&ev.sep<1.5)) {
      eventTimeline.push({dateStr:ev.dateStr, ...ev});
    }
  }
  for (const [,evs] of meteorMap) { for (const ev of evs) { if (ev.isPeak) eventTimeline.push({...ev}); } }
  for (const [ds, list] of cometMap) {
    if (ds === utcDateStr(new Date(new Date(list[0].start).getTime()))) { // first day only
      for (const c of list) eventTimeline.push({dateStr:ds, kind:'cometStart', name:c.name, note:c.note||''});
    }
  }
  for (const [ds, hols] of holidayMap) {
    for (const h of hols) eventTimeline.push({dateStr:ds, kind:'holiday', name:h.name, url:h.url});
  }
  eventTimeline.sort((a,b) => a.dateStr.localeCompare(b.dateStr));

  const fy = {
    holYear, gregYear, yearAnimal,
    hasBluemoon: thisDark.hasBluemoon,
    moons, dayMap,
    winterSolstice: solThis.winterSol, summerSolstice: solThis.summerSol,
    springEquinox:  solThis.springEq,  autumnEquinox:  solThis.autumnEq,
    dayOfSolsticeInDarkmoon: thisDark.dayOfSolstice,
    eventTimeline,
  };
  return fy;
}
