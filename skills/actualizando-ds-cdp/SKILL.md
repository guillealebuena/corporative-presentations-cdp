---
name: actualizando-ds-cdp
description: Metodologia para modificar, actualizar o extender el design system de presentaciones de Central de Pasajes, y para sincronizarlo entre el repo de GitHub y Claude Design. Usar cuando Guillermina quiere sumar o cambiar un token, componente, icono, layout de slide o template; cuando pide resincronizar, publicar o versionar el DS; cuando algo se rompe o desaparece en una presentacion exportada a PPTX, PDF o HTML; o cuando hay que decidir si un patron amerita entrar al sistema. Cubre el flujo repo -> check -> commit -> resync -> verificacion, los contratos que no se pueden romper y el criterio de producto para aceptar o rechazar un cambio.
---

# Actualizando el DS de presentaciones de CDP

## El modelo

```
  Claude Design  <──sync──>  Repo GitHub  ──>  Decks del equipo
  se ve el resultado          gate + archivo
```

**Ninguno de los dos manda en abstracto — se completan.** Design es donde se diseña, porque ahí
se ve el resultado en tiempo real. El repo es el gate: versiona, corre `npm run check`, deja
historial. Un ajuste que solo está en Design no tiene respaldo (Design no versiona, no hay
undo). Un cambio que solo está en el repo no tiene efecto (nadie lo ve en un deck). Un cambio no
está terminado hasta que está en los dos.

En la práctica, la mayoría de los cambios nacen en Design — es donde Guillermina trabaja el
diseño — y se bajan al repo después. Ver "Sincronizar Design → repo" más abajo para ese caso, que
es el más común. El caso repo → Design (algo se edita primero en código) es el que ya estaba
documentado en el resto de esta skill.

- Repo: `guillealebuena/corporative-presentations-cdp`
- Local: `Desktop/cdp-design-system`
- Bundle: `design-system/` en el repo, **raíz** en el proyecto de Claude Design

Alcance: presentaciones y material institucional. **No** cubre la UI del producto (app React
Native / web checkout), que vive en Figma con tipografía Outfit.

---

## Antes de tocar nada: ¿este cambio entra al sistema?

El riesgo real de un design system no es que se rompa, es que **se bifurque en silencio**.
Alguien necesita algo que no está, lo resuelve por afuera, y a los tres meses hay cuatro
versiones del mismo deck con cuatro criterios distintos.

**Entra** si el patrón se repite (ya aparece en 2+ presentaciones, o va a aparecer), si
resuelve un trabajo real y no una preferencia estética, o si su ausencia está empujando a la
gente a improvisar.

**No entra** si es un one-off de una presentación puntual, si duplica algo que ya existe con
otro nombre, o si nadie lo pidió y se agrega "por completitud".

Si no entra al sistema pero la persona igual lo necesita, resolvelo en el deck y anotá el
pedido. Dos pedidos iguales ya son señal.

**Bajá la fricción de pedir.** Si sumar un icono tarda dos días, la gente lo va a meter por
afuera y el sistema se desincroniza. El objetivo es responder un pedido en el día.

---

## Contratos que no se rompen

1. **No mover ni renombrar archivos dentro de `design-system/`.** El manifest usa rutas
   absolutas y las guidelines relativas. Mover algo no da error: deja de aplicar estilos.
   Agregar es seguro.

2. **Cero dependencias de CDN.** Claude Design bloquea recursos externos al exportar. Todo
   embebido o vendorizado. Esto ya rompió la iconografía completa una vez.

3. **`@dsCard` en la primera línea de cada HTML de `guidelines/`.** Sin el tag, la página
   desaparece del índice sin dar error.

4. **No editar los archivos con prefijo `_`.** Los genera Claude Design; se pisan en cada sync.

Detalle completo del comportamiento de la plataforma: leer `reference/claude-design.md`.

---

## Sincronizar Design → repo (el caso más común)

El ajuste ya existe en Claude Design y todavía no en el repo. Hasta que este flujo termine, es
la única copia — no hay historial ni undo del lado de Design, y un resync desde el repo la pisa
sin preguntar. **No resincronizar repo → Design por ningún motivo antes de terminar esto.**

```
- [ ] 1. Listar archivos del proyecto de Design y compararlos contra design-system/, uno por
        uno — agregados, modificados, borrados. Mostrar el diff antes de escribir nada.
- [ ] 2. Traer lo que cambió tal cual está, sin redibujar ni regenerar assets, incremental
        (nunca un reemplazo masivo del bundle)
- [ ] 3. Los archivos con prefijo `_` también se traen (los genera la plataforma), pero no se
        revisan línea por línea
- [ ] 4. npm run check → 0 errores
- [ ] 5. Entrada en CHANGELOG.md
- [ ] 6. Commit, push, PR
```

Si algo en Design sustituyó un ícono/token/componente por no encontrarlo (ver "trampas
confirmadas" en `reference/claude-design.md`), ese elemento falta en el sistema — agregarlo, no
dejarlo sustituido. Si algo no está claro (un archivo que se movió, algo que rompe un contrato),
parar y preguntar antes de escribir.

## Flujo repo → Design

```
- [ ] 1. Rama desde main
- [ ] 2. Cambio en design-system/
- [ ] 3. npm run check → 0 errores
- [ ] 4. Entrada en CHANGELOG.md
- [ ] 5. Commit descriptivo + push
- [ ] 6. Resync en Claude Design
- [ ] 7. Verificación visual
```

### 3. `npm run check`

Seis validaciones. No commitear con errores. Detecta exactamente lo que rompe en silencio:
CDNs en la iconografía, iconos referenciados inexistentes, rutas relativas muertas,
componentes del manifest que no resuelven, React en modo desarrollo, guidelines sin `@dsCard`.

Si Guillermina no tiene terminal a mano, existe `verificar.bat` en la raíz del repo.

### 4. Versionado

**MAJOR** = se elimina o renombra un token o componente (obliga a revisar decks existentes,
avisar antes). **MINOR** = agregado compatible. **PATCH** = fix visual o de documentación.

### 6. Resync en Claude Design

En el chat del design system: `+` → **Choose a repository** → el repo → Continue. Aparece el
chip "Start from code".

**Escribir la instrucción como un solo párrafo.** Los saltos de línea envían el mensaje y lo
parten en varios.

La instrucción tiene que ser explícita en tres cosas:

- **Qué archivos** copiar, por ruta
- **"Tal cual están, sin redibujar ni regenerar nada"** — si no, puede regenerar assets
- **Qué no tocar** — acotar el alcance

Ejemplo que funcionó:

> Actualizá la iconografía desde el repo `guillealebuena/corporative-presentations-cdp` rama
> main. Copiá `icons/icons.js` e `icons/Icon.jsx` tal cual están, sin redibujar nada.
> Reemplazá `guidelines/brand/iconography.html` por el del repo. No toques tokens,
> componentes, templates ni guidelines que no sean de iconografía.

Mencionar que el bundle vive en `design-system/` en el repo pero va en la raíz del proyecto.

### 7. Verificación

No alcanza con que Claude Design diga que terminó.

- Abrir la guideline afectada y **mirar que renderice**
- Si tocaste iconos: confirmar que el índice de Brand siga mostrando Iconografía
- Si el cambio afecta slides: generar un deck de prueba y **exportarlo a PPTX**, que es donde
  aparecen los problemas de recursos externos
- Confirmar que Claude Design no haya sustituido nada en silencio — avisa cuando lo hace,
  leer su resumen completo

Si sustituyó algo por no encontrarlo, ese elemento falta en el sistema: agregalo al repo y
resincronizá. No lo dejes sustituido.

---

## Cuando algo desaparece de un export

Síntoma clásico: se ve bien en Claude Design, falta en el PPTX o el HTML standalone.

Casi siempre es un **recurso externo bloqueado**. Buscar en el bundle:

```bash
grep -rE 'https?://' design-system/ --include=*.html --include=*.jsx --include=*.js --include=*.css
```

Todo lo que aparezca es sospechoso. La solución no es cambiar de CDN: es vendorizar.

---

## Extender la iconografía

92 glifos Phosphor Regular vendorizados en `design-system/icons/src/`. Sin dependencias npm:
instalar `@phosphor-icons/core` serían 9000+ archivos para usar 92.

1. Bajar el SVG de phosphoricons.com en peso **Regular**
2. Guardarlo en `design-system/icons/src/` en kebab-case
3. Sumar el nombre en CamelCase a `SET` en `scripts/build-icons.mjs`, en su categoría
4. `npm run build:icons`
5. Regenerar `guidelines/brand/iconography.html` si cambió la cuenta

Nunca editar `icons.js` a mano: se regenera.

Para conceptos propios de CDP sin equivalente en Phosphor, hay alias documentados en
`icons.js` (`Passenger`, `Colectivo`, `Empresa`, `Agencia`). **Toda sustitución se documenta
ahí, no se resuelve en silencio.**

---

## Cuando el pedido es de diseño, no de mantenimiento

Esta skill cubre el *cómo* se cambia el sistema. Para el *qué*:

- Especificar un componente nuevo → `spec-componente-ds`
- Decidir entre varias mejoras posibles → `priorizacion-producto`
- Justificar el cambio con métricas o loops → `estrategia-de-growth`
- Convertir el pedido en un entregable de producto → `prd-lite-one-pager`

---

## Referencias

- `reference/claude-design.md` — comportamiento de la plataforma, trampas confirmadas,
  permisos, export. Leer antes de un resync no trivial o si algo se comporta raro.
- En el repo: `CLAUDE.md`, `design-system/readme.md` (spec canónica),
  `design-system/uploads/USAGE-NOTES.md`.
- Gobernanza, permisos y guía de uso para el equipo: en Notion, no en el repo.
