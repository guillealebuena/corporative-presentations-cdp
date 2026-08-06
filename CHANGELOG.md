# Changelog

Formato: [Keep a Changelog](https://keepachangelog.com/es/1.1.0/) · Versionado semántico.

Para un design system: **MAJOR** = breaking (token o componente eliminado/renombrado),
**MINOR** = agregado compatible, **PATCH** = fix visual o de documentación.

## [2.0.0] — 2026-08-06

### Corregido
- **Iconografía sin dependencia de CDN.** `Icon` renderizaba `<i class="ph">` y dependía del
  webfont de Phosphor servido desde `unpkg.com`. Los exports standalone de Claude Design
  empaquetan todo inline y bloquean recursos externos, así que los iconos desaparecían de las
  presentaciones exportadas — y también en PPTX, PDF y offline. Ahora los 88 glifos van
  embebidos como SVG inline. Mismos glifos Phosphor Regular, extraídos de `@phosphor-icons/core`.
- **Bug en `toSlug()`.** Rompía con nombres de mayúsculas consecutivas: `ArrowUUpLeft`
  generaba `arrow-uup-left`, que no existe. Solo funcionaba por estar en el mapa `KNOWN`.
  Eliminado junto con el enfoque de slugs.

### Agregado
- `icons/icons.js` — 88 glifos inline, 37 KB, cero dependencias externas.
- `icons/Icon.jsx` — reemplazo drop-in, misma API (`name`, `size`, `color`, `style`).
  Suma `title` para accesibilidad y warning en consola ante icono desconocido.
- Alias documentados para conceptos propios de CDP: `Passenger`, `Colectivo`, `Empresa`, `Agencia`.
- `guidelines/brand/iconography.html` — set completo por categoría, sin CDN.
- Estructura de repositorio, `README.md`, `docs/GUIA-EQUIPO.md`, `scripts/build-icons.mjs`.

### Cambiado
- El set pasa de 17 iconos documentados a 88. Las presentaciones ya usaban 29 — la guía
  estaba desactualizada respecto del uso real.
- `components/chrome/Icon.jsx` es ahora un reexport de `icons/Icon.jsx`. Se mantiene la ruta
  porque `_ds_manifest.json` la referencia. El original quedó en `icons/Icon.legacy.jsx`.

### Pendiente
- `Passenger` sigue cayendo en `User`. Necesita glifo propio.
- Los logos son PNG. Los "SVG" de `ppt cdp/` son falsos: un `<rect>` con bitmap embebido
  como pattern, cero paths reales. Hace falta un vectorial de verdad.

## [1.0.0] — 2026-08-04

- Export inicial desde Claude Design: 147 tokens, 37 componentes, 12 layouts de slide,
  2 templates, guidelines de marca.
