/**
 * calendar.js — Fairy Calendar logic
 * Builds FairyYear objects from astronomical data.
 */

import { getNewMoons, getMoonPhases, getSolsticesEquinoxes, utcDateStr, daysBetween } from './astro.js';

// JS getDay() (0=Sun) → Fairy weekday index (0=Heimday/Mon … 6=Sunday/Sun)
// Mon→0, Tue→1, Wed→2, Thu→3, Fri→4, Sat→5, Sun→6
const JS_TO_FAIRY_WEEKDAY = [6, 0, 1, 2, 3, 4, 5];

export const FAIRY_WEEKDAYS = ['Heimday', 'Tyrsday', 'Wodensday', 'Thorsday', 'Freyasday', 'Moonday', 'Sunday'];

export const MOON_NAMES = [
  'Snowmoon', 'Wakingmoon', 'Seedmoon', 'Bloomoon', 'Flowermoon',
  'Berrymoon', 'Summermoon', 'Harvestmoon', 'Gathermoon', 'Leafmoon',
  'Frostmoon', 'Darkmoon'
];

const DARKMOON_PARTS = ['Robin', 'Rabbit', 'Turkey', 'Bear', 'Fox'];
const DARKMOON_PART_STARTS = [1, 7, 13, 19, 25]; // day number where each part starts

/**
 * Given a day-of-Darkmoon (1-based), return the part name.
 */
function getDarkmoonPart(dayNum) {
  if (dayNum >= 25) return 'Fox';
  if (dayNum >= 19) return 'Bear';
  if (dayNum >= 13) return 'Turkey';
  if (dayNum >= 7)  return 'Rabbit';
  return 'Robin';
}

/**
 * Given a sorted array of new moon Dates and a target Date,
 * find the index of the last new moon strictly before target.
 */
function lastNewMoonBefore(newMoons, target) {
  let idx = -1;
  for (let i = 0; i < newMoons.length; i++) {
    if (newMoons[i] < target) idx = i;
    else break;
  }
  return idx;
}

/**
 * Find the new moon that starts Darkmoon for a given gregYear.
 * Returns { darkmoonStart: Date, dayOfSolstice: number, hasBluemoon: boolean, winterSolstice: Date }
 */
function findDarkmoon(gregYear, allNewMoons, solstices) {
  const ws = solstices.winterSol;
  const idx = lastNewMoonBefore(allNewMoons, ws);
  if (idx < 0) throw new Error(`No new moon before winter solstice ${gregYear}`);
  const darkmoonStart = allNewMoons[idx];
  // daysBetween gives 0-based, +1 for 1-based day numbering
  const dayOfSolstice = daysBetween(darkmoonStart, ws) + 1;
  const hasBluemoon = dayOfSolstice >= 19;
  return { darkmoonStart, darkmoonIdx: idx, dayOfSolstice, hasBluemoon, winterSolstice: ws };
}

// Cache keyed by holYear
const yearCache = new Map();

export function buildFairyYear(holYear) {
  if (yearCache.has(holYear)) return yearCache.get(holYear);
  const result = _buildFairyYear(holYear);
  yearCache.set(holYear, result);
  return result;
}

function _buildFairyYear(holYear) {
  const gregYear = holYear - 10000;

  // Fetch astronomical data for a 3-year window
  const newMoonSets = [
    ...getNewMoons(gregYear - 1),
    ...getNewMoons(gregYear),
    ...getNewMoons(gregYear + 1),
  ];
  // Deduplicate and sort
  const seen = new Set();
  const allNewMoons = newMoonSets
    .filter(d => { const s = utcDateStr(d); if (seen.has(s)) return false; seen.add(s); return true; })
    .sort((a, b) => a - b);

  // All phases for annotations
  const phaseSets = [
    ...getMoonPhases(gregYear - 1),
    ...getMoonPhases(gregYear),
    ...getMoonPhases(gregYear + 1),
  ];
  const phaseMap = new Map(); // "YYYY-MM-DD" → phase name
  for (const { date, phase } of phaseSets) {
    const s = utcDateStr(date);
    if (!phaseMap.has(s)) phaseMap.set(s, phase);
  }

  // Solstices/equinoxes for this year
  const solThisYear = getSolsticesEquinoxes(gregYear);
  const solPrevYear = getSolsticesEquinoxes(gregYear - 1);
  const solNextYear = getSolsticesEquinoxes(gregYear + 1);

  // Build solar event map
  const solarMap = new Map();
  function addSolar(date, name) {
    if (date) solarMap.set(utcDateStr(date), name);
  }
  addSolar(solThisYear.springEq,  'springEquinox');
  addSolar(solThisYear.summerSol, 'summerSolstice');
  addSolar(solThisYear.autumnEq,  'autumnEquinox');
  addSolar(solThisYear.winterSol, 'winterSolstice');
  // Also add prev/next year's winter solstice in case they appear within our moon range
  addSolar(solPrevYear.winterSol, 'winterSolstice');
  addSolar(solNextYear.winterSol, 'winterSolstice');

  // Find this year's Darkmoon
  const thisDark = findDarkmoon(gregYear, allNewMoons, solThisYear);
  // Find prior year's Darkmoon (to determine where Snowmoon starts)
  const prevDark = findDarkmoon(gregYear - 1, allNewMoons, solPrevYear);

  // Determine Snowmoon start:
  // If prior year had Bluemoon, Snowmoon starts 2 new moons after prevDark.darkmoonStart
  // Otherwise 1 new moon after prevDark.darkmoonStart
  const prevDarkIdx = allNewMoons.findIndex(d => utcDateStr(d) === utcDateStr(prevDark.darkmoonStart));
  const snowmoonOffset = prevDark.hasBluemoon ? 2 : 1;
  const snowmoonStart = allNewMoons[prevDarkIdx + snowmoonOffset];

  if (!snowmoonStart) throw new Error(`Cannot find Snowmoon start for ${holYear}`);

  // Enumerate all moon starts from snowmoonStart up to and including Darkmoon (and Bluemoon)
  const snowmoonIdx = allNewMoons.findIndex(d => utcDateStr(d) === utcDateStr(snowmoonStart));
  const darkmoonIdx = allNewMoons.findIndex(d => utcDateStr(d) === utcDateStr(thisDark.darkmoonStart));

  if (darkmoonIdx < snowmoonIdx) throw new Error(`Darkmoon before Snowmoon for ${holYear}`);

  const moonCount = darkmoonIdx - snowmoonIdx + 1; // should be 12
  const moons = [];

  // moonCount is 11 or 12 depending on the year.
  // The LAST moon is always Darkmoon (contains the winter solstice).
  // Earlier moons use MOON_NAMES[0..moonCount-2] (Snowmoon through Leafmoon or Frostmoon).
  for (let i = 0; i < moonCount; i++) {
    const idx = snowmoonIdx + i;
    const isLastMoon = (i === moonCount - 1); // Always Darkmoon
    const moonName = isLastMoon ? 'Darkmoon' : MOON_NAMES[i];
    const startDate = allNewMoons[idx];
    const endNewMoon = allNewMoons[idx + 1];
    moons.push({ name: moonName, startDate, endNewMoon });
  }

  // If hasBluemoon, add Bluemoon after Darkmoon
  if (thisDark.hasBluemoon) {
    const bluemoonStart = allNewMoons[darkmoonIdx + 1];
    const bluemoonEnd = allNewMoons[darkmoonIdx + 2];
    if (bluemoonStart && bluemoonEnd) {
      moons.push({ name: 'Bluemoon', startDate: bluemoonStart, endNewMoon: bluemoonEnd });
    }
  }

  // Build FairyMoon objects with FairyDay arrays
  const today = utcDateStr(new Date());
  const dayMap = new Map();

  const fairyMoons = moons.map(({ name, startDate, endNewMoon }) => {
    const days = [];
    const msPerDay = 86400000;
    const startMs = Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate()
    );
    const endMs = Date.UTC(
      endNewMoon.getUTCFullYear(),
      endNewMoon.getUTCMonth(),
      endNewMoon.getUTCDate()
    );

    let dayNum = 1;
    for (let ms = startMs; ms < endMs; ms += msPerDay, dayNum++) {
      const gregDate = new Date(ms);
      const dateStr = utcDateStr(gregDate);
      const jsDay = gregDate.getUTCDay();
      const fairyWeekdayIndex = JS_TO_FAIRY_WEEKDAY[jsDay];

      let darkmoonPart = null;
      if (name === 'Darkmoon') {
        darkmoonPart = getDarkmoonPart(dayNum);
      }

      const fairyDay = {
        fairyMonth: name,
        fairyDay: dayNum,
        fairyWeekdayIndex,
        gregDate,
        isToday: dateStr === today,
        moonPhase: phaseMap.get(dateStr) || null,
        solarEvent: solarMap.get(dateStr) || null,
        darkmoonPart,
      };

      days.push(fairyDay);
      dayMap.set(dateStr, fairyDay);
    }

    return {
      name,
      startDate,
      endDate: new Date(endMs - msPerDay),
      days,
    };
  });

  // Year animal from this year's Darkmoon part
  const yearAnimal = getDarkmoonPart(thisDark.dayOfSolstice);

  const fairyYear = {
    holYear,
    gregYear,
    yearAnimal,
    hasBluemoon: thisDark.hasBluemoon,
    moons: fairyMoons,
    dayMap,
    winterSolstice: solThisYear.winterSol,
    summerSolstice: solThisYear.summerSol,
    springEquinox:  solThisYear.springEq,
    autumnEquinox:  solThisYear.autumnEq,
    dayOfSolsticeInDarkmoon: thisDark.dayOfSolstice,
  };

  return fairyYear;
}
