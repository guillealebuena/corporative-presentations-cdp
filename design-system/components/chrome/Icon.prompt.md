Renders a Phosphor Regular icon (filled path glyph, no stroke) — use for bullet markers, card badges, table cells, buttons.

```jsx
<Icon name="CheckCircle" size={28} color="var(--brand-primary)" />
<Icon name="HeartFill" size={24} color="#EF4444" />
```

Inline SVG, no CDN and no web font: the glyphs are embedded in `icons/icons.js` (92 of them), so they survive standalone HTML, PPTX and PDF exports and work offline. An unknown name renders nothing and warns — check `ICON_NAMES`. CDP-specific concepts resolve through documented aliases: `Passenger` still falls back to `User`, pending a real glyph.

Sizes: 24 inline text, 28 card badges, 32 standalone, 22 table rows.

Never load an icon font from a CDN in a deck. If a glyph is missing, add it to the system.
