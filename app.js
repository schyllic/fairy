// ═══════════════════════════════════════════════════════════════════
// Fairy Calendar — app.js  (single-file bundle, no ES modules)
// ═══════════════════════════════════════════════════════════════════

// ─── astro.js ───────────────────────────────────────────────────────

function dateToJDE(date) { return date.getTime() / 86400000 + 2440587.5; }
function jdeToDate(jde)  { return new Date((jde - 2440587.5) * 86400000); }
function rad(deg)        { return deg * Math.PI / 180; }
function norm360(x)      { return ((x % 360) + 360) % 360; }

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

function getNewMoons(gregYear) {
  const kStart = dateToK(new Date(Date.UTC(gregYear-1,0,1))) - 2;
  const kEnd   = dateToK(new Date(Date.UTC(gregYear+2,0,1))) + 2;
  const r = [];
  for (let k = kStart; k <= kEnd; k++) r.push(jdeToDate(lunarPhaseJDE(k, 0)));
  return r.sort((a,b) => a-b);
}

function getMoonPhases(gregYear) {
  const kStart = dateToK(new Date(Date.UTC(gregYear-1,0,1))) - 2;
  const kEnd   = dateToK(new Date(Date.UTC(gregYear+2,0,1))) + 2;
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
    const Tc=(J0-2451545.0)/36525, W=norm360(35999.373*Tc-2.47);
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

function daysBetween(a, b) {
  return Math.floor(b.getTime()/86400000) - Math.floor(a.getTime()/86400000);
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

// Evening sky constellations — Ferrum, VA (37°N, 80°W), 8pm–midnight
const EVENING_CONSTELLATIONS = [
  {name:'Cassiopeia',  ra:1.0,  dec:62}, {name:'Andromeda',   ra:0.8,  dec:41},
  {name:'Pisces',      ra:1.0,  dec:14}, {name:'Aries',       ra:2.6,  dec:21},
  {name:'Perseus',     ra:3.5,  dec:45}, {name:'Taurus',      ra:4.7,  dec:17},
  {name:'Orion',       ra:5.5,  dec: 2}, {name:'Canis Major', ra:6.8,  dec:-22},
  {name:'Auriga',      ra:6.0,  dec:42}, {name:'Gemini',      ra:7.0,  dec:25},
  {name:'Cancer',      ra:8.5,  dec:20}, {name:'Leo',         ra:10.7, dec:15},
  {name:'Ursa Major',  ra:10.7, dec:56}, {name:'Virgo',       ra:13.4, dec:-4},
  {name:'Boötes',      ra:14.7, dec:32}, {name:'Libra',       ra:15.3, dec:-15},
  {name:'Corona Bor.', ra:15.8, dec:30}, {name:'Scorpius',    ra:16.9, dec:-26},
  {name:'Hercules',    ra:17.4, dec:28}, {name:'Ophiuchus',   ra:17.5, dec:-8},
  {name:'Lyra',        ra:18.9, dec:37}, {name:'Sagittarius', ra:19.1, dec:-28},
  {name:'Aquila',      ra:19.7, dec: 3}, {name:'Cygnus',      ra:20.6, dec:42},
  {name:'Capricornus', ra:21.0, dec:-20},{name:'Aquarius',    ra:22.3, dec:-11},
  {name:'Pegasus',     ra:22.7, dec:20},
];

function getEveningConstellations(gregDate) {
  const yearStart = new Date(Date.UTC(gregDate.getUTCFullYear(), 0, 1));
  const doy = Math.floor((gregDate - yearStart) / 86400000) + 1;
  const raSun = (((doy - 79) * 24 / 365.25) % 24 + 24) % 24; // Sun RA in hours
  const raMid = (raSun + 10) % 24; // meridian at ~10pm
  return EVENING_CONSTELLATIONS.filter(c => {
    if (c.dec < -53) return false; // below horizon all night at 37°N
    let diff = ((c.ra - raMid + 24) % 24);
    if (diff > 12) diff -= 24;
    return Math.abs(diff) <= 3.5;
  });
}

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
  return {ra:Math.atan2(ye,dx), dec:Math.asin(Math.max(-1,Math.min(1,ze/dist)))};
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

function moonIllumPct(date) {
  const T = (dateToJDE(date) - 2451545.0) / 36525;
  const sun  = _sunRADecT(T);
  const moon = _moonRADecT(T);
  const elong = _angSep(sun.ra, sun.dec, moon.ra, moon.dec); // degrees
  return Math.round((1 - Math.cos(rad(elong))) / 2 * 100);
}

function _angSep(ra1,dec1,ra2,dec2) {
  return Math.acos(Math.max(-1,Math.min(1,
    Math.sin(dec1)*Math.sin(dec2)+Math.cos(dec1)*Math.cos(dec2)*Math.cos(ra1-ra2)
  )))*180/Math.PI;
}

function _isEvening(pRA,sunRA) {
  let d=pRA-sunRA; while(d>Math.PI)d-=2*Math.PI; while(d<-Math.PI)d+=2*Math.PI; return d>0;
}

// Returns planets visible in evening sky on gregDate (elongation > 20°, east of sun)
function getVisiblePlanets(gregDate) {
  const T=(dateToJDE(gregDate)-2451545.0)/36525;
  const sun=_sunRADecT(T);
  return PLANET_NAMES_VIS.map(name=>{
    const p=_geocentricRADec(name,T);
    const elong=_angSep(p.ra,p.dec,sun.ra,sun.dec);
    return {name, elong:Math.round(elong), evening:_isEvening(p.ra,sun.ra)};
  }).filter(p=>p.elong>20&&p.evening);
}

const _PLANET_PAIRS = [
  ['Venus','Jupiter'],['Venus','Mars'],['Jupiter','Mars'],
  ['Venus','Saturn'],['Jupiter','Saturn'],['Mars','Saturn'],
  ['Mercury','Venus'],['Mercury','Jupiter'],['Mercury','Mars'],
];

function getPlanetaryEvents(gregYear) {
  const events=[], msPerDay=86400000;
  const startMs=Date.UTC(gregYear-1,10,1), endMs=Date.UTC(gregYear+1,1,28);
  const prevE={}, ppE={};
  PLANET_NAMES_VIS.forEach(n=>{prevE[n]=null;ppE[n]=null;});
  let prevDs=null;
  const pairCooldown={};

  for (let ms=startMs; ms<=endMs; ms+=msPerDay) {
    const date=new Date(ms), ds=utcDateStr(date);
    const T=(dateToJDE(date)-2451545.0)/36525;
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
        if (!last||ms-last>20*msPerDay) {
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
      const windowStart = utcDateStr(new Date(peakMs - before(s) * 86400000));
      const windowEnd   = utcDateStr(new Date(peakMs + after(s)  * 86400000));
      for (let d = -before(s); d <= after(s); d++) {
        const ms = peakMs + d * 86400000;
        const dt = new Date(ms);
        const ds = utcDateStr(dt);
        events.push({dateStr:ds, kind:'meteorShower', name:s.name, zhr:s.zhr, note:s.note, isPeak: d===0, isNearPeak: Math.abs(d)<=1, windowStart, windowEnd});
      }
    }
  }
  return events;
}

// ─── calendar.js ────────────────────────────────────────────────────

const JS_TO_FAIRY_WEEKDAY = [6, 0, 1, 2, 3, 4, 5]; // Sun→6, Mon→0, Tue→1, Wed→2, Thu→3, Fri→4, Sat→5
const FAIRY_WEEKDAYS = ['Heimday','Tyrsday','Wodensday','Thorsday','Freyasday','Moonday','Sunday'];
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
  const allBirthdays = (typeof BIRTHDAYS !== 'undefined') ? BIRTHDAYS : [];
  for (const b of allBirthdays) {
    const key = `${String(b.month).padStart(2,'0')}-${String(b.day).padStart(2,'0')}`;
    if (!birthdayMap.has(key)) birthdayMap.set(key, []);
    birthdayMap.get(key).push(b);
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
  const today = utcDateStr(new Date());
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

// ─── render.js ──────────────────────────────────────────────────────

const GREG_MONTH_NAMES = ['January','February','March','April','May','June',
                          'July','August','September','October','November','December'];
const GREG_WEEKDAY_ABBR = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

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
  if (fd.meteor)   { for (const m of fd.meteor) { if (m.isNearPeak) h+=`<span class="icon meteor-icon" title="${m.name}${m.isPeak?' peak':''} — ZHR ~${m.zhr}, ${m.note}">🌠</span>`; } }
  if (fd.comet)    { for (const c of fd.comet) h+=`<span class="icon comet-icon" title="${c.name}${c.note?' — '+c.note:''}">☄</span>`; }
  if (fd.birthday) { for (const b of fd.birthday) h+=`<span class="birthday-label">🎂 ${b.name}</span>`; }
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
  root.className = 'view-greg';
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons · Bluemoon Year</span>` : '');
  const grid = el('div','greg-grid');
  for (let m = 0; m < 12; m++) {
    const lastDay = new Date(Date.UTC(fy.gregYear, m+1, 0));
    const mon = el('div','greg-month');
    const mhdr = el('div','greg-month-header');
    const mFromStr = `${fy.gregYear}-${String(m+1).padStart(2,'0')}-01`;
    mhdr.innerHTML = `<span>${GREG_MONTH_NAMES[m]}</span><button class="info-btn" data-from="${mFromStr}" data-label="${GREG_MONTH_NAMES[m]} ${fy.gregYear}">ⓘ</button>`;
    mon.appendChild(mhdr);
    const wr = el('div','greg-weekrow');
    for (const a of GREG_WEEKDAY_ABBR) wr.appendChild(el('div','greg-wday',a));
    mon.appendChild(wr);
    const dg = el('div','greg-days');
    const startDow = (new Date(Date.UTC(fy.gregYear,m,1)).getUTCDay() + 6) % 7;
    for (let i=0;i<startDow;i++) dg.appendChild(el('div','greg-cell empty-cell'));
    for (let d=1; d<=lastDay.getUTCDate(); d++) {
      const ds = `${fy.gregYear}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const fd = fy.dayMap.get(ds);
      const cell = el('div', 'greg-cell' + (fd?.isToday?' is-today':'') + (fd?.fairyDay===1?' new-moon-cell':''));
      if (ds === selectedDate) cell.classList.add('is-selected');
      cell.dataset.date = ds;
      cell.appendChild(el('span','greg-daynum', String(d)));
      if (fd) {
        const fl = el('span','fairy-label', `${fd.fairyMonth.slice(0,3)} ${fd.fairyDay}`);
        if (fd.darkmoonPart) { fl.classList.add('darkmoon-label'); fl.title=`Darkmoon · ${fd.darkmoonPart}`; }
        cell.appendChild(fl);
        if (fd.isToday) { const ib=el('button','info-btn'); ib.dataset.from=ds; ib.dataset.label='Today'; ib.textContent='ⓘ'; ib.classList.add('today-info-btn'); cell.appendChild(ib); }
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
    + `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons · Bluemoon Year</span>` : '');
  root.appendChild(yt);

  for (const moon of fy.moons) {
    const sec = el('section','fairy-moon');
    if (moon.name==='Darkmoon') sec.classList.add('moon-darkmoon');
    if (moon.name==='Bluemoon') sec.classList.add('moon-bluemoon');

    const hdr = el('div','fairy-moon-header');
    hdr.innerHTML = `<span class="moon-name">${moon.name}</span>`
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
    for (const wd of FAIRY_WEEKDAYS) {
      const th = el('th', (wd==='Moonday'||wd==='Sunday')?'weekend-col':null, wd);
      th.dataset.short = wd.replace(/day$/i, '');
      thr.appendChild(th);
    }
    thead.appendChild(thr); tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let row = document.createElement('tr'), col=0;
    const firstWd = moon.days[0].fairyWeekdayIndex;
    for (let i=0;i<firstWd;i++) { row.appendChild(el('td','fairy-cell empty-cell')); col++; }

    for (const fd of moon.days) {
      if (col===7) { tbody.appendChild(row); row=document.createElement('tr'); col=0; }
      const td = el('td','fairy-cell');
      const fdDateStr = utcDateStr(fd.gregDate);
      if (fd.isToday) td.classList.add('is-today');
      if (fdDateStr === selectedDate) td.classList.add('is-selected');
      if (fd.fairyWeekdayIndex>=5) td.classList.add('weekend-col');
      if (fd.darkmoonPart) td.classList.add(`dp-${fd.darkmoonPart.toLowerCase()}`);
      td.dataset.date = fdDateStr;
      td.appendChild(el('span','fairy-daynum', String(fd.fairyDay)));
      td.appendChild(el('span','fairy-greg-date', fmtGreg(fd.gregDate)));
      if (fd.isToday) { const ib=el('button','info-btn'); ib.dataset.from=fdDateStr; ib.dataset.label='Today'; ib.textContent='ⓘ'; ib.classList.add('today-info-btn'); td.appendChild(ib); }
      const ic=moonIcons(fd); if(ic){const ig=el('span','icon-group');ig.innerHTML=ic;td.appendChild(ig);}
      row.appendChild(td); col++;
    }
    while(col>0&&col<7){row.appendChild(el('td','fairy-cell empty-cell'));col++;}
    if(col>0) tbody.appendChild(row);
    tbl.appendChild(tbody); sec.appendChild(tbl); root.appendChild(sec);
  }
}

function renderWeek(fy) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '';
  root.className = 'view-week';
  const yt = el('div','fairy-year-title');
  yt.innerHTML = `<span class="year-hero-wrap">${getHeaderSVG(fy.yearAnimal, state.theme)}</span>`
    + `<span class="year-animal">${fy.yearAnimal} Year</span> <span class="year-number">${fy.holYear}</span>`
    + (fy.hasBluemoon ? ` <span class="bluemoon-badge">13 Moons</span>` : '');
  root.appendChild(yt);

  const allDays = fy.moons.flatMap(m => m.days);
  const tbl = el('table','week-table');
  const thead = document.createElement('thead');
  const thr = document.createElement('tr');
  for (const wd of FAIRY_WEEKDAYS) {
    const th = el('th',(wd==='Moonday'||wd==='Sunday')?'weekend-col':null, wd);
    th.dataset.short = wd.replace(/day$/i, '');
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
        if (fd.darkmoonPart) td.classList.add(`dp-${fd.darkmoonPart.toLowerCase()}`);
        td.dataset.date = fdDateStr;
        const wfd = el('div','week-fairy-date',`${fd.fairyMonth.replace(/moon$/i,'')} ${fd.fairyDay}`);
        wfd.dataset.short = `${fd.fairyMonth.slice(0,3)} ${fd.fairyDay}`;
        td.appendChild(wfd);
        td.appendChild(el('div','week-greg-date', fmtGreg(fd.gregDate)));
        if (fd.isToday) { const ib=el('button','info-btn'); ib.dataset.from=fdDateStr; ib.dataset.label='Today'; ib.textContent='ⓘ'; ib.classList.add('today-info-btn'); td.appendChild(ib); }
        const ic=moonIcons(fd); if(ic){const ig=el('span','icon-group');ig.innerHTML=ic;td.appendChild(ig);}
        i++;
      }
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  tbl.appendChild(tbody); root.appendChild(tbl);
}

let currentFY = null;
let scrollToTodayAfterRender = false;
let selectedDate = null;
let scrollToSelectedAfterRender = false;
let restoreScrollFracAfterRender = null;

function render(holYear, viewMode) {
  const root = document.getElementById('calendar-root');
  root.innerHTML = '<div class="loading">Calculating calendar…</div>';
  setTimeout(() => {
    try {
      const fy = buildFairyYear(holYear);
      currentFY = fy;
      if      (viewMode==='greg')  renderGreg(fy);
      else if (viewMode==='fairy') renderFairy(fy);
      else if (viewMode==='week')  renderWeek(fy);
      if (scrollToTodayAfterRender) {
        scrollToTodayAfterRender = false;
        requestAnimationFrame(() => {
          document.querySelector('.is-today')?.scrollIntoView({behavior:'smooth', block:'center'});
        });
      }
      if (scrollToSelectedAfterRender && selectedDate) {
        scrollToSelectedAfterRender = false;
        requestAnimationFrame(() => {
          document.querySelector('.is-selected')?.scrollIntoView({behavior:'smooth', block:'center'});
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

// ─── Info Modal ──────────────────────────────────────────────────────

function initModal() {
  const modal = document.createElement('div');
  modal.id = 'cal-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    `<div id="modal-backdrop"></div>` +
    `<div id="modal-box">` +
      `<div id="modal-header">` +
        `<h2 id="modal-title"></h2>` +
        `<div id="modal-header-btns">` +
          `<button id="modal-today-btn" title="Show events from today">Today</button>` +
          `<button id="modal-close" aria-label="Close">✕</button>` +
        `</div>` +
      `</div>` +
      `<div id="modal-body"></div>` +
    `</div>`;
  document.body.appendChild(modal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-today-btn').addEventListener('click', () => {
    if (currentFY) showModal(utcDateStr(new Date()), 'Today', currentFY);
  });
}

function closeModal() {
  document.getElementById('cal-modal').setAttribute('hidden', '');
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

function showModal(fromDateStr, label, fy) {
  const toStr = utcDateStr(new Date(new Date(fromDateStr).getTime() + 60 * 86400000));
  const todayStr = utcDateStr(new Date());
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
  const consts = getEveningConstellations(skyDate);
  const visPlans = getVisiblePlanets(skyDate);
  const activeMeteors = fy.eventTimeline.filter(e =>
    e.kind === 'meteorShower' && e.dateStr >= fromDateStr && e.dateStr <= toStr
  );
  const moonIllum = moonIllumPct(skyDate);

  let eveningSkyHTML = '';
  if (consts.length > 0 || visPlans.length > 0 || activeMeteors.length > 0) {
    const _skyFd = fy.dayMap.get(fromDateStr);
    const _skyGd = _skyFd?.gregDate || skyDate;
    const _skyDateFmt = ((state.viewMode === 'fairy' || state.viewMode === 'week') && _skyFd)
      ? `${_skyFd.fairyMonth.replace(/moon$/i,'')} ${_skyFd.fairyDay}`
      : `${GREG_MONTH_NAMES[_skyGd.getUTCMonth()].slice(0,3)} ${_skyGd.getUTCDate()}`;
    const moonIllumStr = `, 🌙 ${moonIllum}%`;
    eveningSkyHTML += `<div class="modal-section-head">Evening Sky (${_skyDateFmt}${moonIllumStr}, 8pm–midnight)</div>`;
    if (visPlans.length > 0)
      eveningSkyHTML += `<div class="constellation-list"><b>Planets:</b> ${visPlans.map(p=>`${PLANET_SYMBOLS[p.name]} ${p.name} (${p.elong}°)`).join(' · ')}</div>`;
    if (activeMeteors.length > 0)
      eveningSkyHTML += `<div class="constellation-list"><b>Meteor peaks:</b> ${activeMeteors.map(e=>`🌠 ${e.name} (~${e.zhr}/hr)`).join(' · ')}</div>`;
    if (consts.length > 0)
      eveningSkyHTML += `<div class="constellation-list">${consts.map(c=>c.name).join(' · ')}</div>`;
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

  document.getElementById('modal-title').textContent = label;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('cal-modal').removeAttribute('hidden');
}

// ─── Header illustrations ─────────────────────────────────────────

const HERO_PALETTE = {
  fairy:  { bg:'#fff0f8', stroke:'#c02070', fill:'#f9b8d0', accent:'#9c5ab8', glow:'#ffd8ee' },
  wizard: { bg:'#180b2e', stroke:'#c0a0e0', fill:'#5a3080', accent:'#f0c000', glow:'#3a1060' },
  celtic: { bg:'#f0ede4', stroke:'#2d6a4f', fill:'#90c8a0', accent:'#c8a030', glow:'#d0e8d0' },
  animal: { bg:'#f5efe0', stroke:'#6a4820', fill:'#c89858', accent:'#c87840', glow:'#e8d8b0' },
  flower: { bg:'#fff4f8', stroke:'#c04070', fill:'#ffb0c8', accent:'#20a060', glow:'#ffe0ee' },
};

function _drawRobin(p) {
  return `<ellipse cx="80" cy="64" rx="17" ry="13" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<circle cx="80" cy="47" r="12" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="82" cy="60" rx="12" ry="10" fill="#e05820" opacity="0.88"/>
<path d="M66 62 Q57 55 62 46 Q70 50 69 59Z" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.2"/>
<path d="M91 44 L98 42 L95 49Z" fill="${p.stroke}"/>
<circle cx="89" cy="42" r="2.2" fill="${p.stroke}"/>
<circle cx="90" cy="41" r="0.9" fill="white" opacity="0.7"/>
<line x1="73" y1="76" x2="69" y2="88" stroke="${p.stroke}" stroke-width="2"/>
<line x1="84" y1="76" x2="88" y2="88" stroke="${p.stroke}" stroke-width="2"/>
<line x1="69" y1="88" x2="64" y2="90" stroke="${p.stroke}" stroke-width="1.6"/>
<line x1="88" y1="88" x2="93" y2="90" stroke="${p.stroke}" stroke-width="1.6"/>`;
}

function _drawRabbit(p) {
  return `<ellipse cx="80" cy="67" rx="18" ry="14" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<circle cx="80" cy="50" r="14" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="70" cy="28" rx="6" ry="16" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="90" cy="28" rx="6" ry="16" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="70" cy="28" rx="3.5" ry="12" fill="#ffb0c0" opacity="0.75"/>
<ellipse cx="90" cy="28" rx="3.5" ry="12" fill="#ffb0c0" opacity="0.75"/>
<circle cx="74" cy="46" r="3" fill="${p.stroke}"/>
<circle cx="86" cy="46" r="3" fill="${p.stroke}"/>
<circle cx="75" cy="45" r="1.2" fill="white" opacity="0.65"/>
<circle cx="87" cy="45" r="1.2" fill="white" opacity="0.65"/>
<ellipse cx="80" cy="54" rx="3.5" ry="2.5" fill="#e080a0" opacity="0.8"/>
<circle cx="94" cy="70" r="6" fill="white" stroke="${p.stroke}" stroke-width="1" opacity="0.85"/>`;
}

function _drawTurkey(p) {
  return `<ellipse cx="65" cy="42" rx="8" ry="20" fill="${p.accent}" stroke="${p.stroke}" stroke-width="1" opacity="0.75" transform="rotate(-30 65 42)"/>
<ellipse cx="72" cy="32" rx="8" ry="20" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1" opacity="0.75" transform="rotate(-12 72 32)"/>
<ellipse cx="80" cy="28" rx="8" ry="20" fill="${p.accent}" stroke="${p.stroke}" stroke-width="1" opacity="0.75"/>
<ellipse cx="88" cy="32" rx="8" ry="20" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1" opacity="0.75" transform="rotate(12 88 32)"/>
<ellipse cx="95" cy="42" rx="8" ry="20" fill="${p.accent}" stroke="${p.stroke}" stroke-width="1" opacity="0.75" transform="rotate(30 95 42)"/>
<ellipse cx="80" cy="66" rx="19" ry="15" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="80" cy="51" rx="7" ry="6" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.2"/>
<circle cx="80" cy="43" r="8" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<path d="M76 46 Q73 51 76 54 Q79 51 76 46Z" fill="#e03020" opacity="0.85"/>
<path d="M87 41 L93 39 L91 44Z" fill="${p.stroke}"/>
<circle cx="85" cy="40" r="2.2" fill="${p.stroke}"/>
<circle cx="85.8" cy="39.3" r="0.9" fill="white" opacity="0.65"/>
<line x1="74" y1="80" x2="70" y2="91" stroke="${p.stroke}" stroke-width="2"/>
<line x1="86" y1="80" x2="90" y2="91" stroke="${p.stroke}" stroke-width="2"/>`;
}

function _drawBear(p) {
  return `<ellipse cx="80" cy="66" rx="24" ry="19" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<circle cx="80" cy="46" r="20" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<circle cx="63" cy="31" r="10" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<circle cx="97" cy="31" r="10" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="80" cy="55" rx="11" ry="8" fill="${p.glow}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.7"/>
<circle cx="73" cy="44" r="3.5" fill="${p.stroke}"/>
<circle cx="87" cy="44" r="3.5" fill="${p.stroke}"/>
<circle cx="74.3" cy="43" r="1.4" fill="white" opacity="0.65"/>
<circle cx="88.3" cy="43" r="1.4" fill="white" opacity="0.65"/>
<ellipse cx="80" cy="52" rx="4.5" ry="3" fill="${p.stroke}" opacity="0.8"/>
<path d="M72 58 Q80 65 88 58" stroke="${p.stroke}" stroke-width="2" fill="none"/>`;
}

function _drawFox(p) {
  return `<path d="M94 65 Q118 52 122 38 Q128 48 124 62 Q126 67 122 72 Q110 72 94 65Z" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.2"/>
<ellipse cx="121" cy="65" rx="6" ry="5" fill="white" opacity="0.7"/>
<ellipse cx="78" cy="67" rx="19" ry="13" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<ellipse cx="78" cy="50" rx="15" ry="13" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5"/>
<path d="M64 42 L60 24 L74 38Z" fill="${p.accent}" stroke="${p.stroke}" stroke-width="1"/>
<path d="M92 42 L96 24 L82 38Z" fill="${p.accent}" stroke="${p.stroke}" stroke-width="1"/>
<ellipse cx="78" cy="57" rx="8" ry="6" fill="#f4eee0" opacity="0.85"/>
<circle cx="72" cy="47" r="3" fill="${p.stroke}"/>
<circle cx="84" cy="47" r="3" fill="${p.stroke}"/>
<circle cx="73" cy="46" r="1.2" fill="white" opacity="0.65"/>
<circle cx="85" cy="46" r="1.2" fill="white" opacity="0.65"/>
<ellipse cx="78" cy="55" rx="3.5" ry="2.5" fill="#d06060" opacity="0.85"/>`;
}

function _decoFairy(p) {
  return `<circle cx="16" cy="16" r="5" fill="${p.accent}" opacity="0.2"/><circle cx="26" cy="8" r="3" fill="${p.accent}" opacity="0.18"/><circle cx="8" cy="27" r="3" fill="${p.accent}" opacity="0.18"/>` +
    `<circle cx="144" cy="16" r="5" fill="${p.accent}" opacity="0.2"/><circle cx="134" cy="8" r="3" fill="${p.accent}" opacity="0.18"/><circle cx="152" cy="27" r="3" fill="${p.accent}" opacity="0.18"/>` +
    `<path d="M22 84 Q26 78 22 72 M29 84 Q33 78 29 72" stroke="${p.stroke}" stroke-width="1.2" fill="none" opacity="0.28"/>` +
    `<path d="M138 84 Q134 78 138 72 M131 84 Q127 78 131 72" stroke="${p.stroke}" stroke-width="1.2" fill="none" opacity="0.28"/>`;
}

function _decoWizard(p) {
  return `<circle cx="18" cy="18" r="2.5" fill="${p.accent}" opacity="0.65"/><circle cx="34" cy="8" r="2" fill="white" opacity="0.45"/><circle cx="8" cy="35" r="2" fill="white" opacity="0.38"/>` +
    `<circle cx="52" cy="13" r="1.5" fill="${p.accent}" opacity="0.55"/>` +
    `<circle cx="142" cy="18" r="2.5" fill="${p.accent}" opacity="0.65"/><circle cx="126" cy="8" r="2" fill="white" opacity="0.45"/><circle cx="152" cy="35" r="2" fill="white" opacity="0.38"/>` +
    `<circle cx="108" cy="13" r="1.5" fill="${p.accent}" opacity="0.55"/>` +
    `<path d="M23 80 L25 73 L27 80 L20 75 L30 75Z" fill="${p.accent}" opacity="0.55"/>` +
    `<path d="M133 80 L135 73 L137 80 L130 75 L140 75Z" fill="${p.accent}" opacity="0.55"/>` +
    `<path d="M14 60 Q18 54 22 60" stroke="${p.stroke}" stroke-width="1.3" fill="none" opacity="0.45"/>` +
    `<path d="M138 60 Q142 54 146 60" stroke="${p.stroke}" stroke-width="1.3" fill="none" opacity="0.45"/>`;
}

function _decoCeltic(p) {
  return `<path d="M5 5 Q18 2 22 12 Q26 22 14 22 Q2 22 4 12Z" stroke="${p.accent}" stroke-width="1.5" fill="none" opacity="0.5"/>` +
    `<path d="M155 5 Q142 2 138 12 Q134 22 146 22 Q158 22 156 12Z" stroke="${p.accent}" stroke-width="1.5" fill="none" opacity="0.5"/>` +
    `<path d="M5 85 Q18 88 22 78 Q26 68 14 68 Q2 68 4 78Z" stroke="${p.accent}" stroke-width="1.5" fill="none" opacity="0.5"/>` +
    `<path d="M155 85 Q142 88 138 78 Q134 68 146 68 Q158 68 156 78Z" stroke="${p.accent}" stroke-width="1.5" fill="none" opacity="0.5"/>` +
    `<line x1="30" y1="3" x2="130" y2="3" stroke="${p.accent}" stroke-width="0.8" opacity="0.3"/>` +
    `<line x1="30" y1="87" x2="130" y2="87" stroke="${p.accent}" stroke-width="0.8" opacity="0.3"/>`;
}

function _decoAnimal(p) {
  return `<path d="M5 33 Q14 27 20 33 Q14 39 5 33Z" fill="${p.accent}" opacity="0.28"/>` +
    `<path d="M5 55 Q14 49 20 55 Q14 61 5 55Z" fill="${p.accent}" opacity="0.22"/>` +
    `<path d="M155 33 Q146 27 140 33 Q146 39 155 33Z" fill="${p.accent}" opacity="0.28"/>` +
    `<path d="M155 55 Q146 49 140 55 Q146 61 155 55Z" fill="${p.accent}" opacity="0.22"/>` +
    `<path d="M34 86 Q40 80 46 86" stroke="${p.stroke}" stroke-width="1.4" fill="none" opacity="0.35"/>` +
    `<path d="M114 86 Q120 80 126 86" stroke="${p.stroke}" stroke-width="1.4" fill="none" opacity="0.35"/>`;
}

function _decoFlower(p) {
  function _f(cx, cy) {
    return `<circle cx="${cx}" cy="${cy}" r="7" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.38"/>` +
      `<ellipse cx="${cx}" cy="${cy-9}" rx="4" ry="6" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.32"/>` +
      `<ellipse cx="${cx}" cy="${cy+9}" rx="4" ry="6" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.32"/>` +
      `<ellipse cx="${cx-9}" cy="${cy}" rx="4" ry="6" transform="rotate(90 ${cx-9} ${cy})" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.32"/>` +
      `<ellipse cx="${cx+9}" cy="${cy}" rx="4" ry="6" transform="rotate(90 ${cx+9} ${cy})" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.32"/>` +
      `<circle cx="${cx}" cy="${cy}" r="4" fill="${p.accent}" opacity="0.5"/>`;
  }
  return _f(15, 50) + _f(145, 50);
}

function getHeaderSVG(animal, theme) {
  const p = HERO_PALETTE[theme] || HERO_PALETTE.fairy;
  const decoMap   = { fairy:_decoFairy, wizard:_decoWizard, celtic:_decoCeltic, animal:_decoAnimal, flower:_decoFlower };
  const animalMap = { Robin:_drawRobin, Rabbit:_drawRabbit, Turkey:_drawTurkey, Bear:_drawBear, Fox:_drawFox };
  const deco   = (decoMap[theme]    || _decoFairy)(p);
  const figure = (animalMap[animal] || _drawRobin)(p);
  return `<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" class="year-hero-svg" aria-hidden="true"><rect width="160" height="100" fill="${p.bg}" rx="8"/>${deco}${figure}</svg>`;
}

// ─── themes.js ──────────────────────────────────────────────────────

const PATTERNS = {
  celtic: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Cpath d='M10 10 Q20 0 30 10 Q40 20 50 10 M10 50 Q20 40 30 50 Q40 60 50 50 M10 10 Q0 20 10 30 Q20 40 10 50 M50 10 Q60 20 50 30 Q40 40 50 50 M30 10 L30 50 M10 30 L50 30' stroke='%23c8a96e' stroke-width='1.5' fill='none' opacity='0.25'/%3E%3C/svg%3E")`,
  wizard: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='none'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23c8b8e8' opacity='0.4'/%3E%3Ccircle cx='45' cy='8' r='1.5' fill='%23e8d8ff' opacity='0.35'/%3E%3Ccircle cx='65' cy='25' r='1' fill='%23c8b8e8' opacity='0.3'/%3E%3Ccircle cx='30' cy='45' r='2.5' fill='%23e8d8ff' opacity='0.4'/%3E%3Ccircle cx='70' cy='60' r='1.5' fill='%23c8b8e8' opacity='0.35'/%3E%3Ccircle cx='10' cy='65' r='1' fill='%23e8d8ff' opacity='0.3'/%3E%3Ccircle cx='55' cy='50' r='2' fill='%23c8b8e8' opacity='0.35'/%3E%3Cpath d='M40 20 L42 26 L48 26 L43 30 L45 36 L40 32 L35 36 L37 30 L32 26 L38 26 Z' fill='%23ffd700' opacity='0.2'/%3E%3Cpath d='M20 55 Q25 48 30 55' stroke='%23c8b8e8' stroke-width='1' fill='none' opacity='0.25'/%3E%3C/svg%3E")`,
  fairy:  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Ccircle cx='15' cy='15' r='3' fill='%23ffb7d5' opacity='0.3'/%3E%3Ccircle cx='15' cy='10' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='20' cy='15' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='10' cy='15' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='15' cy='20' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='45' cy='45' r='3' fill='%23ffb7d5' opacity='0.3'/%3E%3Ccircle cx='45' cy='40' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='50' cy='45' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='40' cy='45' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='45' cy='50' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3C/svg%3E")`,
  animal: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70'%3E%3Crect width='70' height='70' fill='none'/%3E%3Cellipse cx='20' cy='20' rx='5' ry='6' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='17' cy='17' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='23' cy='17' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='17' cy='23' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='23' cy='23' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Cellipse cx='50' cy='50' rx='5' ry='6' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='47' cy='47' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='53' cy='47' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='47' cy='53' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='53' cy='53' r='2' fill='%23a0785a' opacity='0.15'/%3E%3C/svg%3E")`,
  flower: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' fill='none'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(0 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(60 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(120 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(180 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(240 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(300 32 32)'/%3E%3Ccircle cx='32' cy='32' r='4' fill='%23fde68a' opacity='0.4'/%3E%3C/svg%3E")`,
};

const THEMES = {
  celtic: {
    '--font-family-header':'"Palatino Linotype",Palatino,"Book Antiqua",serif',
    '--font-family-body':'"Palatino Linotype",Palatino,Georgia,serif',
    '--color-accent':'#2d6a4f','--color-accent-2':'#c8a96e',
    '--color-darkmoon':'#1a3a2a','--color-bluemoon':'#1a2a3a',
    '--color-moon-icon':'#2d6a4f','--color-solar-icon':'#c8a96e',
    '--border-radius-cell':'2px','--pattern-bg':PATTERNS.celtic,
    variants:{
      a:{'--color-bg':'#f0ede4','--color-bg-alt':'#e6e0d0','--color-surface':'#faf8f2','--color-border':'#c8a96e','--color-text-primary':'#2a2010','--color-text-secondary':'#6b5a3a','--color-today-highlight':'#d4edda','--color-weekend':'rgba(200,169,110,0.1)'},
      b:{'--color-bg':'#e8f4ee','--color-bg-alt':'#d8ead8','--color-surface':'#f2faf4','--color-border':'#2d6a4f','--color-text-primary':'#0d2b1a','--color-text-secondary':'#3a6a50','--color-today-highlight':'#b7e4c7','--color-weekend':'rgba(45,106,79,0.08)'},
      c:{'--color-bg':'#f5f0e8','--color-bg-alt':'#e8e0d0','--color-surface':'#fdfaf5','--color-border':'#8b6914','--color-text-primary':'#2a1f08','--color-text-secondary':'#7a5a20','--color-today-highlight':'#fde8a0','--color-weekend':'rgba(139,105,20,0.08)'},
      d:{'--color-bg':'#ece8f0','--color-bg-alt':'#ddd8e8','--color-surface':'#f8f6fc','--color-border':'#6b4a8a','--color-text-primary':'#1a1028','--color-text-secondary':'#5a3a7a','--color-today-highlight':'#e0d0f8','--color-weekend':'rgba(107,74,138,0.08)'},
      e:{'--color-bg':'#f0e8e8','--color-bg-alt':'#e4d8d8','--color-surface':'#fdf8f8','--color-border':'#8a3a3a','--color-text-primary':'#280d0d','--color-text-secondary':'#7a3030','--color-today-highlight':'#f8d0d0','--color-weekend':'rgba(138,58,58,0.08)'},
    },
  },
  wizard: {
    '--font-family-header':'"Palatino Linotype",Palatino,serif',
    '--font-family-body':'Georgia,"Times New Roman",serif',
    '--color-accent':'#9b59b6','--color-accent-2':'#f1c40f',
    '--color-darkmoon':'#1a0a2e','--color-bluemoon':'#0a1a3e',
    '--color-moon-icon':'#c8b8e8','--color-solar-icon':'#f1c40f',
    '--border-radius-cell':'4px','--pattern-bg':PATTERNS.wizard,
    variants:{
      a:{'--color-bg':'#1e1030','--color-bg-alt':'#2a1845','--color-surface':'#26163a','--color-border':'#7b4fa0','--color-text-primary':'#e8d8ff','--color-text-secondary':'#b09ad0','--color-today-highlight':'#4a2a6a','--color-weekend':'rgba(123,79,160,0.2)'},
      b:{'--color-bg':'#0d1a2e','--color-bg-alt':'#162440','--color-surface':'#111e38','--color-border':'#2980b9','--color-text-primary':'#d8eeff','--color-text-secondary':'#7ab8d8','--color-today-highlight':'#1a3a5a','--color-weekend':'rgba(41,128,185,0.15)'},
      c:{'--color-bg':'#1a1a0e','--color-bg-alt':'#252518','--color-surface':'#202014','--color-border':'#c8a000','--color-text-primary':'#fff8d0','--color-text-secondary':'#c8b060','--color-today-highlight':'#3a3000','--color-weekend':'rgba(200,160,0,0.12)'},
      d:{'--color-bg':'#f0eefc','--color-bg-alt':'#e4e0f4','--color-surface':'#f8f6ff','--color-border':'#6040a0','--color-text-primary':'#1a0840','--color-text-secondary':'#6040a0','--color-today-highlight':'#d8c8ff','--color-weekend':'rgba(96,64,160,0.08)'},
      e:{'--color-bg':'#2a1e10','--color-bg-alt':'#362818','--color-surface':'#2e2214','--color-border':'#c85000','--color-text-primary':'#ffe8c8','--color-text-secondary':'#d09050','--color-today-highlight':'#4a2800','--color-weekend':'rgba(200,80,0,0.12)'},
    },
  },
  fairy: {
    '--font-family-header':'"Palatino Linotype",Palatino,Georgia,serif',
    '--font-family-body':'"Palatino Linotype",Palatino,Georgia,serif',
    '--color-accent':'#d63384','--color-accent-2':'#9c5ab8',
    '--color-darkmoon':'#2d0a3a','--color-bluemoon':'#0a1a3a',
    '--color-moon-icon':'#d63384','--color-solar-icon':'#f59e0b',
    '--border-radius-cell':'8px','--pattern-bg':PATTERNS.fairy,
    variants:{
      a:{'--color-bg':'#fff0f8','--color-bg-alt':'#fce4f0','--color-surface':'#fff8fc','--color-border':'#f0a0c8','--color-text-primary':'#3a0828','--color-text-secondary':'#a03060','--color-today-highlight':'#ffd0e8','--color-weekend':'rgba(214,51,132,0.07)'},
      b:{'--color-bg':'#f0e8ff','--color-bg-alt':'#e4d8f8','--color-surface':'#f8f4ff','--color-border':'#b080d8','--color-text-primary':'#200838','--color-text-secondary':'#8040c0','--color-today-highlight':'#e0c8ff','--color-weekend':'rgba(156,90,184,0.08)'},
      c:{'--color-bg':'#f0fff4','--color-bg-alt':'#d8f8e4','--color-surface':'#f8fff8','--color-border':'#80c8a0','--color-text-primary':'#082820','--color-text-secondary':'#408060','--color-today-highlight':'#c0f0d0','--color-weekend':'rgba(64,128,96,0.08)'},
      d:{'--color-bg':'#fffff0','--color-bg-alt':'#f8f8d8','--color-surface':'#fffff8','--color-border':'#c8c840','--color-text-primary':'#282808','--color-text-secondary':'#808020','--color-today-highlight':'#f0f0a0','--color-weekend':'rgba(200,200,64,0.08)'},
      e:{'--color-bg':'#fff8f0','--color-bg-alt':'#f8e8d0','--color-surface':'#fffcf8','--color-border':'#e0a060','--color-text-primary':'#281808','--color-text-secondary':'#a06020','--color-today-highlight':'#ffe0b0','--color-weekend':'rgba(224,160,96,0.08)'},
    },
  },
  animal: {
    '--font-family-header':'Georgia,"Times New Roman",serif',
    '--font-family-body':'Georgia,"Times New Roman",serif',
    '--color-accent':'#7a5a2a','--color-accent-2':'#c87840',
    '--color-darkmoon':'#1a0f08','--color-bluemoon':'#080f1a',
    '--color-moon-icon':'#c87840','--color-solar-icon':'#e8a020',
    '--border-radius-cell':'3px','--pattern-bg':PATTERNS.animal,
    variants:{
      a:{'--color-bg':'#f5efe0','--color-bg-alt':'#ece0c8','--color-surface':'#faf6ee','--color-border':'#b08040','--color-text-primary':'#1a1008','--color-text-secondary':'#6a4820','--color-today-highlight':'#f0d898','--color-weekend':'rgba(176,128,64,0.08)'},
      b:{'--color-bg':'#e8f0e0','--color-bg-alt':'#d8e8c8','--color-surface':'#f2f8ec','--color-border':'#608040','--color-text-primary':'#101808','--color-text-secondary':'#406028','--color-today-highlight':'#c8e890','--color-weekend':'rgba(96,128,64,0.08)'},
      c:{'--color-bg':'#f0e8e0','--color-bg-alt':'#e4d8c8','--color-surface':'#f8f4ee','--color-border':'#a07060','--color-text-primary':'#201008','--color-text-secondary':'#806040','--color-today-highlight':'#e8c8b0','--color-weekend':'rgba(160,112,96,0.08)'},
      d:{'--color-bg':'#e0e8f0','--color-bg-alt':'#c8d8e8','--color-surface':'#eef4f8','--color-border':'#4878a0','--color-text-primary':'#081020','--color-text-secondary':'#306080','--color-today-highlight':'#90c8e8','--color-weekend':'rgba(72,120,160,0.08)'},
      e:{'--color-bg':'#ece0f0','--color-bg-alt':'#dcc8e8','--color-surface':'#f6f0fc','--color-border':'#8050a0','--color-text-primary':'#180828','--color-text-secondary':'#604880','--color-today-highlight':'#d0a8e8','--color-weekend':'rgba(128,80,160,0.08)'},
    },
  },
  flower: {
    '--font-family-header':'"Palatino Linotype",Palatino,Georgia,serif',
    '--font-family-body':'Georgia,Palatino,serif',
    '--color-accent':'#e05080','--color-accent-2':'#20a060',
    '--color-darkmoon':'#1a0820','--color-bluemoon':'#08181a',
    '--color-moon-icon':'#e05080','--color-solar-icon':'#e0a020',
    '--border-radius-cell':'6px','--pattern-bg':PATTERNS.flower,
    variants:{
      a:{'--color-bg':'#fff4f8','--color-bg-alt':'#f8e4ee','--color-surface':'#fff8fc','--color-border':'#f080a8','--color-text-primary':'#280818','--color-text-secondary':'#c04878','--color-today-highlight':'#ffc8de','--color-weekend':'rgba(240,128,168,0.08)'},
      b:{'--color-bg':'#f4fff0','--color-bg-alt':'#e4f8e0','--color-surface':'#f8fff6','--color-border':'#50c070','--color-text-primary':'#082018','--color-text-secondary':'#308050','--color-today-highlight':'#b0e8c0','--color-weekend':'rgba(80,192,112,0.08)'},
      c:{'--color-bg':'#fffff0','--color-bg-alt':'#f8f8d8','--color-surface':'#fffffC','--color-border':'#d0c020','--color-text-primary':'#201e08','--color-text-secondary':'#807818','--color-today-highlight':'#eeee88','--color-weekend':'rgba(208,192,32,0.08)'},
      d:{'--color-bg':'#f0f8ff','--color-bg-alt':'#e0ecf8','--color-surface':'#f8fbff','--color-border':'#5890d8','--color-text-primary':'#081828','--color-text-secondary':'#3870b0','--color-today-highlight':'#b0d4f8','--color-weekend':'rgba(88,144,216,0.08)'},
      e:{'--color-bg':'#fff8f0','--color-bg-alt':'#f8e8d8','--color-surface':'#fffcf8','--color-border':'#d07030','--color-text-primary':'#281008','--color-text-secondary':'#a05020','--color-today-highlight':'#f8c890','--color-weekend':'rgba(208,112,48,0.08)'},
    },
  },
};

const VARIANT_SWATCH_COLORS = {
  fairy:  ['#fff0f8','#f0e8ff','#f0fff4','#fffff0','#fff8f0'],
  wizard: ['#1e1030','#0d1a2e','#1a1a0e','#f0eefc','#2a1e10'],
  celtic: ['#f0ede4','#e8f4ee','#f5f0e8','#ece8f0','#f0e8e8'],
  animal: ['#f5efe0','#e8f0e0','#f0e8e0','#e0e8f0','#ece0f0'],
  flower: ['#fff4f8','#f4fff0','#fffff0','#f0f8ff','#fff8f0'],
};

function applyTheme(themeName, variantName) {
  const theme = THEMES[themeName];
  if (!theme) return;
  const variant = theme.variants[variantName];
  if (!variant) return;
  const e = document.documentElement;
  for (const [k,v] of Object.entries(theme))  { if (k!=='variants') e.style.setProperty(k,v); }
  for (const [k,v] of Object.entries(variant)) e.style.setProperty(k,v);
  e.dataset.theme = themeName;
  e.dataset.variant = variantName;
}

// ─── App wiring ─────────────────────────────────────────────────────

const VARIANT_NAMES = ['a','b','c','d','e'];

let state = {
  holYear: new Date().getFullYear() + 10000,
  viewMode: 'fairy',
  theme: 'fairy',
  variant: 'a',
};

try {
  const saved = JSON.parse(localStorage.getItem('fairy-cal-state') || '{}');
  if (saved.holYear)  state.holYear  = Number(saved.holYear);
  if (saved.viewMode) state.viewMode = saved.viewMode;
  if (saved.theme)    state.theme    = saved.theme;
  if (saved.variant)  state.variant  = saved.variant;
} catch(_) {}

function buildSwatches() {
  const group = document.getElementById('variant-group');
  group.querySelectorAll('.variant-btn').forEach(b => b.remove());
  const colors = VARIANT_SWATCH_COLORS[state.theme] || [];
  VARIANT_NAMES.forEach((v, idx) => {
    const btn = document.createElement('button');
    btn.className = 'variant-btn' + (v===state.variant?' active':'');
    btn.dataset.variant = v;
    btn.style.background = colors[idx] || '#eee';
    btn.title = `Color ${v.toUpperCase()}`;
    btn.addEventListener('click', () => {
      state.variant = v;
      applyTheme(state.theme, state.variant);
      document.querySelectorAll('.variant-btn').forEach(b => b.classList.toggle('active', b.dataset.variant === v));
      try { localStorage.setItem('fairy-cal-state', JSON.stringify(state)); } catch(_) {}
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
  render(state.holYear, state.viewMode);
  try { localStorage.setItem('fairy-cal-state', JSON.stringify(state)); } catch(_) {}
}

document.getElementById('prev-year').addEventListener('click', () => { state.holYear--; refresh(); });
document.getElementById('next-year').addEventListener('click', () => { state.holYear++; refresh(); });
document.getElementById('today-btn').addEventListener('click', () => {
  state.holYear = new Date().getFullYear() + 10000;
  scrollToTodayAfterRender = true;
  refresh();
});
document.getElementById('year-input').addEventListener('change', e => {
  const v = parseInt(e.target.value, 10);
  if (!isNaN(v)) { state.holYear=v; refresh(); }
});
document.querySelectorAll('.view-btn').forEach(b => b.addEventListener('click', () => {
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
  try { localStorage.setItem('fairy-cal-state', JSON.stringify(state)); } catch(_) {}
}));
document.addEventListener('keydown', e => {
  if (e.target.tagName==='INPUT') return;
  if (e.key==='ArrowLeft')  { state.holYear--; refresh(); }
  if (e.key==='ArrowRight') { state.holYear++; refresh(); }
  if (e.key==='Escape')     closeModal();
});

document.body.addEventListener('click', e => {
  const btn = e.target.closest('.info-btn');
  if (btn && currentFY) { showModal(btn.dataset.from, btn.dataset.label, currentFY); return; }

  const cell = e.target.closest('[data-date]');
  if (cell) {
    const ds = cell.dataset.date;
    selectedDate = (selectedDate === ds) ? null : ds;
    document.querySelectorAll('[data-date].is-selected').forEach(c => c.classList.remove('is-selected'));
    if (selectedDate) document.querySelectorAll(`[data-date="${selectedDate}"]`).forEach(c => c.classList.add('is-selected'));
  }
});

initModal();
refresh();
