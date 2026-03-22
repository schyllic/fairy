// ═══ Fairy Calendar — astro.js ═══

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
    if (c.dec < -(90 - OBSERVER.lat)) return false; // below horizon all night at observer lat
    let diff = ((c.ra - raMid + 24) % 24);
    if (diff > 12) diff -= 24;
    return Math.abs(diff) <= 3.5;
  });
}

function getConstellationPositions(gregDate) {
  const Y = gregDate.getUTCFullYear(), M = gregDate.getUTCMonth()+1, D = gregDate.getUTCDate();
  const UT = 2.0; // ~9pm US Eastern
  const JD = 367*Y - Math.trunc(7*(Y+Math.trunc((M+9)/12))/4)
           + Math.trunc(275*M/9) + D + 1721013.5 + UT/24;
  const T    = (JD - 2451545.0) / 36525;
  const GMST = ((6.697375 + 2400.0513368*T + 1.0027379*UT) % 24 + 24) % 24;
  const LST  = (GMST + OBSERVER.lon/15 + 24) % 24;
  const lat  = OBSERVER.lat * Math.PI / 180;
  return EVENING_CONSTELLATIONS.map(c => {
    const ha   = ((LST - c.ra) % 24 + 24) % 24;
    const haR  = ha * Math.PI / 12;
    const decR = c.dec * Math.PI / 180;
    const sinAlt = Math.sin(decR)*Math.sin(lat) + Math.cos(decR)*Math.cos(lat)*Math.cos(haR);
    const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt))) * 180/Math.PI;
    if (alt < 5) return null;
    const cosAlt = Math.cos(Math.asin(sinAlt));
    const cosAz  = cosAlt > 0.001 ? (Math.sin(decR) - sinAlt*Math.sin(lat)) / (cosAlt*Math.cos(lat)) : 0;
    let az = Math.acos(Math.max(-1, Math.min(1, cosAz))) * 180/Math.PI;
    if (Math.sin(haR) > 0) az = 360 - az;
    return { name: c.name, az, alt };
  }).filter(Boolean);
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
  const n  = jd - 2451545.0;
  const L  = norm360(280.460 + 0.9856474 * n);
  const g  = rad(norm360(357.528 + 0.9856003 * n));
  const lam = rad(L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g));
  const sinDec = 0.39782 * Math.sin(lam);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (Math.sin(rad(altitude)) - Math.sin(rad(lat)) * sinDec)
             / (Math.cos(rad(lat)) * cosDec);
  if (Math.abs(cosH) > 1) return null;
  const H = Math.acos(cosH) * 180 / Math.PI / 15;
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
