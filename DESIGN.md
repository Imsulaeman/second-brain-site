# DESIGN.md

## Color Palette

### Base
- Background: `#0f1525`
- Surface: `#1a2035`
- Border: `#2a3550`
- Text: `#dde3f0`
- Muted: `#6b7a99`

### Accent
- Blue: `#5b8dd9`
- Gold: `#e8c97e`

### Room Accents
- Library: `#e8c97e`
- Workshop: `#5b8dd9`
- Gallery: `#a78bfa`
- Observatory: `#4ecdc4`

## Typography
- Display/Headings: `Playfair Display`
- Body: `Geist`
- Mono: `JetBrains Mono`
- Body line length: max 65ch

## Spacing & Layout
- Page max-width: `max-w-7xl mx-auto`
- Full-height sections: `min-h-[100dvh]`
- Card padding: `p-6` or `p-8`
- Section gaps: `py-16 md:py-24`

## Motion
- UI animations: under 300ms
- Enter from: `scale(0.95) opacity(0)`
- Stagger lists: 40-60ms delay between items
- Hardware acceleration: animate only `transform` and `opacity`

## Icons
- Library: `@phosphor-icons/react`
- Room icons: `Books`, `Wrench`, `Users`, `Binoculars`

## Absolute Bans
- No Inter font
- No gradient text
- No emoji in UI
- No identical 2x2 equal card grids
- No neon outer glows
- No `h-screen`
- No `transition: all`
- No `scale(0)` entry animation
- No three-column equal card layouts
- No centered hero as default
