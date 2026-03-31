// ═══ Fairy Calendar — iroquois.js ═══
// Haudenosaunee (Iroquois) month data. Index 0 = first moon after winter solstice,
// mapping directly to Fairy calendar moon sequence (Snowmoon → Darkmoon).
// The Haudenosaunee calendar is lunisolar with 13 moons; the year begins with the
// first new moon after the winter solstice — the same anchor as the Fairy calendar.
// Moon names are derived from the 13 ceremonial cycle (one ceremony per moon).
// Sources: Haudenosaunee Confederacy (haudenosauneeconfederacy.com/ceremonies);
//   Smithsonian NMAI Haudenosaunee Guide for Educators;
//   Elisabeth Tooker, "The Iroquois Ceremonial of Midwinter" (1970, Syracuse Univ. Press);
//   Durham College, "The Thirteen Moons Teaching Cycle"
// Note: Onondaga/Seneca linguistic moon names (native field) need cultural verification.

const IROQUOIS_MONTHS = [
  { native: '', en: 'Midwinter Moon'   },  // Midwinter Ceremony — New Year, renewal (~8 days)
  { native: '', en: 'Maple Moon'       },  // Maple Ceremony — maple sap, welcome to spring
  { native: '', en: 'Thunder Moon'     },  // Thunder Dance — Thunderers (grandfathers) return
  { native: '', en: 'Planting Moon'    },  // Planting Ceremony — blessing of seeds and crops
  { native: '', en: 'Strawberry Moon'  },  // Strawberry Ceremony — first fruits of the season
  { native: '', en: 'Green Bean Moon'  },  // Green Bean Ceremony — celebration of growing food
  { native: '', en: 'Green Corn Moon'  },  // Green Corn Ceremony — gratitude for maturing corn
  { native: '', en: 'Harvest Moon'     },  // Harvest Ceremony — thanksgiving for abundance (4 days)
  { native: '', en: 'Hunting Moon'     },  // Hunting/Giving Thanks Ceremony — preparation for winter
  { native: '', en: 'Resting Moon'     },  // Bush Dance / Resting Ceremony — quieter period
  { native: '', en: 'Long Night Moon'  },  // Long Night Ceremony — winter solstice
  { native: '', en: 'Cold Moon'        },  // —
  { native: '', en: 'Extra Moon'       },  // 13th (intercalary — 13-moon years)
];

// Translations of Iroquois month names by language code.
// Index matches IROQUOIS_MONTHS; missing entries fall back to .en
const IROQUOIS_MONTHS_I18N = {
  de: ['Mittwintermond','Ahornmond','Donnermond','Pflanzmond','Erdbeermond',
       'Grünbohnenmond','Grüner-Mais-Mond','Erntemond','Jagdmond','Ruhemond',
       'Langnachtmond','Kältemond','Schaltmond'],
  fr: ["Lune du Milieu de l'Hiver",'Lune de l\'Érable','Lune du Tonnerre',
       'Lune des Semailles','Lune de la Fraise','Lune du Haricot Vert',
       'Lune du Maïs Vert','Lune des Moissons','Lune de la Chasse',
       'Lune du Repos','Lune de la Longue Nuit','Lune du Froid',
       'Lune Intercalaire'],
  it: ['Luna del Pieno Inverno','Luna dell\'Acero','Luna del Tuono',
       'Luna della Semina','Luna della Fragola','Luna del Fagiolino',
       'Luna del Mais Verde','Luna del Raccolto','Luna della Caccia',
       'Luna del Riposo','Luna della Lunga Notte','Luna del Freddo',
       'Luna Intercalare'],
  es: ['Luna del Pleno Invierno','Luna del Arce','Luna del Trueno',
       'Luna de la Siembra','Luna de la Fresa','Luna de la Judía Verde',
       'Luna del Maíz Verde','Luna de la Cosecha','Luna de la Caza',
       'Luna del Descanso','Luna de la Noche Larga','Luna del Frío',
       'Luna Intercalar'],
  sw: ['Mwezi wa Katikati ya Baridi','Mwezi wa Mti wa Maple','Mwezi wa Radi',
       'Mwezi wa Kupanda','Mwezi wa Strawberry','Mwezi wa Maharagwe ya Kijani',
       'Mwezi wa Mahindi ya Kijani','Mwezi wa Mavuno','Mwezi wa Kuwinda',
       'Mwezi wa Kupumzika','Mwezi wa Usiku Mrefu','Mwezi wa Baridi Kali',
       'Mwezi wa Ziada'],
  la: ['Luna Brumalis','Luna Aceris','Luna Tonitruum','Luna Sationis',
       'Luna Fragariae','Luna Phasiolorum','Luna Frumenti Viridis',
       'Luna Messis','Luna Venationis','Luna Quietis','Luna Noctis Longae',
       'Luna Frigoris','Luna Intercalaris'],
  sa: ['शीतमध्य चंद्र','मेपल चंद्र','वज्र चंद्र','रोपण चंद्र',
       'स्ट्रॉबेरी चंद्र','हरी फली चंद्र','हरे मक्के का चंद्र',
       'फसल चंद्र','शिकार चंद्र','विश्राम चंद्र',
       'दीर्घ रात्रि चंद्र','शीत चंद्र','अधिक चंद्र'],
};
