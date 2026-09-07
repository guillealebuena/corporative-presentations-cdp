# Contexto del proyecto

Design system de **presentaciones y material institucional** de Central de Pasajes.
El diseño pasa por Claude Design (ahí se ve el resultado); el repo es el gate y el archivo —
un cambio no está terminado hasta que está en `main`, con `npm run check` en verde y entrada en
el `CHANGELOG`. Ninguno de los dos manda en abstracto: lo que está en Design y no en el repo no
tiene respaldo (Design no versiona), lo que está en el repo y no en Design no tiene efecto.

**No es** el design system del producto (app React Native / web checkout). Eso vive en Figma
y tiene su propia tipografía. Si un pedido es sobre la UI del producto, decilo y no toques nada acá.

---

## Reglas que no se rompen

### 1. La estructura interna de `design-system/` es un contrato

`_ds_manifest.json` referencia rutas absolutas (`tokens/colors.css`, `components/chrome/Avatar.jsx`)
y las 31 guidelines usan relativas (`../../styles.css`, `../../_ds_bundle.js`).

**Mover o renombrar un archivo ahí adentro no da error: deja de aplicar estilos en silencio.**
Agregar archivos nuevos es seguro.

### 2. Cero dependencias de CDN

Todo lo que la presentación necesite para renderizar va embebido. Claude Design bloquea
recursos externos al exportar a HTML standalone, y en PPTX/PDF directamente no existen.

Esto ya rompió dos veces: los iconos venían de un webfont en `unpkg.com`, y las tres
tipografías de un `@import` a `fonts.googleapis.com`. Ninguna de las dos daba error. Si vas a
sumar una fuente, un icono o una librería, va vendorizada — las tipografías viven en
`design-system/fonts/`, ver `fonts/SOURCE.md`.

### 3. Toda página de `guidelines/` necesita `@dsCard` en la primera línea

```html
<!-- @dsCard group="Brand" viewport="700x900" name="Nombre" subtitle="Descripción corta" -->
```

Sin el tag el archivo existe pero desaparece del índice de Claude Design. Otra falla silenciosa.
`group` tiene que ser una sección existente: Brand, Colors, Type, Spacing, Slides.

### 4. Los archivos con prefijo `_` los genera Claude Design

`_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json`. No editarlos a mano: se
regeneran en cada sync y el cambio se pierde.

### 5. Un cambio en Claude Design que no bajó al repo es la única copia que existe

Claude Design no versiona: no hay historial ni undo, y un resync desde el repo lo pisa sin
preguntar. Si el ajuste nació en Design, hay que traerlo al repo antes de resincronizar en
cualquier dirección — nunca al revés primero. Ver "Flujo de un cambio" más abajo.

---

## Comandos

```bash
npm run build:icons   # regenera icons/icons.js desde icons/src/ (sin dependencias)
npm run check         # 6 validaciones — correr SIEMPRE antes de commitear
```

`check` detecta lo que rompe en silencio: CDNs en la iconografía, iconos referenciados que no
existen, rutas relativas muertas, componentes del manifest que no resuelven, builds de React
de desarrollo, guidelines sin `@dsCard`, y cualquier CSS o tipografía externa.

---

## Flujo de un cambio

**Si nace en el repo:**

1. Rama desde `main`
2. Cambio en `design-system/`
3. `npm run check` → 0 errores
4. Entrada en `CHANGELOG.md`
5. Commit y push
6. Resync en Claude Design: `+` → Choose a repository → `corporative-presentations-cdp` → instrucción precisa de qué copiar
7. Verificar visualmente en Claude Design antes de dar por cerrado

**Si nace en Claude Design** (caso más común — ahí se ve el resultado):

1. Antes de tocar nada: listar archivos del proyecto de Design y compararlos contra `design-system/`, archivo por archivo — no un reemplazo masivo
2. Traer lo que cambió tal cual está, sin redibujar ni regenerar assets
3. `npm run check` → 0 errores
4. Entrada en `CHANGELOG.md`
5. Commit, push, PR
6. No resincronizar el repo hacia Design hasta que este flujo termine — mientras tanto, el ajuste en Design es la única copia que existe

Para el detalle de ambos, ver la skill `actualizando-ds-cdp`.

---

## Criterio: cuándo un cambio entra al sistema

El riesgo de un DS no es que se rompa, es que **se bifurque en silencio**. Alguien necesita algo
que no está, lo resuelve por afuera, y a los tres meses hay cuatro versiones de lo mismo.

**Entra al sistema** cuando el patrón se repite (aparece en 2+ presentaciones o va a aparecer),
cuando resuelve un trabajo real y no una preferencia estética, o cuando su ausencia empuja a
la gente a improvisar.

**No entra** cuando es un one-off de una presentación puntual, cuando duplica algo que ya
existe con otro nombre, o cuando nadie lo pidió y se está agregando por completitud. Un design
system que no se poda termina siendo un catálogo de cosas que nadie usa.

Ante la duda: es más barato agregarlo después que sacarlo después.

---

## Cómo escribir para este sistema

La voz de CDP: se habla de vos, directo, sin solemnidad corporativa. Los números se muestran,
no se adornan. Nada de "revolucionario", "solución integral", "sinergia", "360".

Un mensaje por slide. Si el título une dos ideas con "y", son dos slides.

La escala héroe (140px) es para 1 o 2 KPI dominantes de todo el deck. Si se usa en todo,
nada destaca.

El detalle completo está en `design-system/readme.md` y `design-system/uploads/USAGE-NOTES.md`.
Ante conflicto entre un asset y `uploads/cdp-brand-brief-para-claude-design.md`, manda el brief.

---

## Deuda conocida

Los glifos `Passenger`/`Pasajero` no existen y caen en `User` vía alias — son 2 de los 5 alias
totales de `icons.js` (junto con `Colectivo`, `Empresa`, `Agencia`); por eso `check` reporta más
nombres válidos (99) que glifos reales (94). Los logos son PNG: los "SVG" que circulan son un
`<rect>` con bitmap embebido, cero paths reales.

`react.development.js` desde CDN y JSX sin compilar ya no son deuda tolerada: `[5]` y `[7]` de
`npm run check` fallan si reaparecen.

Las tipografías dejaron de ser woff2 subset latin: hoy son los TTF completos de Inter y Urbanist
que trae Claude Design (1,5 MB contra 128 KB). Es lo que realmente renderiza, así que es lo que
respalda el repo — pero la optimización a subset quedó pendiente de rehacer.

Lo que esté abierto se trackea en issues del repo, no en un archivo.

---

## Documentación

| Archivo | Para qué |
|---|---|
| `README.md` | Estructura, iconografía, cómo se cambia |
