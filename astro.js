// ═══ Fairy Calendar — astro.js ═══

// ─── Constants ───────────────────────────────────────────────────────
const DEG    = Math.PI / 180;    // degrees → radians
const HOURS  = Math.PI / 12;     // RA hours → radians
const R2D    = 180 / Math.PI;    // radians → degrees
const R2H    = 12 / Math.PI;     // radians → RA hours
const J2000  = 2451545.0;        // J2000.0 epoch (Julian Date)
const JC     = 36525;            // days per Julian century
const MS_DAY = 86400000;         // milliseconds per day
const JD_UNIX = 2440587.5;       // JD at Unix epoch (1970-01-01)

// ─── Core utilities ──────────────────────────────────────────────────
function dateToJDE(date) { return date.getTime() / MS_DAY + JD_UNIX; }
function jdeToDate(jde)  { return new Date((jde - JD_UNIX) * MS_DAY); }
function rad(deg)        { return deg * DEG; }
function norm360(x)      { return ((x % 360) + 360) % 360; }
function norm24(x)       { return ((x % 24) + 24) % 24; }
function clampSin(x)     { return x < -1 ? -1 : x > 1 ? 1 : x; }

function lunarPhaseJDE(k, phase) {
  const kp = k + phase;
  const T  = kp / 1236.85, T2 = T*T, T3 = T2*T, T4 = T3*T;
  let JDE = 2451550.09766 + 29.530588861*kp + 0.00015437*T2 - 0.000000150*T3 + 0.00000000073*T4;
  const M  = norm360(2.5534     + 29.10535670 *kp - 0.0000014*T2 - 0.00000011*T3);
  const Mp = norm360(201.5643   + 385.81693528*kp + 0.0107582*T2 + 0.00001238*T3 - 0.000000058*T4);
  const F  = norm360(160.7108   + 390.67050284*kp - 0.0016118*T2 - 0.00000227*T3 + 0.000000011*T4);
  const Om = norm360(124.7746   -   1.56375588*kp + 0.0020672*T2 + 0.00000215*T3);
  const E  = 1 - 0.002516*T - 0.0000074*T2, E2 = E*E;

  if (phase === 0) {
    JDE += -0.40720*Math.sin(rad(Mp));         JDE +=  0.17241*E *Math.sin(rad(M));
    JDE +=  0.01608*Math.sin(rad(2*Mp));        JDE +=  0.01039*Math.sin(rad(2*F));
    JDE +=  0.00739*E *Math.sin(rad(Mp-M));     JDE += -0.00514*E *Math.sin(rad(Mp+M));
    JDE +=  0.00208*E2*Math.sin(rad(2*M));      JDE += -0.00111*Math.sin(rad(Mp-2*F));
    JDE += -0.00057*Math.sin(rad(Mp+2*F));      JDE +=  0.00056*E *Math.sin(rad(2*Mp+M));
    JDE += -0.00042*Math.sin(rad(3*Mp));        JDE +=  0.00042*E *Math.sin(rad(M+2*F));
    JDE +=  0.00038*E *Math.sin(rad(M-2*F));    JDE += -0.00024*E *Math.sin(rad(2*Mp-M));
    JDE += -0.00017*Math.sin(rad(Om));          JDE += -0.00007*Math.sin(rad(Mp+2*M));
    JDE +=  0.00004*Math.sin(rad(2*Mp-2*F));    JDE +=  0.00004*Math.sin(rad(3*M));
    JDE +=  0.00003*Math.sin(rad(Mp+M-2*F));    JDE +=  0.00003*Math.sin(rad(2*Mp+2*F));
    JDE += -0.00003*Math.sin(rad(Mp+M+2*F));    JDE +=  0.00003*Math.sin(rad(Mp-M+2*F));
    JDE += -0.00002*Math.sin(rad(Mp-M-2*F));    JDE += -0.00002*Math.sin(rad(3*Mp+M));
    JDE +=  0.00002*Math.sin(rad(4*Mp));
  } else if (phase === 0.5) {
    JDE += -0.40614*Math.sin(rad(Mp));          JDE +=  0.17302*E *Math.sin(rad(M));
    JDE +=  0.01614*Math.sin(rad(2*Mp));         JDE +=  0.01043*Math.sin(rad(2*F));
    JDE +=  0.00734*E *Math.sin(rad(Mp-M));      JDE += -0.00515*E *Math.sin(rad(Mp+M));
    JDE +=  0.00209*E2*Math.sin(rad(2*M));       JDE += -0.00111*Math.sin(rad(Mp-2*F));
    JDE += -0.00057*Math.sin(rad(Mp+2*F));       JDE +=  0.00056*E *Math.sin(rad(2*Mp+M));
    JDE += -0.00042*Math.sin(rad(3*Mp));         JDE +=  0.00042*E *Math.sin(rad(M+2*F));
    JDE +=  0.00038*E *Math.sin(rad(M-2*F));     JDE += -0.00024*E *Math.sin(rad(2*Mp-M));
    JDE += -0.00017*Math.sin(rad(Om));           JDE += -0.00007*Math.sin(rad(Mp+2*M));
    JDE +=  0.00004*Math.sin(rad(2*Mp-2*F));     JDE +=  0.00004*Math.sin(rad(3*M));
    JDE +=  0.00003*Math.sin(rad(Mp+M-2*F));     JDE +=  0.00003*Math.sin(rad(2*Mp+2*F));
    JDE += -0.00003*Math.sin(rad(Mp+M+2*F));     JDE +=  0.00003*Math.sin(rad(Mp-M+2*F));
    JDE += -0.00002*Math.sin(rad(Mp-M-2*F));     JDE += -0.00002*Math.sin(rad(3*Mp+M));
    JDE +=  0.00002*Math.sin(rad(4*Mp));
  } else {
    JDE += -0.62801*Math.sin(rad(Mp));           JDE +=  0.17172*E *Math.sin(rad(M));
    JDE += -0.01183*E *Math.sin(rad(Mp+M));      JDE +=  0.00862*Math.sin(rad(2*Mp));
    JDE +=  0.00804*Math.sin(rad(2*F));          JDE +=  0.00454*E *Math.sin(rad(Mp-M));
    JDE +=  0.00204*E2*Math.sin(rad(2*M));       JDE += -0.00180*Math.sin(rad(Mp-2*F));
    JDE += -0.00070*Math.sin(rad(Mp+2*F));       JDE += -0.00040*Math.sin(rad(3*Mp));
    JDE += -0.00034*E *Math.sin(rad(2*Mp-M));    JDE +=  0.00032*E *Math.sin(rad(M+2*F));
    JDE +=  0.00032*E *Math.sin(rad(M-2*F));     JDE += -0.00028*E2*Math.sin(rad(Mp+2*M));
    JDE +=  0.00027*E *Math.sin(rad(2*Mp+M));    JDE += -0.00017*Math.sin(rad(Om));
    JDE += -0.00005*Math.sin(rad(Mp-M-2*F));     JDE +=  0.00004*Math.sin(rad(2*Mp+2*F));
    JDE += -0.00004*Math.sin(rad(Mp+M+2*F));     JDE +=  0.00004*Math.sin(rad(Mp-2*M));
    JDE +=  0.00003*Math.sin(rad(Mp+M-2*F));     JDE +=  0.00003*Math.sin(rad(3*M));
    JDE +=  0.00002*Math.sin(rad(2*Mp-2*F));     JDE +=  0.00002*Math.sin(rad(Mp-M+2*F));
    JDE += -0.00002*Math.sin(rad(3*Mp+M));
    const W = 0.00306 - 0.00038*E*Math.cos(rad(M)) + 0.00026*Math.cos(rad(Mp))
            - 0.00002*Math.cos(rad(Mp-M)) + 0.00002*Math.cos(rad(Mp+M)) + 0.00002*Math.cos(rad(2*F));
    if (phase === 0.25) JDE += W; else JDE -= W;
  }

  // Planetary corrections
  const A1=norm360(299.77+0.107408*k-0.009173*T2), A2=norm360(251.88+0.016321*k),
        A3=norm360(251.83+26.651886*k),             A4=norm360(349.42+36.412478*k),
        A5=norm360(84.66+18.206239*k),              A6=norm360(141.74+53.303771*k),
        A7=norm360(207.14+2.453732*k),              A8=norm360(154.84+7.306860*k),
        A9=norm360(34.52+27.261239*k),              A10=norm360(207.19+0.121824*k),
        A11=norm360(291.34+1.844379*k),             A12=norm360(161.72+24.198154*k),
        A13=norm360(239.56+25.513099*k),            A14=norm360(331.55+3.592518*k);
  JDE += 0.000325*Math.sin(rad(A1))  + 0.000165*Math.sin(rad(A2))  + 0.000164*Math.sin(rad(A3))
       + 0.000126*Math.sin(rad(A4))  + 0.000110*Math.sin(rad(A5))  + 0.000062*Math.sin(rad(A6))
       + 0.000060*Math.sin(rad(A7))  + 0.000056*Math.sin(rad(A8))  + 0.000047*Math.sin(rad(A9))
       + 0.000042*Math.sin(rad(A10)) + 0.000040*Math.sin(rad(A11)) + 0.000037*Math.sin(rad(A12))
       + 0.000035*Math.sin(rad(A13)) + 0.000023*Math.sin(rad(A14));
  return JDE;
}

function dateToK(date) {
  const yr = date.getUTCFullYear() + (date.getUTCMonth() + (date.getUTCDate()-1)/31) / 12;
  return Math.round((yr - 2000) * 12.3685);
}

function _lunarKRange(gregYear) {
  const kStart = dateToK(new Date(Date.UTC(gregYear-1,0,1))) - 2;
  const kEnd   = dateToK(new Date(Date.UTC(gregYear+2,0,1))) + 2;
  return { kStart, kEnd };
}

function getNewMoons(gregYear) {
  const { kStart, kEnd } = _lunarKRange(gregYear);
  const r = [];
  for (let k = kStart; k <= kEnd; k++) r.push(jdeToDate(lunarPhaseJDE(k, 0)));
  return r.sort((a,b) => a-b);
}

function getMoonPhases(gregYear) {
  const { kStart, kEnd } = _lunarKRange(gregYear);
  const r = [];
  for (let k = kStart; k <= kEnd; k++) {
    r.push({date:jdeToDate(lunarPhaseJDE(k,0)),    phase:'new'});
    r.push({date:jdeToDate(lunarPhaseJDE(k,0.25)), phase:'first'});
    r.push({date:jdeToDate(lunarPhaseJDE(k,0.5)),  phase:'full'});
    r.push({date:jdeToDate(lunarPhaseJDE(k,0.75)), phase:'last'});
  }
  return r.sort((a,b) => a.date-b.date);
}

function getSolsticesEquinoxes(gregYear) {
  const T=( gregYear-2000)/1000, T2=T*T, T3=T2*T, T4=T3*T;
  const means = {
    springEq:  2451623.80984+365242.37404*T+0.05169*T2-0.00411*T3-0.00057*T4,
    summerSol: 2451716.56767+365241.62603*T+0.00325*T2+0.00888*T3-0.00030*T4,
    autumnEq:  2451810.21715+365242.01767*T-0.11575*T2+0.00337*T3+0.00078*T4,
    winterSol: 2451900.05952+365242.74049*T-0.06223*T2-0.00823*T3+0.00032*T4,
  };
  const TERMS=[[485,324.96,1934.136],[203,337.23,32964.467],[199,342.08,20.186],
    [182,27.85,445267.112],[156,73.14,45036.886],[136,171.52,22518.443],
    [77,222.54,65928.934],[74,296.72,3034.906],[70,243.58,9037.513],
    [58,119.81,33718.147],[52,297.17,150.678],[50,21.02,2281.226],
    [45,247.54,29929.562],[44,325.15,31555.956],[29,60.93,4443.417],
    [18,155.12,67555.328],[17,288.79,4562.452],[16,198.04,62894.029],
    [14,199.76,31557.381],[12,95.39,14577.848],[10,287.11,31555.150],
    [8,320.81,29929.931],[6,227.73,31436.921],[5,15.45,2452.950]];
  function correction(J0) {
    const Tc=(J0-J2000)/JC, W=norm360(35999.373*Tc-2.47);
    const dL=1+0.0334*Math.cos(rad(W))+0.0007*Math.cos(rad(2*W));
    let S=0; for(const [A,B,C] of TERMS) S+=A*Math.cos(rad(B+C*Tc));
    return (S*0.00001)/dL;
  }
  const result={};
  for(const [key,J0] of Object.entries(means)) result[key]=jdeToDate(J0+correction(J0));
  return result;
}

function utcDateStr(date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth()+1).padStart(2,'0')}-${String(date.getUTCDate()).padStart(2,'0')}`;
}

// Convert a UTC instant to a local (observer timezone) date string
function localDateStr(date) {
  const offset = _easternOffsetHours(date);
  const local = new Date(date.getTime() + offset * 3600000);
  return utcDateStr(local);
}

function localTodayStr() {
  try {
    const tz = OBSERVER.tz || Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(new Date());
  } catch(_) {
    return utcDateStr(new Date(Date.now() + Math.round(OBSERVER.lon / 15) * 3600000));
  }
}

function daysBetween(a, b) {
  return Math.floor(b.getTime()/MS_DAY) - Math.floor(a.getTime()/MS_DAY);
}

// Perigee / Apogee — Meeus Ch. 50
function getPerigeApogee(gregYear) {
  const events = [];
  const kStart = Math.floor((gregYear - 1 - 2000) * 13.2555) - 2;
  const kEnd   = Math.ceil( (gregYear + 2 - 2000) * 13.2555) + 2;
  for (let ki = kStart; ki <= kEnd; ki++) {
    for (const [half, evtType] of [[0,'perigee'],[0.5,'apogee']]) {
      const k = ki + half, T = k / 1325.55, T2 = T*T;
      let JDE = 2451534.6408 + 27.55454989*k - 0.0006691*T2;
      const D = norm360(171.9179 + 335.9106046*k - 0.0100383*T2);
      const M = norm360(347.3477 +  27.1577721*k - 0.0008130*T2);
      const F = norm360(316.6109 + 364.5287911*k - 0.0125053*T2);
      if (half === 0) {
        JDE += -1.6769*Math.sin(rad(2*D)) + 0.4589*Math.sin(rad(4*D))
             - 0.1856*Math.sin(rad(6*D))  + 0.0883*Math.sin(rad(8*D))
             - 0.0773*Math.sin(rad(2*D-M))+ 0.0502*Math.sin(rad(M))
             - 0.0460*Math.sin(rad(2*F))  + 0.0422*Math.sin(rad(10*D))
             - 0.0256*Math.sin(rad(2*D+M))+ 0.0253*Math.sin(rad(12*D));
      } else {
        JDE += -0.4926*Math.sin(rad(2*D)) + 0.1093*Math.sin(rad(4*D))
             - 0.0652*Math.sin(rad(6*D))  + 0.0235*Math.sin(rad(8*D))
             - 0.0190*Math.sin(rad(2*D-M))+ 0.0100*Math.sin(rad(M))
             - 0.0080*Math.sin(rad(2*F))  - 0.0064*Math.sin(rad(2*D+M));
      }
      const date = jdeToDate(JDE);
      const y = date.getUTCFullYear();
      if (y >= gregYear-1 && y <= gregYear+1) events.push({date, type:evtType});
    }
  }
  return events.sort((a,b) => a.date-b.date);
}

// Eclipse detection — simplified F-angle method (Meeus Ch. 54)
function detectEclipses(phaseSets) {
  const eclipses = [];
  for (const {date, phase} of phaseSets) {
    if (phase !== 'new' && phase !== 'full') continue;
    const k0 = dateToK(date);
    const k  = phase === 'new' ? k0 : k0 + 0.5;
    const T  = k / 1236.85, T2 = T*T;
    const F  = norm360(160.7108 + 390.67050284*k - 0.0016118*T2);
    const Fmod  = F % 180;
    const Fdist = Math.min(Fmod, 180 - Fmod);
    if (phase === 'full') {
      if      (Fdist < 13) eclipses.push({date, type:'lunarEclipse',  subtype:'umbral'});
      else if (Fdist < 17) eclipses.push({date, type:'lunarEclipse',  subtype:'penumbral'});
    } else {
      if      (Fdist < 12) eclipses.push({date, type:'solarEclipse',  subtype:'central'});
      else if (Fdist < 19) eclipses.push({date, type:'solarEclipse',  subtype:'partial'});
    }
  }
  return eclipses;
}

// ─── Constellation data — real J2000 star positions ─────────────────
// Each star: [RA_hours, Dec_degrees, magnitude, label_or_null]
// Lines: pairs of star indices forming the stick figure
const CONSTELLATIONS = {
  'Ursa Minor':  { lines: [0,6, 6,5, 5,4, 4,3, 3,1, 1,2, 2,4], stars: [
      // Little Dipper: handle = Polaris→δ→ε→ζ, bowl = ζ→η→β(Kochab)→γ(Pherkad)
      [2.530, 89.264, 1.97, 'Polaris'],  // 0 - α, handle tip (pole)
      [14.845, 74.156, 2.07, 'Kochab'],  // 1 - β, bowl
      [15.345, 71.834, 3.00, 'Pherkad'], // 2 - γ, bowl
      [16.292, 75.755, 5.00, null],       // 3 - η, bowl
      [15.734, 77.795, 4.32, null],       // 4 - ζ, bowl/handle junction
      [16.766, 82.037, 4.21, null],       // 5 - ε, handle
      [17.537, 86.586, 4.35, null],       // 6 - δ (Yildun), handle
    ] },

  'Cassiopeia':  { lines: [0,1, 1,2, 2,3, 3,4], stars: [
      [0.153, 59.150, 2.24, 'Caph'],      // 0 - β
      [0.675, 56.537, 2.24, 'Schedar'],   // 1 - α
      [0.945, 60.717, 2.47, null],         // 2 - γ (Tsih)
      [1.430, 60.235, 2.68, 'Ruchbah'],   // 3 - δ
      [1.907, 63.670, 3.35, 'Segin'],     // 4 - ε
    ] },

  'Cepheus':     { lines: [0,4, 4,3, 3,1, 1,2, 2,0], stars: [
      [21.310, 62.586, 2.45, 'Alderamin'],// 0
      [23.656, 77.632, 3.23, null],        // 1 - α-like (Errai γ)
      [21.478, 70.561, 3.21, 'Alfirk'],   // 2 - β
      [22.828, 66.200, 3.52, null],        // 3 - ι
      [22.181, 58.201, 3.43, null],        // 4 - ζ
    ] },

  'Draco':       { lines: [0,3, 3,2, 2,1, 1,4, 4,5, 5,6, 6,7, 2,8], stars: [
      [17.943, 51.489, 2.24, 'Eltanin'],  // 0 - γ
      [16.400, 61.514, 2.73, null],        // 1 - η
      [17.147, 65.715, 2.79, null],        // 2 - ζ
      [17.507, 52.301, 2.99, 'Rastaban'], // 3 - β
      [15.415, 58.966, 3.17, null],        // 4 - ι
      [14.073, 64.376, 3.29, 'Thuban'],   // 5 - α
      [12.558, 69.788, 3.83, null],        // 6 - κ
      [11.523, 69.331, 3.84, null],        // 7 - λ
      [19.209, 67.662, 3.07, null],        // 8 - δ (Altais)
    ] },

  'Andromeda':   { lines: [0,3, 3,1, 1,2, 1,4], stars: [
      [0.140, 29.091, 2.07, 'Alpheratz'], // 0
      [1.163, 35.621, 2.07, 'Mirach'],    // 1
      [2.065, 42.330, 2.10, 'Almach'],    // 2
      [0.655, 30.861, 3.27, null],         // 3 - δ
      [1.162, 47.242, 3.57, null],         // 4 - μ (near M31)
    ] },

  'Pegasus':     { lines: [0,1, 1,2, 2,0, 0,3, 3,4], stars: [
      [23.079, 15.205, 2.49, 'Markab'],   // 0 - α
      [23.063, 28.083, 2.44, 'Scheat'],   // 1 - β
      [0.221, 15.183, 2.83, 'Algenib'],   // 2 - γ
      [21.736, 9.875, 2.38, 'Enif'],       // 3 - ε
      [22.170, 6.198, 3.48, null],         // 4 - θ
    ],
    // Great Square: Alpheratz(And 0)–Scheat–Markab–Algenib; Enif = nose
    // Note: The 4th corner of the Great Square is Alpheratz in Andromeda
  },

  'Pisces':      { lines: [0,2, 2,6, 6,1, 2,3, 3,4, 4,5], stars: [
      [2.034, 2.764, 3.62, null],          // 0 - η (brightest)
      [1.525, 15.346, 4.13, null],         // 1 - ο
      [1.757, 9.158, 3.70, null],          // 2 - α (Alrescha)
      [23.989, 6.863, 4.13, null],         // 3 - γ
      [23.666, 5.626, 4.27, null],         // 4 - κ
      [23.286, 3.282, 4.42, null],         // 5 - λ
      [1.049, 7.890, 4.48, null],          // 6 - ε
    ] },

  'Aries':       { lines: [0,1, 1,2], stars: [
      [2.120, 23.462, 2.01, 'Hamal'],     // 0
      [1.911, 20.808, 2.64, 'Sheratan'],  // 1
      [1.892, 19.294, 3.88, null],         // 2 - 41 Ari
    ] },

  'Triangulum':  { lines: [0,1, 1,2, 2,0], stars: [
      [1.885, 29.579, 3.00, null],         // 0 - β
      [2.159, 34.987, 3.41, null],         // 1 - α
      [2.289, 33.847, 4.01, null],         // 2 - γ
    ] },

  'Perseus':     { lines: [4,0, 0,3, 3,2, 2,5, 0,1], stars: [
      [3.405, 49.861, 1.79, 'Mirfak'],    // 0
      [3.136, 40.957, 2.09, 'Algol'],     // 1
      [3.964, 40.010, 2.85, null],         // 2 - ζ
      [3.715, 47.788, 2.89, null],         // 3 - δ
      [3.083, 53.506, 2.93, null],         // 4 - ε
      [3.902, 31.884, 3.39, null],         // 5 - ρ
    ] },

  'Taurus':      { lines: [0,4, 4,3, 3,2, 0,5, 1,5], stars: [
      [4.598, 16.510, 0.87, 'Aldebaran'], // 0
      [5.438, 28.608, 1.65, 'Elnath'],    // 1 - β (shared w/ Auriga)
      [4.330, 15.628, 3.54, null],         // 2 - γ (Hyades V tip)
      [4.476, 19.181, 3.84, null],         // 3 - δ¹ (Hyades)
      [4.383, 17.543, 3.40, null],         // 4 - ε
      [5.627, 21.143, 2.97, null],         // 5 - ζ (horn tip)
      [3.792, 24.105, 2.87, 'Alcyone'],   // 6 - Pleiades η Tau
    ] },

  'Auriga':      { lines: [0,1, 1,2, 2,5, 5,4, 4,3, 3,0], stars: [
      [5.278, 45.998, 0.08, 'Capella'],   // 0
      [5.995, 44.947, 1.90, 'Menkalinan'],// 1
      [5.992, 37.213, 2.69, null],         // 2 - θ
      [5.033, 43.823, 3.03, null],         // 3 - ε
      [5.108, 41.234, 3.17, null],         // 4 - η
      [4.950, 33.166, 2.65, 'Hassaleh'], // 5 - ι
    ] },

  'Orion':       { lines: [0,5, 5,4, 4,3, 3,2, 2,6, 6,1, 1,2, 0,4], stars: [
      [5.919, 7.407, 0.45, 'Betelgeuse'], // 0
      [5.242, -8.202, 0.18, 'Rigel'],     // 1
      [5.679, -1.943, 1.69, null],         // 2 - ζ (Alnitak)
      [5.604, -1.202, 1.69, null],         // 3 - ε (Alnilam)
      [5.534, -0.300, 2.25, null],         // 4 - δ (Mintaka)
      [5.419, 6.350, 1.64, 'Bellatrix'],  // 5
      [5.796, -9.670, 2.07, 'Saiph'],     // 6
    ] },

  'Canis Minor': { lines: [0,1], stars: [
      [7.655, 5.225, 0.34, 'Procyon'],    // 0
      [7.452, 8.289, 2.89, 'Gomeisa'],   // 1
    ] },

  'Canis Major': { lines: [0,5, 5,1, 0,4, 4,2, 2,3, 4,3], stars: [
      [6.752, -16.716, -1.44, 'Sirius'], // 0
      [6.378, -17.956, 1.98, 'Mirzam'],  // 1 - β
      [7.140, -26.393, 1.50, 'Wezen'],   // 2 - δ
      [6.977, -28.972, 1.83, 'Adhara'],  // 3 - ε
      [7.063, -23.833, 2.44, null],        // 4 - σ
      [6.611, -19.256, 3.02, null],        // 5 - ν²
    ] },

  'Gemini':      { lines: [0,3, 3,2, 1,4, 4,5, 0,1], stars: [
      [7.577, 31.888, 1.16, 'Pollux'],   // 0 - β
      [7.577, 31.888, 1.58, 'Castor'],   // 1 - α — corrected below
      [6.629, 16.399, 1.93, 'Alhena'],   // 2 - γ
      [7.335, 21.982, 2.88, null],         // 3 - δ
      [6.732, 25.131, 3.06, null],         // 4 - μ
      [6.383, 22.507, 3.36, null],         // 5 - ε (Mebsuta)
    ],
    // Fix Castor RA (it's distinct from Pollux)
  },

  'Cancer':      { lines: [0,1, 1,2, 1,3], stars: [
      [8.745, 18.154, 3.53, null],         // 0 - β (Tarf)
      [8.975, 11.858, 3.94, null],         // 1 - δ
      [8.721, 21.469, 4.02, null],         // 2 - ι
      [8.778, 28.760, 4.66, null],         // 3 - γ
    ] },

  'Leo':         { lines: [8,6, 6,7, 7,2, 2,5, 5,0, 0,4, 4,3, 3,1, 2,3], stars: [
      [10.140, 11.967, 1.36, 'Regulus'],  // 0 - α
      [11.818, 14.572, 2.14, 'Denebola'],// 1 - β
      [10.333, 19.842, 1.98, 'Algieba'], // 2 - γ
      [11.235, 20.524, 2.56, null],        // 3 - δ (Zosma)
      [11.238, 15.430, 3.33, null],        // 4 - θ (Chertan)
      [10.122, 16.763, 3.48, null],        // 5 - η
      [9.879, 26.007, 3.44, null],         // 6 - μ (Rasalas)
      [10.278, 23.417, 2.61, null],        // 7 - ζ (Adhafera)
      [9.764, 23.774, 2.98, null],         // 8 - ε
    ] },

  'Ursa Major':  { lines: [0,1, 1,2, 2,3, 3,0, 3,4, 4,5, 5,6], stars: [
      [11.062, 61.751, 1.81, 'Dubhe'],    // 0 - α
      [11.031, 56.382, 2.34, 'Merak'],    // 1 - β
      [11.897, 53.695, 2.41, 'Phecda'],   // 2 - γ
      [12.257, 57.033, 3.32, 'Megrez'],   // 3 - δ
      [12.900, 55.960, 1.76, 'Alioth'],   // 4 - ε
      [13.399, 54.926, 2.23, 'Mizar'],    // 5 - ζ
      [13.792, 49.313, 1.85, 'Alkaid'],   // 6 - η
    ] },

  'Coma Berenices': { lines: [0,1, 1,2], stars: [
      [13.167, 17.529, 4.26, null],        // 0 - α (Diadem)
      [13.198, 27.878, 4.32, null],        // 1 - β
      [12.449, 28.269, 4.35, null],        // 2 - γ
    ] },

  'Virgo':       { lines: [1,3, 3,2, 2,5, 5,4, 2,0, 3,4], stars: [
      [13.420, -11.161, 0.98, 'Spica'],   // 0 - α
      [13.036, 10.959, 2.83, null],        // 1 - ε (Vindemiatrix)
      [12.694, -1.449, 2.74, null],        // 2 - γ (Porrima)
      [12.927, 3.397, 3.38, null],         // 3 - δ
      [11.845, 1.765, 3.89, null],         // 4 - η (Zaniah)
      [12.332, -0.667, 3.37, null],        // 5 - β (Zavijava)
    ] },

  'Corvus':      { lines: [0,1, 1,3, 3,2, 2,0], stars: [
      [12.497, -23.397, 2.58, null],       // 0 - γ (Gienah)
      [12.573, -16.516, 2.65, null],       // 1 - β (Kraz)
      [12.169, -22.620, 2.94, null],       // 2 - δ (Algorab)
      [12.140, -24.729, 2.59, null],       // 3 - ε
    ] },

  'Boötes':      { lines: [0,4, 0,3, 3,5, 5,2, 2,1, 1,6, 0,5], stars: [
      [14.261, 19.182, -0.05, 'Arcturus'],// 0 - α
      [15.032, 40.390, 3.49, 'Nekkar'],   // 1 - β
      [14.535, 38.308, 3.04, null],        // 2 - γ (Seginus)
      [14.686, 27.074, 3.47, null],        // 3 - ρ
      [13.912, 18.398, 2.68, null],        // 4 - η (Muphrid)
      [14.750, 29.745, 3.58, null],        // 5 - δ
      [14.273, 46.088, 4.18, null],        // 6 - λ
    ] },

  'Corona Bor.': { lines: [5,1, 1,0, 0,2, 2,4, 4,3], stars: [
      [15.578, 26.715, 2.22, 'Alphecca'], // 0
      [15.464, 29.106, 3.66, null],        // 1 - β (Nusakan)
      [15.713, 26.296, 3.81, null],        // 2 - γ
      [15.826, 29.611, 4.15, null],        // 3 - δ
      [16.024, 26.878, 4.14, null],        // 4 - ε
      [15.383, 31.359, 4.63, null],        // 5 - θ
    ] },

  'Libra':       { lines: [0,1, 1,2, 0,3], stars: [
      [14.848, -16.042, 2.75, null],       // 0 - α² (Zubenelgenubi)
      [15.283, -9.383, 2.61, null],        // 1 - β (Zubeneschamali)
      [15.592, -14.789, 3.91, null],       // 2 - γ
      [15.068, -25.282, 3.29, null],       // 3 - σ
    ] },

  'Scorpius':    { lines: [2,1, 1,9, 9,0, 0,3, 3,4, 4,5, 5,6, 6,7, 7,8], stars: [
      [16.490, -26.432, 1.06, 'Antares'], // 0 - α
      [16.006, -22.622, 2.29, null],       // 1 - δ (Dschubba)
      [16.091, -19.806, 2.56, null],       // 2 - β¹ (Acrab)
      [16.836, -34.293, 2.29, null],       // 3 - ε
      [16.909, -42.361, 3.62, null],       // 4 - ζ²
      [17.203, -43.239, 3.33, null],       // 5 - η
      [17.622, -42.998, 1.87, 'Sargas'],  // 6 - θ
      [17.793, -40.127, 2.41, null],       // 7 - ι¹
      [17.560, -37.104, 1.62, 'Shaula'],  // 8 - λ
      [16.353, -28.216, 2.89, null],       // 9 - σ
    ] },

  'Hercules':    { lines: [0,1, 1,2, 2,6, 0,3, 3,5, 0,5, 2,4], stars: [
      [16.688, 31.602, 2.81, null],        // 0 - ζ (Keystone)
      [17.005, 30.926, 3.16, null],        // 1 - ε
      [17.251, 24.839, 3.12, null],        // 2 - δ
      [17.251, 36.809, 2.69, null],        // 3 - π
      [17.244, 14.390, 3.48, 'Rasalgethi'],// 4 - α
      [16.504, 21.489, 2.77, 'Kornephoros'],// 5 - β
      [17.774, 27.721, 3.42, null],        // 6 - μ
    ],
    // Keystone: ζ-ε-δ-π, + extensions
  },

  'Ophiuchus':   { lines: [0,1, 1,5, 5,2, 2,3, 3,4, 0,3], stars: [
      [17.582, 12.561, 2.08, 'Rasalhague'],// 0
      [17.725, 4.567, 2.43, null],          // 1 - η (Sabik)
      [16.619, -10.567, 2.54, null],        // 2 - ζ (Han)
      [16.239, -3.694, 2.73, null],         // 3 - δ (Yed Prior)
      [16.305, -4.693, 3.23, null],         // 4 - ε (Yed Posterior)
      [17.173, -15.725, 3.19, null],        // 5 - θ
    ] },

  'Serpens':     { lines: [4,1, 1,3, 3,0, 0,2], stars: [
      [15.737, 6.426, 2.63, 'Unukalhai'],// 0 - α (Serpens Caput)
      [15.769, 15.422, 3.54, null],        // 1 - β
      [15.847, 4.478, 3.67, null],         // 2 - δ
      [15.580, 10.539, 3.71, null],        // 3 - ε
      [15.942, 15.665, 3.85, null],        // 4 - γ
    ] },

  'Lyra':        { lines: [0,2, 2,1, 1,3, 3,4, 4,2], stars: [
      [18.616, 38.784, 0.03, 'Vega'],     // 0
      [18.834, 33.363, 3.25, null],        // 1 - ζ
      [18.746, 37.605, 3.26, null],        // 2 - δ²
      [18.982, 32.690, 3.24, null],        // 3 - β (Sheliak)
      [18.978, 33.363, 3.52, null],        // 4 - γ (Sulafat)
    ] },

  'Sagittarius': { lines: [7,3, 3,0, 0,5, 3,6, 6,1, 1,4, 4,2, 2,1], stars: [
      // Teapot asterism
      [18.403, -34.384, 2.05, 'Kaus Australis'],// 0 - ε
      [18.921, -26.297, 2.05, 'Nunki'],   // 1 - σ
      [19.044, -29.880, 2.60, null],       // 2 - ζ (Ascella)
      [18.350, -29.828, 2.70, null],       // 3 - δ (Kaus Media)
      [19.116, -27.670, 3.32, null],       // 4 - τ
      [18.294, -36.762, 3.10, null],       // 5 - η
      [18.761, -26.991, 3.17, null],       // 6 - φ
      [18.467, -25.422, 2.82, null],       // 7 - λ (Kaus Borealis)
    ] },

  'Aquila':      { lines: [1,0, 0,2, 0,3, 3,4], stars: [
      [19.846, 8.868, 0.76, 'Altair'],    // 0 - α
      [19.771, 10.613, 2.72, null],        // 1 - γ (Tarazed)
      [19.922, 6.407, 3.36, null],         // 2 - β (Alshain)
      [19.425, -3.115, 3.23, null],        // 3 - θ
      [20.188, 0.822, 3.44, null],         // 4 - δ
    ] },

  'Sagitta':     { lines: [2,1, 1,0, 0,3], stars: [
      [19.979, 19.492, 3.47, null],        // 0 - γ
      [19.684, 18.014, 3.68, null],        // 1 - δ
      [19.668, 17.476, 4.37, null],        // 2 - α
      [20.082, 19.989, 4.37, null],        // 3 - β
    ] },

  'Delphinus':   { lines: [1,0, 0,2, 2,3, 3,1, 1,4], stars: [
      [20.626, 14.595, 3.64, null],        // 0 - β (Rotanev)
      [20.554, 15.912, 3.77, null],        // 1 - α (Sualocin)
      [20.724, 15.074, 4.03, null],        // 2 - γ
      [20.777, 14.781, 4.43, null],        // 3 - δ
      [20.553, 11.303, 3.81, null],        // 4 - ε
    ] },

  'Cygnus':      { lines: [0,1, 1,2, 3,1, 1,4], stars: [
      [20.690, 45.280, 1.25, 'Deneb'],    // 0 - α
      [20.370, 40.257, 2.23, 'Sadr'],     // 1 - γ
      [19.512, 27.960, 3.05, 'Albireo'], // 2 - β
      [19.749, 45.131, 2.48, null],        // 3 - δ
      [20.770, 33.970, 2.46, null],        // 4 - ε (Gienah)
    ] },

  'Capricornus': { lines: [0,1, 1,2, 2,3, 3,5, 5,4, 4,0], stars: [
      [20.294, -12.508, 3.58, null],       // 0 - α² (Algedi)
      [20.350, -14.782, 3.05, null],       // 1 - β (Dabih)
      [20.768, -25.271, 3.99, null],       // 2 - ψ
      [20.864, -26.919, 4.11, null],       // 3 - ω
      [21.784, -16.127, 2.85, null],       // 4 - δ (Deneb Algedi)
      [21.668, -16.662, 3.67, null],       // 5 - γ (Nashira)
    ] },

  'Aquarius':    { lines: [0,1, 1,2, 2,4, 4,3, 3,5], stars: [
      [21.526, -5.571, 2.90, 'Sadalsuud'],// 0 - β
      [22.096, -0.320, 2.95, 'Sadalmelik'],// 1 - α
      [22.361, -1.387, 3.84, null],        // 2 - γ (Sadachbia)
      [22.877, -7.580, 3.77, null],        // 3 - λ
      [22.481, -0.020, 3.97, null],        // 4 - ζ
      [22.911, -15.821, 3.27, null],       // 5 - δ
    ] },
};

// Fix Gemini: Castor and Pollux have distinct positions
CONSTELLATIONS['Gemini'].stars[0] = [7.755, 28.026, 1.16, 'Pollux'];
CONSTELLATIONS['Gemini'].stars[1] = [7.577, 31.888, 1.58, 'Castor'];

// ─── Observation time helper ────────────────────────────────────────
function getEveningUTHours(gregDate) {
  // Return a fixed UTC offset (hours from midnight of gregDate) for 9pm standard time.
  // We use standard time year-round — ignoring DST — so the sky chart progresses
  // smoothly across DST transitions with no overnight jumps.
  // Determine standard UTC offset from a mid-January date (always standard time).
  try {
    const y = gregDate.getUTCFullYear();
    const janNoon = new Date(Date.UTC(y, 0, 15, 12, 0, 0));
    const localH = parseInt(janNoon.toLocaleString('en-US', {
      timeZone: OBSERVER.tz, hour: 'numeric', hour12: false
    }));
    // localH at noon UTC ≈ 12 + stdOffset  →  stdOffset = localH - 12
    const stdOffset = localH - 12;
    return 21 - stdOffset; // e.g. EST (UTC-5) → 26, JST (UTC+9) → 12
  } catch(_) {
    return 26; // fallback: ~9pm EST (UTC-5)
  }
}

// ─── Julian Date (Meeus Ch. 7, valid for all Gregorian dates) ───────
function _julianDate(Y, M, D, UT) {
  let y = Y, m = M;
  if (m <= 2) { y--; m += 12; }
  const A = Math.trunc(y / 100);
  const B = 2 - A + Math.trunc(A / 4);
  return Math.trunc(365.25 * (y + 4716)) + Math.trunc(30.6001 * (m + 1)) + D + UT/24 + B - 1524.5;
}

// ─── Precess J2000 RA/Dec to date (Meeus Ch. 21 rigorous method) ────
function _precessJ2000(raH, decDeg, T) {
  if (Math.abs(T) < 0.001) return { ra: raH, dec: decDeg };
  const zetaA  = (0.6406161 + 0.0000839*T + 0.0000050*T*T) * T;
  const zA     = (0.6406161 + 0.0003041*T + 0.0000051*T*T) * T;
  const thetaA = (0.5567530 - 0.0001185*T - 0.0000116*T*T) * T;
  const zetaR  = zetaA * DEG, zR = zA * DEG, thetaR = thetaA * DEG;
  const ra0 = raH * HOURS, dec0 = decDeg * DEG;
  const cosD = Math.cos(dec0), sinD = Math.sin(dec0);
  const cosRA_zeta = Math.cos(ra0 + zetaR);
  const sinRA_zeta = Math.sin(ra0 + zetaR);
  const A = cosD * sinRA_zeta;
  const B = Math.cos(thetaR)*cosD*cosRA_zeta - Math.sin(thetaR)*sinD;
  const C = Math.sin(thetaR)*cosD*cosRA_zeta + Math.cos(thetaR)*sinD;
  return { ra: norm24(Math.atan2(A, B) * R2H + zA / 15), dec: Math.asin(clampSin(C)) * R2D };
}

// ─── Equatorial → horizon (RA hours, Dec degrees → alt/az degrees) ──
function _altAz(raH, decDeg, LST, latR) {
  const haR  = norm24(LST - raH) * HOURS;
  const decR = decDeg * DEG;
  const sinAlt = Math.sin(decR)*Math.sin(latR) + Math.cos(decR)*Math.cos(latR)*Math.cos(haR);
  const alt = Math.asin(clampSin(sinAlt)) * R2D;
  if (alt < -5) return null;
  const cosAlt = Math.cos(alt * DEG);
  const cosAz  = cosAlt > 0.001
    ? (Math.sin(decR) - sinAlt*Math.sin(latR)) / (cosAlt*Math.cos(latR)) : 0;
  let az = Math.acos(clampSin(cosAz)) * R2D;
  if (Math.sin(haR) > 0) az = 360 - az;
  return { alt, az };
}

// ─── GMST (Greenwich Mean Sidereal Time, hours) ─────────────────────
function _gmst(T, UT) {
  return norm24(6.697375 + 2400.0513368*T + 1.0027379*UT);
}

// ─── Evening sky setup (JD → T, LST, latR for ~9pm local) ──────────
function _eveningSky(gregDate) {
  const Y = gregDate.getUTCFullYear(), M = gregDate.getUTCMonth()+1, D = gregDate.getUTCDate();
  const UT  = getEveningUTHours(gregDate);
  const JD  = _julianDate(Y, M, D, UT);
  const T   = (JD - J2000) / JC;
  const LST = norm24(_gmst(T, UT) + OBSERVER.lon / 15);
  return { T, LST, latR: OBSERVER.lat * DEG };
}

// ─── Get visible constellation positions (per-star) ─────────────────
function getVisibleConstellationPositions(gregDate) {
  const { T, LST, latR } = _eveningSky(gregDate);
  const sunRD = _sunRADecT(T);

  const result = [];
  for (const [name, con] of Object.entries(CONSTELLATIONS)) {
    const projected = [];
    let visCount = 0;
    for (const [raH, decDeg, mag, label] of con.stars) {
      const precessed = _precessJ2000(raH, decDeg, T);
      const pos = _altAz(precessed.ra, precessed.dec, LST, latR);
      if (pos && pos.alt > 0) {
        projected.push({ alt: pos.alt, az: pos.az, mag, label: label || '', visible: pos.alt > 5 });
        if (pos.alt > 5) visCount++;
      } else {
        projected.push(null);
      }
    }
    const minStars = con.stars.length <= 3 ? 1 : 2;
    if (visCount < minStars) continue;

    // Filter constellations too close to sun (twilight washout)
    const meanRA  = con.stars.reduce((s, st) => s + st[0], 0) / con.stars.length;
    const meanDec = con.stars.reduce((s, st) => s + st[1], 0) / con.stars.length;
    const meanP   = _precessJ2000(meanRA, meanDec, T);
    if (_angSep(meanP.ra * HOURS, meanP.dec * DEG, sunRD.ra, sunRD.dec) < 30) continue;

    // Centroid of visible stars
    let cx = 0, cy = 0, n = 0;
    for (const p of projected) {
      if (p && p.visible) { cx += p.az; cy += p.alt; n++; }
    }
    result.push({ name, stars: projected, centroidAz: cx/n, centroidAlt: cy/n });
  }
  return result;
}

// ─── Get visible catalog stars (real HYG catalog) ────────────────────
function getVisibleCatalogStars(gregDate) {
  if (typeof STAR_CATALOG === 'undefined') return { tier1: [], tier2: [], constellations: [] };
  const { T, LST, latR } = _eveningSky(gregDate);
  const sunRD = _sunRADecT(T);

  const tier1 = [], tier2 = [];
  // Accumulate constellation centroids
  const conAcc = {};  // abbrev → {azSum, altSum, n}

  for (const star of STAR_CATALOG) {
    const [raH, decDeg, mag, conAbbrev, name] = star;
    const precessed = _precessJ2000(raH, decDeg, T);
    const pos = _altAz(precessed.ra, precessed.dec, LST, latR);
    if (!pos || pos.alt <= 0) continue;

    const entry = { alt: pos.alt, az: pos.az, mag, name: name || null, con: conAbbrev };

    if (mag <= 4.5) {
      tier1.push(entry);
      // Track constellation centroids (only from bright stars)
      if (conAbbrev && pos.alt > 5) {
        if (!conAcc[conAbbrev]) conAcc[conAbbrev] = { azSum: 0, altSum: 0, n: 0 };
        conAcc[conAbbrev].azSum += pos.az;
        conAcc[conAbbrev].altSum += pos.alt;
        conAcc[conAbbrev].n++;
      }
    } else {
      tier2.push(entry);
    }
  }

  // Build constellation label list from centroids
  const constellations = [];
  for (const [abbrev, acc] of Object.entries(conAcc)) {
    if (acc.n < 2) continue;
    const displayName = (typeof CON_ABBREV_TO_NAME !== 'undefined' && CON_ABBREV_TO_NAME[abbrev]) || null;
    if (!displayName) continue;  // Only label constellations we have names for

    // Filter constellations too close to sun
    const meanAz = acc.azSum / acc.n;
    const meanAlt = acc.altSum / acc.n;
    constellations.push({ name: displayName, abbrev, centroidAz: meanAz, centroidAlt: meanAlt });
  }

  return { tier1, tier2, constellations };
}

// ─── Constellation lore ──────────────────────────────────────────────
const CONSTELLATION_LORE = {
  'Cassiopeia':  "The vain queen of Ethiopia, Cassiopeia boasted that her daughter Andromeda surpassed the sea-nymphs in beauty — an arrogance that angered Poseidon. As punishment she was set in the sky forever circling the North Pole, sometimes hanging upside down in humiliation. Her distinctive W shape is one of the easiest star patterns to find on any clear night.",
  'Andromeda':   "Princess Andromeda was chained to a sea-cliff as a sacrifice to the monster Cetus, to appease Poseidon's wrath at her mother Cassiopeia's boasting. She was rescued at the last moment by the hero Perseus, who swooped down on winged sandals and turned Cetus to stone with the head of Medusa. The Andromeda Galaxy — the most distant object visible to the naked eye — floats just off her hip.",
  'Pisces':      "The two fish of Pisces represent Aphrodite and her son Eros, who transformed themselves into fish and leapt into the Euphrates river to escape the monster Typhon. A cord binds their tails so they would not lose each other in the current. The faint stars make Pisces one of the harder zodiac constellations to trace, but the circlet asterism marks the western fish clearly.",
  'Aries':       "The golden ram of Aries carried Phrixus and Helle through the sky to safety, fleeing their wicked stepmother. Helle fell into the strait now called the Hellespont, but Phrixus reached Colchis and sacrificed the ram in gratitude, hanging its fleece in a sacred grove — the very Golden Fleece that Jason and the Argonauts later sought. Only three main stars form the constellation, with bright Hamal as the ram's head.",
  'Perseus':     "Perseus, the slayer of Medusa, wears the Gorgon's severed head in one hand and a sword in the other as he strides across the sky. He used the head — which turned any onlooker to stone — to rescue Andromeda and defeat the sea-monster Cetus. The star Algol marks the Gorgon's eye and is a famous eclipsing binary, dimming noticeably every 2.87 days.",
  'Taurus':      "Taurus is the bull that Zeus became to woo the Phoenician princess Europa, carrying her away across the sea to Crete. Only the bull's head and forequarters are shown — the rest disappears below the horizon. The brilliant orange star Aldebaran marks the bull's fiery eye, and the V-shaped Hyades cluster forms the face, while the famous Pleiades seven sisters ride on his shoulder.",
  'Orion':       "The great hunter Orion was the son of Poseidon and famed for his beauty and prowess. He boasted he would kill every beast on Earth, so Gaia sent a giant scorpion to slay him — the reason Orion and Scorpius are on opposite sides of the sky, never visible at the same time. His three-star belt is among the most recognizable sights in the night sky, flanked by the red supergiant Betelgeuse at his shoulder and blue Rigel at his foot.",
  'Canis Major': "Canis Major is the Great Dog, one of Orion's faithful hunting hounds following his master across the sky. The constellation is home to Sirius, the brightest star in the entire night sky — the ancient Egyptians called it Sopdet and used its heliacal rising to predict the Nile flood. In the heat of summer when Sirius rises with the sun, the Romans blamed it for the sweltering 'dog days.'",
  'Auriga':      "Auriga the Charioteer is usually depicted as a man holding a goat and two kids on his arm, along with the reins of a chariot. The brilliant yellow star Capella — meaning 'little she-goat' — is the sixth brightest star in the sky. One myth identifies Auriga with Erichthonius, a lame Athenian king who invented the four-horse chariot so he could move about more easily.",
  'Gemini':      "The twin stars Castor and Pollux were the Dioscuri, sons of Zeus and Leda, inseparable brothers who sailed with Jason on the Argo and became patron gods of sailors. When Castor was killed in battle, the immortal Pollux begged Zeus to let him share his immortality, and the twins were placed together in the sky. Pollux is slightly brighter and truly a single star; Castor, though it appears dimmer, is actually a spectacular system of six stars.",
  'Cancer':      "Cancer the Crab played a small but valiant role in mythology — Hera sent it to distract Hercules during his battle with the nine-headed Hydra. Hercules crushed it underfoot, and Hera placed it in the sky as a reward for its loyalty. The faint stars make Cancer the dimmest zodiac constellation, but it holds the beautiful Beehive Cluster (M44), a swarm of over a thousand stars visible to the naked eye on dark nights.",
  'Leo':         "Leo the Lion is the Nemean Lion, the fearsome beast with impenetrable golden hide that was the first of Hercules' twelve labors. Unable to pierce its skin with weapons, Hercules strangled it with his bare hands and thereafter wore its pelt as armor. Regulus, the bright star at the base of the Sickle asterism, means 'little king' and was one of the four Royal Stars of ancient Persia.",
  'Ursa Major':  "The Great Bear was once the nymph Callisto, transformed into a bear by the jealous goddess Hera after Zeus fell in love with her. Her son Arcas nearly killed her while hunting, not recognizing his mother, before Zeus swept them both into the sky as the Great and Little Bears. The seven stars of the Big Dipper are the most recognized star pattern in the Northern Hemisphere, and the two 'pointer stars' of the Dipper's bowl reliably lead the eye to Polaris.",
  'Virgo':       "Virgo is most often identified with Demeter, the goddess of the harvest, or her daughter Persephone who descends to the underworld each winter causing the earth to go barren. She holds a shaft of wheat in her outstretched hand, marked by the brilliant blue-white star Spica — one of the brightest in the sky. The Virgo Cluster, a vast grouping of over 1,300 galaxies, lies in this direction about 54 million light-years away.",
  'Boötes':      "Boötes the Herdsman follows the Great Bear around the pole, driving the celestial oxen with a crook. He is sometimes identified with Arcas, the son of Callisto, or with Icarius, an Athenian farmer whom Dionysus taught to make wine. His brightest star Arcturus — meaning 'bear guardian' — is the fourth brightest star in the sky, a giant orange star about 37 light-years away.",
  'Libra':       "Libra the Scales is the only zodiac constellation representing an inanimate object. In ancient Greece the scales were seen as belonging to Virgo (Justice), used to weigh the souls of the dead. The two brightest stars are named Zubenelgenubi and Zubeneschamali, meaning 'the southern claw' and 'the northern claw' — a reminder that the stars were once considered part of Scorpius before being separated as their own constellation.",
  'Corona Bor.': "Corona Borealis, the Northern Crown, represents the jeweled crown given by Dionysus to Ariadne, the Cretan princess who helped Theseus navigate the labyrinth and slay the Minotaur. When Ariadne died, Dionysus flung the crown into the heavens. The delicate semicircle of seven stars is easy to find and forms one of the night sky's most elegant little patterns.",
  'Scorpius':    "Scorpius is the great scorpion sent by Gaia to hunt down the boastful hunter Orion, and the two were placed on opposite sides of the sky so they would never meet. The brilliant red star Antares — whose name means 'rival of Mars' — marks the scorpion's heart and is one of the largest stars visible to the naked eye, a red supergiant hundreds of times the size of our Sun. The curving tail ending in a stinger is one of the most dramatic constellation outlines in the sky.",
  'Hercules':    "The greatest of Greek heroes, Hercules was the son of Zeus and the mortal Alcmene. To atone for killing his family in a fit of madness sent by Hera, he was tasked with twelve nearly impossible labors, including slaying the Nemean Lion and the Hydra, and capturing the three-headed dog Cerberus from the underworld. He kneels in the sky with his foot on the head of the dragon Draco, as if in the midst of some great struggle.",
  'Ophiuchus':   "Ophiuchus the Serpent-Bearer is Asclepius, the god of medicine, who learned the secret of resurrection by watching one snake revive another with healing herbs. He is depicted wrestling the serpent Serpens, which he holds divided in two halves across the sky. Hades feared his power would empty the underworld, so Zeus struck him down with a thunderbolt and placed him among the stars.",
  'Lyra':        "Lyra represents the lyre of Orpheus, the greatest musician who ever lived, whose music could charm animals, trees, and stones. When his wife Eurydice died, he descended into the underworld and so moved Hades with his playing that she was released — on condition he not look back. He looked, lost her forever, and in his grief was eventually torn apart by the Maenads; the gods placed his lyre in the sky. The brilliant blue-white star Vega is the brightest in Lyra and the fifth brightest in the sky.",
  'Sagittarius': "Sagittarius is the archer centaur, usually identified with Chiron or the wise Crotus, son of Pan, who invented archery. He aims his arrow directly at the heart of Scorpius in the sky. The center of our Milky Way galaxy lies in this direction, making Sagittarius one of the richest star fields in the heavens; the famous Teapot asterism appears to be pouring steam toward the galactic core.",
  'Aquila':      "Aquila is the eagle of Zeus, who carried his thunderbolts and once swooped down to snatch the beautiful shepherd boy Ganymede from a mountainside to serve as cupbearer to the gods. The bright star Altair, just 17 light-years away and spinning so fast it bulges at the equator, marks the eagle's heart. Altair is one vertex of the famous Summer Triangle along with Vega and Deneb.",
  'Cygnus':      "Cygnus the Swan is sometimes said to be Zeus in disguise — he transformed into a swan to approach the Spartan queen Leda, resulting in the births of Helen of Troy and the Dioscuri twins. Others identify it with Orpheus, transformed into a swan after his death. The brilliant star Deneb marks the tail of the swan and is one of the most luminous stars known — so far away (roughly 2,600 light-years) that its true distance is still uncertain. The cross shape formed by the constellation is called the Northern Cross.",
  'Capricornus': "Capricornus, the sea-goat, is one of the oldest zodiac constellations, recognized by the Sumerians over 4,000 years ago as the god Enki who had the body of a goat and the tail of a fish. In Greek myth, the goat-god Pan leapt into the Nile to escape the monster Typhon and transformed himself into a creature half-goat, half-fish. The faint stars form a triangle or arrowhead pointing westward.",
  'Aquarius':    "Aquarius is the water-bearer, most often identified with Ganymede, the beautiful youth seized by Zeus's eagle to be cupbearer of the gods on Olympus. In earlier traditions he was the god who caused the great floods, tipping his celestial urn to send rain to the world below. The Aquarius stream of shooting stars — the Eta Aquariids and Delta Aquariids — originates from this part of the sky.",
  'Pegasus':     "Pegasus is the winged horse born from the blood of Medusa when Perseus slew her — springing fully formed from the sea foam at the spot where her head fell. The hero Bellerophon later tamed Pegasus with a golden bridle given by Athena, riding him to slay the fire-breathing Chimera. The Great Square of Pegasus, formed by four bright stars, is one of the most useful navigation landmarks in the autumn sky.",
  'Ursa Minor':  "Ursa Minor, the Little Bear, holds the North Star Polaris at the tip of its tail — the star around which the entire sky appears to rotate. In Greek myth the Little Bear is Arcas, son of the nymph Callisto, placed in the sky by Zeus alongside his mother (Ursa Major) to save him from accidentally killing her. For thousands of years sailors have relied on Polaris to find true north; it currently sits less than a degree from the celestial pole.",
  'Draco':       "Draco the Dragon winds between the two Bears, never setting below the horizon at northern latitudes. In one myth it is Ladon, the hundred-headed dragon that guarded the golden apples in the Garden of the Hesperides until Hercules slew it as one of his twelve labors. The star Thuban in Draco's tail was the pole star when the Egyptian pyramids were built, around 2700 BC.",
  'Cepheus':     "King Cepheus of Ethiopia stands near his wife Cassiopeia and daughter Andromeda in the circumpolar sky. He is often overshadowed by the dramatic stories of his family, but his constellation contains several remarkable variable stars, including the prototype Cepheid variable Delta Cephei, whose pulsations became the key to measuring distances across the universe.",
  'Canis Minor': "Canis Minor, the Little Dog, is one of Orion's two hunting companions. Its brilliant star Procyon — meaning 'before the dog' because it rises just before Sirius — is one of the closest stars to Earth at only 11 light-years away. Together with Sirius and Betelgeuse, Procyon forms the Winter Triangle, one of the sky's most striking asterisms.",
  'Triangulum':  "Triangulum is a small but ancient constellation, known to the Greeks as Deltoton for its resemblance to the letter delta. Despite its modest size, it contains the Triangulum Galaxy (M33), the third-largest member of our Local Group of galaxies and one of the most distant objects visible to the unaided eye on exceptionally clear nights.",
  'Corvus':      "Corvus the Crow was once a beautiful white bird, sacred to Apollo, who sent it to fetch water in a cup (the neighboring constellation Crater). The crow dallied, then lied about the delay, blaming a water-snake. Apollo saw through the deception and cursed the bird with black feathers and a harsh voice. The four main stars form a distinctive lopsided rectangle, easy to spot south of Virgo in spring.",
  'Coma Berenices': "Coma Berenices — Berenice's Hair — commemorates the Egyptian queen Berenice II, who cut off her beautiful amber locks and offered them to Aphrodite in thanks for her husband's safe return from war. The hair was placed among the stars as a faint, shimmering cluster. The constellation lies near the north galactic pole, offering a window into deep space with thousands of distant galaxies visible through telescopes.",
  'Serpens':     "Serpens is unique among the 88 constellations — it is split into two halves, Serpens Caput (the head) and Serpens Cauda (the tail), separated by Ophiuchus who grasps the serpent. The bright star Unukalhai marks the serpent's heart. In myth this is the snake of Asclepius, whose ability to shed its skin symbolized renewal and the healing arts.",
  'Sagitta':     "Sagitta the Arrow is the third-smallest constellation in the sky, yet one of the oldest recognized, known since antiquity. Various myths identify it as the arrow Hercules used to kill the eagle (Aquila) that tormented Prometheus, or as one of Cupid's arrows. It flies through the rich star fields of the summer Milky Way between Aquila and Cygnus.",
  'Delphinus':   "Delphinus the Dolphin leaps gracefully through the stars near the celestial equator. In one myth, Poseidon sent a dolphin to find the sea-nymph Amphitrite and persuade her to marry him; in gratitude, the god placed the dolphin among the stars. Its four main stars form a charming diamond called Job's Coffin. The star names Sualocin and Rotanev are 'Nicolaus Venator' spelled backwards — a nineteenth-century astronomer's clever prank.",
};

// ─── Planetary positions (JPL Keplerian elements, ~1° accuracy) ─────

const PLANET_SYMBOLS = {Mercury:'☿', Venus:'♀', Mars:'♂', Jupiter:'♃', Saturn:'♄'};
const PLANET_NAMES_VIS = ['Mercury','Venus','Mars','Jupiter','Saturn'];

const _PLAN_EL = {
  Mercury:{a:[.38709927,.00000037],e:[.20563593,.00001906],i:[7.00497902,-.00594749],
           N:[48.33076593,-.12534081],w:[77.45779628,.16047689],L:[252.25032350,149472.67411175]},
  Venus:  {a:[.72333566,.00000390],e:[.00677672,-.00004107],i:[3.39467605,-.00078890],
           N:[76.67984255,-.27769418],w:[131.60246718,.00268329],L:[181.97909950,58517.81538729]},
  Earth:  {a:[1.00000261,.00000562],e:[.01671123,-.00004392],i:[-.00001531,-.01294668],
           N:[0,0],w:[102.93768193,.32327364],L:[100.46457166,35999.37244981]},
  Mars:   {a:[1.52371034,.00001847],e:[.09339410,.00007882],i:[1.84969142,-.00813131],
           N:[49.55953891,-.29257343],w:[-23.94362959,.44441088],L:[-4.55343205,19140.30268499]},
  Jupiter:{a:[5.20288700,-.00011607],e:[.04838624,-.00013253],i:[1.30439695,-.00183714],
           N:[100.47390909,.20469106],w:[14.72847983,.21252668],L:[34.39644051,3034.74612775]},
  Saturn: {a:[9.53667594,-.00125060],e:[.05386179,-.00050991],i:[2.48599187,.00193609],
           N:[113.66242448,-.28867794],w:[92.59887831,-.41897216],L:[49.95424423,1222.49362201]},
};

function _nr(x) { return ((x%(2*Math.PI))+2*Math.PI)%(2*Math.PI); }
function _kepE(M,e) { let E=M; for(let i=0;i<6;i++) E=M+e*Math.sin(E); return E; }
function _eps(T) { return rad(23.439291111-0.013004167*T); }

function _helioXYZ(name,T) {
  const el=_PLAN_EL[name];
  const a=el.a[0]+el.a[1]*T, e=el.e[0]+el.e[1]*T;
  const ii=rad(el.i[0]+el.i[1]*T), N=rad(norm360(el.N[0]+el.N[1]*T));
  const w=rad(norm360(el.w[0]+el.w[1]*T)), L=rad(norm360(el.L[0]+el.L[1]*T));
  const M=_nr(L-w), E=_kepE(M,e);
  const xv=a*(Math.cos(E)-e), yv=a*(Math.sqrt(1-e*e)*Math.sin(E));
  const v=Math.atan2(yv,xv), r=Math.sqrt(xv*xv+yv*yv), u=v+w-N;
  return {
    x:r*(Math.cos(N)*Math.cos(u)-Math.sin(N)*Math.sin(u)*Math.cos(ii)),
    y:r*(Math.sin(N)*Math.cos(u)+Math.cos(N)*Math.sin(u)*Math.cos(ii)),
    z:r*Math.sin(u)*Math.sin(ii)
  };
}

function _geocentricRADec(name,T) {
  const p=_helioXYZ(name,T), earth=_helioXYZ('Earth',T);
  const eps=_eps(T);
  const dx=p.x-earth.x, dy=p.y-earth.y, dz=p.z-earth.z;
  const ye=dy*Math.cos(eps)-dz*Math.sin(eps), ze=dy*Math.sin(eps)+dz*Math.cos(eps);
  const dist=Math.sqrt(dx*dx+dy*dy+dz*dz);
  return {ra:Math.atan2(ye,dx), dec:Math.asin(clampSin(ze/dist))};
}

function _sunRADecT(T) {
  const L0=norm360(280.46646+36000.76983*T);
  const M=norm360(357.52911+35999.05029*T-0.0001537*T*T);
  const C=(1.914602-0.004817*T)*Math.sin(rad(M))+0.019993*Math.sin(rad(2*M));
  const app=L0+C-0.00569-0.00478*Math.sin(rad(norm360(125.04-1934.136*T)));
  const eps=_eps(T), ar=rad(app);
  return {ra:Math.atan2(Math.cos(eps)*Math.sin(ar),Math.cos(ar)), dec:Math.asin(Math.sin(eps)*Math.sin(ar))};
}

function _moonRADecT(T) {
  const Mp=norm360(134.9634+477198.8676*T), D=norm360(297.8502+445267.1115*T);
  const F=norm360(93.2721+483202.0175*T), M=norm360(357.5291+35999.0503*T);
  const lon=norm360(218.3165+481267.8813*T+6.289*Math.sin(rad(Mp))
    -1.274*Math.sin(rad(2*D-Mp))+0.658*Math.sin(rad(2*D))
    -0.214*Math.sin(rad(2*Mp))-0.186*Math.sin(rad(M)));
  const lat=5.128*Math.sin(rad(F))+0.280*Math.sin(rad(Mp+F))-0.277*Math.sin(rad(Mp-F));
  const eps=_eps(T), lr=rad(lon), br=rad(lat);
  const xe=Math.cos(br)*Math.cos(lr);
  const ye=Math.cos(br)*Math.sin(lr)*Math.cos(eps)-Math.sin(br)*Math.sin(eps);
  const ze=Math.cos(br)*Math.sin(lr)*Math.sin(eps)+Math.sin(br)*Math.cos(eps);
  return {ra:Math.atan2(ye,xe), dec:Math.atan2(ze,Math.sqrt(xe*xe+ye*ye))};
}

// Compute moon phase at noon UTC on the given date — aligned with phase markers
function _moonPhaseT(date) {
  const Y = date.getUTCFullYear(), M = date.getUTCMonth()+1, D = date.getUTCDate();
  const JD = _julianDate(Y, M, D, 12); // noon UTC
  return (JD - J2000) / JC;
}

function moonIllumPct(date) {
  const T = _moonPhaseT(date);
  const sun  = _sunRADecT(T);
  const moon = _moonRADecT(T);
  const elong = _angSep(sun.ra, sun.dec, moon.ra, moon.dec);
  return Math.round((1 - Math.cos(rad(elong))) / 2 * 100);
}

// Returns { illum: 0-1, waxing: bool } for drawing a phase-accurate moon
function moonPhaseInfo(date) {
  const T = _moonPhaseT(date);
  const sun  = _sunRADecT(T);
  const moon = _moonRADecT(T);
  const elong = _angSep(sun.ra, sun.dec, moon.ra, moon.dec);
  const illum = (1 - Math.cos(rad(elong))) / 2;
  let diff = moon.ra - sun.ra;
  if (diff < -Math.PI) diff += 2 * Math.PI;
  if (diff > Math.PI)  diff -= 2 * Math.PI;
  return { illum, waxing: diff > 0 };
}

function _angSep(ra1,dec1,ra2,dec2) {
  return Math.acos(clampSin(
    Math.sin(dec1)*Math.sin(dec2)+Math.cos(dec1)*Math.cos(dec2)*Math.cos(ra1-ra2)
  )) * R2D;
}

function _isEvening(pRA,sunRA) {
  let d=pRA-sunRA; while(d>Math.PI)d-=2*Math.PI; while(d<-Math.PI)d+=2*Math.PI; return d>0;
}

// Returns planets visible in evening sky on gregDate (elongation > 20°, east of sun)
function getVisiblePlanets(gregDate) {
  const T = (dateToJDE(gregDate) - J2000) / JC;
  const sun = _sunRADecT(T);
  return PLANET_NAMES_VIS.map(name => {
    const p = _geocentricRADec(name, T);
    const elong = _angSep(p.ra, p.dec, sun.ra, sun.dec);
    return { name, elong: Math.round(elong), evening: _isEvening(p.ra, sun.ra) };
  }).filter(p => p.elong > 20 && p.evening);
}

// Returns alt/az for all planets above horizon at ~9pm local on gregDate
function getMoonAltAz(gregDate) {
  const { T, LST, latR } = _eveningSky(gregDate);
  const moon = _moonRADecT(T);
  return _altAz(norm24(moon.ra * R2H), moon.dec * R2D, LST, latR);
}

function getPlanetAltAz(gregDate) {
  const { T, LST, latR } = _eveningSky(gregDate);
  const sun = _sunRADecT(T);
  return PLANET_NAMES_VIS.map(name => {
    const p = _geocentricRADec(name, T);
    if (_angSep(p.ra, p.dec, sun.ra, sun.dec) < 15) return null;
    const pos = _altAz(norm24(p.ra * R2H), p.dec * R2D, LST, latR);
    if (!pos || pos.alt < 5) return null;
    return { name, az: pos.az, alt: pos.alt, symbol: PLANET_SYMBOLS[name] };
  }).filter(Boolean);
}

const _PLANET_PAIRS = [
  ['Venus','Jupiter'],['Venus','Mars'],['Jupiter','Mars'],
  ['Venus','Saturn'],['Jupiter','Saturn'],['Mars','Saturn'],
  ['Mercury','Venus'],['Mercury','Jupiter'],['Mercury','Mars'],
];

function getPlanetaryEvents(gregYear) {
  const events = [];
  const startMs = Date.UTC(gregYear-1,10,1), endMs = Date.UTC(gregYear+1,1,28);
  const prevE = {}, ppE = {};
  PLANET_NAMES_VIS.forEach(n => { prevE[n] = null; ppE[n] = null; });
  let prevDs = null;
  const pairCooldown = {};

  for (let ms = startMs; ms <= endMs; ms += MS_DAY) {
    const date = new Date(ms), ds = utcDateStr(date);
    const T = (dateToJDE(date) - J2000) / JC;
    const sun=_sunRADecT(T), moon=_moonRADecT(T);
    const pos={};
    for (const name of PLANET_NAMES_VIS) pos[name]=_geocentricRADec(name,T);

    for (const name of PLANET_NAMES_VIS) {
      const p=pos[name];
      const elong=_angSep(p.ra,p.dec,sun.ra,sun.dec);
      if (ppE[name]!==null && prevE[name]!==null) {
        const pe=prevE[name];
        if (pe>ppE[name] && pe>elong && prevDs) {
          if (['Mars','Jupiter','Saturn'].includes(name) && pe>150) {
            events.push({dateStr:prevDs, kind:'opposition', planet:name});
          } else if (['Mercury','Venus'].includes(name) && pe>12) {
            events.push({dateStr:prevDs, kind:'greatElongation', planet:name,
              isEvening:_isEvening(p.ra,sun.ra), elong:Math.round(pe)});
          }
        }
      }
      ppE[name]=prevE[name]; prevE[name]=elong;

      // Moon-planet conjunction < 2.5°
      const mSep=_angSep(p.ra,p.dec,moon.ra,moon.dec);
      if (mSep<2.5) events.push({dateStr:ds, kind:'moonConj', planet:name, sep:+(mSep.toFixed(1))});
    }

    // Planet-planet conjunctions < 2°, 20-day cooldown per pair
    for (const [n1,n2] of _PLANET_PAIRS) {
      const sep=_angSep(pos[n1].ra,pos[n1].dec,pos[n2].ra,pos[n2].dec);
      if (sep<2.0) {
        const pk=n1+n2, last=pairCooldown[pk];
        if (!last||ms-last>20*MS_DAY) {
          events.push({dateStr:ds, kind:'planetConj', planets:[n1,n2], sep:+(sep.toFixed(1))});
          pairCooldown[pk]=ms;
        }
      }
    }
    prevDs=ds;
  }
  return events;
}

// ─── Meteor showers & comets ─────────────────────────────────────────

const METEOR_SHOWERS = [
  {name:'Quadrantids',     month:1,  day:3,  zhr:120, before:1, after:1,  note:'radiant in Boötes'},
  {name:'Lyrids',          month:4,  day:22, zhr:18,  before:3, after:3,  note:'radiant in Lyra'},
  {name:'Eta Aquariids',   month:5,  day:6,  zhr:50,  before:7, after:7,  note:'debris of Halley\'s Comet'},
  {name:'Delta Aquariids', month:7,  day:30, zhr:20,  before:7, after:7,  note:'radiant in Aquarius'},
  {name:'Perseids',        month:8,  day:12, zhr:100, before:7, after:7,  note:'debris of Comet Swift-Tuttle'},
  {name:'Draconids',       month:10, day:8,  zhr:10,  before:1, after:1,  note:'radiant in Draco'},
  {name:'Orionids',        month:10, day:21, zhr:20,  before:4, after:5,  note:'debris of Halley\'s Comet'},
  {name:'Leonids',         month:11, day:17, zhr:15,  before:3, after:3,  note:'radiant in Leo'},
  {name:'Geminids',        month:12, day:14, zhr:120, before:4, after:5,  note:'debris of asteroid 3200 Phaethon'},
  {name:'Ursids',          month:12, day:22, zhr:10,  before:2, after:2,  note:'radiant in Ursa Minor'},
];

// Returns meteor shower events (one per day of active window) covering gregYear's fairy year range
function getMeteorShowerEvents(gregYear) {
  const events = [];
  const before = s => s.before ?? 2;
  const after  = s => s.after  ?? 2;
  for (const s of METEOR_SHOWERS) {
    for (const yr of [gregYear-1, gregYear, gregYear+1]) {
      const peakMs = Date.UTC(yr, s.month-1, s.day);
      const windowStart = utcDateStr(new Date(peakMs - before(s) * MS_DAY));
      const windowEnd   = utcDateStr(new Date(peakMs + after(s)  * MS_DAY));
      for (let d = -before(s); d <= after(s); d++) {
        const ms = peakMs + d * MS_DAY;
        const dt = new Date(ms);
        const ds = utcDateStr(dt);
        events.push({dateStr:ds, kind:'meteorShower', name:s.name, zhr:s.zhr, note:s.note, isPeak: d===0, isNearPeak: Math.abs(d)<=1, windowStart, windowEnd});
      }
    }
  }
  return events;
}

function _nthWeekday(year, month, weekday, n) {
  // month: 1-based. Find nth occurrence of weekday (0=Sun) in month.
  const d = new Date(Date.UTC(year, month - 1, 1));
  const first = (weekday - d.getUTCDay() + 7) % 7;
  return new Date(Date.UTC(year, month - 1, 1 + first + (n - 1) * 7));
}

function _resolveHolidayRule({month, weekday, n}, year) {
  if (n === -1) {
    const last = new Date(Date.UTC(year, month, 0)); // last day of month
    const diff = (last.getUTCDay() - weekday + 7) % 7;
    return new Date(Date.UTC(year, month - 1, last.getUTCDate() - diff));
  }
  return _nthWeekday(year, month, weekday, n);
}

function _easternOffsetHours(date) {
  // US Eastern: DST starts 2nd Sunday March, ends 1st Sunday November
  const yr = date.getUTCFullYear();
  const dstStart = _nthWeekday(yr, 3, 0, 2);  // 2nd Sun March
  const dstEnd   = _nthWeekday(yr, 11, 0, 1); // 1st Sun November
  return (date >= dstStart && date < dstEnd) ? -4 : -5;
}

function _sunEventTime(date, altitude, isRise) {
  // Returns local time string for sun crossing given altitude on date.
  const lat = OBSERVER.lat, lon = OBSERVER.lon;
  const jd = Math.floor(dateToJDE(date)) + 0.5;
  const n  = jd - J2000;
  const L  = norm360(280.460 + 0.9856474 * n);
  const g  = rad(norm360(357.528 + 0.9856003 * n));
  const lam = rad(L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g));
  const sinDec = 0.39782 * Math.sin(lam);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (Math.sin(rad(altitude)) - Math.sin(rad(lat)) * sinDec)
             / (Math.cos(rad(lat)) * cosDec);
  if (Math.abs(cosH) > 1) return null;
  const H = Math.acos(cosH) * R2D / 15;
  const utH = isRise ? (12 - lon / 15 - H + 24) % 24
                     : (12 - lon / 15 + H) % 24;
  const offset = _easternOffsetHours(date);
  let local = (utH + offset + 24) % 24;
  const h = Math.floor(local);
  let m = Math.round((local - h) * 60);
  const hh = m === 60 ? h + 1 : h;
  const mm = m === 60 ? 0 : m;
  const ampm = hh < 12 ? 'am' : 'pm';
  return `${hh % 12 || 12}:${String(mm).padStart(2, '0')}${ampm}`;
}

function astroTwilightEnd(date)  { return _sunEventTime(date, -18,    false); }
function sunsetTime(date)        { return _sunEventTime(date, -0.833, false); }
function sunriseTime(date)       { return _sunEventTime(date, -0.833, true);  }

// Moon rise/set — iterative search (moon moves ~13°/day, too fast for hour-angle shortcut)
function _moonEventTime(date, isRise) {
  const lat = OBSERVER.lat, lon = OBSERVER.lon;
  const latR = lat * DEG;
  const offset = _easternOffsetHours(date);
  // Scan from noon UTC on date to noon+24h in 10-minute steps
  const Y = date.getUTCFullYear(), M = date.getUTCMonth()+1, D = date.getUTCDate();
  const jdNoon = _julianDate(Y, M, D, 12);

  function moonAlt(jd) {
    const T = (jd - J2000) / JC;
    const UT = (jd - Math.floor(jd) - 0.5) * 24 + 12;
    const LST = norm24(_gmst(T, (UT + 24) % 24) + lon / 15);
    const moon = _moonRADecT(T);
    const pos = _altAz(norm24(moon.ra * R2H), moon.dec * R2D, LST, latR);
    return pos ? pos.alt : -90;
  }

  const step = 10 / 1440; // 10 minutes in days
  let prevAlt = moonAlt(jdNoon);
  for (let i = 1; i <= 144; i++) { // 144 steps × 10min = 24h
    const jd = jdNoon + i * step;
    const alt = moonAlt(jd);
    const crossing = isRise ? (prevAlt <= 0 && alt > 0) : (prevAlt > 0 && alt <= 0);
    if (crossing) {
      // Bisect to refine
      let lo = jd - step, hi = jd;
      for (let b = 0; b < 8; b++) {
        const mid = (lo + hi) / 2;
        if ((moonAlt(mid) > 0) === isRise) hi = mid; else lo = mid;
      }
      const utH = ((lo + hi) / 2 - jdNoon) * 24 + 12; // UT hours
      let local = ((utH + offset) % 24 + 24) % 24;
      const h = Math.floor(local);
      let m = Math.round((local - h) * 60);
      const hh = m === 60 ? h + 1 : h;
      const mm = m === 60 ? 0 : m;
      const ampm = hh < 12 ? 'am' : 'pm';
      return `${hh % 12 || 12}:${String(mm).padStart(2, '0')}${ampm}`;
    }
    prevAlt = alt;
  }
  return null;
}

function moonriseTime(date) { return _moonEventTime(date, true); }
function moonsetTime(date)  { return _moonEventTime(date, false); }
