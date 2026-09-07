# Fuente en GitHub

repo: guillealebuena/corporative-presentations-cdp
branch: main
path: design-system

## Last sync

date: 2026-09-07
dirección: **Claude Design → repo**

Bajada completa del proyecto "Kit de Marca visual" para que el repo vuelva a ser un respaldo
fiel. Desde el sync anterior (2026-08-10) el diseño siguió avanzando solo en Claude Design, y el
repo había quedado con la paleta y las tipografías viejas.

### Traído en esta sincronización

- `tokens/` — paleta nueva (violeta `#9E1A96`, turquesa `#1BCFC9`, tinta `#30002D`) con escalas
  de 11 pasos, y tipografía Urbanist + Inter.
- `fonts/` — los 8 TTF de Inter y Urbanist que usa el sistema. Reemplazan los woff2 de
  Poppins/Outfit/Inter.
- `templates/` — los 5 templates comerciales ejecutables (carrito web, cuenta corriente,
  institucional, pospago 2026, prepago 2026).
- `assets/` — logos nuevos, capturas del carrito web, material institucional y de producto.
- `guidelines/` — specimens actualizados a la paleta nueva, más la sección `imagery/`.
- `components/`, `icons/`, `vendor/`, `styles.css`, `slide-fit.js`, `readme.md`, `SKILL.md`,
  `thumbnail.html` y los generados `_ds_*`.

### Dado de baja

- `guidelines/slides/tpl-01..17.html` — reemplazados por `templates/comercial-institucional/`.
- `templates/presentacion-institucional-b2b/` — superado por los 5 templates comerciales.
- Los woff2 de Poppins, Outfit e Inter.

### Deliberadamente NO traído

`uploads/` en Claude Design acumula material crudo que no es el sistema: el zip de Inter+Urbanist
descomprimido (150 archivos, 38 MB, duplicando lo que ya vive en `fonts/`), una carpeta de logos
sueltos y el PDF de Códigos repetido. En el repo `uploads/` queda con lo que es fuente
autoritativa: el brand brief, las notas de uso y el PDF de códigos de color.

## Cómo se hizo

Claude Design no exporta hacia GitHub: su botón "Sync to latest" trae del repo hacia Design y
pisa lo que haya. Esta bajada se hizo carpeta por carpeta con el Download del explorador de
archivos del proyecto.
