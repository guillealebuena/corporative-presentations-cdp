# Claude Design — cómo se comporta la plataforma

Lo que hace falta saber para trabajar el DS sin sorpresas. Incluye trampas que ya nos costaron
tiempo, marcadas con ⚠.

> Verificado contra la documentación oficial al **6 de agosto de 2026**. Claude Design está en
> beta y se mueve rápido: si algo no coincide con lo que ves, la doc manda y este archivo hay
> que actualizarlo.

---

## Qué es

Producto de Anthropic Labs para crear diseños, prototipos, presentaciones y microsites
conversando con Claude. Disponible en beta para Pro, Max, Team y Enterprise.

**En Enterprise viene desactivado por defecto.** Un admin lo habilita en
Organization settings → Capabilities → Anthropic Labs.

Solo existe en web, en `claude.ai/design`. No hay app ni acceso vía proveedores cloud.

El uso descuenta del límite de cada persona, compartido con chat, Claude Code y Cowork.
No hay cuota separada.

---

## El modelo de datos

```
  Repo GitHub  ──sync──>  Design System (org)  ──>  Proyectos  ──>  Export
  fuente de verdad         publicado, default        decks         PPTX/PDF/HTML
```

Un design system publicado y marcado como **org default** se aplica solo a todo proyecto nuevo
que cree cualquiera de la organización. Se pueden tener varios design systems en paralelo
(por marca o sub-equipo).

---

## Sincronizar desde GitHub

En el chat del design system: **`+` → Choose a repository**. Requiere el conector de GitHub
conectado. Después de elegir el repo aparece un chip **"Start from code"** en el input, y el
repo queda disponible para ese mensaje.

Desde Claude Code existe además el comando **`/design-sync`** para traer el design system al
codebase, y el handoff inverso cuando un diseño pasa a producción.

### Cómo dar la instrucción

Claude Design no hace un `git pull` mecánico: interpreta lo que le pedís. Conviene ser explícito.

**Funciona:**

> Actualizá la iconografía desde el repo `owner/repo` rama main. Copiá `icons/icons.js` e
> `icons/Icon.jsx` **tal cual están, sin redibujar ni regenerar nada**. Reemplazá
> `guidelines/brand/iconography.html` por el del repo. **No toques tokens, componentes,
> templates ni guidelines que no sean de iconografía.**

**No funciona bien:**

> Actualizá el design system desde el repo.

Sin acotar el alcance puede tocar cosas que no querías. Y sin el "tal cual, sin redibujar",
puede regenerar assets en vez de copiarlos.

### ⚠ El repo y el proyecto tienen estructuras distintas

Nuestro repo guarda el bundle en `design-system/`. El proyecto de Claude Design lo espera en
la **raíz**. Al sincronizar, los archivos aterrizan bajo `design-system/` y hay que moverlos.

Claude Design suele detectarlo y corregirlo solo, pero conviene mencionarlo en la instrucción.

### ⚠ Colisión de nombres al copiar

`components/chrome/Icon.jsx` reexporta desde `icons/`. Si el archivo de `icons/` también
exporta algo llamado `Icon`, colisiona. Claude Design lo resuelve renombrando el export interno
a `IconGlyph` y manteniendo la API pública. Si ves ese rename, es esperado.

---

## Trampas confirmadas

### ⚠ El export standalone bloquea recursos externos

Al exportar a HTML standalone, Claude Design empaqueta todo inline y **bloquea cualquier
recurso externo**. Un `<script src="https://unpkg.com/...">` no carga. En PPTX y PDF, peor:
no hay runtime.

Esto rompió la iconografía completa: los iconos venían de un webfont de Phosphor y
desaparecían de cada export sin dar ningún error. El markup estaba, el glifo no llegaba.

**Regla:** todo lo que la presentación necesita para renderizar va embebido en el bundle.

### ⚠ Sin `@dsCard`, la página desaparece del índice

Los HTML de `guidelines/` aparecen como cards en la pestaña Design System **solo si su primera
línea tiene el comentario `@dsCard`**. Sin él el archivo existe, es accesible por ruta, pero no
figura en el árbol.

```html
<!-- @dsCard group="Brand" viewport="700x900" name="Nombre" subtitle="Descripción corta" -->
```

`npm run check` lo valida en las 30 guidelines.

### ⚠ El manifest referencia rutas absolutas

`_ds_manifest.json` apunta a `tokens/colors.css`, `components/chrome/Avatar.jsx`, etc. Mover un
archivo rompe la referencia sin dar error: simplemente deja de aplicarse.

Claude Design dice que "manifest staleness resolves automatically" al sincronizar, pero no
conviene apoyarse en eso. Mejor no mover nada.

### ⚠ Escribir en el chat con saltos de línea manda varios mensajes

Enter envía. Un mensaje multilínea se parte en varios. Escribir la instrucción como un solo
párrafo, o pegarla.

---

## Permisos y control

| Nivel | Qué permite |
|---|---|
| Cualquier miembro con acceso | Crear, editar y usar design systems publicados |
| **Claude Design Admin** (solo Enterprise, rol custom) | Publicar, definir el default de la organización, borrar |

Sin ese permiso asignado a nadie, cualquiera puede publicar y cambiar el default. Para tener
una única fuente de verdad conviene asignarlo.

Se configura en Organization settings → Roles → permiso **Claude Design Admin** bajo In-app
admin. Los cambios tardan hasta 15 minutos en aplicar.

Los proyectos tienen sharing propio: privado, link de lectura para la organización, o edición
nominada.

---

## Exportar

HTML bundle, PPTX, PDF, y handoff a Claude Code. También a Adobe, Base44, Canva, Gamma,
Lovable, Miro, Replit, Vercel y Wix.

---

## Actualizar el design system desde la interfaz

Alternativa al sync por repo, para cambios chicos: organization settings → botón **Open** al
lado del design system → botón **Remix** arriba a la derecha → se abre el chat.

**No lo uses para cambios que deban persistir.** Todo lo que se edite ahí lo pisa el próximo
sync desde el repo. Sirve para explorar, no para autoría.

---

## Limitaciones vigentes

- No hay audit logs
- No soporta requisitos de residencia de datos
- Solo web
- Los assets subidos se guardan de forma persistente, bajo las políticas de retención de Anthropic

---

## Dónde verificar si algo cambió

- [Release notes de Claude](https://support.claude.com/en/articles/12138966-release-notes)
- [Guía de admin de Claude Design](https://support.claude.com/en/articles/14604406-claude-design-admin-guide-for-team-and-enterprise-plans)
- [Configurar el design system](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design)
- [Analytics de adopción](https://claude.ai/analytics/claude-design) — DAU/WAU/MAU de la organización
