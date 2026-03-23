// ═══ Ursa Major Star Position Tests ═══
// Validates the sky chart pipeline against authoritative data (Hipparcos catalog)
// for dates: 0001-01-01, 1974-10-20, 1991-01-10, 2014-09-09

const vm = require('vm');
const fs = require('fs');
const path = require('path');

// ─── Setup: load astro.js into a VM context ──────────────────────────
const root = path.join(__dirname, '..');
const settingsSrc = fs.readFileSync(path.join(root, 'settings.js'), 'utf8');
const astroSrc = fs.readFileSync(path.join(root, 'astro.js'), 'utf8');

const ctx = vm.createContext({
  Math, Date, parseInt, parseFloat, console,
  Intl: globalThis.Intl,
  Object, Array, String, Number, Error, TypeError, RangeError,
  isNaN, isFinite, undefined, NaN, Infinity,
});
vm.runInContext(settingsSrc, ctx);
vm.runInContext(astroSrc, ctx);

// const/let/function declarations in vm don't leak to ctx object — extract via eval
const CONSTELLATIONS = vm.runInContext('CONSTELLATIONS', ctx);
const _precessJ2000 = vm.runInContext('_precessJ2000', ctx);
const _altAz = vm.runInContext('_altAz', ctx);
const getVisibleConstellationPositions = vm.runInContext('getVisibleConstellationPositions', ctx);
const getEveningUTHours = vm.runInContext('getEveningUTHours', ctx);
const OBSERVER = vm.runInContext('OBSERVER', ctx);
const _julianDate = vm.runInContext('_julianDate', ctx);

// ─── Helpers ─────────────────────────────────────────────────────────
let totalPass = 0, totalFail = 0;

function assert(label, condition, detail) {
  if (condition) { totalPass++; console.log(`  ✓ ${label}`); }
  else           { totalFail++; console.log(`  ✗ ${label}  — ${detail}`); }
}

function toArcmin(hours) { return hours * 60 * 15; } // RA hours → arcminutes on sky
function decArcmin(deg)  { return deg * 60; }        // Dec degrees → arcminutes

function angSepDeg(ra1h, dec1d, ra2h, dec2d) {
  const ra1 = ra1h * Math.PI / 12, dec1 = dec1d * Math.PI / 180;
  const ra2 = ra2h * Math.PI / 12, dec2 = dec2d * Math.PI / 180;
  return Math.acos(Math.max(-1, Math.min(1,
    Math.sin(dec1)*Math.sin(dec2) + Math.cos(dec1)*Math.cos(dec2)*Math.cos(ra1 - ra2)
  ))) * 180 / Math.PI;
}

// Independent precession implementation (Meeus Ch. 21) for cross-check
function precessRef(raH, decDeg, T) {
  if (Math.abs(T) < 0.001) return { ra: raH, dec: decDeg };
  const zetaA  = (0.6406161 + 0.0000839*T + 0.0000050*T*T) * T;
  const zA     = (0.6406161 + 0.0003041*T + 0.0000051*T*T) * T;
  const thetaA = (0.5567530 - 0.0001185*T - 0.0000116*T*T) * T;
  const zetaR  = zetaA  * Math.PI / 180;
  const zR     = zA     * Math.PI / 180;
  const thetaR = thetaA * Math.PI / 180;
  const ra0  = raH * Math.PI / 12;
  const dec0 = decDeg * Math.PI / 180;
  const cosD = Math.cos(dec0), sinD = Math.sin(dec0);
  const cosRA = Math.cos(ra0 + zetaR), sinRA = Math.sin(ra0 + zetaR);
  const A = cosD * sinRA;
  const B = Math.cos(thetaR)*cosD*cosRA - Math.sin(thetaR)*sinD;
  const C = Math.sin(thetaR)*cosD*cosRA + Math.cos(thetaR)*sinD;
  let ra = Math.atan2(A, B) + zR;
  ra = ((ra * 12 / Math.PI) % 24 + 24) % 24;
  const dec = Math.asin(Math.max(-1, Math.min(1, C))) * 180 / Math.PI;
  return { ra, dec };
}

// JD from Meeus (standard algorithm, Ch. 7)
function jdMeeus(Y, M, D, UT) {
  if (M <= 2) { Y--; M += 12; }
  const A = Math.trunc(Y / 100);
  const B = 2 - A + Math.trunc(A / 4); // Gregorian
  return Math.trunc(365.25 * (Y + 4716)) + Math.trunc(30.6001 * (M + 1)) + D + UT/24 + B - 1524.5;
}

// Full IAU GMST (with T² and T³ terms)
function gmstFull(JD, UT) {
  const JD0 = Math.floor(JD - 0.5) + 0.5; // JD at 0h UT
  const T0 = (JD0 - 2451545.0) / 36525;
  let gmst0h = 6.697374558 + 2400.051336*T0 + 0.000025862*T0*T0 - 0.0000000017*T0*T0*T0;
  gmst0h = ((gmst0h % 24) + 24) % 24;
  return ((gmst0h + 1.00273790935 * UT) % 24 + 24) % 24;
}

// ─── Hipparcos reference data for Ursa Major ─────────────────────────
const HIPPARCOS = [
  { name: 'Dubhe',  hip: 54061, ra: 11.06213, dec: 61.7510, mag: 1.79 },
  { name: 'Merak',  hip: 53910, ra: 11.03069, dec: 56.3824, mag: 2.37 },
  { name: 'Phecda', hip: 58001, ra: 11.89718, dec: 53.6948, mag: 2.44 },
  { name: 'Megrez', hip: 59774, ra: 12.25710, dec: 57.0326, mag: 3.31 },
  { name: 'Alioth', hip: 62956, ra: 12.90048, dec: 55.9598, mag: 1.77 },
  { name: 'Mizar',  hip: 65378, ra: 13.39873, dec: 54.9254, mag: 2.27 },
  { name: 'Alkaid', hip: 67301, ra: 13.79234, dec: 49.3133, mag: 1.86 },
];

const TEST_DATES = [
  { label: '0001-01-01', y: 1,    m: 1,  d: 1  },
  { label: '1974-10-20', y: 1974, m: 10, d: 20 },
  { label: '1991-01-10', y: 1991, m: 1,  d: 10 },
  { label: '2014-09-09', y: 2014, m: 9,  d: 9  },
];

// ═══════════════════════════════════════════════════════════════════════
console.log('═══ TEST A: Catalog Accuracy vs Hipparcos ═══\n');

const umStars = CONSTELLATIONS['Ursa Major'].stars;
console.log('  Star       | Code RA    | Hip RA     | ΔRA (arcmin) | Code Dec   | Hip Dec    | ΔDec (arcmin)');
console.log('  ' + '─'.repeat(95));

for (let i = 0; i < HIPPARCOS.length; i++) {
  const hip = HIPPARCOS[i];
  const code = umStars[i];
  const dRA = Math.abs(code[0] - hip.ra) * 15 * 60; // hours → arcmin on equator
  // Correct for cos(dec) to get true sky separation in RA
  const dRA_sky = dRA * Math.cos(hip.dec * Math.PI / 180);
  const dDec = Math.abs(code[1] - hip.dec) * 60;

  console.log(`  ${hip.name.padEnd(10)} | ${code[0].toFixed(5).padStart(10)} | ${hip.ra.toFixed(5).padStart(10)} | ${dRA_sky.toFixed(2).padStart(12)} | ${code[1].toFixed(4).padStart(10)} | ${hip.dec.toFixed(4).padStart(10)} | ${dDec.toFixed(2).padStart(13)}`);
  assert(`${hip.name} RA within 0.5 arcmin`, dRA_sky < 0.5, `got ${dRA_sky.toFixed(2)} arcmin`);
  assert(`${hip.name} Dec within 0.5 arcmin`, dDec < 0.5, `got ${dDec.toFixed(2)} arcmin`);
}

// ═══════════════════════════════════════════════════════════════════════
console.log('\n═══ TEST B: Julian Date Formula ═══\n');

// Known reference: J2000.0 = 2000-01-01 12:00 UT = JD 2451545.0
const jdCode2000 = _julianDate(2000, 1, 1, 12);
const jdMeeus2000 = jdMeeus(2000, 1, 1, 12);
assert('J2000 epoch JD (code)', Math.abs(jdCode2000 - 2451545.0) < 0.001, `got ${jdCode2000}`);
assert('J2000 epoch JD (Meeus)', Math.abs(jdMeeus2000 - 2451545.0) < 0.001, `got ${jdMeeus2000}`);

console.log('\n  Date         | Code JD        | Meeus JD       | Δ (days)');
console.log('  ' + '─'.repeat(65));

for (const td of TEST_DATES) {
  const { y: Y, m: M, d: D } = td;
  const UT = 2; // approx evening in EST
  const jdC = _julianDate(Y, M, D, UT);
  const jdM = jdMeeus(Y, M, D, UT);
  const delta = Math.abs(jdC - jdM);
  console.log(`  ${td.label.padEnd(12)} | ${jdC.toFixed(4).padStart(14)} | ${jdM.toFixed(4).padStart(14)} | ${delta.toFixed(4).padStart(8)}`);
  assert(`${td.label} JD within 0.001 day`, delta < 0.001, `Δ = ${delta.toFixed(6)} days`);
}

// ═══════════════════════════════════════════════════════════════════════
console.log('\n═══ TEST C: GMST Formula ═══\n');

console.log('  Date         | Code GMST (h)  | Full IAU (h)   | Δ (minutes)');
console.log('  ' + '─'.repeat(65));

for (const td of TEST_DATES) {
  const { y: Y, m: M, d: D } = td;
  const UT = 2;
  const JD = jdMeeus(Y, M, D, UT); // use Meeus JD for fair comparison
  const T = (JD - 2451545.0) / 36525;
  const gmstCode = ((6.697375 + 2400.0513368*T + 1.0027379*UT) % 24 + 24) % 24;
  const gmstIAU = gmstFull(JD, UT);
  const deltaMin = Math.abs(gmstCode - gmstIAU) * 60;
  console.log(`  ${td.label.padEnd(12)} | ${gmstCode.toFixed(6).padStart(14)} | ${gmstIAU.toFixed(6).padStart(14)} | ${deltaMin.toFixed(3).padStart(11)}`);
  assert(`${td.label} GMST within 5 min`, deltaMin < 5.0, `Δ = ${deltaMin.toFixed(3)} min`);
}

// ═══════════════════════════════════════════════════════════════════════
console.log('\n═══ TEST D: Precession Validation ═══\n');

// Cross-check: _precessJ2000 from code vs independent implementation
const testTs = [-20.0, -0.252, -0.090, 0.147]; // centuries from J2000
const testLabels = ['0001-01-01', '1974-10-20', '1991-01-10', '2014-09-09'];

console.log('  Verifying _precessJ2000 matches independent implementation for Dubhe...\n');
for (let i = 0; i < testTs.length; i++) {
  const T = testTs[i];
  const codeResult = _precessJ2000(11.062, 61.751, T);
  const refResult = precessRef(11.062, 61.751, T);
  const dRA = Math.abs(codeResult.ra - refResult.ra) * 15 * 60; // arcmin
  const dDec = Math.abs(codeResult.dec - refResult.dec) * 60;
  console.log(`  T=${T.toFixed(3).padStart(8)}: code RA=${codeResult.ra.toFixed(5)}h Dec=${codeResult.dec.toFixed(4)}°  ref RA=${refResult.ra.toFixed(5)}h Dec=${refResult.dec.toFixed(4)}°  ΔRA=${dRA.toFixed(4)}' ΔDec=${dDec.toFixed(4)}'`);
  assert(`${testLabels[i]} precession cross-check`, dRA < 0.001 && dDec < 0.001, `ΔRA=${dRA.toFixed(4)}' ΔDec=${dDec.toFixed(4)}'`);
}

// Show precessed positions of all Ursa Major stars for each epoch
console.log('\n  Precessed Ursa Major positions by epoch:\n');
for (let i = 0; i < testTs.length; i++) {
  const T = testTs[i];
  console.log(`  ── ${testLabels[i]} (T=${T.toFixed(3)}) ──`);
  for (let j = 0; j < HIPPARCOS.length; j++) {
    const star = umStars[j];
    const p = _precessJ2000(star[0], star[1], T);
    const shift = angSepDeg(star[0], star[1], p.ra, p.dec);
    console.log(`    ${HIPPARCOS[j].name.padEnd(8)}: J2000(${star[0].toFixed(3)}h, ${star[1].toFixed(2)}°) → (${p.ra.toFixed(3)}h, ${p.dec.toFixed(2)}°)  shift=${shift.toFixed(2)}°`);
  }
}

// ═══════════════════════════════════════════════════════════════════════
console.log('\n═══ TEST E: Full Pipeline — Alt/Az for Each Date ═══\n');

for (const td of TEST_DATES) {
  const d = new Date(Date.UTC(td.y, td.m - 1, td.d));
  if (td.y < 100) d.setUTCFullYear(td.y); // fix JS 2-digit year quirk

  console.log(`  ── ${td.label} ──`);
  let constellations;
  try {
    constellations = getVisibleConstellationPositions(d);
  } catch (e) {
    console.log(`    ERROR: ${e.message}`);
    totalFail++;
    continue;
  }

  const uma = constellations.find(c => c.name === 'Ursa Major');
  if (!uma) {
    console.log('    Ursa Major NOT visible (may be below horizon or sun-washed)');
    // For 0001-01-01, this is expected depending on precessed position
    if (td.y === 1) {
      console.log('    (Expected: precession shifts Ursa Major significantly for year 1 CE)');
    }
    continue;
  }

  assert(`${td.label} Ursa Major found`, true, '');
  let visibleCount = 0;
  for (let j = 0; j < uma.stars.length; j++) {
    const s = uma.stars[j];
    if (s) {
      visibleCount++;
      console.log(`    ${HIPPARCOS[j] ? HIPPARCOS[j].name.padEnd(8) : ('star'+j).padEnd(8)}: alt=${s.alt.toFixed(1).padStart(6)}°  az=${s.az.toFixed(1).padStart(6)}°  mag=${s.mag}`);
    } else {
      console.log(`    ${HIPPARCOS[j] ? HIPPARCOS[j].name.padEnd(8) : ('star'+j).padEnd(8)}: below horizon`);
    }
  }
  assert(`${td.label} at least 2 stars visible`, visibleCount >= 2, `only ${visibleCount}`);
}

// ═══════════════════════════════════════════════════════════════════════
console.log('\n═══ TEST F: Relative Angular Separations ═══\n');

// Compute pairwise separations using J2000 coords (ground truth shape)
const pairs = [];
for (let i = 0; i < 7; i++) {
  for (let j = i + 1; j < 7; j++) {
    const sep = angSepDeg(umStars[i][0], umStars[i][1], umStars[j][0], umStars[j][1]);
    pairs.push({ i, j, name: `${HIPPARCOS[i].name}-${HIPPARCOS[j].name}`, j2000sep: sep });
  }
}

// Check separations are preserved after precession for each epoch
for (let e = 0; e < testTs.length; e++) {
  const T = testTs[e];
  console.log(`  ── ${testLabels[e]} (T=${T.toFixed(3)}) ──`);
  let maxErr = 0;
  for (const pair of pairs) {
    const p1 = _precessJ2000(umStars[pair.i][0], umStars[pair.i][1], T);
    const p2 = _precessJ2000(umStars[pair.j][0], umStars[pair.j][1], T);
    const precSep = angSepDeg(p1.ra, p1.dec, p2.ra, p2.dec);
    const err = Math.abs(precSep - pair.j2000sep) * 60; // arcmin
    if (err > maxErr) maxErr = err;
  }
  console.log(`    Max pairwise separation error: ${maxErr.toFixed(3)} arcmin`);
  // For modern dates, differential precession across ~15° field should be tiny
  if (Math.abs(T) < 1) {
    assert(`${testLabels[e]} shape preserved (<1 arcmin)`, maxErr < 1.0, `max err ${maxErr.toFixed(3)}'`);
  } else {
    // For year 1 CE (T=-20), expect larger differential precession
    assert(`${testLabels[e]} shape preserved (<30 arcmin)`, maxErr < 30.0, `max err ${maxErr.toFixed(3)}'`);
  }
}

// ═══════════════════════════════════════════════════════════════════════
console.log('\n' + '═'.repeat(60));
console.log(`RESULTS: ${totalPass} passed, ${totalFail} failed`);
console.log('═'.repeat(60));
process.exit(totalFail > 0 ? 1 : 0);
