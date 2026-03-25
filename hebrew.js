// ═══ hebrew.js — Hebrew calendar arithmetic and data ═══
// Hillel II fixed arithmetic calendar (~359 CE)
// Based on Dershowitz-Reingold "Calendrical Calculations"

// ── Arithmetic engine ─────────────────────────────────────────────

// Anchor: _hElapsedDays(y) + HEBREW_DAY_OFFSET = JS epoch day (days since 1970-01-01 UTC)
// Verified: 1 Tishrei 5784 = Sep 16, 2023 = JS day 19616; 19616 - _hElapsedDays(5784) = -2092590
const HEBREW_DAY_OFFSET = -2092590;

// True if Hebrew year y is a leap year (7 out of every 19 years via Metonic cycle)
function _hLeap(y) {
  return ((7 * y + 1) % 19) < 7;
}

// Elapsed days from Hebrew epoch to start of year y (molad arithmetic + ADU postponement)
function _hElapsedDays(y) {
  const m = Math.floor((235 * y - 234) / 19);
  const parts = 12084 + 13753 * m;
  let day = m * 29 + Math.floor(parts / 25920);
  if (((3 * (day + 1)) % 7) < 3) day++;
  return day;
}

// Actual 1 Tishrei (New Year) elapsed day, after year-length corrections
function _hNewYear(y) {
  const ny0 = _hElapsedDays(y);
  const ny1 = _hElapsedDays(y + 1);
  const ny2 = _hElapsedDays(y + 2);
  let d = ny0;
  if (ny1 - ny0 === 356) d += 2;
  else if (ny2 - ny1 === 382) d += 1;
  return d;
}

// Number of days in Hebrew year y (353/354/355 or 383/384/385)
function _hYearLength(y) {
  return _hNewYear(y + 1) - _hNewYear(y);
}

// Days in month m of year y  (m = 1..13, 1=Nisan, 7=Tishrei, 13=Adar II)
function _hMonthLength(y, m) {
  const yl = _hYearLength(y);
  if (m === 8)  return (yl % 10 === 5) ? 30 : 29;   // Cheshvan: 30 in "complete" year
  if (m === 9)  return (yl % 10 === 3) ? 29 : 30;   // Kislev: 29 in "defective" year
  if (m === 12) return _hLeap(y) ? 30 : 29;          // Adar / Adar I: 30 in leap year
  const FIXED = [0, 30, 29, 30, 29, 30, 29, 30, 0, 0, 29, 30, 29, 29];
  return FIXED[m];
}

// Convert Hebrew elapsed day to JS Date (UTC midnight)
function _hDayToDate(elapsed) {
  return new Date((elapsed + HEBREW_DAY_OFFSET) * 86400000);
}

// Build array of month objects for Hebrew year hy, in civil order (Tishrei first)
// Each object: { num, days, gregStart }
function buildHebrewYear(hy) {
  const isLeap = _hLeap(hy);
  const nyElapsed = _hNewYear(hy);

  const monthSeq = [7, 8, 9, 10, 11, 12];
  if (isLeap) monthSeq.push(13);
  monthSeq.push(1, 2, 3, 4, 5, 6);

  const months = [];
  let offset = 0;
  for (const mnum of monthSeq) {
    const days = _hMonthLength(hy, mnum);
    months.push({ num: mnum, days, gregStart: _hDayToDate(nyElapsed + offset) });
    offset += days;
  }
  return months;
}

// Return the Hebrew year whose Tishrei 1 falls in (gregYear - 1),
// i.e., the Hebrew year that mostly covers the given Gregorian year.
// e.g., gregYear 2026 → Hebrew year 5786 (starts Sep 2025, ends Sep 2026)
function hebrewYearForGregYear(gregYear) {
  return gregYear + 3760;
}

// ── Text data ─────────────────────────────────────────────────────

// Indexed 1–13 (0 unused). 1=Nisan, 7=Tishrei, 13=Adar II.
const HEBREW_MONTH_DATA = [
  null,
  { en: 'Nisan',    he: 'נִיסָן'   },
  { en: 'Iyar',     he: 'אִיָּר'    },
  { en: 'Sivan',    he: 'סִיוָן'   },
  { en: 'Tammuz',   he: 'תַּמּוּז'  },
  { en: 'Av',       he: 'אָב'      },
  { en: 'Elul',     he: 'אֱלוּל'   },
  { en: 'Tishrei',  he: 'תִּשְׁרֵי' },
  { en: 'Cheshvan', he: 'חֶשְׁוָן'  },
  { en: 'Kislev',   he: 'כִּסְלֵו'  },
  { en: 'Tevet',    he: 'טֵבֵת'    },
  { en: 'Shevat',   he: 'שְׁבָט'    },
  { en: 'Adar',     he: 'אֲדָר'    },
  { en: 'Adar II',  he: 'אֲדָר ב׳' },
];

// Week starts Sunday. getUTCDay(): 0=Sun, 1=Mon, …, 6=Sat.
const HEBREW_WEEKDAYS = [
  { he: 'א׳', en: 'Sun' },
  { he: 'ב׳', en: 'Mon' },
  { he: 'ג׳', en: 'Tue' },
  { he: 'ד׳', en: 'Wed' },
  { he: 'ה׳', en: 'Thu' },
  { he: 'ו׳', en: 'Fri' },
  { he: 'שׁ',  en: 'Shab' },
];

// Hebrew gematria for day numbers 1–30
function toGematria(n) {
  if (n === 15) return 'ט״ו';   // avoid spelling divine name יה
  if (n === 16) return 'ט״ז';   // avoid spelling divine name יו
  const ONES = ['','א','ב','ג','ד','ה','ו','ז','ח','ט'];
  const TENS = ['','י','כ','ל'];
  const letters = TENS[Math.floor(n / 10)] + ONES[n % 10];
  if (letters.length === 1) return letters;
  return letters.slice(0, -1) + '״' + letters.slice(-1);
}

// Hebrew year in letter notation, e.g., 5786 → "ה׳תשפ״ו"
function toHebrewYear(hy) {
  const THOU = ['','א','ב','ג','ד','ה','ו','ז','ח','ט'];
  const thousandsLetter = THOU[Math.floor(hy / 1000)];
  let r = hy % 1000;
  let letters = '';
  if (r >= 400) { letters += 'ת'; r -= 400; }
  if (r >= 400) { letters += 'ת'; r -= 400; }  // handles 800–899
  if (r >= 300) { letters += 'ש'; r -= 300; }
  if (r >= 200) { letters += 'ר'; r -= 200; }
  if (r >= 100) { letters += 'ק'; r -= 100; }
  if (r >= 90)  { letters += 'צ'; r -= 90; }
  if (r >= 80)  { letters += 'פ'; r -= 80; }
  if (r >= 70)  { letters += 'ע'; r -= 70; }
  if (r >= 60)  { letters += 'ס'; r -= 60; }
  if (r >= 50)  { letters += 'נ'; r -= 50; }
  if (r >= 40)  { letters += 'מ'; r -= 40; }
  if (r >= 30)  { letters += 'ל'; r -= 30; }
  if (r >= 20)  { letters += 'כ'; r -= 20; }
  if (r >= 10)  { letters += 'י'; r -= 10; }
  if (r >= 9)   { letters += 'ט'; r -= 9; }
  if (r >= 8)   { letters += 'ח'; r -= 8; }
  if (r >= 7)   { letters += 'ז'; r -= 7; }
  if (r >= 6)   { letters += 'ו'; r -= 6; }
  if (r >= 5)   { letters += 'ה'; r -= 5; }
  if (r >= 4)   { letters += 'ד'; r -= 4; }
  if (r >= 3)   { letters += 'ג'; r -= 3; }
  if (r >= 2)   { letters += 'ב'; r -= 2; }
  if (r >= 1)   { letters += 'א'; }
  // Avoid spelling divine names יה (15) and יו (16) within the remainder
  letters = letters.replace('יה', 'טו').replace('יו', 'טז');
  // Add gershayim (״) before the final letter
  if (letters.length > 1)
    letters = letters.slice(0, -1) + '״' + letters.slice(-1);
  return `${thousandsLetter}׳${letters}`;
}

// ── Holidays ──────────────────────────────────────────────────────

// Each entry: month m (1=Nisan), day d, name, optional dur (multi-day),
// leapOnly / nonLeap flags for Purim month disambiguation.
const HEBREW_HOLIDAYS = [
  { m: 7,  d: 1,  name: 'Rosh Hashanah', dur: 2 },
  { m: 7,  d: 10, name: 'Yom Kippur' },
  { m: 7,  d: 15, name: 'Sukkot',         dur: 7 },
  { m: 7,  d: 22, name: 'Shemini Atzeret' },
  { m: 7,  d: 23, name: 'Simchat Torah' },
  { m: 9,  d: 25, name: 'Hanukkah',       dur: 8 },
  { m: 10, d: 10, name: 'Fast of Tevet' },
  { m: 11, d: 15, name: "Tu B'Shevat" },
  { m: 12, d: 14, name: 'Purim',          nonLeap: true },
  { m: 13, d: 14, name: 'Purim',          leapOnly: true },
  { m: 1,  d: 15, name: 'Passover',       dur: 8 },
  { m: 3,  d: 6,  name: 'Shavuot',        dur: 2 },
  { m: 4,  d: 17, name: 'Fast of Tammuz' },
  { m: 5,  d: 9,  name: "Tisha B'Av" },
];

// Build Map<"YYYY-MM-DD", string[]> of Hebrew holiday names for year hy
function buildHebrewHolidayMap(hy) {
  const isLeap = _hLeap(hy);
  const nyElapsed = _hNewYear(hy);

  const monthSeq = [7, 8, 9, 10, 11, 12];
  if (isLeap) monthSeq.push(13);
  monthSeq.push(1, 2, 3, 4, 5, 6);

  // Map from month number → elapsed day of its 1st
  const monthStarts = new Map();
  let offset = 0;
  for (const mnum of monthSeq) {
    monthStarts.set(mnum, nyElapsed + offset);
    offset += _hMonthLength(hy, mnum);
  }

  const map = new Map();
  for (const hol of HEBREW_HOLIDAYS) {
    if (hol.leapOnly && !isLeap) continue;
    if (hol.nonLeap  &&  isLeap) continue;
    const mStart = monthStarts.get(hol.m);
    if (mStart === undefined) continue;
    const dur = hol.dur || 1;
    for (let i = 0; i < dur; i++) {
      const ds = utcDateStr(_hDayToDate(mStart + (hol.d - 1) + i));
      const label = (dur > 1 && i > 0) ? `${hol.name} (day ${i + 1})` : hol.name;
      if (!map.has(ds)) map.set(ds, []);
      map.get(ds).push(label);
    }
  }
  return map;
}
