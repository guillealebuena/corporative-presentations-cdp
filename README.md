# Central de Pasajes — Design System de presentaciones

Sistema de diseño para **presentaciones, documentos institucionales y material de marketing** de Central de Pasajes.

> No cubre la UI del producto (app React Native / web checkout). Eso vive en un Figma
> aparte y usa la tipografía Outfit. Si estás buscando el DS del producto, este no es el repo.

Este repositorio es la **fuente de verdad**. Claude Design, las presentaciones y cualquier
material institucional consumen desde acá. Un cambio de token o de componente entra por acá,
no al revés.

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
│   ├── templates/              presentación institucional B2B · propuesta comercial
│   ├── assets/logos/           logos en uso
│   ├── uploads/                material fuente original (ingesta autoritativa)
│   ├── _ds_manifest.json       ⚠ generado por Claude Design
│   ├── _ds_bundle.js           ⚠ generado por Claude Design
│   └── _adherence.oxlintrc.json ⚠ generado por Claude Design
├── docs/                   documentación de uso y gobernanza
├── scripts/                tooling (build de iconos, empaquetado)
└── CHANGELOG.md            historial de versiones del DS
```

### ⚠ Regla de oro: no muevas archivos dentro de `design-system/`

La estructura interna de esa carpeta es un **contrato**. `_ds_manifest.json` referencia rutas
absolutas (`tokens/colors.css`, `components/chrome/Avatar.jsx`) y las 44 páginas de guidelines
usan rutas relativas (`../../styles.css`, `../../slide-fit.js`, `../../_ds_bundle.js`).
Mover un archivo rompe el bundle en silencio: no falla, simplemente deja de aplicar estilos.

Agregar archivos nuevos es seguro. Mover o renombrar los existentes, no.

Los archivos con prefijo `_` los genera Claude Design. No los edites a mano: se regeneran
en cada export y perdés el cambio.

---

## Iconografía

Phosphor Regular — paths rellenos, sin stroke. **88 glifos embebidos como SVG inline** en
`design-system/icons/icons.js`.

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

Los 88 glifos están **vendorizados** en `design-system/icons/src/` (77 KB). El repo no tiene
dependencias: instalar `@phosphor-icons/core` serían 9000+ archivos para usar 88.

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

`Passenger` es un concepto propio de CDP sin equivalente en Phosphor. Hoy cae en `User` vía
alias documentado en `icons.js`. Requiere que se dibuje el glifo real.

---

## Cómo el equipo genera presentaciones

Ver **[docs/GUIA-EQUIPO.md](docs/GUIA-EQUIPO.md)**. Gobernanza y permisos en **[docs/GOBERNANZA.md](docs/GOBERNANZA.md)**. Resumen: entrás a Claude Design, el DS de
la organización se aplica solo, describís el deck, exportás a PPTX o PDF.

---

## Cómo se cambia el DS

1. Rama desde `main`
2. Cambio en `design-system/`
3. Entrada en `CHANGELOG.md`
4. PR con captura del antes/después
5. Merge → resync del bundle en Claude Design

Nadie edita el DS directamente en Claude Design. Si lo hacés, el próximo resync lo pisa.

---

## Estado

| Área | Estado |
|---|---|
| Tokens (147) | ✅ |
| Componentes (37) | ✅ |
| Layouts de slide (12) | ✅ |
| Iconografía (88) | ✅ sin dependencias externas |
| Templates | 2 — institucional B2B, propuesta comercial |
| Logo vectorial real | ❌ pendiente — ver `docs/PENDIENTES.md` |
| Glifo `Passenger` | ❌ pendiente |
