# Contexto del proyecto

Design system de **presentaciones y material institucional** de Central de Pasajes.
Este repo es la fuente de verdad; Claude Design lo consume.

**No es** el design system del producto (app React Native / web checkout). Eso vive en Figma
y usa Outfit. Si un pedido es sobre la UI del producto, decilo y no toques nada acá.

---

## Reglas que no se rompen

### 1. La estructura interna de `design-system/` es un contrato

`_ds_manifest.json` referencia rutas absolutas (`tokens/colors.css`, `components/chrome/Avatar.jsx`)
y las 30 guidelines usan relativas (`../../styles.css`, `../../_ds_bundle.js`).

**Mover o renombrar un archivo ahí adentro no da error: deja de aplicar estilos en silencio.**
Agregar archivos nuevos es seguro.

### 2. Cero dependencias de CDN

Todo lo que la presentación necesite para renderizar va embebido. Claude Design bloquea
recursos externos al exportar a HTML standalone, y en PPTX/PDF directamente no existen.

Esto ya rompió una vez: los iconos venían de un webfont en `unpkg.com` y desaparecían de cada
export. Si vas a sumar una fuente, un icono o una librería, va vendorizada.

### 3. Toda página de `guidelines/` necesita `@dsCard` en la primera línea

```html
<!-- @dsCard group="Brand" viewport="700x900" name="Nombre" subtitle="Descripción corta" -->
```

Sin el tag el archivo existe pero desaparece del índice de Claude Design. Otra falla silenciosa.
`group` tiene que ser una sección existente: Brand, Colors, Type, Spacing, Slides.

### 4. Los archivos con prefijo `_` los genera Claude Design

`_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json`. No editarlos a mano: se
regeneran en cada sync y el cambio se pierde.

### 5. El sistema no se edita en Claude Design

Todo cambio entra por este repo. Lo que se edita directo en Claude Design lo pisa el próximo
resync. Claude Design es superficie de consumo, no de autoría.

---

## Comandos

```bash
npm run build:icons   # regenera icons/icons.js desde icons/src/ (sin dependencias)
npm run check         # 6 validaciones — correr SIEMPRE antes de commitear
```

`check` detecta lo que rompe en silencio: CDNs en la iconografía, iconos referenciados que no
existen, rutas relativas muertas, componentes del manifest que no resuelven, builds de React
de desarrollo, y guidelines sin `@dsCard`.

---

## Flujo de un cambio

1. Rama desde `main`
2. Cambio en `design-system/`
3. `npm run check` → 0 errores
4. Entrada en `CHANGELOG.md`
5. Commit y push
6. Resync en Claude Design: `+` → Choose a repository → `corporative-presentations-cdp` → instrucción precisa de qué copiar
7. Verificar visualmente en Claude Design antes de dar por cerrado

Para el detalle del paso 6, ver la skill `actualizando-ds-cdp`.

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

El glifo `Passenger` no existe y cae en `User` vía alias. Los logos son PNG: los "SVG" que
circulan son un `<rect>` con bitmap embebido, cero paths reales. Y quedan 9 archivos con
`react.development.js` desde CDN — la misma clase de fragilidad que ya rompió los iconos.

Lo que esté abierto se trackea en issues del repo, no en un archivo.

---

## Documentación

| Archivo | Para qué |
|---|---|
| `README.md` | Estructura, iconografía, cómo se cambia |
| `docs/GUIA-EQUIPO.md` | Cómo genera presentaciones alguien sin perfil de diseño |
| `docs/GOBERNANZA.md` | Permisos, proceso, versionado, revisión trimestral |
| `docs/CLAUDE-DESIGN.md` | Cómo se comporta la plataforma y sus trampas |
