# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Fairy Calendar** — a personal lunar/solar calendar web app built for the user and their wife. Pure vanilla HTML/CSS/JavaScript, no dependencies, no build system. Open `index.html` directly in a browser to run it.

## Running

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly (file:// protocol works fine).

## File Layout

The entire app lives in four files:

- **`index.html`** — UI shell (toolbar controls, `#calendar-root` mount point, loads scripts)
- **`app.js`** — all logic (~1400 lines), structured in sequential sections:
  1. Astronomical engine (lunar phases, solar events, planetary positions, eclipses, meteors)
  2. Fairy calendar logic (`buildFairyYear()`, moon sequencing, Darkmoon/Bluemoon rules)
  3. Rendering (`renderGreg`, `renderFairy`, `renderWeek`)
  4. Theming (5 themes × 5 color variants, inline SVG patterns, hero animals)
  5. State management, event handlers, localStorage persistence
- **`style.css`** — all styling, driven by CSS custom properties for theming
- **`birthdays.js`** / **`comets.js`** — data files loaded before `app.js`

## Calendar System

- **Holocene year numbering**: Gregorian + 10000 (2026 = Year 12026)
- **12 lunar months**: Snowmoon, Wakingmoon, Seedmoon, Bloomoon, Flowermoon, Berrymoon, Summermoon, Harvestmoon, Gathermoon, Leafmoon, Frostmoon, Darkmoon
- **Darkmoon** = the moon containing the winter solstice; subdivided into Robin (days 1–6), Rabbit (7–12), Turkey (13–18), Bear (19–24), Fox (25–end)
- **Bluemoon rule**: if the winter solstice falls on day ≥ 19 of Darkmoon, insert a Bluemoon after Darkmoon (making a 13-moon year)
- **Year animal** = the Darkmoon part the solstice falls in (e.g. "Turkey Year 12026")
- **Week**: Heimday (Mon), Tyrsday (Tue), Wodensday (Wed), Thorsday (Thu), Freyasday (Fri), Moonday (Sat, weekend), Sunday (Sun, weekend)
- JS `getDay()` → Fairy weekday index mapping: `[6, 0, 1, 2, 3, 4, 5]`

## Architecture / Data Flow

1. User action → `refresh()` → `render(holYear, viewMode)`
2. `render()` → `buildFairyYear(holYear)` (results cached in `yearCache`)
3. `buildFairyYear()` collects new moons over a 3-year window, anchors the year on winter solstice, sequences 11–13 moons, enriches each day with all astronomical events
4. Render function (Greg/Fairy/Week) builds DOM from the `FairyYear` object
5. State (year, view, theme, variant) persisted to `localStorage`

The year builder always produces Darkmoon as the last moon in sequence. `moonCount` can be 11 or 12 (13 with Bluemoon). All date math is in UTC throughout.

## Theming

Five themes (fairy, wizard, celtic, animal, flower), each with five color variants (a–e). Switching themes/variants applies CSS custom properties instantly — no re-render needed. Theme data (SVG patterns, hero animal SVGs, color palettes) is defined inline in `app.js` and applied via `document.documentElement.style.setProperty`.
