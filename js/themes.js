/**
 * themes.js — Theme definitions and CSS variable application
 */

// Inline SVG patterns (base64-free, URL-encoded)
const PATTERNS = {
  celtic: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Cpath d='M10 10 Q20 0 30 10 Q40 20 50 10 M10 50 Q20 40 30 50 Q40 60 50 50 M10 10 Q0 20 10 30 Q20 40 10 50 M50 10 Q60 20 50 30 Q40 40 50 50 M30 10 L30 50 M10 30 L50 30' stroke='%23c8a96e' stroke-width='1.5' fill='none' opacity='0.25'/%3E%3C/svg%3E")`,

  wizard: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='none'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23c8b8e8' opacity='0.4'/%3E%3Ccircle cx='45' cy='8' r='1.5' fill='%23e8d8ff' opacity='0.35'/%3E%3Ccircle cx='65' cy='25' r='1' fill='%23c8b8e8' opacity='0.3'/%3E%3Ccircle cx='30' cy='45' r='2.5' fill='%23e8d8ff' opacity='0.4'/%3E%3Ccircle cx='70' cy='60' r='1.5' fill='%23c8b8e8' opacity='0.35'/%3E%3Ccircle cx='10' cy='65' r='1' fill='%23e8d8ff' opacity='0.3'/%3E%3Ccircle cx='55' cy='50' r='2' fill='%23c8b8e8' opacity='0.35'/%3E%3Cpath d='M40 20 L42 26 L48 26 L43 30 L45 36 L40 32 L35 36 L37 30 L32 26 L38 26 Z' fill='%23ffd700' opacity='0.2'/%3E%3Cpath d='M20 55 Q25 48 30 55' stroke='%23c8b8e8' stroke-width='1' fill='none' opacity='0.25'/%3E%3C/svg%3E")`,

  fairy: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none'/%3E%3Ccircle cx='15' cy='15' r='3' fill='%23ffb7d5' opacity='0.3'/%3E%3Ccircle cx='15' cy='10' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='20' cy='15' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='10' cy='15' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='15' cy='20' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='45' cy='45' r='3' fill='%23ffb7d5' opacity='0.3'/%3E%3Ccircle cx='45' cy='40' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='50' cy='45' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='40' cy='45' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='45' cy='50' r='1.5' fill='%23fff0f5' opacity='0.35'/%3E%3Ccircle cx='30' cy='8' r='1' fill='%23ffb7d5' opacity='0.2'/%3E%3Ccircle cx='8' cy='40' r='1' fill='%23ffb7d5' opacity='0.2'/%3E%3C/svg%3E")`,

  animal: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70'%3E%3Crect width='70' height='70' fill='none'/%3E%3Cellipse cx='20' cy='20' rx='5' ry='6' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='17' cy='17' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='23' cy='17' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='17' cy='23' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='23' cy='23' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='20' cy='28' r='1.5' fill='%23a0785a' opacity='0.12'/%3E%3Cellipse cx='50' cy='50' rx='5' ry='6' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='47' cy='47' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='53' cy='47' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='47' cy='53' r='2' fill='%23a0785a' opacity='0.15'/%3E%3Ccircle cx='53' cy='53' r='2' fill='%23a0785a' opacity='0.15'/%3E%3C/svg%3E")`,

  flower: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' fill='none'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(0 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(60 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(120 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(180 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(240 32 32)'/%3E%3Cellipse cx='32' cy='24' rx='4' ry='7' fill='%23f9a8d4' opacity='0.25' transform='rotate(300 32 32)'/%3E%3Ccircle cx='32' cy='32' r='4' fill='%23fde68a' opacity='0.4'/%3E%3C/svg%3E")`,
};

// Theme definitions: base properties + 5 variants (a–e) for bg color
export const THEMES = {
  celtic: {
    '--font-family-header': '"Palatino Linotype", Palatino, "Book Antiqua", serif',
    '--font-family-body': '"Palatino Linotype", Palatino, Georgia, serif',
    '--color-accent':  '#2d6a4f',
    '--color-accent-2': '#c8a96e',
    '--color-darkmoon': '#1a3a2a',
    '--color-bluemoon': '#1a2a3a',
    '--color-moon-icon': '#2d6a4f',
    '--color-solar-icon': '#c8a96e',
    '--border-radius-cell': '2px',
    '--pattern-bg': PATTERNS.celtic,
    variants: {
      a: { '--color-bg': '#f0ede4', '--color-bg-alt': '#e6e0d0', '--color-surface': '#faf8f2', '--color-border': '#c8a96e', '--color-text-primary': '#2a2010', '--color-text-secondary': '#6b5a3a', '--color-today-highlight': '#d4edda', '--color-weekend': '#f5f0e0' },
      b: { '--color-bg': '#e8f4ee', '--color-bg-alt': '#d8ead8', '--color-surface': '#f2faf4', '--color-border': '#2d6a4f', '--color-text-primary': '#0d2b1a', '--color-text-secondary': '#3a6a50', '--color-today-highlight': '#b7e4c7', '--color-weekend': '#e0f0e8' },
      c: { '--color-bg': '#f5f0e8', '--color-bg-alt': '#e8e0d0', '--color-surface': '#fdfaf5', '--color-border': '#8b6914', '--color-text-primary': '#2a1f08', '--color-text-secondary': '#7a5a20', '--color-today-highlight': '#fde8a0', '--color-weekend': '#f8f0d8' },
      d: { '--color-bg': '#ece8f0', '--color-bg-alt': '#ddd8e8', '--color-surface': '#f8f6fc', '--color-border': '#6b4a8a', '--color-text-primary': '#1a1028', '--color-text-secondary': '#5a3a7a', '--color-today-highlight': '#e0d0f8', '--color-weekend': '#f0e8fc' },
      e: { '--color-bg': '#f0e8e8', '--color-bg-alt': '#e4d8d8', '--color-surface': '#fdf8f8', '--color-border': '#8a3a3a', '--color-text-primary': '#280d0d', '--color-text-secondary': '#7a3030', '--color-today-highlight': '#f8d0d0', '--color-weekend': '#f8ecec' },
    },
  },

  wizard: {
    '--font-family-header': '"Palatino Linotype", Palatino, "IM Fell English", serif',
    '--font-family-body': 'Georgia, "Times New Roman", serif',
    '--color-accent':  '#9b59b6',
    '--color-accent-2': '#f1c40f',
    '--color-darkmoon': '#1a0a2e',
    '--color-bluemoon': '#0a1a3e',
    '--color-moon-icon': '#c8b8e8',
    '--color-solar-icon': '#f1c40f',
    '--border-radius-cell': '4px',
    '--pattern-bg': PATTERNS.wizard,
    variants: {
      a: { '--color-bg': '#1e1030', '--color-bg-alt': '#2a1845', '--color-surface': '#26163a', '--color-border': '#7b4fa0', '--color-text-primary': '#e8d8ff', '--color-text-secondary': '#b09ad0', '--color-today-highlight': '#4a2a6a', '--color-weekend': '#2e1a48' },
      b: { '--color-bg': '#0d1a2e', '--color-bg-alt': '#162440', '--color-surface': '#111e38', '--color-border': '#2980b9', '--color-text-primary': '#d8eeff', '--color-text-secondary': '#7ab8d8', '--color-today-highlight': '#1a3a5a', '--color-weekend': '#162840' },
      c: { '--color-bg': '#1a1a0e', '--color-bg-alt': '#252518', '--color-surface': '#202014', '--color-border': '#c8a000', '--color-text-primary': '#fff8d0', '--color-text-secondary': '#c8b060', '--color-today-highlight': '#3a3000', '--color-weekend': '#2a280c' },
      d: { '--color-bg': '#f0eefc', '--color-bg-alt': '#e4e0f4', '--color-surface': '#f8f6ff', '--color-border': '#6040a0', '--color-text-primary': '#1a0840', '--color-text-secondary': '#6040a0', '--color-today-highlight': '#d8c8ff', '--color-weekend': '#ece8f8' },
      e: { '--color-bg': '#2a1e10', '--color-bg-alt': '#362818', '--color-surface': '#2e2214', '--color-border': '#c85000', '--color-text-primary': '#ffe8c8', '--color-text-secondary': '#d09050', '--color-today-highlight': '#4a2800', '--color-weekend': '#382818' },
    },
  },

  fairy: {
    '--font-family-header': '"Palatino Linotype", Palatino, "Comic Sans MS", cursive',
    '--font-family-body': '"Palatino Linotype", Palatino, Georgia, serif',
    '--color-accent':  '#d63384',
    '--color-accent-2': '#9c5ab8',
    '--color-darkmoon': '#2d0a3a',
    '--color-bluemoon': '#0a1a3a',
    '--color-moon-icon': '#d63384',
    '--color-solar-icon': '#f59e0b',
    '--border-radius-cell': '8px',
    '--pattern-bg': PATTERNS.fairy,
    variants: {
      a: { '--color-bg': '#fff0f8', '--color-bg-alt': '#fce4f0', '--color-surface': '#fff8fc', '--color-border': '#f0a0c8', '--color-text-primary': '#3a0828', '--color-text-secondary': '#a03060', '--color-today-highlight': '#ffd0e8', '--color-weekend': '#fff0f8' },
      b: { '--color-bg': '#f0e8ff', '--color-bg-alt': '#e4d8f8', '--color-surface': '#f8f4ff', '--color-border': '#b080d8', '--color-text-primary': '#200838', '--color-text-secondary': '#8040c0', '--color-today-highlight': '#e0c8ff', '--color-weekend': '#f4ecff' },
      c: { '--color-bg': '#f0fff4', '--color-bg-alt': '#d8f8e4', '--color-surface': '#f8fff8', '--color-border': '#80c8a0', '--color-text-primary': '#082820', '--color-text-secondary': '#408060', '--color-today-highlight': '#c0f0d0', '--color-weekend': '#e8fff0' },
      d: { '--color-bg': '#fffff0', '--color-bg-alt': '#f8f8d8', '--color-surface': '#fffff8', '--color-border': '#c8c840', '--color-text-primary': '#282808', '--color-text-secondary': '#808020', '--color-today-highlight': '#f0f0a0', '--color-weekend': '#fffffC' },
      e: { '--color-bg': '#fff8f0', '--color-bg-alt': '#f8e8d0', '--color-surface': '#fffcf8', '--color-border': '#e0a060', '--color-text-primary': '#281808', '--color-text-secondary': '#a06020', '--color-today-highlight': '#ffe0b0', '--color-weekend': '#fff4e8' },
    },
  },

  animal: {
    '--font-family-header': 'Georgia, "Times New Roman", serif',
    '--font-family-body': 'Georgia, "Times New Roman", serif',
    '--color-accent':  '#7a5a2a',
    '--color-accent-2': '#c87840',
    '--color-darkmoon': '#1a0f08',
    '--color-bluemoon': '#080f1a',
    '--color-moon-icon': '#c87840',
    '--color-solar-icon': '#e8a020',
    '--border-radius-cell': '3px',
    '--pattern-bg': PATTERNS.animal,
    variants: {
      a: { '--color-bg': '#f5efe0', '--color-bg-alt': '#ece0c8', '--color-surface': '#faf6ee', '--color-border': '#b08040', '--color-text-primary': '#1a1008', '--color-text-secondary': '#6a4820', '--color-today-highlight': '#f0d898', '--color-weekend': '#f8f0d8' },
      b: { '--color-bg': '#e8f0e0', '--color-bg-alt': '#d8e8c8', '--color-surface': '#f2f8ec', '--color-border': '#608040', '--color-text-primary': '#101808', '--color-text-secondary': '#406028', '--color-today-highlight': '#c8e890', '--color-weekend': '#e8f4d8' },
      c: { '--color-bg': '#f0e8e0', '--color-bg-alt': '#e4d8c8', '--color-surface': '#f8f4ee', '--color-border': '#a07060', '--color-text-primary': '#201008', '--color-text-secondary': '#806040', '--color-today-highlight': '#e8c8b0', '--color-weekend': '#f4ece0' },
      d: { '--color-bg': '#e0e8f0', '--color-bg-alt': '#c8d8e8', '--color-surface': '#eef4f8', '--color-border': '#4878a0', '--color-text-primary': '#081020', '--color-text-secondary': '#306080', '--color-today-highlight': '#90c8e8', '--color-weekend': '#d8eaf8' },
      e: { '--color-bg': '#ece0f0', '--color-bg-alt': '#dcc8e8', '--color-surface': '#f6f0fc', '--color-border': '#8050a0', '--color-text-primary': '#180828', '--color-text-secondary': '#604880', '--color-today-highlight': '#d0a8e8', '--color-weekend': '#ece0f8' },
    },
  },

  flower: {
    '--font-family-header': '"Palatino Linotype", Palatino, Georgia, serif',
    '--font-family-body': 'Georgia, Palatino, serif',
    '--color-accent':  '#e05080',
    '--color-accent-2': '#20a060',
    '--color-darkmoon': '#1a0820',
    '--color-bluemoon': '#08181a',
    '--color-moon-icon': '#e05080',
    '--color-solar-icon': '#e0a020',
    '--border-radius-cell': '6px',
    '--pattern-bg': PATTERNS.flower,
    variants: {
      a: { '--color-bg': '#fff4f8', '--color-bg-alt': '#f8e4ee', '--color-surface': '#fff8fc', '--color-border': '#f080a8', '--color-text-primary': '#280818', '--color-text-secondary': '#c04878', '--color-today-highlight': '#ffc8de', '--color-weekend': '#fff0f6' },
      b: { '--color-bg': '#f4fff0', '--color-bg-alt': '#e4f8e0', '--color-surface': '#f8fff6', '--color-border': '#50c070', '--color-text-primary': '#082018', '--color-text-secondary': '#308050', '--color-today-highlight': '#b0e8c0', '--color-weekend': '#f0fbf0' },
      c: { '--color-bg': '#fffff0', '--color-bg-alt': '#f8f8d8', '--color-surface': '#fffffC', '--color-border': '#d0c020', '--color-text-primary': '#201e08', '--color-text-secondary': '#807818', '--color-today-highlight': '#eeee88', '--color-weekend': '#fefef0' },
      d: { '--color-bg': '#f0f8ff', '--color-bg-alt': '#e0ecf8', '--color-surface': '#f8fbff', '--color-border': '#5890d8', '--color-text-primary': '#081828', '--color-text-secondary': '#3870b0', '--color-today-highlight': '#b0d4f8', '--color-weekend': '#eef6ff' },
      e: { '--color-bg': '#fff8f0', '--color-bg-alt': '#f8e8d8', '--color-surface': '#fffcf8', '--color-border': '#d07030', '--color-text-primary': '#281008', '--color-text-secondary': '#a05020', '--color-today-highlight': '#f8c890', '--color-weekend': '#fff4e8' },
    },
  },
};

export const THEME_NAMES = Object.keys(THEMES);
export const VARIANT_NAMES = ['a', 'b', 'c', 'd', 'e'];

export function applyTheme(themeName, variantName) {
  const theme = THEMES[themeName];
  if (!theme) return;
  const variant = theme.variants[variantName];
  if (!variant) return;

  const el = document.documentElement;
  // Apply base theme properties
  for (const [key, val] of Object.entries(theme)) {
    if (key === 'variants') continue;
    el.style.setProperty(key, val);
  }
  // Apply variant color overrides
  for (const [key, val] of Object.entries(variant)) {
    el.style.setProperty(key, val);
  }

  el.dataset.theme = themeName;
  el.dataset.variant = variantName;
}
