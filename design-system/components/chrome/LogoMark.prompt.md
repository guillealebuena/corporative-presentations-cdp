Renders the correct real logo asset for the background it sits on — never recolor or reconstruct the mark.

```jsx
<LogoMark variant="wordmark-blanco" height={26} />
```

Variants: `wordmark-violeta` · `wordmark-blanco` · `wordmark-stacked` (tres líneas, para espacios cuadrados) · `isotipo` (círculo violeta) · `lockup-violeta` / `lockup-blanco` (con bajada) · `lockup-badge` (lockup ya montado sobre caja violeta redondeada).

Rule: on the brand violet background always use the `-blanco` variant; never violet-on-violet. Los assets son SVG (`assets/logos/*.svg`); hay PNG del mismo nombre para contextos que no aceptan SVG. Minimum size: wordmark 200px wide, isotipo 48px. Keep one logo-height of clear space on all sides.
