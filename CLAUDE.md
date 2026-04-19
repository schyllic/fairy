# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Fairy Calendar** — a globally-usable lunar/solar calendar web app. Pure vanilla HTML/CSS/JavaScript, no dependencies, no build system. Open `index.html` directly in a browser to run it.

## Running

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly (file:// protocol works fine).

## File Layout

- **`index.html`** — UI shell (toolbar controls, `#calendar-root` mount point, loads scripts)
- **`app.js`** — main app: state management, settings UI (location picker, language, holidays), event handlers, localStorage persistence, birthday sky dialog
- **`astro.js`** — astronomical engine: lunar phases, sun/moon rise/set, planetary positions, eclipses, meteors, GMST/LST, `_localOffsetHours()`
- **`calendar.js`** — Fairy calendar logic: `buildFairyYear()`, moon sequencing, Darkmoon/Bluemoon rules
- **`render.js`** — rendering: `renderGreg`, `renderFairy`, `renderWeek`
- **`settings.js`** — `OBSERVER` defaults (`lat`, `lon`, `tz`, `cityName`); overridden at startup from localStorage
- **`style.css`** — all styling, driven by CSS custom properties for theming
- **`themes.js`** — theme data (SVG patterns, hero animal SVGs, color palettes)
- **`i18n.js`** — translations / localization (`t()` function)
- **`cities.js`** — `CITIES` array: `[name, lat, lon, tz, region, country]` with IANA timezone strings
- **`stars.js`** / **`constellations.js`** — star and constellation data
- **`birthdays.js`** — birthday data
- **`comets.js`** — comet data
- **`holidays.js`** / **`holiday-packs.js`** / **`liturgical.js`** / **`hebrew.js`** / **`hindu.js`** — holiday systems
- **`skidipawnee.js`** / **`iroquois.js`** / **`cherokee.js`** — indigenous calendar data
- **`help.js`** — help text

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
5. State (year, view, theme, variant, observer location) persisted to `localStorage`

The year builder always produces Darkmoon as the last moon in sequence. `moonCount` can be 11 or 12 (13 with Bluemoon). All date math is in UTC throughout.

## Observer / Location

`OBSERVER` (`settings.js`) holds `{ lat, lon, tz, cityName }`. At startup `app.js` overrides it from `localStorage`. The Settings modal has a **location picker** with:
- City search autocomplete backed by `CITIES` (each entry: `[name, lat, lon, tz, region, country]`)
- Manual lat/lon inputs
- GPS detect button (`navigator.geolocation`)

`OBSERVER.tz` is an IANA timezone string (e.g. `'America/New_York'`, `'Asia/Tokyo'`). `_localOffsetHours(date)` in `astro.js` uses `Intl.DateTimeFormat` with `OBSERVER.tz` to compute the UTC offset (with correct DST) for any city worldwide, falling back to browser timezone if `tz` is unset. All displayed sun/moon times are in the selected location's local time.

## Theming

Five themes (fairy, wizard, celtic, animal, flower), each with five color variants (a–e). Switching themes/variants applies CSS custom properties instantly — no re-render needed. Theme data (SVG patterns, hero animal SVGs, color palettes) lives in `themes.js` and is applied via `document.documentElement.style.setProperty`.
