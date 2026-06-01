# 3D Rebuild Plan — Second Brain Memory Palace

**Vision:** Immersive spatial experience where memory and imagination live in 3D.  
Inspired by mumeyong.dev — room-based navigation, scroll-driven camera, game-like feel.  
**Status:** Planning only. No code written yet.

---

## What Changes, What Stays

### Stays
- Next.js 14 (shell, routing, API)
- All `content/**/*.md` files — unchanged
- `lib/notes.ts` content pipeline
- D3 graph data
- Design tokens from `DESIGN.md` (navy/gold, Playfair + Geist)
- Room structure: Library, Workshop, Gallery, Observatory

### Replaced
- All flat 2D pages (`app/page.tsx`, `app/[type]/page.tsx`, etc.)
- ManorEntrance CSS door → 3D scene entry
- Framer Motion page transitions → GSAP camera movement
- Tailwind card grids → 3D spatial layouts

---

## Stack

| Package | Purpose |
|---|---|
| `@react-three/fiber` | Three.js in React |
| `@react-three/drei` | Helpers: Html, PerspectiveCamera, ScrollControls, useGLTF |
| `@react-three/postprocessing` | Bloom, ambient occlusion, depth of field |
| `gsap` + `@gsap/react` | Scroll-driven camera and scene transitions |
| `leva` (dev only) | Tune camera/light values visually |
| Spline (external tool) | Design room 3D assets, export GLTF |

Framer Motion stays for 2D UI panels (note content overlay).  
D3 stays for graph data, visualized in 3D via R3F.

---

## Spatial Architecture

```
[ Entry ]
    ↓  (camera pushes forward)
[ Hub Corridor ]
    ├──→  Library (left)
    ├──→  Workshop (right)
    ├──→  Observatory (forward-left)
    └──→  Gallery (forward-right)
```

The Hub is a corridor/atrium. Room portals are visible archways.  
Navigation = camera flies to room, not a page navigation.  
URL routing is kept (`/library`, `/workshop`, etc.) for direct links and back button — but the transition is visual.

---

## Room Concepts

### Hub — The Corridor
Dark navy hall, candlelit. Four glowing archways visible.  
Entry animation: camera pushes in from black (replaces CSS door).  
Ambient: floating particle motes (subtle), volumetric light shafts from above.

### Library (`/sources`)
Bookshelf room. Books are 3D objects.  
Spine width = content length (from existing LIBRARY_ROOM.md concept — carry it into 3D).  
Click a book → camera zooms in, 2D panel slides in with the note content.  
Asset: design in Spline (dark wood shelves, arched ceiling).

### Workshop (`/concepts`)
Corkboard room. Concept notes are pinned cards with slight rotation.  
3D pinboard on the wall. Cards have depth (slight Z offset).  
Connection lines on hover (D3-like but rendered in R3F).  
Asset: design in Spline (workbench, map-room feel).

### Observatory (`/synthesis`)
Star map / planetarium. Synthesis notes = constellation nodes.  
D3 graph re-implemented in 3D using R3F Points/Lines.  
Camera orbits slowly. Click a star → zoom to note.  
Asset: dome ceiling, star field, telescope prop.

### Gallery (`/entities`)  
Portrait hall. Entity cards hang on the wall like framed portraits.  
Walk along the gallery — camera pans horizontally as user scrolls.  
Asset: gallery corridor, picture frames.

---

## Navigation Flow

1. **First visit** — entry animation (fade from black, camera glides into corridor)
2. **Return visit** — skip entry, start in hub
3. **Room enter** — click archway → GSAP camera tween flies to room
4. **Note open** — click object in room → `<Html>` portal in R3F or 2D overlay panel with MDX content
5. **Back** — escape / back button → camera flies back to hub
6. **Direct URL** (`/library`) — starts in hub, immediately flies to that room

---

## Content Inside 3D

R3F's `<Html>` component (from `@react-three/drei`) renders real HTML DOM inside the 3D scene — anchored to 3D coordinates.  
This is how mumeyong renders React UI inside Three.js without re-inventing a text renderer.

MDX note content renders in a `<Html>` panel that appears when you click a 3D object.  
The panel is styled with existing DESIGN.md tokens.  
No new content pipeline needed.

---

## Asset Workflow

1. **Design rooms in Spline** — free browser tool, no install
2. **Export as GLTF** — single file per room
3. **Drop into `public/models/`**
4. **Load in R3F** with `useGLTF` from `@react-three/drei`

Rooms that don't have Spline assets yet use simple CSG geometry (boxes, planes) as placeholders — replace as assets are ready.  
This means we can build and iterate the navigation/code without blocking on assets.

---

## Phases

### Phase 1 — R3F Foundation
- Install packages
- Replace `app/page.tsx` with full-screen R3F canvas
- Basic scene: perspective camera, ambient light, fog
- GSAP camera rig wired to scroll

**Deliverable:** Black 3D canvas loads, camera moves with scroll.

### Phase 2 — Hub Corridor
- Spline: design the hub corridor asset
- Load GLTF, place camera start position
- Four archway portals (geometry placeholders if Spline not ready)
- Click archway → camera tween to room anchor point

**Deliverable:** Walk into the corridor, see four doorways, click one.

### Phase 3 — Library Room
- Spline: bookshelf room asset
- Port bookshelf component from `app/playground/page.tsx` into 3D
- Books as Box geometry, spine width = content length
- Click book → `<Html>` note panel overlays

**Deliverable:** Walk into Library, see books on shelves, click to read.

### Phase 4 — Observatory Room
- Spline: dome/starfield room asset
- Port D3 graph logic into 3D — nodes as `<mesh>`, edges as `<Line>`
- Camera orbits slowly when idle
- Click node → note panel

**Deliverable:** Enter Observatory, see living graph, click nodes.

### Phase 5 — Workshop + Gallery
- Workshop: corkboard wall, concept cards as 3D planes
- Gallery: portrait hall, entity cards as frames on wall

**Deliverable:** All four rooms navigable with content.

### Phase 6 — Polish
- Postprocessing: bloom on lights, subtle ambient occlusion
- Volumetric light shafts in corridor
- Particle motes (atmospheric)
- Loading screen (progress bar while GLTF loads)
- Mobile: simplified geometry, reduced postprocessing
- Performance audit: target 60fps on mid-range device

---

## Files to Create (new)

```
app/
  page.tsx                    ← replace with R3F canvas shell
  [room]/page.tsx             ← redirect shells for direct URLs

components/
  Scene.tsx                   ← root R3F Canvas
  Hub.tsx                     ← corridor + archways
  rooms/
    Library.tsx
    Workshop.tsx
    Observatory.tsx
    Gallery.tsx
  ui/
    NotePanel.tsx             ← MDX content overlay (2D, renders on top)
    MiniMap.tsx               ← optional: shows current position

lib/
  camera.ts                   ← GSAP camera tween helpers
  rooms.ts                    ← room config: anchor points, content mapping

public/
  models/
    hub.glb
    library.glb
    workshop.glb
    observatory.glb
    gallery.glb
```

---

## Open Questions (decide before Phase 1)

1. **Spline vs raw Blender** — Spline is easier but GLTF export has limitations. If room geometry gets complex, Blender is better. Start with Spline; switch if needed.

2. **Note panel inside 3D or 2D overlay** — `<Html>` from drei anchors to 3D but has performance cost. A full 2D overlay (fixed position) is simpler and more readable. Recommend: 2D overlay panel, triggered by 3D click.

3. **Search** — current `app/api/search/route.ts` works fine. Surface search as a floating UI panel, accessible from any room.

4. **Graph page** (`app/graph/page.tsx`) — replace with Observatory room. `/graph` redirects there.
