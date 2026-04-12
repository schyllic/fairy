// ═══ Fairy Calendar — themes.js ═══

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
  function boss(cx, cy) {
    return `<circle cx="${cx}" cy="${cy}" r="9" stroke="${p.accent}" stroke-width="1.3" fill="none" opacity="0.55"/>` +
      `<path d="M${cx} ${cy-7} C${cx-4} ${cy-5} ${cx-4} ${cy+5} ${cx} ${cy+7} C${cx+4} ${cy+5} ${cx+4} ${cy-5} ${cx} ${cy-7}Z" stroke="${p.accent}" stroke-width="1.1" fill="none" opacity="0.4"/>` +
      `<path d="M${cx-7} ${cy} C${cx-5} ${cy-4} ${cx+5} ${cy-4} ${cx+7} ${cy} C${cx+5} ${cy+4} ${cx-5} ${cy+4} ${cx-7} ${cy}Z" stroke="${p.stroke}" stroke-width="1.1" fill="none" opacity="0.4"/>` +
      `<circle cx="${cx}" cy="${cy}" r="2" fill="${p.accent}" opacity="0.55"/>`;
  }
  function tri(cx, cy, d) {
    return `<path d="M${cx} ${cy} C${cx-3*d} ${cy-2} ${cx-3*d} ${cy-6} ${cx} ${cy-8}" stroke="${p.accent}" stroke-width="1.3" fill="none" opacity="0.6"/>` +
      `<path d="M${cx} ${cy} C${cx+3*d} ${cy} ${cx+7*d} ${cy+1} ${cx+7*d} ${cy+4}" stroke="${p.accent}" stroke-width="1.3" fill="none" opacity="0.6"/>` +
      `<path d="M${cx} ${cy} C${cx-2*d} ${cy+3} ${cx-5*d} ${cy+5} ${cx-7*d} ${cy+4}" stroke="${p.accent}" stroke-width="1.3" fill="none" opacity="0.6"/>` +
      `<circle cx="${cx}" cy="${cy-8}" r="1.5" stroke="${p.accent}" stroke-width="0.9" fill="none" opacity="0.5"/>` +
      `<circle cx="${cx+7*d}" cy="${cy+4}" r="1.5" stroke="${p.accent}" stroke-width="0.9" fill="none" opacity="0.5"/>` +
      `<circle cx="${cx-7*d}" cy="${cy+4}" r="1.5" stroke="${p.accent}" stroke-width="0.9" fill="none" opacity="0.5"/>` +
      `<circle cx="${cx}" cy="${cy}" r="2.5" fill="${p.stroke}" opacity="0.4"/>`;
  }
  return boss(13, 14) + tri(13, 50, 1) + boss(13, 77) +
    boss(147, 14) + tri(147, 50, -1) + boss(147, 77) +
    `<line x1="28" y1="3" x2="132" y2="3" stroke="${p.accent}" stroke-width="0.9" opacity="0.35"/>` +
    `<circle cx="60" cy="3" r="1.5" fill="${p.accent}" opacity="0.45"/>` +
    `<circle cx="80" cy="3" r="1.5" fill="${p.accent}" opacity="0.45"/>` +
    `<circle cx="100" cy="3" r="1.5" fill="${p.accent}" opacity="0.45"/>` +
    `<line x1="28" y1="87" x2="132" y2="87" stroke="${p.accent}" stroke-width="0.9" opacity="0.35"/>` +
    `<circle cx="60" cy="87" r="1.5" fill="${p.accent}" opacity="0.45"/>` +
    `<circle cx="80" cy="87" r="1.5" fill="${p.accent}" opacity="0.45"/>` +
    `<circle cx="100" cy="87" r="1.5" fill="${p.accent}" opacity="0.45"/>`;
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

// ── Seasonal plant icons for the flower theme (48×48 viewBox) ──────────────

function _plantSnowdrop(p) {
  return `<line x1="24" y1="44" x2="24" y2="22" stroke="${p.accent}" stroke-width="1.5"/>
<ellipse cx="18" cy="34" rx="3" ry="8" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5" opacity="0.85" transform="rotate(-20 18 34)"/>
<ellipse cx="30" cy="34" rx="3" ry="8" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5" opacity="0.85" transform="rotate(20 30 34)"/>
<line x1="24" y1="22" x2="24" y2="17" stroke="${p.accent}" stroke-width="1.2"/>
<path d="M24 17 Q24 13 24 11" stroke="${p.accent}" stroke-width="1.2" fill="none"/>
<ellipse cx="22" cy="19" rx="3" ry="5" fill="white" stroke="${p.stroke}" stroke-width="0.9" opacity="0.92" transform="rotate(-15 22 19)"/>
<ellipse cx="26" cy="19" rx="3" ry="5" fill="white" stroke="${p.stroke}" stroke-width="0.9" opacity="0.92" transform="rotate(15 26 19)"/>
<ellipse cx="24" cy="17" rx="3" ry="5" fill="white" stroke="${p.stroke}" stroke-width="0.9" opacity="0.92"/>
<ellipse cx="24" cy="15" rx="2" ry="4" fill="#d0f0d8" stroke="${p.accent}" stroke-width="0.7" opacity="0.85"/>`;
}

function _plantCrocus(p) {
  return `<line x1="24" y1="44" x2="24" y2="30" stroke="${p.accent}" stroke-width="1.4"/>
<line x1="20" y1="42" x2="18" y2="24" stroke="${p.accent}" stroke-width="1" opacity="0.75"/>
<line x1="28" y1="42" x2="30" y2="24" stroke="${p.accent}" stroke-width="1" opacity="0.75"/>
<ellipse cx="20" cy="22" rx="4" ry="10" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1" opacity="0.9" transform="rotate(-15 20 22)"/>
<ellipse cx="28" cy="22" rx="4" ry="10" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1" opacity="0.9" transform="rotate(15 28 22)"/>
<ellipse cx="24" cy="20" rx="4" ry="11" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1" opacity="0.95"/>
<line x1="22" y1="18" x2="22" y2="12" stroke="#e8a020" stroke-width="1.2" opacity="0.85"/>
<line x1="24" y1="17" x2="24" y2="11" stroke="#e8a020" stroke-width="1.2" opacity="0.85"/>
<line x1="26" y1="18" x2="26" y2="12" stroke="#e8a020" stroke-width="1.2" opacity="0.85"/>`;
}

function _plantDaffodil(p) {
  return `<line x1="24" y1="46" x2="24" y2="28" stroke="${p.accent}" stroke-width="1.5"/>
<ellipse cx="16" cy="38" rx="3" ry="9" fill="${p.accent}" opacity="0.8" transform="rotate(-30 16 38)"/>
<ellipse cx="32" cy="38" rx="3" ry="9" fill="${p.accent}" opacity="0.8" transform="rotate(30 32 38)"/>
<ellipse cx="24" cy="22" rx="5" ry="8" fill="#ffe060" stroke="#c89020" stroke-width="0.8" opacity="0.95" transform="rotate(0 24 22)"/>
<ellipse cx="24" cy="22" rx="5" ry="8" fill="#ffe060" stroke="#c89020" stroke-width="0.8" opacity="0.95" transform="rotate(60 24 22)"/>
<ellipse cx="24" cy="22" rx="5" ry="8" fill="#ffe060" stroke="#c89020" stroke-width="0.8" opacity="0.95" transform="rotate(120 24 22)"/>
<ellipse cx="24" cy="22" rx="5" ry="8" fill="#ffe060" stroke="#c89020" stroke-width="0.8" opacity="0.9" transform="rotate(30 24 22)"/>
<ellipse cx="24" cy="22" rx="5" ry="8" fill="#ffe060" stroke="#c89020" stroke-width="0.8" opacity="0.9" transform="rotate(90 24 22)"/>
<ellipse cx="24" cy="22" rx="5" ry="8" fill="#ffe060" stroke="#c89020" stroke-width="0.8" opacity="0.9" transform="rotate(150 24 22)"/>
<circle cx="24" cy="22" r="6" fill="#e87020" stroke="#c86010" stroke-width="1"/>
<circle cx="24" cy="22" r="4" fill="none" stroke="#ffe060" stroke-width="1.2"/>`;
}

function _plantCherryBlossom(p) {
  function blossom(cx, cy, r) {
    let s = '';
    for (let i = 0; i < 5; i++) {
      const a = (i * 72 - 90) * Math.PI / 180;
      const ex = cx + Math.cos(a) * r, ey = cy + Math.sin(a) * r;
      s += `<ellipse cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" rx="3" ry="4.5" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.7" opacity="0.9" transform="rotate(${(i*72-90).toFixed(0)} ${ex.toFixed(1)} ${ey.toFixed(1)})"/>`;
    }
    return s + `<circle cx="${cx}" cy="${cy}" r="2.5" fill="#ffe060" opacity="0.9"/>`;
  }
  return `<path d="M12 44 Q18 32 26 22 Q32 16 40 12" stroke="#8a5020" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M26 22 Q30 18 36 20" stroke="#8a5020" stroke-width="1.5" fill="none" stroke-linecap="round"/>
${blossom(38, 18, 6)}
${blossom(24, 20, 5.5)}
${blossom(16, 32, 5)}`;
}

function _plantRose(p) {
  return `<line x1="24" y1="46" x2="24" y2="30" stroke="${p.accent}" stroke-width="1.5"/>
<path d="M24 35 Q16 32 14 38 Q16 42 24 40Z" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5" opacity="0.85"/>
<path d="M24 33 Q32 30 34 36 Q32 40 24 38Z" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5" opacity="0.75"/>
<circle cx="24" cy="22" r="9" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1"/>
<path d="M15 22 Q18 14 24 13 Q30 14 33 22 Q30 28 24 29 Q18 28 15 22Z" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.9"/>
<path d="M17 19 Q20 13 24 14 Q28 13 31 19" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.8"/>
<path d="M19 16 Q22 11 24 12 Q26 11 29 16" fill="${p.fill}" stroke="${p.stroke}" stroke-width="0.8" opacity="0.7"/>
<circle cx="24" cy="17" r="4.5" fill="${p.stroke}" opacity="0.3"/>
<circle cx="24" cy="18" r="3" fill="${p.stroke}" opacity="0.25"/>`;
}

function _plantStrawberry(p) {
  return `<path d="M14 26 Q12 18 18 14 Q24 12 24 12 Q24 12 30 14 Q36 18 34 26 Q32 36 24 42 Q16 36 14 26Z" fill="#e84020" stroke="#c03010" stroke-width="1"/>
<circle cx="19" cy="22" r="1" fill="#ffe0d0" opacity="0.7"/>
<circle cx="24" cy="19" r="1" fill="#ffe0d0" opacity="0.7"/>
<circle cx="29" cy="22" r="1" fill="#ffe0d0" opacity="0.7"/>
<circle cx="21" cy="29" r="1" fill="#ffe0d0" opacity="0.7"/>
<circle cx="27" cy="29" r="1" fill="#ffe0d0" opacity="0.7"/>
<circle cx="24" cy="34" r="1" fill="#ffe0d0" opacity="0.7"/>
<path d="M18 14 Q14 8 16 6 Q20 10 24 12Z" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5"/>
<path d="M24 12 Q24 6 26 5 Q27 8 28 12Z" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5"/>
<path d="M30 14 Q34 8 32 6 Q28 10 24 12Z" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5"/>`;
}

function _plantSunflower(p) {
  const rays = [];
  for (let i = 0; i < 13; i++) {
    const a = (i * (360/13)) * Math.PI / 180;
    const ex = 24 + Math.cos(a) * 14, ey = 24 + Math.sin(a) * 14;
    rays.push(`<ellipse cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" rx="3" ry="6" fill="#ffe060" stroke="#c89020" stroke-width="0.6" transform="rotate(${(i*(360/13)).toFixed(0)} ${ex.toFixed(1)} ${ey.toFixed(1)})"/>`);
  }
  return `<line x1="24" y1="46" x2="24" y2="32" stroke="${p.accent}" stroke-width="2"/>
<path d="M24 38 Q16 36 13 40 Q15 44 24 44Z" fill="${p.accent}" opacity="0.8"/>
${rays.join('')}
<circle cx="24" cy="24" r="8" fill="#8a4010" stroke="#6a3008" stroke-width="1"/>
<circle cx="24" cy="24" r="6" fill="#7a3808" opacity="0.6"/>`;
}

function _plantWheat(p) {
  function stalk(x, lean) {
    const grains = [];
    for (let i = 0; i < 5; i++) {
      const y = 16 + i * 5;
      const side = i % 2 === 0 ? 1 : -1;
      grains.push(`<ellipse cx="${(x + side * 4 + lean*i*0.3).toFixed(1)}" cy="${y}" rx="3" ry="2" fill="#e8c020" stroke="#c8a010" stroke-width="0.6" opacity="0.9"/>`);
    }
    return `<line x1="${x}" y1="44" x2="${(x+lean).toFixed(1)}" y2="13" stroke="${p.accent}" stroke-width="1.3"/>` + grains.join('');
  }
  return stalk(18, -2) + stalk(24, 0) + stalk(30, 2);
}

function _plantApple(p) {
  return `<line x1="24" y1="18" x2="24" y2="14" stroke="#8a5020" stroke-width="1.5"/>
<path d="M24 14 Q26 10 30 11" stroke="#8a5020" stroke-width="1.2" fill="none"/>
<path d="M24 14 Q22 10 18 13" fill="${p.accent}" stroke="${p.accent}" stroke-width="0.5" opacity="0.85"/>
<circle cx="24" cy="28" r="13" fill="#e84020" stroke="#c03010" stroke-width="1"/>
<ellipse cx="20" cy="23" rx="3" ry="5" fill="#ff6040" opacity="0.35"/>
<path d="M24 16 Q20 18 18 22" stroke="#c03010" stroke-width="0.8" fill="none" opacity="0.4"/>`;
}

function _plantMapleLeaf(p) {
  return `<line x1="24" y1="46" x2="24" y2="40" stroke="#7a3808" stroke-width="2"/>
<circle cx="24" cy="40" r="1.3" fill="#7a3808"/>
<path d="M24 40 C27 39,33 37,36 34 C39 31,41 28,40 25 C39 23,36 22,34 22 C37 20,40 17,39 14 C38 12,35 11,33 12 C31 13,29 11,28 9 C27 7,25 6,24 6 C23 6,21 7,20 9 C19 11,17 13,15 12 C13 11,10 12,9 14 C8 17,11 20,14 22 C12 22,9 23,8 25 C7 28,9 31,12 34 C15 37,21 39,24 40Z" fill="#c84c0a" stroke="#902e04" stroke-width="0.8"/>
<path d="M24 38 C26 37,31 35,33 32 C35 29,36 27,35 25 C34 23,32 22,31 22 C33 20,35 18,34 16 C33 14,31 13,30 14 C28 15,27 13,26 11 C25 9,24 8,24 8 C24 8,23 9,22 11 C21 13,20 15,18 14 C17 13,15 14,14 16 C13 18,15 20,17 22 C16 22,14 23,13 25 C12 27,13 29,15 32 C17 35,22 37,24 38Z" fill="#e8700e" opacity="0.55"/>
<line x1="24" y1="40" x2="24" y2="7" stroke="#7a3808" stroke-width="1.3"/>
<line x1="23" y1="34" x2="10" y2="26" stroke="#8a4008" stroke-width="0.8" opacity="0.85"/>
<line x1="22" y1="27" x2="9"  y2="20" stroke="#8a4008" stroke-width="0.75" opacity="0.8"/>
<line x1="22" y1="20" x2="13" y2="14" stroke="#8a4008" stroke-width="0.7" opacity="0.75"/>
<line x1="23" y1="14" x2="19" y2="9"  stroke="#8a4008" stroke-width="0.6" opacity="0.7"/>
<line x1="25" y1="34" x2="38" y2="26" stroke="#8a4008" stroke-width="0.8" opacity="0.85"/>
<line x1="26" y1="27" x2="39" y2="20" stroke="#8a4008" stroke-width="0.75" opacity="0.8"/>
<line x1="26" y1="20" x2="35" y2="14" stroke="#8a4008" stroke-width="0.7" opacity="0.75"/>
<line x1="25" y1="14" x2="29" y2="9"  stroke="#8a4008" stroke-width="0.6" opacity="0.7"/>`;
}

function _plantHolly(p) {
  return `<path d="M24 28 Q16 22 15 15 Q20 12 24 18 Q28 12 33 15 Q32 22 24 28Z" fill="${p.accent}" stroke="#186040" stroke-width="0.9"/>
<path d="M24 32 Q14 28 12 20 Q17 18 24 26 Q31 18 36 20 Q34 28 24 32Z" fill="${p.accent}" stroke="#186040" stroke-width="0.9" opacity="0.85"/>
<circle cx="21" cy="35" r="3.5" fill="#e82020" stroke="#c01010" stroke-width="0.8"/>
<circle cx="27" cy="35" r="3.5" fill="#e82020" stroke="#c01010" stroke-width="0.8"/>
<circle cx="24" cy="39" r="3.5" fill="#e82020" stroke="#c01010" stroke-width="0.8"/>`;
}

function _plantPine(p) {
  return `<line x1="24" y1="46" x2="24" y2="8" stroke="${p.accent}" stroke-width="1.8"/>
<line x1="24" y1="38" x2="12" y2="32" stroke="${p.accent}" stroke-width="1.2"/>
<line x1="24" y1="38" x2="36" y2="32" stroke="${p.accent}" stroke-width="1.2"/>
<line x1="12" y1="32" x2="8" y2="30" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="12" y1="32" x2="10" y2="34" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="36" y1="32" x2="40" y2="30" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="36" y1="32" x2="38" y2="34" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="24" y1="28" x2="14" y2="22" stroke="${p.accent}" stroke-width="1.2"/>
<line x1="24" y1="28" x2="34" y2="22" stroke="${p.accent}" stroke-width="1.2"/>
<line x1="14" y1="22" x2="10" y2="20" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="14" y1="22" x2="12" y2="24" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="34" y1="22" x2="38" y2="20" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="34" y1="22" x2="36" y2="24" stroke="${p.accent}" stroke-width="0.9"/>
<line x1="24" y1="18" x2="17" y2="13" stroke="${p.accent}" stroke-width="1"/>
<line x1="24" y1="18" x2="31" y2="13" stroke="${p.accent}" stroke-width="1"/>
<ellipse cx="24" cy="42" rx="4" ry="5" fill="#8a5020" stroke="#6a3808" stroke-width="0.8" opacity="0.85"/>
<ellipse cx="24" cy="40" rx="2.5" ry="1.5" fill="#c07830" opacity="0.7"/>
<ellipse cx="24" cy="42" rx="2.5" ry="1.5" fill="#c07830" opacity="0.7"/>
<ellipse cx="24" cy="44" rx="2.5" ry="1.5" fill="#c07830" opacity="0.7"/>`;
}

function _plantIris(p) {
  return `<line x1="24" y1="46" x2="24" y2="32" stroke="${p.accent}" stroke-width="1.5"/>
<ellipse cx="17" cy="38" rx="3" ry="9" fill="${p.accent}" opacity="0.8" transform="rotate(-20 17 38)"/>
<ellipse cx="31" cy="38" rx="3" ry="9" fill="${p.accent}" opacity="0.8" transform="rotate(20 31 38)"/>
<path d="M24 32 Q18 28 16 22 Q18 18 24 20 Q30 18 32 22 Q30 28 24 32Z" fill="#7060e0" stroke="#5040c0" stroke-width="0.9" opacity="0.9"/>
<ellipse cx="18" cy="26" rx="4" ry="7" fill="#8070e8" stroke="#5040c0" stroke-width="0.8" opacity="0.85" transform="rotate(-30 18 26)"/>
<ellipse cx="30" cy="26" rx="4" ry="7" fill="#8070e8" stroke="#5040c0" stroke-width="0.8" opacity="0.85" transform="rotate(30 30 26)"/>
<ellipse cx="24" cy="24" rx="4" ry="8" fill="#9080f0" stroke="#5040c0" stroke-width="0.8" opacity="0.9"/>
<ellipse cx="18" cy="28" rx="2" ry="1.5" fill="#ffe060" opacity="0.8" transform="rotate(-30 18 28)"/>
<ellipse cx="30" cy="28" rx="2" ry="1.5" fill="#ffe060" opacity="0.8" transform="rotate(30 30 28)"/>
<ellipse cx="24" cy="30" rx="2" ry="1.2" fill="#ffe060" opacity="0.8"/>`;
}

const MOON_PLANTS = {
  'Snowmoon':    _plantSnowdrop,
  'Wakingmoon':  _plantCrocus,
  'Seedmoon':    _plantDaffodil,
  'Bloommoon':   _plantCherryBlossom,
  'Flowermoon':  _plantRose,
  'Berrymoon':   _plantStrawberry,
  'Summermoon':  _plantSunflower,
  'Harvestmoon': _plantWheat,
  'Gathermoon':  _plantApple,
  'Leafmoon':    _plantMapleLeaf,
  'Frostmoon':   _plantHolly,
  'Darkmoon':    _plantPine,
  'Bluemoon':    _plantIris,
};

const GREG_MONTH_PLANTS = [
  _plantSnowdrop,     // Jan
  _plantCrocus,       // Feb
  _plantDaffodil,     // Mar
  _plantCherryBlossom,// Apr
  _plantRose,         // May
  _plantStrawberry,   // Jun
  _plantSunflower,    // Jul
  _plantWheat,        // Aug
  _plantApple,        // Sep
  _plantMapleLeaf,    // Oct
  _plantHolly,        // Nov
  _plantPine,         // Dec
];

function getMoonPlantSVG(moonName) {
  const p = HERO_PALETTE.flower;
  const drawFn = MOON_PLANTS[moonName];
  if (!drawFn) return '';
  return `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="moon-plant-svg" aria-hidden="true">${drawFn(p)}</svg>`;
}

function getGregMonthPlantSVG(monthIndex) {
  const p = HERO_PALETTE.flower;
  const drawFn = GREG_MONTH_PLANTS[monthIndex];
  if (!drawFn) return '';
  return `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="month-plant-svg" aria-hidden="true">${drawFn(p)}</svg>`;
}

// Phase-accurate moon SVG for toolbar
function getMoonPhaseSVG(illum, waxing, size) {
  size = size || 22;
  const r = size / 2;
  const cx = r, cy = r;
  const k = (1 - 2 * illum) * r;
  const dark = '#1a1a2e';
  const light = '#e8e0c8';
  const edge = `M ${cx} ${cy - r} A ${r} ${r} 0 0 ${waxing ? 1 : 0} ${cx} ${cy + r}`;
  const terminator = `A ${Math.abs(k)} ${r} 0 0 ${((k > 0) !== waxing) ? 1 : 0} ${cx} ${cy - r}`;
  const id = `mt${Date.now()}`;
  // Mare (dark patches) approximating real lunar features
  const maria =
    // Mare Imbrium (upper left)
    `<ellipse cx="${cx-r*0.18}" cy="${cy-r*0.22}" rx="${r*0.22}" ry="${r*0.18}" fill="#b8b0a0" opacity="0.5" transform="rotate(-15 ${cx-r*0.18} ${cy-r*0.22})"/>`
    // Mare Serenitatis (upper right of center)
    + `<ellipse cx="${cx+r*0.12}" cy="${cy-r*0.18}" rx="${r*0.13}" ry="${r*0.10}" fill="#b0a898" opacity="0.45"/>`
    // Mare Tranquillitatis (right of center)
    + `<ellipse cx="${cx+r*0.22}" cy="${cy+r*0.05}" rx="${r*0.16}" ry="${r*0.12}" fill="#b0a898" opacity="0.4" transform="rotate(20 ${cx+r*0.22} ${cy+r*0.05})"/>`
    // Oceanus Procellarum (left, large)
    + `<ellipse cx="${cx-r*0.28}" cy="${cy+r*0.08}" rx="${r*0.20}" ry="${r*0.28}" fill="#b8b0a0" opacity="0.35" transform="rotate(-10 ${cx-r*0.28} ${cy+r*0.08})"/>`
    // Mare Nubium (lower center)
    + `<ellipse cx="${cx-r*0.05}" cy="${cy+r*0.30}" rx="${r*0.18}" ry="${r*0.12}" fill="#b0a898" opacity="0.4"/>`
    // Mare Crisium (small, far right)
    + `<ellipse cx="${cx+r*0.42}" cy="${cy-r*0.12}" rx="${r*0.10}" ry="${r*0.08}" fill="#a8a090" opacity="0.45"/>`
    // A few small craters
    + `<circle cx="${cx-r*0.08}" cy="${cy-r*0.45}" r="${r*0.06}" fill="#c8c0b0" opacity="0.3"/>`
    + `<circle cx="${cx+r*0.30}" cy="${cy+r*0.30}" r="${r*0.07}" fill="#c0b8a8" opacity="0.35"/>`
    + `<circle cx="${cx-r*0.35}" cy="${cy-r*0.35}" r="${r*0.05}" fill="#c0b8a8" opacity="0.3"/>`;
  return `<svg viewBox="-1 -1 ${size+2} ${size+2}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" class="moon-phase-icon" aria-label="Moon phase">`
    + `<defs><clipPath id="${id}"><path d="${edge} ${terminator}"/></clipPath></defs>`
    + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}"/>`
    + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${light}" clip-path="url(#${id})"/>`
    + `<g clip-path="url(#${id})">${maria}</g>`
    + `</svg>`;
}

const FAIRY_MOON_COLORS = {
  'Snowmoon':'#80b8e8','Wakingmoon':'#90c870','Seedmoon':'#b0d838',
  'Bloommoon':'#f080b0','Flowermoon':'#e04870','Berrymoon':'#9050b8',
  'Summermoon':'#e0b020','Harvestmoon':'#e07030','Gathermoon':'#c89020',
  'Leafmoon':'#d05020','Frostmoon':'#8090c0','Darkmoon':'#6a3090','Bluemoon':'#6080d8',
};

function getFairyMoonSVG(moonName) {
  const c = FAIRY_MOON_COLORS[moonName] || '#d63384';
  const skin = '#ffd5a8';
  return `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="fairy-moon-icon" aria-hidden="true">`
    // Upper wings — large pointed leaf-shapes
    + `<path d="M20,15 C22,10 30,4 34,9 C36,13 26,18 20,15Z" fill="${c}" opacity="0.35" stroke="${c}" stroke-width="0.5"/>`
    + `<path d="M20,15 C18,10 10,4 6,9 C4,13 14,18 20,15Z" fill="${c}" opacity="0.35" stroke="${c}" stroke-width="0.5"/>`
    // Lower wings — smaller, downward
    + `<path d="M21,18 C26,19 30,26 26,28 C23,29 20,23 21,18Z" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="0.4"/>`
    + `<path d="M19,18 C14,19 10,26 14,28 C17,29 20,23 19,18Z" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="0.4"/>`
    // Torso
    + `<ellipse cx="20" cy="21" rx="2.5" ry="3" fill="${c}" opacity="0.9"/>`
    // Skirt flare
    + `<path d="M17.5,23 Q14,28 17,30 Q20,31 23,30 Q26,28 22.5,23Z" fill="${c}" opacity="0.85"/>`
    // Arms
    + `<line x1="22" y1="20" x2="27" y2="17" stroke="${skin}" stroke-width="1.3" stroke-linecap="round"/>`
    + `<line x1="18" y1="20" x2="13" y2="22" stroke="${skin}" stroke-width="1.3" stroke-linecap="round"/>`
    // Head
    + `<circle cx="20" cy="13" r="3.8" fill="${skin}"/>`
    // Hair swept up into bun
    + `<path d="M16.5,11 Q20,7.5 23.5,11" fill="${c}" opacity="0.7"/>`
    + `<circle cx="21.5" cy="9" r="2.2" fill="${c}" opacity="0.88"/>`
    // Eyes
    + `<circle cx="18.6" cy="13.5" r="0.75" fill="#50301a" opacity="0.9"/>`
    + `<circle cx="21.4" cy="13.5" r="0.75" fill="#50301a" opacity="0.9"/>`
    // Pixie dust scattered to the right
    + `<circle cx="31" cy="11" r="1.5" fill="#ffffa0" opacity="0.95"/>`
    + `<circle cx="35" cy="8" r="0.9" fill="white" opacity="0.85"/>`
    + `<circle cx="34" cy="15" r="0.8" fill="${c}" opacity="0.75"/>`
    + `<circle cx="37" cy="12" r="0.6" fill="#ffffa0" opacity="0.8"/>`
    + `<circle cx="33" cy="19" r="0.6" fill="white" opacity="0.65"/>`
    + `</svg>`;
}

function getHeaderSVG(animal, theme) {
  const p = HERO_PALETTE[theme] || HERO_PALETTE.fairy;
  const decoMap   = { fairy:_decoFairy, wizard:_decoWizard, celtic:_decoCeltic, animal:_decoAnimal, flower:_decoFlower };
  const animalMap = { Robin:_drawRobin, Rabbit:_drawRabbit, Turkey:_drawTurkey, Bear:_drawBear, Fox:_drawFox };
  const deco   = (decoMap[theme]    || _decoFairy)(p);
  const figure = (animalMap[animal] || _drawRobin)(p);
  return `<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" class="year-hero-svg" aria-hidden="true"><rect width="160" height="100" fill="${p.bg}" rx="8"/>${deco}${figure}</svg>`;
}

const PATTERNS = {
  celtic: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Cpath d='M0 0 C20 0 20 20 30 30 C40 40 60 40 60 60' stroke='%23c8a96e' stroke-width='2.5' fill='none' opacity='0.25'/%3E%3Cpath d='M60 0 C40 0 40 20 30 30' stroke='%23c8a96e' stroke-width='2.5' fill='none' opacity='0.2'/%3E%3Cpath d='M30 30 C20 40 0 40 0 60' stroke='%23c8a96e' stroke-width='2.5' fill='none' opacity='0.2'/%3E%3Cpath d='M30 0 C50 0 50 20 60 30' stroke='%23c8a96e' stroke-width='1.5' fill='none' opacity='0.15'/%3E%3Cpath d='M0 30 C10 50 30 50 30 60' stroke='%23c8a96e' stroke-width='1.5' fill='none' opacity='0.15'/%3E%3Ccircle cx='30' cy='30' r='2.5' fill='%23c8a96e' opacity='0.3'/%3E%3Ccircle cx='0' cy='0' r='2' fill='%23c8a96e' opacity='0.2'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23c8a96e' opacity='0.2'/%3E%3Ccircle cx='60' cy='0' r='2' fill='%23c8a96e' opacity='0.2'/%3E%3Ccircle cx='0' cy='60' r='2' fill='%23c8a96e' opacity='0.2'/%3E%3C/svg%3E")`,
  wizard: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='none'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23c8b8e8' opacity='0.4'/%3E%3Ccircle cx='45' cy='8' r='1.5' fill='%23e8d8ff' opacity='0.35'/%3E%3Ccircle cx='65' cy='25' r='1' fill='%23c8b8e8' opacity='0.3'/%3E%3Ccircle cx='30' cy='45' r='2.5' fill='%23e8d8ff' opacity='0.4'/%3E%3Ccircle cx='70' cy='60' r='1.5' fill='%23c8b8e8' opacity='0.35'/%3E%3Ccircle cx='10' cy='65' r='1' fill='%23e8d8ff' opacity='0.3'/%3E%3Ccircle cx='55' cy='50' r='2' fill='%23c8b8e8' opacity='0.35'/%3E%3Cpath d='M40 20 L42 26 L48 26 L43 30 L45 36 L40 32 L35 36 L37 30 L32 26 L38 26 Z' fill='%23ffd700' opacity='0.2'/%3E%3Cpath d='M20 55 Q25 48 30 55' stroke='%23c8b8e8' stroke-width='1' fill='none' opacity='0.25'/%3E%3C/svg%3E")`,
  fairy:  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Cpath d='M12,7.5 L12.5,9.5 L14.5,10 L12.5,10.5 L12,12.5 L11.5,10.5 L9.5,10 L11.5,9.5 Z' fill='%23ffb7d5' opacity='0.35'/%3E%3Cpath d='M48,41.5 L48.5,43.5 L50.5,44 L48.5,44.5 L48,46.5 L47.5,44.5 L45.5,44 L47.5,43.5 Z' fill='%23ffb7d5' opacity='0.35'/%3E%3Cpath d='M32,6.5 L32.3,7.7 L33.5,8 L32.3,8.3 L32,9.5 L31.7,8.3 L30.5,8 L31.7,7.7 Z' fill='%23fff0f5' opacity='0.3'/%3E%3Cpath d='M52,20.5 L52.3,21.7 L53.5,22 L52.3,22.3 L52,23.5 L51.7,22.3 L50.5,22 L51.7,21.7 Z' fill='%23fff0f5' opacity='0.3'/%3E%3Cpath d='M8,36.5 L8.3,37.7 L9.5,38 L8.3,38.3 L8,39.5 L7.7,38.3 L6.5,38 L7.7,37.7 Z' fill='%23fff0f5' opacity='0.3'/%3E%3Cpath d='M40,52.5 L40.3,53.7 L41.5,54 L40.3,54.3 L40,55.5 L39.7,54.3 L38.5,54 L39.7,53.7 Z' fill='%23fff0f5' opacity='0.3'/%3E%3Cpath d='M22,19.3 L22.15,19.85 L22.7,20 L22.15,20.15 L22,20.7 L21.85,20.15 L21.3,20 L21.85,19.85 Z' fill='%23ffb7d5' opacity='0.25'/%3E%3Cpath d='M54,9.3 L54.15,9.85 L54.7,10 L54.15,10.15 L54,10.7 L53.85,10.15 L53.3,10 L53.85,9.85 Z' fill='%23ffb7d5' opacity='0.25'/%3E%3Cpath d='M4,51.3 L4.15,51.85 L4.7,52 L4.15,52.15 L4,52.7 L3.85,52.15 L3.3,52 L3.85,51.85 Z' fill='%23ffb7d5' opacity='0.25'/%3E%3Cpath d='M44,31.3 L44.15,31.85 L44.7,32 L44.15,32.15 L44,32.7 L43.85,32.15 L43.3,32 L43.85,31.85 Z' fill='%23ffb7d5' opacity='0.25'/%3E%3Cpath d='M18,47.3 L18.15,47.85 L18.7,48 L18.15,48.15 L18,48.7 L17.85,48.15 L17.3,48 L17.85,47.85 Z' fill='%23ffb7d5' opacity='0.25'/%3E%3Cpath d='M56,55.3 L56.15,55.85 L56.7,56 L56.15,56.15 L56,56.7 L55.85,56.15 L55.3,56 L55.85,55.85 Z' fill='%23ffb7d5' opacity='0.25'/%3E%3C/svg%3E")`,
  animal: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cellipse cx='24' cy='30' rx='9' ry='7' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='13' cy='20' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='21' cy='15' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='30' cy='15' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='38' cy='20' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='64' cy='68' rx='9' ry='7' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='53' cy='58' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='61' cy='53' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='70' cy='53' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3Cellipse cx='78' cy='58' rx='4' ry='4.5' fill='%238a6040' opacity='0.18'/%3E%3C/svg%3E")`,
  flower: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' fill='none'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23ff5a94' opacity='0.5' transform='rotate(0 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23ff5a94' opacity='0.5' transform='rotate(60 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23ff5a94' opacity='0.5' transform='rotate(120 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23ff5a94' opacity='0.5' transform='rotate(180 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23ff5a94' opacity='0.5' transform='rotate(240 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23ff5a94' opacity='0.5' transform='rotate(300 32 32)'/%3E%3Ccircle cx='32' cy='32' r='4' fill='%23ffd050' opacity='0.7'/%3E%3C/svg%3E")`,
};

// Derives a dark-brown toolbar version from a white ANIMAL_PATTERNS entry
function animalPatternDark(p) {
  return (p || '').replace(/%23ffffff/g, '%238a6040').replace(/opacity='0\.5'/g, "opacity='0.35'");
}

// Per-year-animal footprint trail patterns (120×120 tiles, white — for dark month/moon headers)
const ANIMAL_PATTERNS = {
  Robin:  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cpath d='M5,28 L11,28 M5,28 L9,25 M5,28 L9,31 M5,28 L1,28 M20,34 L26,34 M20,34 L24,31 M20,34 L24,37 M20,34 L16,34 M35,38 L41,38 M35,38 L39,35 M35,38 L39,41 M35,38 L31,38 M50,36 L56,36 M50,36 L54,33 M50,36 L54,39 M50,36 L46,36 M65,30 L71,30 M65,30 L69,27 M65,30 L69,33 M65,30 L61,30 M80,24 L86,24 M80,24 L84,21 M80,24 L84,27 M80,24 L76,24 M95,21 L101,21 M95,21 L99,18 M95,21 L99,24 M95,21 L91,21 M110,25 L116,25 M110,25 L114,22 M110,25 L114,28 M110,25 L106,25' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' fill='none' opacity='0.5'/%3E%3Ccircle cx='5' cy='28' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='20' cy='34' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='35' cy='38' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='50' cy='36' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='65' cy='30' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='80' cy='24' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='95' cy='21' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='110' cy='25' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3C/svg%3E")`,
  Turkey: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cpath d='M8,28 L18,28 M8,28 L15,22 M8,28 L15,34 M30,36 L40,36 M30,36 L37,30 M30,36 L37,42 M52,38 L62,38 M52,38 L59,32 M52,38 L59,44 M74,30 L84,30 M74,30 L81,24 M74,30 L81,36 M96,24 L106,24 M96,24 L103,18 M96,24 L103,30' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' fill='none' opacity='0.5'/%3E%3Ccircle cx='8' cy='28' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='30' cy='36' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='52' cy='38' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='74' cy='30' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='96' cy='24' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3C/svg%3E")`,
  Bear:   `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cellipse cx='12' cy='16' rx='8' ry='6' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='20' cy='8' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='24' cy='11' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='25' cy='16' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='24' cy='21' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='20' cy='24' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='50' cy='22' rx='8' ry='6' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='58' cy='14' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='62' cy='17' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='63' cy='22' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='62' cy='27' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='58' cy='30' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='90' cy='16' rx='8' ry='6' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='98' cy='8' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='102' cy='11' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='103' cy='16' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='102' cy='21' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='98' cy='24' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='30' cy='82' rx='8' ry='6' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='38' cy='74' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='42' cy='77' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='43' cy='82' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='42' cy='87' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='38' cy='90' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='70' cy='76' rx='8' ry='6' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='78' cy='68' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='82' cy='71' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='83' cy='76' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='82' cy='81' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='78' cy='84' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='100' cy='82' rx='8' ry='6' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='108' cy='74' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='112' cy='77' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='113' cy='82' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='112' cy='87' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='108' cy='90' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3C/svg%3E")`,
  Fox:    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cellipse cx='15' cy='20' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='19' cy='14' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='22' cy='18' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='22' cy='22' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='19' cy='26' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='38' cy='14' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='42' cy='8' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='45' cy='12' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='45' cy='16' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='42' cy='20' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='61' cy='20' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='65' cy='14' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='68' cy='18' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='68' cy='22' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='65' cy='26' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='84' cy='14' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='88' cy='8' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='91' cy='12' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='91' cy='16' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='88' cy='20' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='107' cy='20' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='111' cy='14' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='114' cy='18' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='114' cy='22' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='111' cy='26' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='20' cy='82' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='24' cy='76' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='27' cy='80' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='27' cy='84' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='24' cy='88' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='43' cy='76' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='47' cy='70' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='50' cy='74' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='50' cy='78' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='47' cy='82' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='66' cy='82' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='70' cy='76' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='73' cy='80' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='73' cy='84' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='70' cy='88' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='89' cy='76' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='93' cy='70' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='96' cy='74' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='96' cy='78' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='93' cy='82' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='112' cy='82' rx='3.5' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='116' cy='76' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='119' cy='80' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='119' cy='84' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='116' cy='88' rx='2.2' ry='1.3' fill='%23ffffff' opacity='0.5'/%3E%3C/svg%3E")`,
  Rabbit: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cellipse cx='36' cy='18' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='36' cy='28' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='22' cy='19' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='22' cy='27' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='88' cy='15' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='88' cy='25' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='74' cy='16' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='74' cy='24' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='55' cy='78' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='55' cy='88' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='41' cy='79' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='41' cy='87' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='110' cy='80' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Cellipse cx='110' cy='90' rx='7' ry='3' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='96' cy='81' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='96' cy='89' r='2.5' fill='%23ffffff' opacity='0.5'/%3E%3C/svg%3E")`,
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
      a:{'--color-accent':'#2d6a4f','--color-header':'#5a3a1a','--color-bg':'#f0ede4','--color-bg-alt':'#e6e0d0','--color-surface':'#faf8f2','--color-border':'#c8a96e','--color-text-primary':'#2a2010','--color-text-secondary':'#6b5a3a','--color-today-highlight':'#d4edda','--color-weekend':'rgba(200,169,110,0.1)'},
      b:{'--color-accent':'#2d6a4f','--color-header':'#1a4a30','--color-bg':'#e8f4ee','--color-bg-alt':'#d8ead8','--color-surface':'#f2faf4','--color-border':'#2d6a4f','--color-text-primary':'#0d2b1a','--color-text-secondary':'#3a6a50','--color-today-highlight':'#b7e4c7','--color-weekend':'rgba(45,106,79,0.08)'},
      c:{'--color-accent':'#c8a030','--color-header':'#5a3a08','--color-bg':'#f5f0e8','--color-bg-alt':'#e8e0d0','--color-surface':'#fdfaf5','--color-border':'#8b6914','--color-text-primary':'#2a1f08','--color-text-secondary':'#7a5a20','--color-today-highlight':'#fde8a0','--color-weekend':'rgba(139,105,20,0.08)'},
      d:{'--color-accent':'#6b4a8a','--color-header':'#3a2060','--color-bg':'#ece8f0','--color-bg-alt':'#ddd8e8','--color-surface':'#f8f6fc','--color-border':'#6b4a8a','--color-text-primary':'#1a1028','--color-text-secondary':'#5a3a7a','--color-today-highlight':'#e0d0f8','--color-weekend':'rgba(107,74,138,0.08)'},
      e:{'--color-accent':'#8a3a3a','--color-header':'#4a1520','--color-bg':'#f0e8e8','--color-bg-alt':'#e4d8d8','--color-surface':'#fdf8f8','--color-border':'#8a3a3a','--color-text-primary':'#280d0d','--color-text-secondary':'#7a3030','--color-today-highlight':'#f8d0d0','--color-weekend':'rgba(138,58,58,0.08)'},
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
      a:{'--color-accent':'#9b59b6','--color-header':'#5a2a80','--color-bg':'#1e1030','--color-bg-alt':'#2a1845','--color-surface':'#26163a','--color-border':'#7b4fa0','--color-text-primary':'#e8d8ff','--color-text-secondary':'#b09ad0','--color-today-highlight':'#4a2a6a','--color-weekend':'rgba(123,79,160,0.2)'},
      b:{'--color-accent':'#2980b9','--color-header':'#1a4a70','--color-bg':'#0d1a2e','--color-bg-alt':'#162440','--color-surface':'#111e38','--color-border':'#2980b9','--color-text-primary':'#d8eeff','--color-text-secondary':'#7ab8d8','--color-today-highlight':'#1a3a5a','--color-weekend':'rgba(41,128,185,0.15)'},
      c:{'--color-accent':'#27ae60','--color-header':'#1a5a28','--color-bg':'#091a0d','--color-bg-alt':'#102616','--color-surface':'#0d2010','--color-border':'#1e8a3a','--color-text-primary':'#c8ffcf','--color-text-secondary':'#6abf78','--color-today-highlight':'#1a4a22','--color-weekend':'rgba(30,138,58,0.18)'},
      d:{'--color-accent':'#c0392b','--color-header':'#6a1a1a','--color-bg':'#1a0808','--color-bg-alt':'#280d0d','--color-surface':'#200b0b','--color-border':'#c0392b','--color-text-primary':'#ffe0e0','--color-text-secondary':'#d08080','--color-today-highlight':'#4a1010','--color-weekend':'rgba(192,57,43,0.18)'},
      e:{'--color-accent':'#c8a000','--color-header':'#6a5000','--color-bg':'#141008','--color-bg-alt':'#1e180a','--color-surface':'#1a140a','--color-border':'#c8a000','--color-text-primary':'#fff8c0','--color-text-secondary':'#c8b040','--color-today-highlight':'#3a2e00','--color-weekend':'rgba(200,160,0,0.18)'},
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
      a:{'--color-accent':'#d63384','--color-header':'#a0205a','--color-bg':'#fff0f8','--color-bg-alt':'#fce4f0','--color-surface':'#fff8fc','--color-border':'#f0a0c8','--color-text-primary':'#3a0828','--color-text-secondary':'#a03060','--color-today-highlight':'#ffd0e8','--color-weekend':'rgba(214,51,132,0.07)'},
      b:{'--color-accent':'#7a40b0','--color-header':'#5a2090','--color-bg':'#f0e8ff','--color-bg-alt':'#e4d8f8','--color-surface':'#f8f4ff','--color-border':'#b080d8','--color-text-primary':'#200838','--color-text-secondary':'#8040c0','--color-today-highlight':'#e0c8ff','--color-weekend':'rgba(156,90,184,0.08)'},
      c:{'--color-accent':'#2d7a50','--color-header':'#285a40','--color-bg':'#f0fff4','--color-bg-alt':'#d8f8e4','--color-surface':'#f8fff8','--color-border':'#80c8a0','--color-text-primary':'#082820','--color-text-secondary':'#408060','--color-today-highlight':'#c0f0d0','--color-weekend':'rgba(64,128,96,0.08)'},
      d:{'--color-accent':'#909010','--color-header':'#6a6a10','--color-bg':'#fffff0','--color-bg-alt':'#f8f8d8','--color-surface':'#fffff8','--color-border':'#c8c840','--color-text-primary':'#282808','--color-text-secondary':'#808020','--color-today-highlight':'#f0f0a0','--color-weekend':'rgba(200,200,64,0.08)'},
      e:{'--color-accent':'#a85818','--color-header':'#7a4010','--color-bg':'#fff8f0','--color-bg-alt':'#f8e8d0','--color-surface':'#fffcf8','--color-border':'#e0a060','--color-text-primary':'#281808','--color-text-secondary':'#a06020','--color-today-highlight':'#ffe0b0','--color-weekend':'rgba(224,160,96,0.08)'},
    },
  },
  animal: {
    '--font-family-header':'Georgia,"Times New Roman",serif',
    '--font-family-body':'Georgia,"Times New Roman",serif',
    '--color-accent':'#8b5e20','--color-accent-2':'#c87840',
    '--color-darkmoon':'#1a0f08','--color-bluemoon':'#0a1a0a',
    '--color-moon-icon':'#c87840','--color-solar-icon':'#e8a020',
    '--border-radius-cell':'3px','--pattern-bg':PATTERNS.animal,
    variants:{
      a:{'--color-accent':'#8b5e20','--color-header':'#6a4010','--color-bg':'#f5ede0','--color-bg-alt':'#ede0cc','--color-surface':'#faf6ee','--color-border':'#b08840','--color-text-primary':'#1a1008','--color-text-secondary':'#6a4820','--color-today-highlight':'#f0d898','--color-weekend':'rgba(176,136,64,0.10)'},
      b:{'--color-accent':'#4a7828','--color-header':'#2a5018','--color-bg':'#eef4e8','--color-bg-alt':'#deecd4','--color-surface':'#f4f8f0','--color-border':'#5a8040','--color-text-primary':'#0e1808','--color-text-secondary':'#3a6020','--color-today-highlight':'#c8e8a0','--color-weekend':'rgba(90,128,64,0.10)'},
      c:{'--color-accent':'#a05018','--color-header':'#7a3810','--color-bg':'#f5ede6','--color-bg-alt':'#ece0d4','--color-surface':'#faf6f2','--color-border':'#c07040','--color-text-primary':'#200e06','--color-text-secondary':'#8a4820','--color-today-highlight':'#f0c898','--color-weekend':'rgba(192,112,64,0.10)'},
      d:{'--color-accent':'#507088','--color-header':'#304050','--color-bg':'#eaeef0','--color-bg-alt':'#d8dee2','--color-surface':'#f2f4f6','--color-border':'#607080','--color-text-primary':'#0e1218','--color-text-secondary':'#405060','--color-today-highlight':'#b8ccd8','--color-weekend':'rgba(96,112,128,0.10)'},
      e:{'--color-accent':'#704828','--color-header':'#4a3018','--color-bg':'#f0ebe4','--color-bg-alt':'#e4dbd0','--color-surface':'#f8f4ee','--color-border':'#806040','--color-text-primary':'#180e06','--color-text-secondary':'#604830','--color-today-highlight':'#d8c090','--color-weekend':'rgba(128,96,64,0.10)'},
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
      a:{'--color-accent':'#e05080','--color-header':'#903040','--color-bg':'#fff4f8','--color-bg-alt':'#f8e4ee','--color-surface':'#fff8fc','--color-border':'#f080a8','--color-text-primary':'#280818','--color-text-secondary':'#c04878','--color-today-highlight':'#ffc8de','--color-weekend':'rgba(240,128,168,0.08)'},
      b:{'--color-accent':'#20a060','--color-header':'#186038','--color-bg':'#f4fff0','--color-bg-alt':'#e4f8e0','--color-surface':'#f8fff6','--color-border':'#50c070','--color-text-primary':'#082018','--color-text-secondary':'#308050','--color-today-highlight':'#b0e8c0','--color-weekend':'rgba(80,192,112,0.08)'},
      c:{'--color-accent':'#a0a010','--color-header':'#505010','--color-bg':'#fffff0','--color-bg-alt':'#f8f8d8','--color-surface':'#fffffC','--color-border':'#d0c020','--color-text-primary':'#201e08','--color-text-secondary':'#807818','--color-today-highlight':'#eeee88','--color-weekend':'rgba(208,192,32,0.08)'},
      d:{'--color-accent':'#4880c0','--color-header':'#2a5090','--color-bg':'#f0f8ff','--color-bg-alt':'#e0ecf8','--color-surface':'#f8fbff','--color-border':'#5890d8','--color-text-primary':'#081828','--color-text-secondary':'#3870b0','--color-today-highlight':'#b0d4f8','--color-weekend':'rgba(88,144,216,0.08)'},
      e:{'--color-accent':'#c86030','--color-header':'#804020','--color-bg':'#fff8f0','--color-bg-alt':'#f8e8d8','--color-surface':'#fffcf8','--color-border':'#d07030','--color-text-primary':'#281008','--color-text-secondary':'#a05020','--color-today-highlight':'#f8c890','--color-weekend':'rgba(208,112,48,0.08)'},
    },
  },
};

const VARIANT_SWATCH_COLORS = {
  fairy:  ['#fff0f8','#f0e8ff','#f0fff4','#fffff0','#fff8f0'],
  wizard: ['#1e1030','#0d1a2e','#091a0d','#1a0808','#141008'],
  celtic: ['#f0ede4','#e8f4ee','#f5f0e8','#ece8f0','#f0e8e8'],
  animal: ['#f5ede0','#eef4e8','#f5ede6','#eaeef0','#f0ebe4'],
  flower: ['#fff4f8','#f4fff0','#fffff0','#f0f8ff','#fff8f0'],
};
const VARIANT_SWATCH_BORDERS = {
  fairy:  ['#f0a0c8','#b080d8','#80c8a0','#c8c840','#e0a060'],
  wizard: ['#7b4fa0','#2980b9','#1e8a3a','#c0392b','#c8a000'],
  celtic: ['#c8a96e','#2d6a4f','#8b6914','#6b4a8a','#8a3a3a'],
  animal: ['#b08840','#5a8040','#c07040','#607080','#806040'],
  flower: ['#f080a8','#50c070','#d0c020','#5890d8','#d07030'],
};

// Color properties owned by variants — stripped from theme application
const _PALETTE_PROPS = new Set([
  '--color-accent','--color-accent-2','--color-header',
  '--color-bg','--color-bg-alt','--color-surface','--color-border',
  '--color-text-primary','--color-text-secondary',
  '--color-today-highlight','--color-weekend',
]);

function applyTheme(themeName) {
  const theme = THEMES[themeName];
  if (!theme) return;
  const e = document.documentElement;
  // Apply only non-color, non-variant theme properties (fonts, patterns, moon colors)
  for (const [k,v] of Object.entries(theme)) {
    if (k !== 'variants' && !_PALETTE_PROPS.has(k)) e.style.setProperty(k, v);
  }
  e.dataset.theme = themeName;
  if (themeName === 'animal' && currentFY) {
    const wp = ANIMAL_PATTERNS[currentFY.yearAnimal] || PATTERNS.animal;
    const _isDark = document.documentElement.dataset.colorScheme === 'dark';
    e.style.setProperty('--pattern-bg-header', wp);
    e.style.setProperty('--pattern-bg', _isDark ? wp : animalPatternDark(wp));
    e.style.setProperty('--pattern-bg-size', '120px 120px');
  } else if (themeName === 'flower') {
    e.style.setProperty('--pattern-bg-header', 'none');
    e.style.setProperty('--pattern-bg-size', '60px 60px');
  } else {
    e.style.removeProperty('--pattern-bg-header');
    e.style.setProperty('--pattern-bg-size', '60px 60px');
  }
}

const _DP_DARK  = { '--dp-robin':'#1e6635', '--dp-rabbit':'#0e3870', '--dp-turkey':'#504008', '--dp-bear':'#583010', '--dp-fox':'#581818' };
const _DP_LIGHT = { '--dp-robin':'#d4edda', '--dp-rabbit':'#d0e8ff', '--dp-turkey':'#fef9c3', '--dp-bear':'#ffe0cc', '--dp-fox':'#ffd6d6' };

function applyVariant(themeName, variantName, colorScheme) {
  const themeKey = colorScheme === 'dark' ? 'wizard' : themeName;
  const vars = THEMES[themeKey]?.variants?.[variantName];
  if (!vars) return;
  const e = document.documentElement;
  for (const [k, v] of Object.entries(vars)) e.style.setProperty(k, v);
  const dpVars = colorScheme === 'dark' ? _DP_DARK : _DP_LIGHT;
  for (const [k, v] of Object.entries(dpVars)) e.style.setProperty(k, v);
  e.dataset.variant = variantName;
  e.dataset.colorScheme = colorScheme;
}
