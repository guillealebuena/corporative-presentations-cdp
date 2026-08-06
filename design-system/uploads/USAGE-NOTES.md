# Notas de uso — aprendidas al construir la presentación institucional

Estas reglas complementan (y en algunos puntos corrigen) `readme.md`. Se derivaron de errores reales encontrados y corregidos durante la construcción de un deck de 13 slides. Aplican a CUALQUIER presentación nueva que use este design system, sin importar el tema.

## 1. `.slide-viewport` SIEMPRE responsivo
Nunca fijar `width:1920px;height:1080px` en `.slide-viewport` — eso anula `slide-fit.js` (no tiene contra qué escalar) y el resultado es una slide cortada, mostrando solo una esquina.
Correcto: `style="width:100%;max-width:1920px;aspect-ratio:16/9;flex-shrink:0"`.

## 2. Iconografía — tamaños reales (auditado y corregido en el bundle)
- Badge de card (contenedor 56×56, `Card`, `MetricCard`, `InsightCard`): ícono **28px**, no 32.
- Ícono inline junto a un título (ej. `ListCard`): **24px**.
- Ícono suelto sin contenedor (`KpiHero`, `KPIStat`): **32px**.
- Fila de tabla que representa una categoría: **22px**.
- El contenedor de badge (56×56, radio `--radius-sm`, fondo tintado `violet-50`/`turquoise-50` en claro o `rgba(255,255,255,.1-.16)` en oscuro) es el único patrón válido para "ícono de card". No uses otros tamaños de caja.

## 3. Padding y gap estándar de card (Card, MetricCard, InsightCard, NumberedCard)
Los cuatro comparten: `padding: 40px`, `gap: 20px` entre badge y contenido. Antes eran 30/16 — se subieron para dar más aire y quedar en escala (40 y 20 son valores de la escala de espaciado).

## 4. `MetricCard` — alineación interna
El bloque valor+etiqueta+contexto va con `justifyContent:'flex-start'` (pegado al badge), NUNCA `flex-end` — con `flex-end` el badge queda flotando arriba con un hueco vacío antes del valor, especialmente visible en cards con mucho alto libre.

## 5. `metric-scale` — cuándo usar héroe vs. media
- **Héroe (140/140)**: reservado a los 1-2 KPI verdaderamente dominantes de todo el deck (ej. volumen de ventas, pasajes totales). Máximo 2 por slide, idealmente 2 por deck entero.
- **Media (48/56)**: todo el resto — MetricCard de apoyo, KPIStat, InsightCard. Si una card de "soporte" usa escala héroe, se ve desproporcionada y compite con el KPI real.
- **Cuidado con strings largos en héroe**: un valor como "USD 122.000.000" a 140px puede desbordar el ancho de la card. Si el string es largo, usar un `value-size`/`value-lh` reducido (ej. 76px/80px) en vez de bajar toda la jerarquía del componente.
- **CSS trap**: al pasar un line-height custom vía prop, siempre como string con unidad (`"80px"`), nunca un número (`80`) — React trata `lineHeight` como unitless-safe y NO le agrega `px`, resultando en un multiplicador (80× el tamaño de fuente).

## 6. `PageNumberWatermark` — posición segura
Esta pieza decorativa (número gigante muy tenue) es la más propensa a chocar con contenido real, porque las slides de este deck usan casi todo el body (header con textos largos arriba, stats/cards a la derecha, footer abajo). Ningún anclaje de esquina es 100% seguro si el contenido llena la slide. Reglas:
- Tamaño chico (~100-110px) y opacidad muy baja (0.03-0.04).
- Anclarlo sangrando fuera del canvas (ej. `right:-20px; bottom:-25px`) para que solo un fragmento pequeño quede visible en la esquina, en vez de un glifo completo compitiendo con el layout.
- Nunca asumir que "esquina inferior derecha" o "vertical centrado a la derecha" están libres — auditar contra las slides con más contenido (KPIs, tablas, headers largos) antes de dar por buena la posición.

## 7. Header de slide — separación eyebrow/título
`.slide-header` usa `gap: var(--space-4)` (24px) entre el eyebrow (badge de color + label) y el H1. Antes tenía 16px, se sentía pegado. Este valor va en `tokens/layout.css`, no como override por slide.

## 8. Consistencia de "badge" vs "número" en una misma grilla
No mezclar cards con badge de ícono (`Card`, `MetricCard`) y cards con número de orden gigante (`NumberedCard`, con su "01/02/03" de fondo) en la misma grilla de razones/beneficios — genera un lenguaje visual inconsistente. Si la grilla mezcla datos cuantitativos (usar `MetricCard`) y razones cualitativas (usar `Card` con ícono), TODAS deben llevar badge de ícono; reservar `NumberedCard` para secuencias donde el orden/paso realmente importa (evitar para "6 razones" no ordenadas).

## 9. Flow/proceso: elegir el componente por lo que representan los datos
- `Timeline` (= flow-steps horizontal, círculos numerados + conector): pasos de un PROCESO secuencial (alta → producción → gestión → crecimiento).
- `FlowRings` (anillos entrelazados): comparación de CONJUNTOS que se superponen, no un proceso paso a paso. No usar para una secuencia de onboarding.
- Al montar `Timeline`/cualquier componente con `display:flex` y elementos `flex:1` (conectores), el contenedor mount necesita `style="width:100%"` explícito — si no, el conector colapsa a 0 y los pasos quedan amontonados sin línea.

## 10. Cards de icono en checklists (no son un componente aparte, es un patrón)
Para listas de 2-4 puntos con ícono (no una grilla de cards completa), el patrón correcto es: fila con `background` sutil (`rgba(255,255,255,.06)` en oscuro / `var(--surface-soft)` en claro), `padding:20-24px`, badge de ícono 56×56 (mismo estándar que las cards), texto al lado. Nunca un ícono suelto de 24px flotando al lado del texto sin badge — se ve menos integrado al resto del sistema.

## 11. `Card` acepta `width` como prop
Los componentes de card (`Card`, `MetricCard`, `NumberedCard`, `InsightCard`) tienen un `width`/`height` default (410/260) pero DEBEN aceptar overrides vía prop para poder ajustarse a cualquier combinación de `.span-n` — nunca asumir que el default sirve para toda grilla; calculá el ancho real según cuántas columnas ocupa cada card y pasalo explícito.

## 12. Tabla de agencias / filas densas
Con 10-11 filas de tabla + header, el padding vertical por fila no puede exceder ~12px si el texto es 24px (piso mínimo) — más que eso desborda el área segura antes del footer. Verificar SIEMPRE con la altura real disponible (930 - inicio del body) antes de fijar el padding.
