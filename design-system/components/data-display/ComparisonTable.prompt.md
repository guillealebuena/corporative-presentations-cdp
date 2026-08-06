The comparison table for cost/before-after proposals (layout 05). Two variants.

**`variant="semantic"`** (default) — situación actual (warm/amber) vs. propuesta CDP (turquoise), alternating rows, ink total row across the whole row. Use when the axis is the improvement itself: savings, cost reduction, risk going down.

```jsx
<ComparisonTable
  rows={[{ label: 'Costo de emisión', current: '$1.200', proposed: '$0' }]}
  total={{ label: 'Ahorro anual estimado', current: '—', proposed: '$4.8M' }}
/>
```

**`variant="brand"`** — brand violet, the CDP column tinted top to bottom, centered values, and only the winning cell of the total row filled solid. Use for commercial proposals where the axis is "them vs. us": the client's current setup or a competitor against CDP.

```jsx
<ComparisonTable
  variant="brand"
  currentLabel="Fono Bus" currentSubtitle="Carrito Prosys + MP"
  proposedLabel="Propuesta con CDP" proposedSubtitle="Carrito web"
  rows={[
    { icon: 'Eye', label: 'Visitas al sitio por mes', current: '85.000', proposed: '85.000' },
    { icon: 'TrendUp', label: 'Conversión', current: '2,2%', proposed: '5,00%' },
  ]}
  total={{ label: 'Ingresos estimados', note: '(ventas menos costos)', current: '$28.189.838', proposed: '$65.391.563' }}
/>
```

Rules:
- Any slide with more than three data pairs must use this table, never bullets.
- Keep the two columns on the same unit and period, otherwise the comparison lies.
- `note` on the total is for stating how the number was derived — use it whenever the total is a calculation and not a raw figure.
- Don't hand-roll a table with hex values in a deck. If a treatment is missing here, add it to the system.
