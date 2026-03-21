/**
 * astro.js — Astronomical calculations (Meeus "Astronomical Algorithms", 2nd ed.)
 * All times in UTC. No external dependencies.
 */

// Convert JS Date → Julian Ephemeris Day
function dateToJDE(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

// Convert Julian Ephemeris Day → JS Date (UTC)
function jdeToDate(jde) {
  return new Date((jde - 2440587.5) * 86400000);
}

function rad(deg) { return deg * Math.PI / 180; }
function norm360(x) { return ((x % 360) + 360) % 360; }

/**
 * JDE of a lunar phase near lunation k.
 * phase: 0=new, 0.25=first quarter, 0.5=full, 0.75=last quarter
 * Meeus Ch. 47
 */
function lunarPhaseJDE(k, phase) {
  const kp = k + phase;
  const T  = kp / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;

  // Mean phase JDE
  let JDE = 2451550.09766
    + 29.530588861 * kp
    + 0.00015437   * T2
    - 0.000000150  * T3
    + 0.00000000073* T4;

  // Anomaly arguments (degrees)
  const M  = norm360(2.5534      + 29.10535670  * kp - 0.0000014 * T2 - 0.00000011 * T3);
  const Mp = norm360(201.5643    + 385.81693528 * kp + 0.0107582 * T2 + 0.00001238 * T3 - 0.000000058 * T4);
  const F  = norm360(160.7108    + 390.67050284 * kp - 0.0016118 * T2 - 0.00000227 * T3 + 0.000000011 * T4);
  const Om = norm360(124.7746    -   1.56375588 * kp + 0.0020672 * T2 + 0.00000215 * T3);

  // Eccentricity correction for Sun's anomaly
  const E  = 1 - 0.002516 * T - 0.0000074 * T2;
  const E2 = E * E;

  if (phase === 0) {
    // ── New Moon (Meeus Table 47.a) ──────────────────────
    JDE += -0.40720 * Math.sin(rad(Mp));
    JDE +=  0.17241 * E  * Math.sin(rad(M));
    JDE +=  0.01608 * Math.sin(rad(2 * Mp));
    JDE +=  0.01039 * Math.sin(rad(2 * F));
    JDE +=  0.00739 * E  * Math.sin(rad(Mp - M));
    JDE += -0.00514 * E  * Math.sin(rad(Mp + M));
    JDE +=  0.00208 * E2 * Math.sin(rad(2 * M));
    JDE += -0.00111 * Math.sin(rad(Mp - 2 * F));
    JDE += -0.00057 * Math.sin(rad(Mp + 2 * F));
    JDE +=  0.00056 * E  * Math.sin(rad(2 * Mp + M));
    JDE += -0.00042 * Math.sin(rad(3 * Mp));
    JDE +=  0.00042 * E  * Math.sin(rad(M + 2 * F));
    JDE +=  0.00038 * E  * Math.sin(rad(M - 2 * F));
    JDE += -0.00024 * E  * Math.sin(rad(2 * Mp - M));
    JDE += -0.00017 * Math.sin(rad(Om));
    JDE += -0.00007 * Math.sin(rad(Mp + 2 * M));
    JDE +=  0.00004 * Math.sin(rad(2 * Mp - 2 * F));
    JDE +=  0.00004 * Math.sin(rad(3 * M));
    JDE +=  0.00003 * Math.sin(rad(Mp + M - 2 * F));
    JDE +=  0.00003 * Math.sin(rad(2 * Mp + 2 * F));
    JDE += -0.00003 * Math.sin(rad(Mp + M + 2 * F));
    JDE +=  0.00003 * Math.sin(rad(Mp - M + 2 * F));
    JDE += -0.00002 * Math.sin(rad(Mp - M - 2 * F));
    JDE += -0.00002 * Math.sin(rad(3 * Mp + M));
    JDE +=  0.00002 * Math.sin(rad(4 * Mp));

  } else if (phase === 0.5) {
    // ── Full Moon (Meeus Table 47.a, different coefficients) ─
    JDE += -0.40614 * Math.sin(rad(Mp));
    JDE +=  0.17302 * E  * Math.sin(rad(M));
    JDE +=  0.01614 * Math.sin(rad(2 * Mp));
    JDE +=  0.01043 * Math.sin(rad(2 * F));
    JDE +=  0.00734 * E  * Math.sin(rad(Mp - M));
    JDE += -0.00515 * E  * Math.sin(rad(Mp + M));
    JDE +=  0.00209 * E2 * Math.sin(rad(2 * M));
    JDE += -0.00111 * Math.sin(rad(Mp - 2 * F));
    JDE += -0.00057 * Math.sin(rad(Mp + 2 * F));
    JDE +=  0.00056 * E  * Math.sin(rad(2 * Mp + M));
    JDE += -0.00042 * Math.sin(rad(3 * Mp));
    JDE +=  0.00042 * E  * Math.sin(rad(M + 2 * F));
    JDE +=  0.00038 * E  * Math.sin(rad(M - 2 * F));
    JDE += -0.00024 * E  * Math.sin(rad(2 * Mp - M));
    JDE += -0.00017 * Math.sin(rad(Om));
    JDE += -0.00007 * Math.sin(rad(Mp + 2 * M));
    JDE +=  0.00004 * Math.sin(rad(2 * Mp - 2 * F));
    JDE +=  0.00004 * Math.sin(rad(3 * M));
    JDE +=  0.00003 * Math.sin(rad(Mp + M - 2 * F));
    JDE +=  0.00003 * Math.sin(rad(2 * Mp + 2 * F));
    JDE += -0.00003 * Math.sin(rad(Mp + M + 2 * F));
    JDE +=  0.00003 * Math.sin(rad(Mp - M + 2 * F));
    JDE += -0.00002 * Math.sin(rad(Mp - M - 2 * F));
    JDE += -0.00002 * Math.sin(rad(3 * Mp + M));
    JDE +=  0.00002 * Math.sin(rad(4 * Mp));

  } else {
    // ── Quarter Moons (Meeus Table 47.b) ─────────────────
    JDE += -0.62801 * Math.sin(rad(Mp));
    JDE +=  0.17172 * E  * Math.sin(rad(M));
    JDE += -0.01183 * E  * Math.sin(rad(Mp + M));
    JDE +=  0.00862 * Math.sin(rad(2 * Mp));
    JDE +=  0.00804 * Math.sin(rad(2 * F));
    JDE +=  0.00454 * E  * Math.sin(rad(Mp - M));
    JDE +=  0.00204 * E2 * Math.sin(rad(2 * M));
    JDE += -0.00180 * Math.sin(rad(Mp - 2 * F));
    JDE += -0.00070 * Math.sin(rad(Mp + 2 * F));
    JDE += -0.00040 * Math.sin(rad(3 * Mp));
    JDE += -0.00034 * E  * Math.sin(rad(2 * Mp - M));
    JDE +=  0.00032 * E  * Math.sin(rad(M + 2 * F));
    JDE +=  0.00032 * E  * Math.sin(rad(M - 2 * F));
    JDE += -0.00028 * E2 * Math.sin(rad(Mp + 2 * M));
    JDE +=  0.00027 * E  * Math.sin(rad(2 * Mp + M));
    JDE += -0.00017 * Math.sin(rad(Om));
    JDE += -0.00005 * Math.sin(rad(Mp - M - 2 * F));
    JDE +=  0.00004 * Math.sin(rad(2 * Mp + 2 * F));
    JDE += -0.00004 * Math.sin(rad(Mp + M + 2 * F));
    JDE +=  0.00004 * Math.sin(rad(Mp - 2 * M));
    JDE +=  0.00003 * Math.sin(rad(Mp + M - 2 * F));
    JDE +=  0.00003 * Math.sin(rad(3 * M));
    JDE +=  0.00002 * Math.sin(rad(2 * Mp - 2 * F));
    JDE +=  0.00002 * Math.sin(rad(Mp - M + 2 * F));
    JDE += -0.00002 * Math.sin(rad(3 * Mp + M));

    // W term for quarter moons (sign depends on first vs last quarter)
    const W = 0.00306
      - 0.00038 * E  * Math.cos(rad(M))
      + 0.00026 * Math.cos(rad(Mp))
      - 0.00002 * Math.cos(rad(Mp - M))
      + 0.00002 * Math.cos(rad(Mp + M))
      + 0.00002 * Math.cos(rad(2 * F));
    if (phase === 0.25) JDE += W;
    else                JDE -= W;  // last quarter
  }

  // Additional corrections from Meeus eqs. 47.a / 47.b (planetary & other)
  // A1 (Venus), A2 (Jupiter), A3 (Moon's argument)
  const A1  = norm360(299.77 +  0.107408 * k - 0.009173 * T2);
  const A2  = norm360(251.88 +  0.016321 * k);
  const A3  = norm360(251.83 + 26.651886 * k);
  const A4  = norm360(349.42 + 36.412478 * k);
  const A5  = norm360( 84.66 + 18.206239 * k);
  const A6  = norm360(141.74 + 53.303771 * k);
  const A7  = norm360(207.14 +  2.453732 * k);
  const A8  = norm360(154.84 +  7.306860 * k);
  const A9  = norm360( 34.52 + 27.261239 * k);
  const A10 = norm360(207.19 +  0.121824 * k);
  const A11 = norm360(291.34 +  1.844379 * k);
  const A12 = norm360(161.72 + 24.198154 * k);
  const A13 = norm360(239.56 + 25.513099 * k);
  const A14 = norm360(331.55 +  3.592518 * k);

  const addCorr =
      0.000325 * Math.sin(rad(A1))
    + 0.000165 * Math.sin(rad(A2))
    + 0.000164 * Math.sin(rad(A3))
    + 0.000126 * Math.sin(rad(A4))
    + 0.000110 * Math.sin(rad(A5))
    + 0.000062 * Math.sin(rad(A6))
    + 0.000060 * Math.sin(rad(A7))
    + 0.000056 * Math.sin(rad(A8))
    + 0.000047 * Math.sin(rad(A9))
    + 0.000042 * Math.sin(rad(A10))
    + 0.000040 * Math.sin(rad(A11))
    + 0.000037 * Math.sin(rad(A12))
    + 0.000035 * Math.sin(rad(A13))
    + 0.000023 * Math.sin(rad(A14));

  JDE += addCorr;
  return JDE;
}

// Approximate k (lunation number) for a given date
function dateToK(date) {
  const yr = date.getUTCFullYear()
    + (date.getUTCMonth() + (date.getUTCDate() - 1) / 31) / 12;
  return Math.round((yr - 2000) * 12.3685);
}

/**
 * Get all new moons in a window spanning approximately gregYear-1 … gregYear+2.
 */
export function getNewMoons(gregYear) {
  const kStart = dateToK(new Date(Date.UTC(gregYear - 1, 0, 1))) - 2;
  const kEnd   = dateToK(new Date(Date.UTC(gregYear + 2, 0, 1))) + 2;
  const results = [];
  for (let k = kStart; k <= kEnd; k++) {
    results.push(jdeToDate(lunarPhaseJDE(k, 0)));
  }
  return results.sort((a, b) => a - b);
}

/**
 * Get all four moon phases for a window around gregYear.
 * Returns [{date, phase}] sorted ascending.
 */
export function getMoonPhases(gregYear) {
  const kStart = dateToK(new Date(Date.UTC(gregYear - 1, 0, 1))) - 2;
  const kEnd   = dateToK(new Date(Date.UTC(gregYear + 2, 0, 1))) + 2;
  const results = [];
  for (let k = kStart; k <= kEnd; k++) {
    results.push({ date: jdeToDate(lunarPhaseJDE(k, 0)),    phase: 'new'   });
    results.push({ date: jdeToDate(lunarPhaseJDE(k, 0.25)), phase: 'first' });
    results.push({ date: jdeToDate(lunarPhaseJDE(k, 0.5)),  phase: 'full'  });
    results.push({ date: jdeToDate(lunarPhaseJDE(k, 0.75)), phase: 'last'  });
  }
  return results.sort((a, b) => a.date - b.date);
}

/**
 * Solstice and equinox JDEs for gregYear (Meeus Ch. 27).
 */
export function getSolsticesEquinoxes(gregYear) {
  const T  = (gregYear - 2000) / 1000;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;

  // Mean JDEs (Meeus Table 27.a)
  const means = {
    springEq:  2451623.80984 + 365242.37404*T + 0.05169*T2 - 0.00411*T3 - 0.00057*T4,
    summerSol: 2451716.56767 + 365241.62603*T + 0.00325*T2 + 0.00888*T3 - 0.00030*T4,
    autumnEq:  2451810.21715 + 365242.01767*T - 0.11575*T2 + 0.00337*T3 + 0.00078*T4,
    winterSol: 2451900.05952 + 365242.74049*T - 0.06223*T2 - 0.00823*T3 + 0.00032*T4,
  };

  // Periodic correction (Meeus Table 27.b, 24 terms)
  const TERMS = [
    [485, 324.96,   1934.136],[203, 337.23,  32964.467],[199, 342.08,     20.186],
    [182,  27.85, 445267.112],[156,  73.14,  45036.886],[136, 171.52,  22518.443],
    [ 77, 222.54,  65928.934],[ 74, 296.72,   3034.906],[ 70, 243.58,   9037.513],
    [ 58, 119.81,  33718.147],[ 52, 297.17,    150.678],[ 50,  21.02,   2281.226],
    [ 45, 247.54,  29929.562],[ 44, 325.15,  31555.956],[ 29,  60.93,   4443.417],
    [ 18, 155.12,  67555.328],[ 17, 288.79,   4562.452],[ 16, 198.04,  62894.029],
    [ 14, 199.76,  31557.381],[ 12,  95.39,  14577.848],[ 10, 287.11,  31555.150],
    [  8, 320.81,  29929.931],[  6, 227.73,  31436.921],[  5,  15.45,   2452.950],
  ];

  function correction(J0) {
    const Tc = (J0 - 2451545.0) / 36525;
    const W  = norm360(35999.373 * Tc - 2.47);
    const dL = 1 + 0.0334 * Math.cos(rad(W)) + 0.0007 * Math.cos(rad(2 * W));
    let S = 0;
    for (const [A, B, C] of TERMS) S += A * Math.cos(rad(B + C * Tc));
    return (S * 0.00001) / dL;
  }

  const result = {};
  for (const [key, J0] of Object.entries(means)) {
    result[key] = jdeToDate(J0 + correction(J0));
  }
  return result;
}

/** Format a Date as UTC "YYYY-MM-DD" string */
export function utcDateStr(date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth()+1).padStart(2,'0')}-${String(date.getUTCDate()).padStart(2,'0')}`;
}

/** Number of whole UTC days from a to b (positive if b is later) */
export function daysBetween(a, b) {
  return Math.floor(b.getTime() / 86400000) - Math.floor(a.getTime() / 86400000);
}
