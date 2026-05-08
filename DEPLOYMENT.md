# Sylhet Luxe Stays — deployment & operations

This document covers local setup, production builds, Netlify deployment, swapping media and data, and basic troubleshooting.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (bundled with Node)

## Install dependencies

From the project root (`sreemangalhotelsresorts`):

```bash
npm install
```

## Development server

```bash
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`). Hot reload is enabled.

## Production build

```bash
npm run build
```

Output is written to `dist/`. Preview locally:

```bash
npm run preview
```

## Netlify deployment

### Option A — Git integration (recommended)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In [Netlify](https://app.netlify.com), choose **Add new site → Import an existing project**.
3. Connect the repo and use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Netlify will run the build on every push to your production branch.

The included `netlify.toml` already configures:

- `command = "npm run build"`
- `publish = "dist"`
- SPA fallback: all routes redirect to `/index.html`

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Follow the prompts to link the site on first use.

### Environment variables

This demo does not require API keys or secrets. If you later add a CMS, maps, or analytics, create variables in **Netlify → Site settings → Environment variables** and read them in Vite with the `VITE_` prefix (e.g. `VITE_MAPS_KEY`), then `import.meta.env.VITE_MAPS_KEY`.

## Replacing the fullscreen background video

1. Add or replace the file at **`src/assets/videos/sylhet-background.mp4`** (same path the app imports).
2. Prefer H.264/AAC in `.mp4` for broad browser support; keep resolution reasonable (e.g. 1080p) for Netlify bandwidth.
3. Commit and redeploy.

**Note on audio:** Browsers block **autoplay with sound**. The page starts **muted** so the loop can begin; use the **Tap for sound** control (bottom‑left, avoids overlap with scroll‑to‑top) to unmute inside a user gesture. Hardware mute, tab mute, or Bluetooth routing can still silence output — check system volume too. The bundled `sylhet-background.mp4` contains a stereo AAC audio track (~98 kbps).

**Original asset:** A copy of `content/bg.mp4` was placed at `src/assets/videos/sylhet-background.mp4` during project setup. You may delete `content/` if unused.

## Updating hotel listings

- Edit **`src/data/hotels.js`**.
- Each object supports: `id`, `name`, `location`, `type` (`Hotel` or `Resort`), `rating`, `guestCapacity`, `hasFamilyRooms`, `price`, `image`, `description`, `amenities`.
- Featured carousel IDs live in **`FEATURED_HOTEL_IDS`** in the same file.
- **`LUXURY_MIN_PRICE_BDT`** drives the Luxury / Value tier filter.

After changes, run `npm run build` locally to verify.

## Performance notes

- Remote images use standard `<img loading="lazy">` where appropriate; the background video is fixed and loads once.
- Netlify serves `dist` with compression; keep images optimized (WebP/AVIF pipelines can be added later).

## Troubleshooting

| Issue | What to try |
|--------|----------------|
| Blank page after deploy | Confirm **Publish directory** is `dist`, not project root. Check the Netlify deploy log for build errors. |
| 404 on refresh / deep links | Ensure `netlify.toml` redirects (`/*` → `/index.html`) are deployed. |
| Video not playing | Confirm the file path and format; open devtools **Console** / **Network**. Fallback image shows if the `<video>` errors. |
| Still no audio after tapping | Confirm you tapped **Tap for sound** (bottom‑left); unmute laptop/phone + browser tab audio; Safari/iOS requires that tap gesture. Verify the MP4 has an audio track when replacing the file. |
| `npm install` fails | Use Node 18+; delete `node_modules` and `package-lock.json`, then `npm install` again. |

---

For product questions or custom booking integrations, extend `SearchSection` and `HotelCard` actions to call your real API or reservation flow.
