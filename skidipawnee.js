// ═══ Fairy Calendar — skidipawnee.js ═══
// Skidi Pawnee (Skiri) sky culture data. Maps IAU constellation names (as used
// in CONSTELLATION_LORE) to Pawnee asterism names and traditional lore.
// The Skidi Pawnee star chart (~1700 CE, tanned elk skin, Field Museum Chicago)
// depicts 24 major stars and ~15 constellation groupings divided by the Milky Way.
//
// Sources:
//   Von del Chamberlain, "When Stars Came Down to Earth" (1982, Ballena Press / Center
//     for Archaeoastronomy) — the primary scholarly reference for Skidi star knowledge
//   Weltfish, Gene, "The Lost Universe: Pawnee Life and Culture" (1965, Basic Books)
//   Murie, James R., "Ceremonies of the Pawnee" (1914/1981, Smithsonian)
//   Smithsonian NMAI educator resources
//
// Note on Ursa Major / Stretcher Bearers: this name is documented across multiple
// Plains nations including Pawnee-adjacent peoples; Skidi-specific attribution
// needs further verification from primary sources.

const SKIDI_PAWNEE = {
  'Corona Bor.': {
    name: 'Council of Chiefs',
    lore: 'The semicircle of stars in Corona Borealis was the Council of Chiefs — a circle of sky chiefs who governed the fate of human beings below. In Skidi Pawnee cosmology, the sky world was an exact mirror of the earthly world: just as village chiefs gathered in a circle inside the earth lodge to decide the affairs of their people, so these star chiefs met above to determine the course of life on earth. The Council was one of the most sacred constellations in the Pawnee sky, and the circular form of the Skidi earth lodge itself was modeled on this celestial assembly. Each chief represented a direction and a domain of life. Source: Chamberlain, "When Stars Came Down to Earth" (1982).',
  },
  'Scorpius': {
    name: 'Swimming Ducks',
    lore: 'The two bright stars at the tip of Scorpius\'s tail — Shaula (λ Scorpii) and Lesath (υ Scorpii) — were the Swimming Ducks. Their heliacal rising in late winter was the signal that the earth was waking from its winter sleep, triggering the Spring Awakening ceremony and the renewal of the agricultural cycle. The image of two ducks diving below the western horizon at dusk captured the seasonal transition — the ducks carrying the warmth of spring with them as they plunged toward the underworld of winter and returned each year. The Skidi watched these stars carefully for calendar timing. Source: Chamberlain, "When Stars Came Down to Earth" (1982); Weltfish, "The Lost Universe" (1965).',
  },
  'Taurus': {
    name: 'Pleiades Star Group',
    lore: 'The Pleiades — the tight cluster of stars on Taurus\'s shoulder — were among the most important stars in the Skidi sky calendar. When the Pleiades appeared directly overhead at zenith through the smoke hole of the earth lodge in late spring, it was time to take the sacred corn seeds from their star bundles and plant them. According to Pawnee tradition, corn seeds were originally brought down from the stars by star beings at the time of creation and placed in sacred bundles. Each spring planting re-enacted this original gift. The Pleiades thus linked the agricultural cycle directly to the sky world. Source: Weltfish, "The Lost Universe" (1965); Murie, "Ceremonies of the Pawnee" (1981).',
  },
  'Ursa Major': {
    name: 'Stretcher Bearers',
    lore: 'The four stars forming the bowl of Ursa Major were stretcher-bearers carrying a figure on a litter across the sky — a chief, or a fallen warrior, depending on the telling. As these stars circled the North Star through the night, they served as a great celestial clock: their position relative to the horizon could be read to determine the time of night and the progression of the seasons. The circumpolar rotation meant the bearers never rested, carrying their burden in an eternal celestial vigil. Note: this name is documented across several Plains nations; Skidi-specific attribution needs further verification. Source: Chamberlain, "When Stars Came Down to Earth" (1982).',
  },
  'Orion': {
    name: 'Ah-ta-tu-rah-hu',
    lore: 'Orion — known to the Skidi as Ah-ta-tu-rah-hu — was associated with hunting and warrior powers. The great hunter strides through the winter sky in a season when the Pawnee were also hunting, and his presence in the sky was linked to the timing of buffalo hunts and the spiritual preparation required before them. The belt of Orion was among the most prominent features of the winter night sky and would have been highly visible through the smoke hole of the earth lodge in the cold months. Source: Murie, "Ceremonies of the Pawnee" (1981); nativeamericantribes.info.',
  },
  'Canis Major': {
    name: 'Wolf Star',
    lore: 'Sirius — the brightest star in the night sky — was the Wolf Star to the Skidi Pawnee. The wolf held a significant place in Pawnee spiritual life as a powerful spirit helper; Sirius\'s exceptional brilliance made it a natural focal point for this association. The Wolf Star was tracked seasonally and held ceremonial significance within the broader Skidi astronomical tradition. Its rising and setting times provided one of many celestial reference points for Pawnee priests. Source: Chamberlain, "When Stars Came Down to Earth" (1982); Windows to the Universe / University of Michigan.',
  },
};

// Venus — two distinct divine figures in Skidi Pawnee cosmology:
//   Morning Star (Opiriku): male deity, warrior, bringer of life and fertility.
//     The Morning Star ceremony was the most sacred Skidi ritual.
//   Evening Star: female deity, presided over the west and over creation itself.
//     She was associated with gardens, corn, and the garden of the gods.
// When Venus appears in the evening sky (visible after sunset), it is the Evening Star.
// Source: Murie, "Ceremonies of the Pawnee" (1981); Weltfish, "The Lost Universe" (1965).
