# Central de Pasajes - Design System de presentaciones

Repositorio del Design System para presentaciones, documentos institucionales y material comercial de Central de Pasajes.

No es el Design System del producto digital ni de la app. Ese sistema vive en Figma y usa otras reglas.

## Estado

- Rama activa: `main`.
- Tags: ninguno.
- Ramas de trabajo abiertas: ninguna.
- Validacion tecnica: `npm run check` en verde.
- Bundle para Claude Design: `design-system/`.

## Estructura

```text
corporative-presentations-cdp/
├── design-system/          # Bundle que se carga en Claude Design
├── scripts/                # Checks y build de iconos
├── skills/                 # Skill de mantenimiento del DS
├── .github/workflows/      # Check automatico en GitHub
├── CHANGELOG.md            # Historial de cambios
├── CLAUDE.md               # Contexto de trabajo para Claude
├── package.json            # Scripts del repo
└── README.md               # Este archivo
```

## Cargar en Claude Design

1. Abrir Claude Design.
2. Crear o abrir el Design System de Central de Pasajes.
3. Usar `+` -> `Choose a repository`.
4. Seleccionar `guillealebuena/corporative-presentations-cdp`, rama `main`.
5. Enviar esta instruccion en un solo mensaje:

```text
Importa el Design System de Central de Pasajes desde el repo guillealebuena/corporative-presentations-cdp, rama main. El bundle esta dentro de la carpeta design-system/. Copia el contenido de design-system/ tal cual esta, sin redibujar, renombrar, reestructurar ni regenerar assets. Manten las rutas, tokens, componentes, guidelines, iconos, fuentes, vendor y archivos generados tal como vienen en el repo. No toques archivos fuera de design-system/.
```

Despues de la carga, abrir las guidelines dentro de Claude Design y verificar visualmente que rendericen.

## Validar el repo

```bash
npm run check
```

El check valida:

- iconos sin CDN;
- iconos referenciados existentes;
- rutas relativas vivas;
- contrato de `_ds_manifest.json`;
- React vendorizado;
- guidelines con `@dsCard`;
- sin CSS, fuentes ni scripts externos.

## Reglas simples

- No mover ni renombrar archivos dentro de `design-system/`.
- No editar manualmente archivos con prefijo `_`.
- No usar CDNs ni recursos externos.
- Toda guideline HTML necesita `@dsCard` en la primera linea.
- Cualquier cambio real debe quedar en `main` y pasar `npm run check`.

## Documentacion de detalle

- `design-system/readme.md`: especificacion completa del sistema.
- `CLAUDE.md`: contexto operativo para trabajar con Claude.
- `skills/actualizando-ds-cdp/`: procedimiento para sincronizar repo y Claude Design.
- `CHANGELOG.md`: historial versionado.

## Pendientes no bloqueantes

- Logo vectorial real.
- Glifo propio para `Passenger` / `Pasajero`.
