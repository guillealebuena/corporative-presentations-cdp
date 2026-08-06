# Central de Pasajes — Design System

Central de Pasajes opera la infraestructura de e-commerce líder de transporte terrestre en Argentina: vende pasajes de micro de larga distancia y provee la tecnología de carrito web a empresas operadoras.

**Este design system es para material de presentación corporativa** — propuestas comerciales a operadores, reportes de producto/diseño, documentos institucionales y marketing. No es el design system del producto digital (app/web de compra), que vive en Figma por separado y usa tipografía Outfit.

## Fuentes

- `uploads/cdp-brand-brief-para-claude-design.md` — **especificación autoritativa**. Ante conflicto con cualquier asset, manda este documento.
- `uploads/cdp-wordmark-violeta.png`, `cdp-wordmark-blanco.png`, `cdp-isotipo-violeta.png`, `cdp-lockup-bajada-violeta.png`, `cdp-lockup-bajada-blanco.png` — logos originales (copiados a `assets/logos/`).
- No se recibió Figma ni codebase del producto digital para este sistema — los componentes de abajo son primitivas de presentación construidas desde cero a partir del brief, no una extracción de un inventario existente (ver "Adiciones intencionales").

**Nota crítica de color:** los archivos de logo contienen `#9B278F`/`#39C0C0` por una deriva histórica de los assets. Los colores de marca reales, usados en todo este sistema, están en `tokens/colors.css` y son los del brief: violeta `#872191`, turquesa `#1BCEC8`, tinta `#2A052D`.

## Escalado de presentación (REGLA CRÍTICA)

`.slide` es siempre 1920×1080 — ese es el sistema de coordenadas de diseño, no un tamaño de render literal. Nunca se muestra un `.slide` suelto: se envuelve en `.slide-viewport` (`tokens/layout.css`), que lo ajusta al espacio real disponible — pantalla completa o un contenedor responsivo — preservando 16:9, centrado, con letterbox donde sobra. `slide-fit.js` (raíz del proyecto) hace el cálculo: mide `.slide-viewport` con `ResizeObserver` y aplica `scale(min(ancho/1920, alto/1080))` al `.slide` que contiene. Nunca debe aparecer scroll ni contenido cortado; si el contenido no entra, se parte en dos slides — la tipografía nunca se achica para que quepa.

Uso mínimo:
```html
<link rel="stylesheet" href="styles.css">
<script src="slide-fit.js"></script>
<div class="slide-viewport" style="width:100vw;height:100vh">
  <div class="slide" style="background:#fff">…</div>
</div>
```
Para un contenedor responsivo en vez de pantalla completa (como el template), usá `width:100%;max-width:1920px;aspect-ratio:16/9` en el `.slide-viewport`. Los 12 layouts en `guidelines/slides/` y el template `templates/propuesta-comercial/` ya siguen esta regla.

## Índice

- `styles.css` — entry point, importa todo `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `layout.css` — variables CSS y el sistema de slots/anchos ejecutable.
- `assets/logos/` — los 5 assets de marca.
- `components/chrome/` — Icon, Pill, Eyebrow, Divider, LogoMark, SlideFooter, Avatar, BadgeDot, ToggleSegment, DotGrid, DiagonalLines, MeshGradient, PageNumberWatermark.
- `components/forms/` — Button.
- `components/data-display/` — Card, ProductCard, Tag, KPIStat, ComparisonTable, Timeline, InsightBand, MetricCard, InsightCard, NumberedCard, ChartCard, ListCard, QuoteCard, KpiHero, KpiDelta, KpiRing, KpiBar, KpiSparkline, KpiCompare, FlowRings, FlowTimeline, FlowLayers, FlowBranch.
- `guidelines/colors/`, `guidelines/type/`, `guidelines/spacing/`, `guidelines/brand/` — specimen cards (Design System tab).
- `guidelines/slides/` — los 12 layouts de presentación (incluye tema oscuro), como referencia visual.
- `templates/propuesta-comercial/` — template ejecutable de propuesta comercial.
- `thumbnail.html` — tile del proyecto.
- `SKILL.md` — versión portable para Claude Code / Agent Skills.

## Componentes

**Chrome:** `Icon` (Phosphor Regular, fill), `Pill` (chip — variantes soft/brand/turquoise/solid/outline/dark), `Eyebrow` (label con barra de color, no guion), `Divider` (separador gráfico inline u horizontal, reemplaza el punto medio), `LogoMark`, `SlideFooter`, `Avatar`, `BadgeDot`, `ToggleSegment` (control segmentado decorativo), `DotGrid`/`DiagonalLines`/`MeshGradient`/`PageNumberWatermark` (recursos decorativos al 5–10%).

**Forms:** `Button` (recreación real de la App a escala 2x — ver §Botón).

**Data display:** `Card` (benefit card con borde superior de color, invención de presentación), `ProductCard` (card real de la App), `Tag` (chip real de la App, incl. ServiceClass), `KPIStat`, `ComparisonTable`, `Timeline` (= flow-steps horizontal), `InsightBand`, `MetricCard` (card-metric), `InsightCard` (card-insight, fondo oscuro), `NumberedCard` (card-numbered), `ChartCard` (card-chart), `ListCard` (card-list), `QuoteCard` (card-quote), `KpiHero`, `KpiDelta`, `KpiRing`, `KpiBar`, `KpiSparkline`, `KpiCompare`, `FlowRings`, `FlowTimeline` (vertical), `FlowLayers`, `FlowBranch`.

### Adiciones intencionales

`Card` (card de beneficio, borde superior de color, para grillas de slides) sigue siendo una invención de presentación — no existe como tal en la App; se mantiene porque cubre el layout "07 · Grilla de cards" del brief. Todo lo demás en Data display/Forms/Chrome que toca Botón/Tag/Avatar/Card ahora viene de valores reales extraídos del Figma de la App (ver §Botón/§Tag/§Card más abajo), y reemplaza cualquier decisión provisoria anterior.

## Contenido — cómo se escribe

- **Se habla de vos** (voseo rioplatense): "Compará. Elegí. Viajá.", "¿Arrancamos con Fono Bus?".
- **Profesional pero cercano, directo, sin solemnidad corporativa.** Nada de jerga corporativa vacía ("sinergias", "solución 360").
- **Los números se muestran, no se adornan.** Una cifra en display grande (`+38%`) con una etiqueta corta abajo — nunca un párrafo alrededor del número ni un ícono de flecha pegado a la cifra.
- **Un mensaje por slide.** Si el título une dos ideas con "y", son dos slides.
- **Los datos van en tabla, no en bullets** cuando hay más de tres pares dato-valor.
- El eyebrow lleva una barra de color de 24×3px a la izquierda (12px de separación) — nunca un guion largo delante.
- Sin emoji.

## Voz y redacción — tics de IA prohibidos

Estas construcciones están prohibidas en toda copy generada porque delatan texto de IA:

- **Guion largo como conector.** No: “Más rápido — y más simple.” Sí: “Más rápido. Más simple.” o dos líneas separadas.
- **Punto medio como separador de redacción en prosa.** No: “Comparás tarifas · confirmás en segundos.” Usá punto y aparte, o el componente `Divider` si son dos datos discretos en una línea (no texto corrido).
- **Estructuras de contraste “no es X, sino Y”.** No: “No es un checkout más, sino uno mejor.” Sí: afirmá directo lo que es.
- **Tríadas de tres adjetivos.** No: “Rápido, simple y confiable.” Elegí uno y desarrollalo, o mostralo con un dato.
- **Títulos con dos puntos.** No: “Resultados: lo que logramos en 90 días.” Sí: “Lo que logramos en 90 días.”
- **Frases de cierre genéricas.** No: “En resumen…” / “En definitiva…”. Cerrá con el dato o la pregunta, no con una etiqueta de resumen.

## Sistema de tema oscuro

Variante para slides de datos e impacto: fondo `#19021C` (`--surface-dark`) o `#2A052D` (`--surface-dark-alt`), texto `#FFFFFF`, texto secundario `#EA98F6` al 70% (`--text-on-dark-secondary`), bordes `#400A45` (`--border-on-dark`). No inventa colores nuevos: son los mismos tokens violeta en sus variantes más oscuras. Ver specimen “12 · Tema oscuro” en Slides.

## Fundamentos visuales

**Color:** violeta `#872191` es el color principal (fondos de marca, títulos, acentos de tabla). Turquesa `#1BCEC8` es acento puntual — datos destacados, íconos, columna positiva de tabla — **nunca fondo de slide completo**. Fondo por defecto de contenido: blanco. Máximo dos colores de fondo por deck (blanco + violeta de marca).

**Tipografía:** Poppins SemiBold para títulos/display/números héroe. Inter Regular/Medium/SemiBold para cuerpo, tablas, eyebrows. **No se usa Bold ni Light** — la jerarquía se resuelve con tamaño y color. Outfit queda reservado a mockups de producto insertados tal cual (no se re-tipografían).

**Escala tipográfica (1920×1080, para proyección — REGLA DURA: 24px es el mínimo absoluto, sin excepciones: notas al pie, etiquetas de eje de gráfico y legales también van en 24px o más):**

| Nivel | Tamaño/interlineado | Uso |
|---|---|---|
| Display | 112/118 | Portada, cierre |
| H1 título de slide | 72/84 | Título de cada slide de contenido |
| H2 título de bloque | 48/58 | Subtítulo de sección dentro de una slide |
| H3 título de card | 32/42 | Título dentro de una card |
| Overline | 24/30 | Eyebrow, etiquetas uppercase |
| Body destacado | 36/52 | Párrafo de énfasis, insight band |
| Body | 30/44 | Cuerpo estándar, bullets |
| Caption / notas al pie | 24/34 | Notas, contexto secundario, número de página |
| Métrica héroe | 140/140 | KPI dominante, card-metric, card-insight |
| Métrica media | 48/56 | KpiDelta, KpiCompare |

**Niveles de lectura:** con esta escala la diferencia numérica entre cuerpo (30) y título de card (32) es chica a propósito — la jerarquía real la dan el peso y el color, no solo el tamaño: títulos en Poppins SemiBold `#2A052D` (tinta), cuerpo en Inter Regular `#2E2E2E`, texto secundario Inter Regular `#6D6D6D`, notas `#9B9B9B`. Nunca más de tres niveles de lectura visibles en un mismo bloque.

**Grid:** canvas 1920×1080, margen 80, 12 columnas de 110px con gutter 40, área segura 1760×920. Grillas de card: 4 cards de 410px.

**Espaciado:** escala 8/16/20/24/32/40/48/64/80/96/128.

**Radios:** 12 (sm) · 16 (md, default de card) · 20 (lg) · 24 (xl) · 999 (pill).

**Cards:** borde `#E5E5E5` de 1.5px, radio 16, padding 30, sombra suave (`y4 blur16 negro 7%`). Sin fondos con gradiente salvo portada y cierre.

**Sombras:** card `0 4px 16px rgba(0,0,0,.07)`; tabla `0 6px 22px rgba(0,0,0,.10)`.

**Fondos e imágenes:** sin fotografía de stock en este sistema todavía — las áreas de visual/producto se dejan como placeholder rotulado ("Visual de producto") hasta contar con capturas reales. Degradado violeta únicamente en portada y cierre.

**Animación:** no definida en el brief — este sistema es para material estático (slides, PDFs, documentos). No asumir transiciones.

**Estados hover/press:** no aplica — el material de presentación es estático, sin interacción de UI.

## Iconografía

La familia real es **Phosphor Icons, peso Regular** — paths rellenos (fill), sin trazo; no aplica `stroke-width`. CDN: `https://unpkg.com/@phosphor-icons/web`. El wrapper `Icon` mapea 17 nombres ya dibujados en la App (ArrowUUpLeft, User, Question, Lightbulb, Phone, FileText, MagnifyingGlass, Heart, HeartFill, CalendarDots, BookBookmark, CheckCircle, Check, Globe, GlobeHemisphereWest, DotsThreeCircle, WarningCircle) a su glifo Phosphor; cualquier otro nombre PascalCase se auto-convierte a slug Phosphor (fallback "lo que falte, cualquier ícono de Phosphor Regular"). Tamaños de uso en deck: 24 inline, 28 badge de card, 32 suelto, 22 en fila de tabla. Sin emoji, sin caracteres Unicode como ícono.

**Sustitución pendiente:** `Passenger` es un glifo propio de CDP sin equivalente en Phosphor — el wrapper cae a `user` hasta contar con el ícono real; queda marcado en el specimen de iconografía.

## Logo

Ver `assets/logos/`: wordmark violeta (16.7:1), wordmark blanco (17.1:1), isotipo circular (1:1), lockup con bajada violeta y blanco (7:1, bajada "Compará. Elegí. Viajá."). Regla dura: sobre fondo de marca siempre variante blanca, nunca violeta sobre violeta. Tamaño mínimo: wordmark 200px de ancho, isotipo 48px. Resguardo: una altura de logo libre en los cuatro lados. Prohibido recolorear, deformar, rotar, sombrear o reconstruir el wordmark con texto.

## Sistema de layout ejecutable (slides)

Toda slide de contenido (03–10; portada/divisores/cierre quedan exentas) usa `.slide` + `.slide-frame` (grid de 3 filas: header auto, body 1fr, footer fijo en y=978) + `.slide-body` (grid de 12 columnas de 110px, gutter 40) + clases `.span-n` — ver `tokens/layout.css` y el specimen "Slots y anchos válidos" en Spacing.

**Checklist de verificación de layout** (correr contra cada slide nueva):
1. El contenido entra en 1920×1080 sin recorte — si no entra, se parte en dos slides; nunca se achica la tipografía.
2. Los tres slots están presentes y el body usa `grid-template-rows: auto 1fr auto` (o el patrón equivalente `.slide-frame`/`.slide-footer` fijo) — el body es 1fr, no auto.
3. Todo bloque mide un ancho de la tabla válida (260/410/560/710/860/1010/1160/1310/1760), vía `.span-n` — nunca un ancho arbitrario.
4. Todo bloque arranca en una línea de columna (80 + n·150).
5. Los bloques hermanos comparten borde superior (misma fila de grid).
6. Hay al menos 48px entre el fin del contenido y el footer (y=978).
7. Todo espaciado vertical usa la escala 16/24/32/48/64/80.
8. Se respetan los límites de densidad: ≤3 bloques de primer nivel en el body, ≤8 cards, ≤10 filas de tabla + total, ≤2 KPIs héroe, ≤2 niveles de jerarquía por bloque.
9. El footer está en y=978 (logo x=80, número de página x=1815, Inter SemiBold 24 `#872191`); una nota al pie va 24px arriba del logo, nunca pegada.
10. Ningún texto — ni notas, ni etiquetas de eje, ni legales — está por debajo de 24px.
11. Toda card, todo ítem de lista, toda fila de tabla que representa una categoría y todo KPI lleva un ícono Phosphor Regular en el color de acento del bloque, en el tamaño que corresponde (ver tabla de tamaños abajo).

## Iconografía — tamaños por contexto

| Contexto | Tamaño |
|---|---|
| Badge de card (contenedor 56×56: `Card`, `MetricCard`, `InsightCard`) | 28px |
| Inline junto a un título (ej. `ListCard`) | 24px |
| Suelto sin contenedor (`KpiHero`, `KPIStat`) | 32px |
| Fila de tabla que representa una categoría | 22px |

El contenedor de badge (56×56, radio `--radius-sm`, fondo `violet-50`/`turquoise-50` en claro o `rgba(255,255,255,.1-.16)` en oscuro) es el único patrón válido de "ícono de card" — no inventar otros tamaños de caja.

**Checklist de icono en listas cortas (patrón, no componente):** para 2-4 puntos con ícono (no una grilla completa de cards), la fila lleva fondo sutil (`rgba(255,255,255,.06)` en oscuro / `var(--surface-soft)` en claro), padding 20-24px, badge de ícono 56×56 (mismo estándar que las cards) y texto al lado — nunca un ícono suelto de 24px flotando sin badge.

## Recursos decorativos y estructuras

**Tema oscuro:** fondo `#19021C` (`--surface-dark`) o `#2A052D` (`--surface-dark-alt`), texto `#FFFFFF`, texto secundario `#EA98F6` al 70% (`--text-on-dark-secondary`), bordes `#400A45` (`--border-on-dark`). Mismos tokens violeta en variante oscura, ningún color nuevo. Ver “12 · Tema oscuro” en Slides.

**Cards de métrica** (`MetricCard`, `InsightCard`, y las demás variantes de card en `components/data-display/`): badge de ícono 56×56 arriba, cifra en métrica héroe (140px, el elemento dominante) alineada al inicio del bloque (nunca `justify-content:flex-end`, que deja un hueco vacío antes del valor), etiqueta en overline mayúsculas, línea de contexto opcional en caption. Padding 40px, gap 20px entre badge y contenido — comparten esta medida `Card`, `MetricCard`, `InsightCard` y `NumberedCard`. Todas aceptan `width`/`height` para ajustarse al `.span-n` real que ocupan en la grilla; el default 410×260 asume span-3 y no debe asumirse válido para cualquier combinación.

**Héroe vs. media:** la escala héroe (140/140) es para los 1-2 KPI verdaderamente dominantes del deck (idealmente 2 por deck entero, máximo 2 por slide); todo lo demás (`MetricCard` de apoyo, `KPIStat`, `InsightCard`) usa la escala media (48/56) — mezclar las dos jerarquías hace que una card de soporte compita visualmente con el KPI real.

**Consistencia en una misma grilla:** no mezclar cards con badge de ícono y `NumberedCard` (número de orden gigante) en la misma grilla de beneficios/razones — reservar `NumberedCard` para secuencias donde el orden importa; si la grilla mezcla datos cuantitativos y razones cualitativas, todas llevan badge de ícono.

**`PageNumberWatermark`:** decorativo, muy propenso a chocar con contenido real en slides densas. Tamaño chico (~100-110px), opacidad muy baja (0.03-0.04), anclado sangrando fuera del canvas (ej. `right:-20px;bottom:-25px`) para que solo un fragmento quede visible — nunca asumir una esquina libre sin auditar contra las slides con más contenido.

**Tablas densas:** con 10-11 filas + header, el padding vertical por fila no puede exceder ~12px si el texto es 24px (piso mínimo) — verificar siempre contra la altura real disponible (930 menos el inicio del body) antes de fijar el padding.

## Caveats

- No hubo Figma ni codebase del producto digital adjuntos a este sistema — por eso no hay UI kit de producto (app/web de compra), solo primitivas de presentación. Si querés que este sistema también cubra pantallas de producto, adjuntá el Figma o repo correspondiente.
- `Passenger` (glifo propio de CDP) no tiene equivalente en Phosphor y usa `user` como sustitución provisoria.
- No hay fotografía/ilustración de marca todavía — los slides de ejemplo usan placeholders rotulados donde iría un visual real.

## Botón, Tag y Card (valores reales del Figma de la App)

Estos tres primitivos ya no son inventados: son la recreación exacta de los componentes reales de la App, escalados 2x para el canvas de presentación (1920×1080 es 2x la escala de la App). **Excepción: la tipografía no escala 2x** — duplicar un cuerpo de 16px daría 32px, ilegible en tablas densas; el texto de estos componentes usa los valores de la App tal cual.

**Botón** — alto 56/36 (App) → 112/72 (deck), radio 10→20, padding 16/14→32/28, gap 6→12, borde 1→2. Variantes: `default` (fondo/borde violeta, texto blanco SemiBold), `secondary` (fondo/borde turquesa, texto blanco Regular), `outline` (borde violeta, texto violeta Regular), `white-outline`, `gray-outline`, `ghost` (sin fondo ni borde, texto negro), `success`/`error`/`warning` (fondos semánticos, texto blanco SemiBold), `filter` (pill, radio 999, alto 36→72, borde `#424242`, texto `#2E2E2E`). Disabled solo se nota en la familia outline: texto y borde pasan a `#A7A7A7`.

**Tag/Chip** — alto 20/16→40/32, texto 14 Regular/12 Medium (sin escalar). Variantes `default`, `outline`, `secondary`, `expired` (gris sólido), `primary-soft` (violeta suave). `Tag/ServiceClass` (cama, semicama) es una pill aparte: radio 9999, alto 24→48, borde `#252525`, texto 12 Regular.

**Card real (`ProductCard`)** — radio 12→24, padding 20→40, borde `#BABABA` 0.5px→1px, texto 16 Regular `#252525` (sin escalar). Distinta de `Card` (la card de beneficio inventada para grillas de slides, que sigue con su propio borde `#E5E5E5` 1.5px y radio 16 del brief original). `Card/Badge Promo` (fondo turquesa, texto blanco) y `Card/Badge Destacado` (banda superior violeta) son `badge="promo"`/`"destacado"` en `ProductCard`.

Los colores de marca no cambian (`#872191`, `#1BCEC8`, `#2A052D`); el deck sigue en Poppins+Inter y el producto en Outfit — un mockup de producto insertado en un deck conserva Outfit.
