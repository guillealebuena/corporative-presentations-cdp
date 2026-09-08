# Changelog

Formato: [Keep a Changelog](https://keepachangelog.com/es/1.1.0/) · Versionado semántico.

Para un design system: **MAJOR** = breaking (token o componente eliminado/renombrado),
**MINOR** = agregado compatible, **PATCH** = fix visual o de documentación.

## [5.1.0] — 2026-09-08

El catálogo de Slides pasa de 12 a 20 fichas, y tres validaciones nuevas evitan que vuelva a
quedar corto. El tag `@dsCard` se lee solo dentro de `guidelines/`, así que un layout inventado
adentro de un template quedaba invisible: no se podía pedir por nombre y no entraba en el
vocabulario con el que se elige el tipo de slide.

### Agregado

- **8 fichas de layout** en `guidelines/slides/`, una por cada grilla que los templates usaban y
  el catálogo no mostraba: `13 · Split asimétrico 5+7`, `14 · Grilla de cuatro` (span-6 ×4),
  `15 · Grilla de seis` (span-4 ×6), `16 · Banda + tres cards`, `17 · Banda + dos columnas`,
  `18 · Banda + card destacada`, `19 · Banda doble + tres cards` y `20 · Grilla de tres`.
- **Validación [8] — Pie en las slides de contenido.** Falla si una slide con `.slide-frame` no
  tiene `.slide-footer`, si el pie no trae el logo como asset, o si escribe "Central de Pasajes"
  como texto. Portada, divisor y cierre quedan afuera a propósito.
- **Validación [9] — Cobertura del catálogo.** Falla si la composición de un slide de template no
  está representada por ninguna ficha. Ignora el fondo: el tema oscuro es una variante declarada.
- **Validación [10] — La grilla de 12 columnas, sin excepciones.** Falla si un `.slide-body` pisa
  `grid-template-columns` o `column-gap`.
- `readme.md` — las dos reglas que solo vivían en Claude Design: **el logo es un asset, nunca una
  palabra** y **ritmo del deck**. Sin esto, un "Sync to latest" desde GitHub las borraba sin aviso.

### Cambiado

- **Las 12 fichas originales pasan de 157 valores hex a tokens semánticos.** Sin cambio visual:
  las doce renderizadas antes y después son idénticas píxel a píxel. Los `fill` de los SVG pasaron
  al atributo `style`, porque `var()` no funciona en un atributo de presentación.
- `12 · Tema oscuro` pasa a documentarse como **variante de fondo**, no como tipo de slide.
- `templates/comercial-carrito-web/Slide04..08` reciben el pie que les faltaba, detectado por [8].
- `templates/comercial-institucional/Slide05` deja de pisar la grilla: `repeat(3,1fr)` con gap 20
  pasa a `span-4 ×3`. Las columnas van de 573 a 560.

### Notas

- Geometría verificada en las 20 fichas: anchos exactos (410/560/710/860/1010/1760), nada pasa el
  margen seguro de 1840, sin overflow y pie en `y=978`.
- **Deuda:** los 6 archivos de template que se tocaron no se pudieron renderizar fuera de la
  plataforma, porque dependen del runtime de Claude Design (`<x-dc>`, `<x-import>`, `support.js`).
  Hay que confirmarlos ahí.
- **Deuda:** la escala tipográfica sigue en disputa. `typography.css` define eyebrow 20, cuerpo 21,
  card-desc 19, footnote 17 y table-value 26; las fichas y los templates usan 24, 30, 24, 24 y 48.
  Los componentes siguen la primera y las slides escritas a mano la segunda, así que un deck mezcla
  dos escalas.

## [5.0.0] — 2026-09-07

Sincronización completa **Claude Design → repo**. Desde agosto el diseño avanzó solo en Claude
Design y el repo quedó con la paleta y las tipografías viejas: servía de poco como respaldo y
confundía a quien lo leyera. Esta entrada lo vuelve a alinear archivo por archivo. Es MAJOR
porque se eliminan y renombran componentes, tokens y templates que alguien podía estar usando.

### Cambiado

- **Paleta.** Violeta `#872191` → `#9E1A96`, turquesa `#1BCEC8` → `#1BCFC9`, tinta `#2A052D` →
  `#30002D`. Los tres ahora vienen con escalas de 11 pasos (50 a 950), más grises, semánticos y
  orden de series de gráfico. **Breaking:** cualquier hardcodeo de los hex viejos ya no coincide.
- **Tipografía.** Poppins → **Urbanist** para títulos, display y números héroe. Inter sigue en
  cuerpo. Outfit sale del sistema.
- **Formato de las tipografías: woff2 subset latin → TTF completos** (128 KB → 1,5 MB). Es lo que
  Claude Design tiene y renderiza, así que es lo que respalda el repo. **Deuda:** rehacer el
  subset woff2 sin volver a desincronizar Design.
- `guidelines/` pasa de 47 a 31 specimens, todos con la paleta nueva.
- `readme.md` y `SKILL.md` ahora son los de Claude Design, con la regla de no generar notas del
  orador que entró en 4.2.0.

### Agregado

- **5 templates comerciales ejecutables** en `templates/`: carrito web, cuenta corriente,
  institucional, pospago 2026 y prepago 2026.
- `guidelines/imagery/` — sección de fotografía e ilustración, todavía sin material real.
- `assets/` — logos nuevos, capturas del carrito web, material institucional y de producto.
- `screenshots/` — capturas de verificación de los templates.

### Eliminado

- `guidelines/slides/tpl-01..17.html` — los 17 slides sueltos, ya reconstruidos como el template
  `comercial-institucional`.
- `templates/presentacion-institucional-b2b/` — superado por los 5 templates comerciales.
- Los woff2 de Poppins, Outfit e Inter.

### No traído a propósito

`uploads/` en Claude Design junta material crudo que no es el sistema: el zip de Inter+Urbanist
descomprimido (150 archivos, 38 MB, duplicando `fonts/`), una carpeta de logos sueltos y el PDF de
Códigos repetido. En el repo `uploads/` queda solo con fuente autoritativa: brand brief, notas de
uso y el PDF de códigos de color. Un respaldo que arrastra 38 MB duplicados es justo lo que
estorba.

### Corregido

- `readme.md` se contradecía: decía Urbanist en "Fundamentos visuales" y seguía diciendo Poppins
  en "Niveles de lectura", resto del cambio de tipografía. Se corrigió primero en Claude Design
  —que es la fuente— y de ahí bajó al repo, para que las dos copias sigan idénticas.

## [4.2.0] — 2026-09-07

Alinea el Kit con el tutorial de uso del equipo: durante las pruebas del prompt guiado, Claude Design generaba notas del orador por default en cada slide sin que se hubieran pedido.

### Agregado
- Regla de contenido en `readme.md` y `SKILL.md`: no generar notas del orador (speaker notes) en ningún slide por default, solo si el pedido las pide explícitamente.

## [4.1.0] — 2026-08-10

Prioridad 2: limpieza y mejoras planeadas aparte del pull de la entrada anterior. Ningún token
ni componente se elimina ni renombra para quien consume el sistema — por eso MINOR, no MAJOR.

### Agregado
- Íconos `ListBullets` y `Eye` (Phosphor Regular, vendorizados en `icons/src/`) — `ListCard` y
  `ComparisonTable` ya los usaban como default sin que existieran en el set: renderizaban un
  hueco y un warning por consola. 94 glifos + 5 alias en total.
- `design-system/vendor/react.production.min.js` + `react-dom.production.min.js` (18.3.1, 142 KB
  los dos) — bajados de npm, no de un CDN.
- `.github/workflows/check.yml` — corre `npm run check` en cada push a `main` y cada PR, Node 22,
  sin `npm install` (el repo no tiene dependencias). Suma un paso que avisa en PRs si hay
  archivos movidos o renombrados dentro de `design-system/` — la única cláusula del contrato que
  `check.mjs` no cubre.

### Cambiado
- **Los 10 specimens de componentes y los 17 `guidelines/slides/tpl-*.html` ya no cargan React,
  ReactDOM ni Babel desde `unpkg`.** Es la misma clase de fragilidad que ya rompió la iconografía
  y las tipografías — no daba error, se veía perfecto en pantalla y fallaba en el export a PPTX.
  El JSX inline se precompiló a `React.createElement` (Babel real, no a mano) contra los 27
  archivos; con eso Babel desaparece del todo. Se sacó `crossorigin` de los scripts que quedan
  (rompe con `file://`). `templates/presentacion-institucional-b2b/support.js` es la única
  excepción documentada: lo genera el dc-runtime de Claude Design, no se toca.
- `scripts/check.mjs`: `[5]` (React de desarrollo) y `[7]` (recursos externos) pasan de
  advertencia a error — pagada la deuda, un resync desde Claude Design que la reintroduzca ahora
  rompe el check en vez de pasar en silencio. Nuevo chequeo de `type="text/babel"` dentro de `[5]`.
  `[2]` (íconos referenciados) ahora detecta `icon="X"`, `icon: 'X'`, `icon = 'X'` y
  `createElement(Icon, { name: "X" })` — antes solo la forma JSX con comillas dobles; pasó de
  detectar 29 íconos referenciados a 38.
- `_ds_manifest.json` local reemplazado por el que genera Claude Design tras el pull de la
  entrada anterior — no se tocaba desde el commit inicial.
- `package.json`: versión `2.0.0` → `4.1.0` (no se tocaba desde el commit inicial, quedó dos
  MAJOR atrás) y el comentario de conteo de glifos actualizado a 94.
- `README.md`, `CLAUDE.md` y `skills/actualizando-ds-cdp/`: actualizados al modelo real (Design
  es donde se diseña, el repo es el gate — no "el repo manda, Design consume"). Documentada por
  primera vez la dirección Design → repo, y el conteo real de guidelines (47, no 30 ni 44) e
  iconografía (94 glifos + 5 alias = 99 nombres válidos, no 88/92 sueltos).

### Eliminado
- 5 logos PNG duplicados en `uploads/` (idénticos byte a byte a los de `assets/logos/`, 131 KB) —
  `uploads/` queda con lo que es fuente autoritativa: el brief de marca y las notas de uso.
- `uploads/Presentación institucional Central de Pasajes/` — export crudo de 49 KB de un
  template ya sistematizado en `guidelines/slides/tpl-*.html`, con el mismo problema de CDN que
  el resto de esta entrada arregla en el bundle real. Incluía un archivo `.dc-*.html` que ni
  siquiera estaba trackeado (lo tapa el `.gitignore`).

## [4.0.0] — 2026-08-10

Primer pull en la dirección Design → repo: ajustes hechos directo en Claude Design (tokens,
componentes y layouts) traídos al repo tal cual, archivo por archivo. Hasta ahora el modelo
documentado solo cubría repo → Design; esta entrada invierte el flujo por primera vez.

### Cambiado
- **`MeshGradient` deja de ser un fondo full-slide.** Pasó de un mesh difuso violeta→turquesa
  en `inset:0` a un glow chico anclado a una esquina (props nuevas `size` y `corner`; `color`
  ahora es un solo color en vez de la mezcla de dos). Actualizados `InsightCard` y el specimen
  `decor-toggle-pill.card.html` al nuevo uso.
  **Breaking:** cualquier slide que dependiera del mesh como fondo completo pierde ese fondo —
  revisar decks existentes que lo usaran así.
- **`guidelines/slides/11-cierre.html`**: fondo de gradiente violeta → sólido `#2A052D`, acorde
  a la regla ya vigente de "sin degradados como fondo" (que antes tenía portada/cierre como
  excepción documentada).
- `readme.md` actualizado: sin excepción de gradiente en ningún slide, `MeshGradient` documentado
  como glow chico, sección de índice sin el template ejecutable (ver Eliminado).
- `_ds_manifest.json` y `_adherence.oxlintrc.json` regenerados desde Design — los locales no se
  tocaban desde el commit inicial y ya no reflejaban la realidad (el manifest todavía listaba el
  template `propuesta-comercial`, eliminado en 3.0.0; el lint de `MeshGradient` todavía validaba
  las props viejas). El namespace del bundle (`_ds_bundle.js`) se deja sin tocar por ahora: tiene
  un ID propio de este repo y traer el de Design rompería los 27 specimens/slides que lo
  referencian — queda pendiente para una migración deliberada.

### Agregado
- `guidelines/slides/tpl-01-portada.html` a `tpl-17-utilitaria-oscura.html` — los 17 slides reales
  de la presentación institucional B2B, ahora como cards de referencia sueltas en vez de template
  ejecutable (ver Eliminado). Todos con `@dsCard group="Slides"` válido.
  **Deuda conocida:** los 17 cargan React/ReactDOM/Babel desde unpkg — mismo patrón que ya rompió
  la iconografía y las tipografías dos veces. `npm run check` lo reporta como advertencia en
  `[5]`/`[7]`, no como error; sumados a la tarea ya planeada de vendorizar React (antes acotada a
  los 10 specimens de componentes).
- `github.md` — log de sincronización que genera Claude Design al importar desde el repo.

### Eliminado
- `icons/Icon.jsx` e `icons/Icon.legacy.jsx`. `Icon` quedó consolidado en
  `components/chrome/Icon.jsx` (antes era un re-export). `Icon.legacy.jsx` era el `Icon` anterior
  a 2.0.0 (webfont de Phosphor vía `<i class="ph">`); nada lo referenciaba.
- Con esto, el template ejecutable de la presentación institucional B2B deja de existir en
  Claude Design — sus 17 slides pasan a `guidelines/slides/tpl-*.html` (ver Agregado). La carpeta
  `templates/presentacion-institucional-b2b/` sigue en el repo sin tocar; queda desincronizada del
  estado real de Design hasta que se decida qué hacer con ella.

## [3.0.1] — 2026-08-07

### Corregido
- **Las tres tipografías del sistema venían de `fonts.googleapis.com`.** `tokens/typography.css`
  y `guidelines/brand/iconography.html` las cargaban con un `@import` a un CDN. Renderiza
  perfecto en pantalla y cae a la sans-serif del sistema en cada export standalone, sin dar
  ningún error — la misma clase de falla que borró la iconografía, solo que acá el recurso
  perdido era la tipografía de todo el deck.
  Poppins 600, Inter 400/500/600 y Outfit 400/500/600 ahora viven en `design-system/fonts/`
  como woff2 subset latin: 128 KB en total. Procedencia y cómo agregar un peso en
  `fonts/SOURCE.md`.
- **`npm run check` no lo detectaba.** El chequeo `[1]` buscaba fuentes de *iconos*
  específicamente (`@phosphor-icons/web`, fontawesome, material-icons, bootstrap-icons), así
  que un `@import` de tipografía pasaba limpio. Nuevo chequeo `[7] Recursos externos`: falla
  ante cualquier `@import url(http…)` o `<link href="http…">` en el bundle, y reporta aparte
  los scripts desde CDN. Verificado reintroduciendo el `@import` a propósito.

### Agregado
- `design-system/fonts/` con los 7 woff2 y `SOURCE.md`.

---

## [3.0.0] — 2026-08-07

### Eliminado
- **Template `propuesta-comercial`.** Era un deck concreto (la propuesta a Fono Bus) publicado
  como punto de partida, no un patrón reutilizable: cada propuesta comercial tiene otro alcance,
  otras condiciones y otros números, así que arrancar desde ahí implicaba borrar más de lo que
  se aprovechaba. Los 12 layouts de slide cubren el caso sin fijar contenido.
  Lo que sí quedó sistematizado de ese deck —`ComparisonTable variant="brand"`— sigue en el
  sistema desde 2.3.0.

  **Breaking:** el template desaparece del panel de Claude Design tras el próximo resync.
  Los decks ya generados a partir de él no se ven afectados.

- **Carpeta `docs/` completa** — `GUIA-EQUIPO.md`, `GOBERNANZA.md` y `CLAUDE-DESIGN.md`.
  Ninguno de los tres vivía en `design-system/`, así que no se sincronizaban ni afectaban lo
  que Claude Design genera. `CLAUDE-DESIGN.md` era byte-idéntico a
  `skills/actualizando-ds-cdp/reference/claude-design.md`. La guía de uso para el equipo y la
  gobernanza pasan a documentarse en Notion, donde el equipo las va a leer.
  El repo queda con lo que es sistema: el bundle, el tooling y el contexto para Claude.

### Cambiado
- `README.md`, `design-system/readme.md` y la guía del equipo ahora describen un único
  template (institucional B2B) y remiten a los layouts para el resto de los casos.
- `README.md`, `CLAUDE.md` y `skills/actualizando-ds-cdp/SKILL.md` ya no apuntan a `docs/`.

---

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
