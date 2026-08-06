Sequential connected steps (layout 08) — implementation plans, onboarding flows. Use for a PROCESS with a real order (alta → producción → gestión); for comparing overlapping sets instead, use FlowRings.

```jsx
<Timeline steps={[{ label: 'Kickoff', description: 'Alta técnica y credenciales' }, { label: 'Integración', description: '2 semanas' }]} />
```

The mount container needs an explicit `style="width:100%"` — the connector line between steps is a `flex:1` child and collapses to 0 width without it.
