# Changelog

Formato: [Keep a Changelog](https://keepachangelog.com/es/1.1.0/) · Versionado semántico.

Para un design system: **MAJOR** = breaking (token o componente eliminado/renombrado),
**MINOR** = agregado compatible, **PATCH** = fix visual o de documentación.

## [2.3.0] — 2026-08-06

### Corregido
- **El repo todavía cargaba el webfont de Phosphor desde `unpkg.com`.** El resync anterior
  arregló la copia de Claude Design, no la fuente: 20 archivos del bundle —los 12 slides,
  los 2 templates y 6 specimens de componentes— seguían con `<script src="unpkg.com/@phosphor-icons/web">`
  y 26 tags `<i class="ph">`. El próximo sync desde el repo habría reintroducido el bug.
  Convertidos a SVG inline con los mismos glifos.
- `npm run check` ahora busca fuentes de iconos externas en **todo el bundle**, no solo en
  `icons/`. El chequeo anterior no habría detectado nada de lo anterior: el bug vivía
  justamente fuera de la carpeta que miraba.
- `Icon.d.ts`, `Icon.prompt.md` y la sección de iconografía del `readme.md` describían el
  comportamiento viejo con CDN.

### Agregado
- `ComparisonTable` gana `variant="brand"`: violeta de marca, columna de propuesta teñida de
  punta a punta, valores centrados y énfasis sólido solo en la celda de cierre. Para propuestas
  comerciales donde el eje es "ellos vs. nosotros" y no la mejora en sí.
  Sale de la tabla de la propuesta a Fono Bus, que estaba hecha a mano con hex fijos por fuera
  del sistema.
- `currentSubtitle` / `proposedSubtitle` para el stack de cada lado en el encabezado, y
  `total.note` para aclarar cómo se derivó el número de cierre.
- Specimen `ComparisonTable — variantes` con las dos lado a lado y cuándo usar cada una.

## [2.2.0] — 2026-08-06

### Agregado
- `CLAUDE.md` — contexto que Claude carga automáticamente al trabajar en la carpeta: alcance,
  los cuatro contratos que no se rompen, comandos, flujo de cambio y criterio de producto para
  decidir si algo entra al sistema.
- `docs/CLAUDE-DESIGN.md` — comportamiento de la plataforma verificado contra la documentación
  oficial: sync desde GitHub, trampas confirmadas, permisos, export, limitaciones vigentes.
- `skills/actualizando-ds-cdp/` — skill versionada con la metodología end-to-end.
- Revisión semanal automática de novedades de Claude Design, Agent Skills y Cowork.

## [2.1.0] — 2026-08-06

### Agregado
- 4 iconos que los specimens del DS ya usaban y no estaban en el set: `Timer`, `ClipboardText`,
  `Flag`, `Plugs`. Sin ellos, Claude Design los sustituía por el más cercano al resincronizar
  — y `Flag` caía en `CheckCircle`, que significa otra cosa. El set pasa de 88 a 92.

### Corregido
- `guidelines/brand/iconography.html` no tenía el comentario `@dsCard` en la primera línea.
  Sin ese tag el archivo existe pero desaparece del índice del Design System en Claude Design
  — falla silenciosa, no da error. Agregado, y `npm run check` ahora lo valida en las 30
  guidelines.

### Verificado
- Resync del bundle en Claude Design contra este repo: la guía de iconografía renderiza los
  92 glifos y el DS quedó sin referencias al webfont de Phosphor en los 12 slides, los 2
  templates y los specimens de componentes.

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
