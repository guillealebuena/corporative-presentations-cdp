Uppercase slide-header label with a small color bar (24×3px, 12px gap) to its left — a graphic marker, not a typographic em-dash.

```jsx
<Eyebrow>CASO DE USO FONO BUS</Eyebrow>
```

Sits at y=80 on a content slide, directly above the slide title (y=118). Pass `color="#fff"` on dark backgrounds. If the label needs two parts on one line, separate them with `<Divider inline />`, never a middle dot or dash: `<Eyebrow>Costos<Divider inline />Fono Bus</Eyebrow>`.
