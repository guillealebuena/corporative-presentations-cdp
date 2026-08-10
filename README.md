# Central de Pasajes — Design System de presentaciones

Sistema de diseño para **presentaciones, documentos institucionales y material de marketing** de Central de Pasajes.

> No cubre la UI del producto (app React Native / web checkout). Eso vive en un Figma
> aparte y usa la tipografía Outfit. Si estás buscando el DS del producto, este no es el repo.

**El repo es el gate, no el único lugar de autoría.** El diseño pasa por Claude Design —
ahí se ve el resultado en tiempo real — y el repo es donde un cambio queda versionado, revisado
por `npm run check` y con historial. Ninguno de los dos manda sobre el otro en abstracto: lo que
está en Design y no en el repo es un cambio sin respaldo (Design no tiene historial ni undo); lo
que está en el repo y no en Design es un cambio sin efecto (nadie lo ve). Un cambio no está
terminado hasta que está en los dos.

---

## Estructura

```
cdp-design-system/
├── design-system/          ← EL BUNDLE. Se sube tal cual a Claude Design.
│   ├── SKILL.md                definición de la skill (nombre, descripción, disparadores)
│   ├── readme.md               spec canónica: reglas, componentes, layout, voz
│   ├── styles.css              CSS global
│   ├── slide-fit.js            escalado responsivo de slides
│   ├── tokens/                 colors · typography · spacing · layout
│   ├── icons/                  iconografía (SVG inline, sin CDN)
│   ├── components/             chrome · data-display · forms
│   ├── guidelines/             brand · colors · type · spacing · slides
│   ├── templates/              presentación institucional B2B
│   ├── assets/logos/           logos en uso
│   ├── uploads/                material fuente original (ingesta autoritativa)
│   ├── _ds_manifest.json       ⚠ generado por Claude Design
│   ├── _ds_bundle.js           ⚠ generado por Claude Design
│   └── _adherence.oxlintrc.json ⚠ generado por Claude Design
├── skills/                 skills de Claude versionadas
├── scripts/                tooling (build de iconos, chequeos)
├── CLAUDE.md               contexto que Claude carga al trabajar acá
└── CHANGELOG.md            historial de versiones del DS
```

### ⚠ Regla de oro: no muevas archivos dentro de `design-system/`

La estructura interna de esa carpeta es un **contrato**. `_ds_manifest.json` referencia rutas
absolutas (`tokens/colors.css`, `components/chrome/Avatar.jsx`) y las 47 páginas de guidelines
usan rutas relativas (`../../styles.css`, `../../slide-fit.js`, `../../_ds_bundle.js`).
Mover un archivo rompe el bundle en silencio: no falla, simplemente deja de aplicar estilos.

Agregar archivos nuevos es seguro. Mover o renombrar los existentes, no.

Los archivos con prefijo `_` los genera Claude Design. No los edites a mano: se regeneran
en cada export y perdés el cambio.

### ⚠ Toda página de `guidelines/` necesita el tag `@dsCard`

Los HTML de guidelines se muestran como cards en la pestaña Design System de Claude Design
**solo si su primera línea tiene el comentario `@dsCard`**. Sin él, el archivo existe pero
desaparece del índice.

```html
<!-- @dsCard group="Brand" viewport="700x900" name="Iconografía — Phosphor Regular" subtitle="..." -->
```

`group` tiene que coincidir con una sección existente (Brand, Colors, Type, Spacing, Slides).

---

## Iconografía

Phosphor Regular — paths rellenos, sin stroke. **94 glifos embebidos como SVG inline** en
`design-system/icons/icons.js`, más 5 alias de conceptos propios de CDP sin equivalente directo
(`Passenger`, `Pasajero`, `Colectivo`, `Empresa`, `Agencia` → todos caen en un glifo existente).
`npm run check` reporta 99 nombres válidos porque cuenta glifos + alias, no solo glifos.

```jsx
import { Icon } from './icons/Icon.jsx';

<Icon name="Bus" size={28} color="var(--brand-primary)" />
```

| Contexto | Tamaño |
|---|---|
| Fila de tabla | 22 |
| Texto inline | 24 |
| Badge de card (contenedor 56×56) | 28 |
| Ícono suelto | 32 |

### Por qué inline y no webfont

La versión anterior renderizaba `<i class="ph ph-bus">` y dependía del webfont de Phosphor
servido desde `unpkg.com`. Cuando Claude Design exporta a HTML standalone, empaqueta todo
inline y bloquea recursos externos — **los iconos desaparecían de las presentaciones exportadas**.
Lo mismo pasaba en PPTX, PDF y offline.

Los glifos son los mismos: se extraen de `@phosphor-icons/core`, no están redibujados.

### Agregar un icono

Los 92 glifos están **vendorizados** en `design-system/icons/src/` (77 KB). El repo no tiene
dependencias: instalar `@phosphor-icons/core` serían 9000+ archivos para usar 92.

1. Bajá el SVG de [phosphoricons.com](https://phosphoricons.com) en peso **Regular**
2. Guardalo en `design-system/icons/src/` en kebab-case (`chart-bar.svg`)
3. Sumá el nombre en CamelCase a `SET` en `scripts/build-icons.mjs`
4. `npm run build:icons`

No edites `icons.js` a mano: se regenera y perdés el cambio.

### Verificar antes de un PR

```bash
npm run check
```

Detecta lo que rompe en silencio: rutas relativas muertas, iconos inexistentes, CDNs colados
en la iconografía y componentes del manifest que no resuelven.

### Pendiente

`Passenger`/`Pasajero` son conceptos propios de CDP sin equivalente en Phosphor. Hoy caen en
`User` vía alias documentado en `icons.js`. Requieren que se dibuje el glifo real.

---

## Cómo el equipo genera presentaciones

Entrás a Claude Design, el DS de la organización se aplica solo, describís el deck, exportás
a PPTX o PDF.

La guía de uso para el equipo, la gobernanza y los permisos se documentan en **Notion**, no
en este repo. Acá vive el sistema; allá, cómo se usa.

---

## Cómo se cambia el DS

El cambio puede nacer en cualquiera de los dos lados — lo que importa es que termine en los dos.

**Si arrancás en el repo** (rama desde `main` → cambio en `design-system/` → `npm run check` →
CHANGELOG → PR con captura antes/después → merge → resync del bundle en Claude Design).

**Si arrancás en Claude Design** (que es donde se ve el resultado en tiempo real): el cambio ahí
es la única copia hasta que se trae al repo. Compará el proyecto de Design contra `design-system/`
archivo por archivo (no un reemplazo masivo), traé lo que cambió, `npm run check` → 0 errores,
CHANGELOG, PR. Recién ahí el cambio tiene respaldo. Detalle del procedimiento en la skill
`actualizando-ds-cdp`.

Un cambio editado solo en Claude Design y nunca bajado al repo no está terminado: se pierde en el
próximo resync desde el repo, y hasta entonces no tiene historial ni undo.

---

## Estado

| Área | Estado |
|---|---|
| Tokens (147) | ✅ |
| Componentes (37) | ✅ |
| Layouts de slide (12 genéricos + 17 de la B2B) | ✅ |
| Iconografía (94 + 5 alias) | ✅ sin dependencias externas |
| Templates ejecutables | 0 — el institucional B2B se desarmó en los 17 layouts de arriba en Claude Design; la carpeta `templates/presentacion-institucional-b2b/` sigue en el repo, desincronizada de esa realidad |
| Logo vectorial real | ❌ pendiente |
| Glifos `Passenger`/`Pasajero` | ❌ pendiente |
