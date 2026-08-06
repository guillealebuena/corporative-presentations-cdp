# Pendientes

Deuda conocida del design system. Se actualiza al cerrar cada ítem.

---

## Alta

### Logo vectorial real

Los logos en `assets/logos/` son PNG. Los archivos `.svg` que circulan en `Downloads/ppt cdp/`
**no son vectoriales**: son un `<rect>` con un bitmap embebido como pattern — cero paths reales.
Salieron de un export de Figma donde el logo estaba rasterizado.

Consecuencia: el logo pixela al escalar, pesa de más y no se puede recolorear por CSS.

Hace falta el original vectorial, o revectorizarlo.

### Glifo `Passenger`

Concepto propio de CDP sin equivalente en Phosphor. Hoy cae en `User` vía alias documentado en
`icons.js`. Un pasajero de micro no es un usuario genérico — merece glifo propio, dibujado en
la grilla de Phosphor (256×256, path relleno, sin stroke) para que no desentone con el resto.

---

## Media

### React en modo desarrollo

9 archivos cargan `react.development.js` y `react-dom.development.js` desde `unpkg.com`.
Dos problemas: pesan varias veces más que el build de producción, y son otra dependencia de CDN
— la misma clase de fragilidad que rompía los iconos.

Migrar a `react.production.min.js`, o mejor, vendorizarlo como se hizo con la iconografía.

### `support.js` duplicado

69 KB byte a byte idénticos en `templates/presentacion-institucional-b2b/` y
`templates/propuesta-comercial/`. No se puede deduplicar sin romper las rutas relativas que
espera el bundle, así que por ahora queda. Si Claude Design habilita rutas compartidas, unificar.

### `uploads/` con dos versiones del mismo export

`index.dc.html` e `index.dc-502d4e96.html` en
`uploads/Presentación institucional Central de Pasajes/`. Hay que confirmar cuál es la buena y
borrar la otra. Sus rutas apuntan al runtime de Claude Design (`_ds/<uuid>/...`), así que no
resuelven en local — son archivo histórico, no material vivo.

---

## Baja

### Tipografías declaradas vs. usadas

`_ds_manifest.json` declara tres `brandFonts`: **Poppins**, **Inter** y **Outfit**. Pero el
propio `SKILL.md` dice que este DS no cubre la UI del producto, y Outfit es justamente la
tipografía del producto. O se saca de este manifest, o se documenta por qué está.

Aparte: `Marca CDP/gotham/` tiene la familia Gotham completa (16 pesos) sin uso en ningún lado
del DS. Confirmar si es marca legacy y archivarla, o si hay material institucional que todavía
la usa.

### Guía de iconografía desactualizada respecto del uso

Resuelto en v2.0.0, pero vale la advertencia: la guía documentaba 17 iconos mientras las
presentaciones ya usaban 29. Cuando alguien necesita un icono que no está, lo mete por afuera y
el sistema se desincroniza en silencio.

Mitigación: `npm run check` ahora falla si una presentación referencia un icono que no existe
en el set.
