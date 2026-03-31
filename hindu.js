// ═══ Fairy Calendar — hindu.js ═══
// Hindu lunisolar (Panchanga) month data. Index 0 = first moon after winter solstice,
// mapping to Fairy calendar moon sequence (Snowmoon → Darkmoon).
// The Hindu year begins in Chaitra (spring equinox, Fairy moon index 3).
// Year era: Vikrama Samvat (VS) = Gregorian year + 57 (from Chaitra onward).
// Month system: Amanta (अमान्त) — month runs new moon to new moon.
// Day display uses the lunar day count (tithi) approximated by the Fairy day number.
// Sources: Drik Panchanga; Surya Siddhanta; Monier-Williams Sanskrit Dictionary.

const HINDU_MONTHS = [
  { dev: 'पौष',         iast: 'Pauṣa',       en: 'Pausha'        }, // 0 — Snowmoon area
  { dev: 'माघ',         iast: 'Māgha',        en: 'Magha'         }, // 1
  { dev: 'फाल्गुन',     iast: 'Phālguna',     en: 'Phalguna'      }, // 2
  { dev: 'चैत्र',       iast: 'Caitra',       en: 'Chaitra'       }, // 3 — New Year (नव वर्ष)
  { dev: 'वैशाख',       iast: 'Vaiśākha',     en: 'Vaishakha'     }, // 4
  { dev: 'ज्येष्ठ',     iast: 'Jyeṣṭha',      en: 'Jyeshtha'      }, // 5
  { dev: 'आषाढ',        iast: 'Āṣāḍha',       en: 'Ashadha'       }, // 6
  { dev: 'श्रावण',      iast: 'Śrāvaṇa',      en: 'Shravana'      }, // 7
  { dev: 'भाद्रपद',     iast: 'Bhādrapada',   en: 'Bhadrapada'    }, // 8
  { dev: 'आश्विन',      iast: 'Āśvina',       en: 'Ashvina'       }, // 9
  { dev: 'कार्तिक',     iast: 'Kārtika',      en: 'Kartika'       }, // 10
  { dev: 'मार्गशीर्ष',  iast: 'Mārgaśīrṣa',   en: 'Margashirsha'  }, // 11 — Darkmoon area
  { dev: 'अधिक मास',    iast: 'Adhika Māsa',  en: 'Extra Month'   }, // 12 — intercalary
];

// ═══ Jyotisha sky culture — nakshatra (lunar mansion) overlays ═══
// Keys match IAU constellation names as used in CONSTELLATION_LORE / CONSTELLATIONS.
// Each nakshatra is anchored by a yogatara (junction star) within that IAU boundary.
// Lore draws on Brihat Samhita, Taittiriya Brahmana, and classical Jyotisha texts.

const HINDU_SKY = {
  'Aries': {
    name: 'Ashwini',
    iast: 'Aśvinī',
    lore: 'Ashwini (अश्विनी) — the first nakshatra — is anchored by Beta Arietis (Sheratan) in the Ram. Its name means "born of a horse-woman," referring to the twin divine physicians the Ashvins, who ride a golden chariot across the sky at dawn. The Ashvins are the gods of medicine, rescue, and the transition between darkness and light: they restore sight to the blind, heal the wounded, and bring the first light of morning. Ashwini is considered auspicious for beginning journeys, medical treatment, and new ventures. Deity: Ashvins (Nāsatya and Dasra). Source: Brihat Samhita; Taittiriya Brahmana.',
  },
  'Taurus': {
    name: 'Rohini',
    iast: 'Rohiṇī',
    lore: 'Rohini (रोहिणी) — "the red one," the fourth nakshatra — is anchored by Aldebaran, the brilliant orange eye of Taurus. Rohini was the beloved favourite among the Moon god Chandra\'s twenty-seven wives (the nakshatras), and the Moon lingers longest in her mansion. She presides over fertility, growth, and material prosperity. The name refers to her reddish colour and to the red cattle associated with agricultural abundance. In mythology, Chandra\'s neglect of his other wives led Daksha to curse him with a waning cycle — accounting for the Moon\'s phases. Deity: Prajapati (Brahma). Source: Brihat Samhita; Rig Veda.',
  },
  'Orion': {
    name: 'Mrigashira',
    iast: 'Mṛgaśīrṣa',
    lore: 'Mrigashira (मृगशिरा) — "the deer\'s head," the fifth nakshatra — is anchored by Lambda Orionis at the head of the Hunter. In Jyotisha, the constellation figures differently from the Greek: this region was seen as the head of a deer or antelope being pursued across the sky. The nakshatra is associated with searching, wandering, and the gentle curiosity of a deer — sensitivity, exploration, and restlessness. The Moon-god Soma (Chandra) is the presiding deity, connecting this nakshatra to the fluid, seeking quality of the lunar mind. Deity: Soma (Moon). Source: Brihat Samhita.',
  },
  'Gemini': {
    name: 'Punarvasu',
    iast: 'Punarvasu',
    lore: 'Punarvasu (पुनर्वसु) — "the return of light" or "the two restorers of goods," the seventh nakshatra — is anchored by Pollux, the brighter twin of Gemini. The name means "becoming good again," evoking renewal, recovery, and the restoration of what was lost. After the darkness and searching of earlier nakshatras, Punarvasu brings a return to safety and home. It is associated with the end of the monsoon rains and the return of clearer skies. The deity Aditi — the boundless mother of the gods — presides, representing infinite capacity and the nurturing origin of creation. Deity: Aditi. Source: Taittiriya Brahmana.',
  },
  'Leo': {
    name: 'Magha',
    iast: 'Maghā',
    lore: 'Magha (मघा) — "the great" or "the mighty," the tenth nakshatra — is anchored by Regulus, the heart of the Lion and one of the four royal stars of antiquity. Magha is the nakshatra of kings, ancestors, and royal authority. Its presiding deities are the Pitrs — the ancestral spirits — and it governs rites for the dead, the honouring of lineage, and the continuity of dharmic tradition. Those born under Magha are said to carry the dignity and responsibilities of their forebears. The region of Regulus near the ecliptic made it a natural reference point for ancient sky-watchers across cultures. Deity: Pitrs (ancestors). Source: Brihat Samhita.',
  },
  'Virgo': {
    name: 'Chitra',
    iast: 'Citrā',
    lore: 'Chitra (चित्रा) — "the bright one" or "the brilliant," the fourteenth nakshatra — is anchored by Spica, one of the brightest stars in the night sky and the blue-white jewel of Virgo. The name means radiant, beautiful, and variegated — suggesting the dazzling artistry of creation. Chitra is the nakshatra of architects, craftspeople, and all who shape beauty in the world; it is governed by Vishvakarman, the divine craftsman and architect of the gods who built their celestial palaces and weapons. The star\'s brilliance and position near the ecliptic made it a crucial reference point for ancient Indian astronomers. Deity: Vishvakarman. Source: Brihat Samhita.',
  },
  'Boötes': {
    name: 'Swati',
    iast: 'Svāti',
    lore: 'Swati (स्वाति) — "the self-going" or "the independent one," the fifteenth nakshatra — is anchored by Arcturus, the bright orange giant of Boötes and the fourth brightest star in the night sky. The name Svāti means sword or independent motion, and this nakshatra embodies self-sufficiency, flexibility, and the ability to move freely in the world like a windblown shoot that bends but does not break. Vayu — the wind god — presides, and the nakshatra is associated with trade, flexibility, and prosperity through movement. The heliacal rising of Arcturus marked important seasonal transitions in ancient Indian astronomy. Deity: Vayu (wind). Source: Brihat Samhita.',
  },
  'Scorpius': {
    name: 'Jyeshtha',
    iast: 'Jyeṣṭhā',
    lore: 'Jyeshtha (ज्येष्ठा) — "the eldest" or "the chief," the eighteenth nakshatra — is anchored by Antares, the great red heart of Scorpius. Antares — whose name means "rival of Mars" in Greek — is one of the largest stars visible to the naked eye, its red supergiant glow making it the pre-eminent star of the scorpion. In Jyotisha, Jyeshtha governs seniority, authority, and the accumulated power of the elder. Indra — king of the gods — presides, lending this nakshatra associations with rulership, protective power, and the willingness to act decisively against darkness. Deity: Indra. Source: Brihat Samhita; Rig Veda.',
  },
  'Sagittarius': {
    name: 'Purva Ashadha',
    iast: 'Pūrvāṣāḍhā',
    lore: 'Purva Ashadha (पूर्वाषाढा) — "the earlier invincible one," the twentieth nakshatra — is anchored by Delta Sagittarii in the Archer. The two Ashadha nakshatras (Purva and Uttara) together span the dense star fields near the galactic centre in Sagittarius. Purva Ashadha is associated with purification, invigoration, and early victory — the fortifying power that comes before triumph is assured. Its presiding deity Apas (divine waters) links it to the cleansing and life-giving properties of water. The fan-shaped symbol of this nakshatra evokes a winnowing basket separating grain from chaff. Deity: Apas (waters). Source: Brihat Samhita.',
  },
  'Aquila': {
    name: 'Shravana',
    iast: 'Śravaṇa',
    lore: 'Shravana (श्रवण) — "hearing" or "the listener," the twenty-second nakshatra — is anchored by Altair, the bright white eye of the Eagle (Aquila) and one of the three stars of the Summer Triangle. The name derives from the Sanskrit root for hearing and learning: this is the nakshatra of listening, education, and the preservation of sacred knowledge through oral tradition. Vishnu — the all-pervading preserver — presides, and Shravana governs the transmission of wisdom across generations. The three stars of Aquila\'s body (Altair and its flanking stars) were sometimes seen as the three footprints of Vishnu striding across the universe. Deity: Vishnu. Source: Brihat Samhita; Vishnu Purana.',
  },
};

// Sanskrit planet names (Graha) used in Jyotisha sky culture mode
const HINDU_PLANET_NAMES = {
  Venus: 'Shukra', Mars: 'Mangala', Jupiter: 'Guru',
  Saturn: 'Shani', Mercury: 'Budha',
};
