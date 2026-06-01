# Library Room Upgrade — Design Log

Playground: `app/playground/page.tsx`  
Target: replace `/sources` card grid with a bookshelf UI

---

## What We're Building

A bookshelf view for the Library room (`/sources`). Sources sit on dark wood shelves as vertical spines. The shelf is a data visualization — **spine width encodes content length**.

- Books → page count maps to width
- Articles → word count maps to width
- PDFs → page count maps to width
- A 544-page book is visibly fatter than a 2000-word essay

The metaphor works for mixed content because it's about *depth of source*, not book-ness.

---

## Design Decisions (locked)

### Spine width = content length
- Books: 22–54px (page count / 600 * 32 + 22)
- Articles: 14–26px (word count / 8000 * 14 + 12)
- PDFs: 20–48px (page count / 600 * 28 + 20)
- Spines under 20px hide the title entirely

### Mixed content types on same shelf
Articles, books, PDFs all coexist. Articles are thinner and slightly shorter. No separation by type — the width difference is enough visual signal.

### Pure CSS spines — no images
Real book cover images were tried (Open Library API). Rejected — a narrow spine crop of a full cover looks bad. CSS gradient is the right approach.

### Typography
- 10px Playfair Display, weight 600
- Heavy `text-shadow: 0 1px 6px rgba(0,0,0,0.95)` so it reads over dark spines
- `writing-mode: vertical-rl; transform: rotate(180deg)` — text reads bottom to top

### Shelf plank
- Dark wood gradient: `#583515 → #381f08 → #201005`
- Amber radial glow on surface: `rgba(205,125,18,0.3)` bleeding up
- `box-shadow: inset 0 1px 0 rgba(255,195,80,0.24)` — top highlight edge
- 16px drop shadow below plank

### Animation
- Hover: `y: -12px`, 160ms `cubic-bezier(0.23, 1, 0.32, 1)`
- Selected: stays at `y: -14px`
- Articles hover less (`y: -8`) — they're lighter

### Color palette — naturalistic aged tones
Not vibrant CSS colors. Dark earth tones that look like aged cloth/leather:
- Burgundy: `#1e0e08` with gold text
- Forest green: `#182008` with sage text
- Navy: `#0e1828` with steel blue text
- Dark brown: `#281808` with ochre text
- Slate: `#0e1818` with teal text

---

## What's Still Pending

### Spine texture (main open problem)
The CSS gradients look flat compared to real book cloth/leather. The palette is right but the texture depth is missing. Options to explore:
- SVG `feTurbulence` filter for noise/grain texture
- More complex CSS gradient layering (diagonal grain, edge shadow)
- Canvas-based texture per spine
- CSS `mask-image` with a noise pattern

This is the main visual gap between current state and the Mythos reference.

---

## What Didn't Work

### Real book cover images (Open Library API)
Tried using `https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg` as spine background. A full book cover squeezed into a 28px wide spine looks bad — wrong proportions, wrong crop. Rejected.

### Mythos-style reference matching
The Mythos app (`library.png` reference) uses real book cover images. Our content isn't all books, and even if it were, the image approach doesn't work for interactive spine-width UI. The CSS approach is the right medium.

### Vibrant/arbitrary CSS colors
First palette attempt used too-bright, arbitrary hex colors. Looked like a CodePen demo, not a real library. Replaced with naturalistic aged tones.

---

## User Feedback

- "the book palette still unrealistic and didn't fit, I really want to like the images" → led to Open Library attempt, then rejected, then palette overhaul
- "no that's look bad, the mythos thing, no they didn't use real books cover" → confirmed: no external images, pure CSS
- "the book things is still good, animation things. I mean the book width we can link as the length of the book/concept (based on how much concept)" → the key insight: width = content length
- "yeah this one good, save it" → current state of `playground/page.tsx` is the approved baseline

---

## Integration Plan (when ready)

1. Replace `app/[type]/page.tsx` Library view with the bookshelf component
2. Pull real data from `lib/notes.ts` — use `rawSize` for width calculation
3. Width formula: `Math.round(22 + (note.rawSize / 150000) * 32)` — adjust based on actual content distribution
4. Keep card grid as fallback / toggle option (or remove entirely)
5. The detail panel on click replaces navigating to `/note/[slug]` directly — TBD

---

## Files

| File | Purpose |
|---|---|
| `app/playground/page.tsx` | Current working prototype |
| `app/playground/assets/library.png` | Mythos reference screenshot |
| `lib/notes.ts` | `rawSize` field available for width calculation |
| `app/[type]/page.tsx` | Target file when integrating |
