Renders a Phosphor Regular icon (filled path glyph, no stroke) — use for bullet markers, card badges, table cells, buttons.

```jsx
<Icon name="CheckCircle" size={28} color="var(--brand-primary)" />
<Icon name="HeartFill" size={24} color="#EF4444" />
```

Requires the Phosphor CDN script loaded once per page: `<script src="https://unpkg.com/@phosphor-icons/web"></script>`. 17 names are drawn in the App (see IconProps); anything else falls back to the matching Phosphor Regular glyph by name. `Passenger` has no Phosphor equivalent and falls back to `user` — flagged as a substitution pending a real CDP glyph. Sizes: 24 inline text, 28 card badges, 32 standalone, 22 table rows.
