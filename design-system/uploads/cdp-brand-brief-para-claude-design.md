# Central de Pasajes · Brief de marca

**Documento de ingesta para Claude Design · v1.0 · Agosto 2026**

> Este documento es la especificación autoritativa de la marca para generar
> presentaciones, documentos y materiales visuales de Central de Pasajes.
> **Ante cualquier conflicto entre lo que se extraiga de un asset y lo que dice
> este documento, manda este documento.**

---

## Qué es Central de Pasajes

Central de Pasajes opera la infraestructura de e-commerce líder de transporte
terrestre en Argentina. Vende pasajes de micro de larga distancia y provee la
tecnología de carrito web a empresas operadoras.

**Registro de marca:** profesional pero cercano. Directo, sin solemnidad corporativa.
Se habla de vos. Los números se muestran, no se adornan.

---

## 1. Color

### Nota crítica sobre los archivos de logo

Los archivos de logo contienen `#9B278F` (violeta) y `#39C0C0` (turquesa). **Esos
valores no son los de la marca** — son una deriva histórica de los assets.
No extraer color de los logos. Usar exclusivamente los valores de abajo.

### Colores de marca — autoritativos

| Rol | Hex | Uso |
|---|---|---|
| **Violeta primario** | `#872191` | Color principal. Fondos de portada, títulos de marca, botones. |
| **Turquesa acento** | `#1BCEC8` | Acento. Datos destacados, íconos, columnas positivas. Nunca como fondo completo. |
| **Tinta** | `#2A052D` | Fondos oscuros, filas de total. |
| **Blanco** | `#FFFFFF` | Fondo por defecto de slides de contenido. |

### Escala violeta

`#F9F4F9` · `#EDDFEF` · `#EA98F6` · `#E257F1` · `#BA31C7` · **`#872191`** ·
`#6F1778` · `#57125E` · `#400A45` · `#2A052D` · `#19021C`

### Escala turquesa

`#E6FDFC` · `#CCFBF8` · `#99F7F1` · `#66F3EA` · `#33EFE3` · **`#1BCEC8`** ·
`#14ACA6` · `#22716E` · `#1A5855` · `#133E3C`

### Grises

`#F3F3F3` · `#E5E5E5` · `#CCCCCC` · `#B3B3B3` · `#9B9B9B` · `#848484` ·
`#6D6D6D` · `#575757` · `#424242` · `#2E2E2E` · `#252525`

### Semánticos

| Rol | Hex | Fondo suave |
|---|---|---|
| Éxito | `#35A55D` | `#E5F6E9` |
| Error | `#EF4444` | `#FEE2E2` |
| Advertencia | `#9A3412` | `#F9EFC8` |

### Uso semántico en presentaciones

| Concepto | Texto | Fondo |
|---|---|---|
| Fondo de slide | — | `#FFFFFF` |
| Fondo de marca (portada, cierre, divisores) | `#FFFFFF` | `#872191` |
| Superficie suave (encabezado de tabla, banda de cita) | `#2A052D` | `#F9F4FA` |
| Fila alterna de tabla | — | `#F9F4FA` |
| Columna destacada positiva | `#22716E` | `#E6FDFC` |
| Columna de costo o riesgo | `#9A3412` | `#F9EFC8` |
| Fila de total | `#FFFFFF` | `#2A052D` |
| Texto de título | `#2A052D` | — |
| Texto de cuerpo | `#2E2E2E` | — |
| Texto secundario | `#6D6D6D` | — |
| Texto atenuado | `#9B9B9B` | — |
| Borde sutil | — | `#E5E5E5` |

### Serie para gráficos — en este orden

1. `#872191` · 2. `#1BCEC8` · 3. `#E257F1` · 4. `#68B0AB` · 5. `#999CC5` · 6. `#9B9B9B`

---

## 2. Tipografía

| Familia | Uso | Pesos permitidos |
|---|---|---|
| **Poppins** | Títulos, display, números héroe | SemiBold únicamente |
| **Inter** | Cuerpo, tablas, datos, eyebrows | Regular, Medium, SemiBold |

**No usar Bold ni Light.** La jerarquía se resuelve con tamaño y color, no con peso.

> El producto digital (app y web) usa **Outfit**. Es deliberado. Los mockups de
> producto insertados en un deck conservan Outfit y no se re-tipografían.

### Escala — canvas 1920×1080

| Rol | Fuente | Tamaño / interlineado |
|---|---|---|
| Display (portada, cierre) | Poppins SemiBold | 88 / 96 |
| Título de slide | Poppins SemiBold | 48 / 58 |
| Título de bloque | Poppins SemiBold | 32 / 40 |
| Título de card | Poppins SemiBold | 24 / 32 |
| Eyebrow | Inter SemiBold · +1.6px · MAYÚSCULAS | 20 / 24 |
| Bajada de título | Inter Regular | 23 / 34 |
| Cuerpo y tablas | Inter Regular | 21 / 30 |
| Descripción de card | Inter Regular | 19 / 28 |
| Nota al pie | Inter Regular | 17 / 24 |
| Número héroe | Poppins SemiBold | 76 / 80 |
| Valor destacado en tabla | Inter SemiBold | 26 / 32 |

El eyebrow siempre lleva un guion largo delante: `— CASO DE USO · FONO BUS`

---

## 3. Grid y espaciado

| Parámetro | Valor |
|---|---|
| Canvas | 1920 × 1080 |
| Margen | 80 |
| Columnas | 12 · gutter 40 · columna 110 |
| Área segura | 1760 × 920 |

**Anclas verticales:** eyebrow y=80 · título y=118 · bajada y=198 ·
contenido y=234 · footer y=978

**Grillas de card:** 4 cards de 410px con gutter 40 (`4×410 + 3×40 = 1760`)

**Escala de espaciado:** 8 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128

**Radios:** 12 (sm) · 16 (md) · 20 (lg) · 24 (xl) · 999 (pill)
Card estándar: radio 16, padding 30, borde `#E5E5E5` de 1.5px.

**Sombra de card:** `y4 blur16 · negro 7%`
**Sombra de tabla:** `y6 blur22 · negro 10%`

---

## 4. Logo

### Variantes

| Variante | Proporción | Cuándo |
|---|---|---|
| Wordmark violeta | 16.7 : 1 | Footers y encabezados sobre fondo claro |
| Wordmark blanco | 17.1 : 1 | Sobre violeta o fondos oscuros |
| Isotipo circular | 1 : 1 | Espacios cuadrados, avatares, sellos |
| Lockup con bajada violeta | 7 : 1 | Portadas institucionales sobre fondo claro |
| Lockup con bajada blanco | 7 : 1 | Portadas institucionales sobre fondo oscuro |

La bajada dice **"Compará. Elegí. Viajá."** y solo aparece en el lockup.
No se compone aparte.

### Reglas

- **Footer estándar de slide:** wordmark en x=80, y=978, alto 26px.
- **Área de resguardo:** mínimo una altura de logo libre en los cuatro lados.
- **Tamaño mínimo:** wordmark 200px de ancho · isotipo 48px.
- **Sobre fondo de marca se usa la variante blanca.** Nunca el violeta sobre violeta.
- **Prohibido:** recolorear, deformar, rotar, aplicar sombra o contorno,
  encerrar en una caja, o reconstruir el wordmark con texto.

---

## 5. Layouts de presentación

| # | Layout | Estructura |
|---|---|---|
| 01 | Portada | Fondo `#872191`. Logo blanco arriba izquierda con línea divisoria. Pill de categoría, display en dos líneas, bajada. Logo de operador abajo derecha si aplica. |
| 02 | Divisor de sección | Fondo `#872191`. Solo número de sección y título en display. |
| 03 | Título + bullets | Eyebrow, título, bajada, lista con viñetas de ícono. |
| 04 | Dos columnas | Texto a la izquierda, visual o card a la derecha. |
| 05 | Tabla comparativa | Encabezado con tres columnas: concepto, situación actual (crema/ámbar), propuesta CDP (turquesa). Filas alternas. Fila de total en tinta. |
| 06 | KPIs destacados | 2 a 4 números héroe con etiqueta y contexto. |
| 07 | Grilla de cards | 4 u 8 cards con badge de ícono y borde superior alternado violeta/turquesa. |
| 08 | Timeline | Pasos secuenciales conectados. |
| 09 | Insight | Banda `#F9F4FA` con barra violeta a la izquierda y frase con partes destacadas en violeta semibold. |
| 10 | Gráfico | Gráfico con la serie de color de §1. |
| 11 | Cierre | Fondo con gradiente violeta. Pregunta en display. |

Portada, divisores y cierre **no llevan footer**. El resto sí: logo a la izquierda,
número de slide de dos dígitos (`02`) en violeta a la derecha, x=1815.

---

## 6. Principios de composición

- **Un mensaje por slide.** Si el título une dos ideas con una "y", son dos slides.
- **El turquesa nunca es fondo de slide completo.** Es acento puntual.
- **Máximo dos niveles de jerarquía por bloque.**
- **Números grandes, no párrafos grandes.** La cifra en display, el contexto en cuerpo chico.
- **Nada de degradados decorativos** salvo en portada y cierre.
- **Sin íconos genéricos de stock.** Íconos de línea, trazo 1.9, esquinas redondeadas.
- **Los datos van en tabla, no en bullets.** Si hay más de tres pares dato-valor, es una tabla.

---

## 7. Ejemplo de referencia

La propuesta comercial a Fono Bus es el ejemplo canónico de aplicación:
portada de marca, tabla comparativa de costos, slide de conversión con KPIs y
tabla, grilla de ocho beneficios, y cierre. Refleja fielmente el sistema descrito acá.
