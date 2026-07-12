# PMCC 4th Watch — Interactive Leadership Directory

A clean, **corporate, light-themed** touch-screen directory for an **85-inch
landscape display** (16:9, 4K-friendly). Pure HTML/CSS/JavaScript — no build
step, no backend, works fully **offline** once opened in a browser.

The interface uses a professional white design system: soft neutral surfaces,
crisp hairline borders, gentle shadows (no glows), a single editable **corporate
accent** colour, and clear, legible typography — designed to read as calm and
trustworthy on a large public display.

## Run it

Open `index.html` in Chrome or Edge. For kiosk mode:

```
chrome --kiosk --autoplay-policy=no-user-gesture-required index.html
```

or open the file normally and press **F11** for fullscreen.

## What's inside

| File | What it does |
|---|---|
| `index.html` | Page structure: loader, dashboard, panels, menu, feature overlays |
| `styles.css` | All styling. Theme tokens (colors/sizes) live in the `:root` block |
| `app.js` | **All editable content** (`CONTENT`), icons, sounds, features, interactions |
| `assets/logo.png` | Center logo — replace with your own square PNG |
| `assets/background.jpg` | *(optional)* drop your own background photo here |

## How to use it (touch)

The home screen is a straightforward directory — no gestures to learn:

- **App bar** (top): the church logo/wordmark on the left, a live clock and date
  on the right. **Tap the logo** (or the **About the Church** button) to open a
  clean panel with the church's facts, the meaning of the “4th Watch”, and its
  beliefs.
- **Welcome hero**: the church name, tagline, and key stats (founded, countries,
  locale churches, believers).
- **Ministry cards**: an always-visible grid — Apostle · Bishops · Presbyters ·
  Pastors · Elders · Branches · History. **Tap a card** to open it. Leadership
  cards open a tappable name list → profile; Branches opens the interactive
  globe; History opens the timeline panel. Opening plays a subtle transition
  with a soft chime.
- **Bottom dock** (centered): Home · Directory · Settings · Browser · Search ·
  Sound (mute). Brother Thomas floats as an assistant button in the bottom-right.
- **Search** (dock, or Ctrl/⌘-K) pops up centered and blurs everything to focus
  the search bar.
- Every panel has an **X** (top-right) and a **BACK** button. **Esc** also steps
  back out.

## Brand & background

The interface uses a **clean corporate palette**: a white canvas with a very
subtle blueprint grid, neutral slate text, and a single **corporate-blue
accent** (the default). The background is calm and static by design — no
animated rain, aurora, or scan effects — so the content stays the focus. The app
ships with a light **Clean White** background by default; pick a different light
scene from **Gallery** (Cool Mist, Light Slate, Soft Azure, Pale Sky, Warm Sand,
Fresh Mint, Pearl Grey, Soft Linen — all need no image file), or drop your own
photo at `assets/background.jpg` and choose **Signature**. Change the accent to
another professional colour (Navy, Indigo, Teal, Emerald, Sky, Slate, Amber,
Rose, Violet) in **Settings ▸ Accent Color**.

## The dock features

- **Home** — return to the dashboard.
- **Gallery** — switch the background. The shipped photo is `assets/background.jpg` ("My Photo"); built-in scenes (Rainy Dusk, Aurora, Deep Space, Warm Sunset, Soft Slate) need no files.
- **Settings** — username & password, volume, accent color, interface icon style (outline/filled), and a “check for updates” action. Saved to the browser (`localStorage`).
- **Brother Thomas** — the ministry assistant. Works **offline** out of the box with a broad built-in knowledge base (answers about the Apostle, Bishops, Presbyters, Pastors, Elders, **a specific minister by name**, branches worldwide, history, beliefs, and how to use the screen), and can optionally be connected to a **local OpenJarvis AI** for open-ended conversation (see below). He **speaks his replies aloud** in a natural British voice — toggle with **VOICE ON/OFF** (respects the SOUND mute).
  - **Talk to him / wake word.** Tap the **microphone** next to the message box and just speak your question — he listens and answers aloud. Once the mic is on he also listens for his name: say **“Brother Thomas”** (or “Jarvis”) from anywhere and he appears; say “Brother Thomas, who is the apostle?” and he opens and answers. Voice input needs **Chrome or Edge** and microphone permission (it degrades to text on other browsers). Rename him in `app.js → ASSISTANT_NAME`; edit answers in `app.js → jarvisReply`; change the wake word in `app.js → Listen.WAKE`.
- **Internet Browser** — an in-app browser with an address bar (opens the church site by default). Sites that block embedding, or an offline kiosk, fall back to an “open in a new tab” button.

## How to edit the content

Everything editable lives at the top of **`app.js`**:

- `CONTENT.church` — church-wide facts (name, tagline, HQ, founding, members…).
- `CONTENT.sections` — the leadership tiers (Apostle, Bishops, Presbyters, Pastors, Elders, History). Each has an `items` array — edit `name`, `position`, `description`, and the `extra` fact boxes. Add or remove items freely; the entry selector adapts.
- `CONTENT.branches` — the regions and their countries shown in the BRANCHES panel.
- `SCENES` — the Gallery backgrounds. `THEMES` — the accent-color swatches.
- `ASSISTANT_NAME`, `SOUND_FILES`, `ICONS` — assistant name, custom audio files, and icon artwork.

No photos are used for people right now — each entry shows a soft-glow icon glyph, so the app looks complete without any images to source.

## Dashboard layout & interactions

The dashboard is a clean **card directory**: a welcome hero with the church's
key facts, then a responsive grid of ministry cards — **Apostle · Bishops ·
Presbyters · Pastors · Elders · Branches · History** — each showing its icon, a
count, and a short descriptor. Everything is visible at once and one tap away;
there is no hidden “reveal” step.

- **Tap the logo / About the Church** → a panel with the church's tagline,
  headquarters, founding, reach, the meaning of the “4th Watch”, and its beliefs.
- **Tap a leadership card** (Bishops / Presbyters / Pastors / Elders) → a clean,
  tappable **name list**; tap a name → the **profile modal** opens with a **large
  portrait on the left**. The right side shows the person's **About** description
  by default, with a row of tab buttons to switch to *Ministry Role · Church
  Assignment · Messages & Teachings · Activities* (the person's photo gallery).
- **Tap the Apostle card** → the section panel with the leader's portrait,
  biography and key facts.
- **Brother Thomas** floats as an assistant button in the **bottom-right** (and
  the Directory/Search/Settings live in the dock). Tapping it opens the assistant
  with **voice active** — he **speaks his replies** in a natural British voice.
  Toggle voice with the header button.
- **Tap Branches** → an **interactive 3D Earth** with **real coastlines**
  (Natural Earth data, ~8.5k points in `assets/world-land.js`): a blue-ocean
  globe with detailed green continents, atmosphere glow, day/night shading and a
  starfield. **Pinch or scroll to zoom in** and see real coastline detail; drag
  to spin; double-tap to reset. Markers are **colour-coded by region**, and
  glowing **arcs connect the Manila HQ** to every branch with travelling light
  pulses. The left panel shows a **region legend** (counts + countries) — tap a
  region to fly there, or tap a glowing point for a branch card (region badge,
  district, coordinates, services, contact). Add real per-branch details and
  coordinates in `app.js → Globe → COORDS`.
- **Tap History** → the ministry timeline panel.

## Directory (Bishops · Presbyters · Pastors · Elders · Testimonies)

The **DIRECTORY** dock icon opens a clean, guided flow designed for touch:

**Directory icon → Category dropdown → Name list → Profile modal**

1. Tap **DIRECTORY** — a dropdown shows the five categories with live counts.
2. Pick one (e.g. Bishops) — a clean, tappable **list of names** opens.
3. Tap a name — a professional **profile modal** opens with a **large portrait**
   and the person's name, title, and location. The **About** description shows
   first; tap a button to switch section: *Ministry Role · Church Assignment ·
   Messages & Teachings · Activities* (the photo gallery).
   Testimonies open a simple testimony card instead.
4. Close with the **✕**, **Esc**, or tapping outside; the dropdown also closes on
   an outside tap. **“Categories”** returns to the dropdown.

### Editing directory content

All data lives in `app.js → CONTENT`:

- **People** (`CONTENT.sections` → `bishops` / `pastors` / `elders`): each entry
  can have `name`, `position`, `location`, `description` (→ *About*),
  `ministryRole`, `assignment`, `messages: [ … ]` (→ *Messages & Teachings*), and
  `gallery: [ imageURLs ]` (→ the *Activities* tab). Any field you omit falls back
  to a sensible default, so partial entries still look complete.
- **Testimonies** (`CONTENT.testimonies`): `{ name, role, date, text }`.
- **Photos**: add `image: "assets/your-photo.jpg"` to any person. Photos appear in
  the name-list avatars, the profile header, **and** the main dashboard panels,
  and quietly fall back to an icon if the file is missing.
  **Bishop Aldrin Palanca** and **Presbyter Elleza Palanca** ship with a styled
  “REPLACE WITH PHOTO” placeholder at `assets/bishop-aldrin-palanca.jpg` and
  `assets/presbyter-elleza-palanca.jpg` — **overwrite those two files with the
  real headshots** (any JPG, portrait works best) and they appear automatically.

  > ⚠️ Images pasted into the chat are **not** added to the app — only files
  > committed to the repo's `assets/` folder are used. Replace a photo by
  > committing a file at its path (e.g. drag it into `assets/` on GitHub, or
  > `git add`/`commit`/`push`), keeping the **same filename**.
  >
  > After replacing a photo, bump `ASSET_VERSION` at the top of `app.js`
  > (e.g. 4 → 5). That forces every browser/kiosk to load the fresh image
  > instead of a cached old copy. If a photo ever looks stale, also try a
  > hard refresh: **Ctrl+Shift+R** (Windows) / **Cmd+Shift+R** (Mac).

The home ministry cards and the **DIRECTORY** dock button are two ways into the
same people — the cards jump straight to a category's name list, while the dock
opens a category chooser first.

## Connecting Brother Thomas to a local AI (OpenJarvis)

Brother Thomas can talk to **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** —
a local-first AI framework — so answers come from a real language model running
**privately on the kiosk's own PC** (no cloud). OpenJarvis is a server-side
program; it can't run inside the browser, so it runs alongside the kiosk and the
app talks to its local OpenAI-compatible API. If it isn't running, Brother Thomas
automatically falls back to the built-in offline answers.

**On the kiosk PC (one-time):**

1. Install OpenJarvis (installs `uv`, Python, Ollama, and a starter model):
   ```
   curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash
   ```
   (Windows: `irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex`)
2. Start its OpenAI-compatible server:
   ```
   jarvis serve --port 8000 --engine ollama --model qwen3:8b
   ```
3. **Allow the kiosk's origin (CORS).** Easiest: serve this app from
   `http://localhost:5173` (already allow-listed by OpenJarvis). Otherwise add
   your kiosk's origin to `server.cors_origins` in the OpenJarvis config. Opening
   the app via `file://` won't work for the live AI because its origin is `null` —
   serve it from a local web server for the OpenJarvis connection.

**In the app:** open **Settings ▸ Assistant · Brother Thomas**, turn on
**“Use local OpenJarvis AI”**, confirm the endpoint
(`http://localhost:8000/v1/chat/completions`), optionally set a model, **Save**,
then **Test connection**. The assistant header shows a status dot:
gold = configured, green = last reply succeeded, red = unreachable (offline
fallback in use). The assistant is grounded with the church's own facts so it
answers in character as Brother Thomas.

## Data & attribution

The Branches globe uses **Natural Earth** land coastlines (public domain),
downloaded from the `ne_50m_land` dataset and simplified to a compact
`assets/world-land.js` (~8.5k points). Natural Earth requires no attribution,
but credit is gladly given. To regenerate at a different detail level, re-run the
simplification (Douglas-Peucker) against the source GeoJSON.

## Content sourcing

The leadership names, dates, doctrine, and history in this build were compiled
from public sources including **pmcc4thwatch.org**, its district sites, and
Wikipedia. Entries that could not be individually confirmed (e.g. named elders)
are left as clearly-labelled editable slots for you to complete.

## Notes for the touch screen

- **Runs full-screen.** On the **first tap/touch** the app requests browser
  full-screen automatically, so the toolbar/tabs disappear — it fills the whole
  85" display like a native kiosk app (press **F11** to toggle manually). For a
  guaranteed chrome-free launch, start it with `--kiosk` (see *Run it* above).
- Scales automatically from 1080p to 4K (`vmin`/`clamp()` based).
- Double-tap zoom and text selection are disabled for kiosk use.
- Browsers only allow audio after the first touch, so the boot sound plays once someone interacts (or use the `--autoplay-policy` flag above).
