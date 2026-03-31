// ═══ Fairy Calendar — cherokee.js ═══
// Cherokee (Tsalagi) month data. Index 0 = first moon after winter solstice,
// mapping directly to Fairy calendar moon sequence (Snowmoon → Darkmoon).
// Sources: Cherokee Nation Language Department; Raven Hail, "The Cherokee Sacred Calendar"
// Note: 13th-moon name (Nvgidatsi) is approximate — needs cultural verification.

const CHEROKEE_MONTHS = [
  { syl: 'ᎤᏃᎸᏔᎾ',  rom: 'Unolvtana', en: 'Snow Moon'     },
  { syl: 'ᎧᎦᎵ',     rom: 'Kagali',    en: 'Bony Moon'     },
  { syl: 'ᎠᏅᏱ',     rom: 'Anvyi',     en: 'Windy Moon'    },
  { syl: 'ᎧᏬᏂ',     rom: 'Kawoni',    en: 'Flower Moon'   },
  { syl: 'ᎠᏂᏍᎬᏘ',  rom: 'Anisgvti',  en: 'Planting Moon' },
  { syl: 'ᏕᎭᎷᏱ',    rom: 'Dehaluyi',  en: 'Mulberry Moon' },
  { syl: 'ᎫᏰᏉᏂ',    rom: 'Guyequoni', en: 'Raccoon Moon'  },
  { syl: 'ᎦᎶᏂ',     rom: 'Galoni',    en: 'Corn Moon'     },
  { syl: 'ᏚᎵᏍᏗ',    rom: 'Dulisdi',   en: 'Nut Moon'      },
  { syl: 'ᏚᏂᏃᏗ',    rom: 'Duninodi',  en: 'Chestnut Moon' },
  { syl: 'ᏅᏓᏕᏆ',    rom: 'Nvdadequa', en: 'Trading Moon'  },
  { syl: 'ᎥᏍᎩᏱ',    rom: 'Vsgiyi',    en: 'Cold Moon'     },
  { syl: 'ᏅᎩᏓᏥ',    rom: 'Nvgidatsi', en: 'Extra Moon'    },  // 13th (intercalary)
];

// Translations of Cherokee month names by language code.
// Index matches CHEROKEE_MONTHS; missing entries fall back to .en
const CHEROKEE_MONTHS_I18N = {
  de: ['Schneemond','Knochenmond','Windmond','Blütenmond','Pflanzmond',
       'Maulbeermond','Waschbärmond','Maismond','Nussmond','Kastanienmond',
       'Handelsmond','Kältemond','Schaltmond'],
  fr: ['Lune de Neige','Lune des Os','Lune du Vent','Lune des Fleurs',
       'Lune des Semailles','Lune des Mûres','Lune du Raton Laveur',
       'Lune du Maïs','Lune des Noix','Lune des Châtaignes',
       'Lune du Commerce','Lune du Froid','Lune Intercalaire'],
  it: ['Luna di Neve','Luna delle Ossa','Luna del Vento','Luna dei Fiori',
       'Luna della Semina','Luna delle More','Luna del Procione',
       'Luna del Mais','Luna delle Noci','Luna delle Castagne',
       'Luna del Commercio','Luna del Freddo','Luna Intercalare'],
  es: ['Luna de Nieve','Luna de los Huesos','Luna del Viento','Luna de las Flores',
       'Luna de la Siembra','Luna de la Mora','Luna del Mapache',
       'Luna del Maíz','Luna de las Nueces','Luna de las Castañas',
       'Luna del Comercio','Luna del Frío','Luna Intercalar'],
  sw: ['Mwezi wa Theluji','Mwezi wa Mifupa','Mwezi wa Upepo','Mwezi wa Maua',
       'Mwezi wa Kupanda','Mwezi wa Mulberry','Mwezi wa Raccoon',
       'Mwezi wa Mahindi','Mwezi wa Karanga','Mwezi wa Kastani',
       'Mwezi wa Biashara','Mwezi wa Baridi','Mwezi wa Ziada'],
  la: ['Luna Nivis','Luna Ossium','Luna Venti','Luna Florum',
       'Luna Sationis','Luna Mororum','Luna Procyonis',
       'Luna Frumenti','Luna Nucum','Luna Castanearum',
       'Luna Commercii','Luna Frigoris','Luna Intercalaris'],
  sa: ['हिम चंद्र','अस्थि चंद्र','वायु चंद्र','पुष्प चंद्र',
       'रोपण चंद्र','शहतूत चंद्र','रैकून चंद्र',
       'मक्के का चंद्र','अखरोट चंद्र','शाहबलूत चंद्र',
       'व्यापार चंद्र','शीत चंद्र','अधिक चंद्र'],
};
