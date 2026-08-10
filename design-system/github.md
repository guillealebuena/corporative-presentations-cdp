# Fuente en GitHub

repo: guillealebuena/corporative-presentations-cdp
branch: main
path: design-system

## Last sync

date: 2026-08-07T20:24:26Z

### Updated in this project

- Importado el árbol completo `design-system/` (tokens, componentes, iconos, guidelines, template, assets).
- Se eliminó el template ejecutable (`templates/presentacion-institucional-b2b/`) y sus 17 slides pasaron a `guidelines/slides/tpl-*.html` como cards individuales del grupo Slides — se vuelve a armar como template cuando haga falta.
- Consolidado `Icon` en `components/chrome/Icon.jsx`; eliminados `icons/Icon.jsx` e `icons/Icon.legacy.jsx` (colisión de export).
- Actualizado el namespace del bundle a `CentralDePasajesDesignSystem_6c8228` en los 10 cards de componentes y en el template.
- Removidos los artefactos generados del repo (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`, `support.js`) — el compilador los regenera.

## Screen map

| Pantalla / archivo en este proyecto | Archivos de origen en el repo |
|---|---|
| `styles.css`, `tokens/*.css` | `design-system/styles.css`, `design-system/tokens/*` |
| `components/chrome/*`, `components/forms/*`, `components/data-display/*` | mismos paths bajo `design-system/` |
| `icons/icons.js` + `icons/src/*.svg` | `design-system/icons/` |
| `guidelines/colors|type|spacing|brand|slides/*.html` (incl. `guidelines/slides/tpl-*.html`, ex-template) | `design-system/guidelines/`, `design-system/templates/presentacion-institucional-b2b/` |
| `assets/logos/*`, `fonts/*`, `uploads/*` | `design-system/assets`, `fonts`, `uploads` |
| `readme.md`, `SKILL.md`, `thumbnail.html`, `slide-fit.js` | raíz de `design-system/` |
