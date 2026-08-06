# Gobernanza del design system

Cómo se comparte, quién puede cambiar qué, y cómo se mantiene el control a medida que crece
el uso en el equipo.

---

## Las tres capas

```
  REPO (fuente de verdad)          Guillermina · cambios por PR
        ↓ sync
  CLAUDE DESIGN (org)              Equipo · solo lectura
        ↓ export
  PPTX · PDF · Canva               Equipo · libre
```

La regla que sostiene todo: **un cambio al sistema entra por el repo, nunca por Claude Design.**
Lo que se edita directamente en Claude Design se pierde en el próximo resync, sin aviso.

---

## Permisos en Claude Design

Claude Design tiene sharing con alcance de organización, en tres niveles:

| Nivel | Quién | Para qué |
|---|---|---|
| Privado | Autor | Borradores |
| Link de lectura para la org | Todo el equipo | Ver y exportar decks |
| Edición | Nominado, caso por caso | Colaborar en un deck puntual |

**Recomendado:** el DS de la organización lo administra Guillermina. El equipo consume con
permiso de lectura y exporta. Nadie más tiene edición sobre el design system en sí.

Los decks individuales son otra cosa: ahí sí conviene edición compartida, porque el contenido
lo escribe quien presenta.

> **Enterprise:** Claude Design viene **desactivado por defecto**. Un admin tiene que
> habilitarlo en Organization settings antes de que el equipo pueda entrar.
> Ver la [guía de admin](https://support.claude.com/en/articles/14604406-claude-design-admin-guide-for-team-and-enterprise-plans).

---

## Proceso de cambio

1. **Issue** — qué falta o qué está mal, con captura si es visual
2. **Rama** desde `main`
3. **Cambio** en `design-system/`
4. **`npm run check`** — tiene que pasar en 0 errores
5. **Entrada en `CHANGELOG.md`**
6. **PR** con captura del antes/después
7. **Merge** → resync del bundle en Claude Design → bump de versión

### Versionado

Semántico, adaptado a un design system:

| | Cuándo | Ejemplo |
|---|---|---|
| **MAJOR** | Breaking: se elimina o renombra un token o componente | Sacar `--violet-400` |
| **MINOR** | Agregado compatible | Sumar un layout de slide |
| **PATCH** | Fix visual o de documentación | Corregir un padding |

Un MAJOR obliga a revisar los decks existentes. Avisar al equipo antes, no después.

---

## Quién decide qué

| Decisión | Quién |
|---|---|
| Tokens de marca — color, tipografía, espaciado | Guillermina + marca |
| Componentes y layouts nuevos | Guillermina |
| Sumar un icono al set | Guillermina (pedido vía issue) |
| Contenido de un deck | Quien presenta |
| Habilitar Claude Design en la org | Admin de IT |

---

## Cómo se mantiene el control sin frenar al equipo

El riesgo real de un DS compartido no es que alguien lo rompa: es que **se bifurque en
silencio**. Alguien necesita un icono que no está, lo mete por afuera, y a los tres meses hay
cuatro versiones del mismo deck con cuatro iconografías.

Tres mecanismos contra eso:

**1. Que pedir sea más fácil que improvisar.** Si sumar un icono al sistema tarda dos días,
la gente lo va a meter por afuera. El objetivo es responder un pedido de icono en el día.

**2. `npm run check` como red.** Falla si una presentación referencia un icono que no existe,
si una ruta relativa está muerta, o si se coló una dependencia de CDN. Es exactamente la clase
de error que hizo desaparecer los iconos de las presentaciones exportadas: no rompe nada
visible hasta que exportás.

**3. Un canal único de pedidos.** Issues del repo, o un canal de Slack. Si los pedidos llegan
por DM se pierden, y lo que se pierde se improvisa.

---

## Onboarding de alguien nuevo

1. Acceso a Claude Design (verificar que esté habilitado en la org)
2. Leer **[GUIA-EQUIPO.md](GUIA-EQUIPO.md)** — 10 minutos
3. Armar un deck de prueba con un template
4. Review con Guillermina antes del primer deck que salga a un cliente

---

## Revisión periódica

**Cada trimestre**, media hora:

- ¿Qué iconos se pidieron y no se sumaron?
- ¿Hay decks circulando que no usan el DS? ¿Por qué?
- ¿Algún componente que nadie usa? Candidato a borrar
- ¿Los issues abiertos siguen siendo relevantes, o hay que cerrar los que ya no aplican?

Un design system que no se poda se convierte en un catálogo de cosas que nadie usa.
