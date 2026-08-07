# Guía del equipo — generar presentaciones de CDP

Para cualquiera que necesite armar un deck, una propuesta o un documento institucional.
No hace falta saber diseño ni código.

---

## Lo básico

1. Entrá a **claude.ai/design**
2. El design system de Central de Pasajes ya está aplicado — no tenés que configurar nada
3. Describí lo que necesitás
4. Refiná: comentarios sobre elementos puntuales, edición directa de texto, o pedile cambios por chat
5. Exportá a **PPTX**, **PDF**, **Canva** o link interno

---

## Cómo pedir bien

El DS resuelve el aspecto visual. Vos aportás la estructura y el contenido.

**Un pedido flojo:**
> hacé una presentación de la empresa

**Un pedido que funciona:**
> Deck institucional para una empresa de transporte que evalúa integrarse a nuestro carrito
> web. 10 slides. Tiene que cubrir: quiénes somos, los números de 2024, cómo funciona la
> integración, casos de empresas ya integradas, y próximos pasos. Audiencia: gerencia
> comercial, no técnica. Tono directo, los números al frente.

Lo que conviene incluir siempre:

- **Para quién es** — inversores, empresas, agencias, equipo interno
- **Cuántas slides** — aproximado alcanza
- **Qué tiene que cubrir** — los bloques temáticos
- **Qué decisión buscás** que tome quien lo ve

---

## Templates disponibles

| Template | Cuándo |
|---|---|
| Presentación institucional B2B | Presentar CDP a empresas de transporte, agencias, partners |

Pedí arrancar desde él: *"usá el template de presentación institucional B2B"*.

Para cualquier otro tipo de deck —propuestas comerciales, reportes, presentaciones internas—
armalo desde los 12 layouts de slide, que cubren todos los casos.

---

## Layouts de slide

Los 12 layouts del sistema. Podés pedirlos por nombre.

| # | Layout | Para qué |
|---|---|---|
| 01 | Portada | Apertura |
| 02 | Divisor de sección | Separar bloques temáticos |
| 03 | Título + bullets | Contenido narrativo |
| 04 | Dos columnas | Comparar o contrastar |
| 05 | Tabla comparativa | Nosotros vs. alternativas |
| 06 | KPIs destacados | Números duros |
| 07 | Grilla de cards | Features, beneficios, servicios |
| 08 | Timeline | Historia, roadmap, proceso |
| 09 | Insight | Una idea fuerte, sola |
| 10 | Gráfico | Datos con visualización |
| 11 | Cierre | Próximos pasos, contacto |
| 12 | Tema oscuro | Slides de alto impacto |

---

## Reglas que no conviene romper

**Números héroe.** La escala gigante (140px) es para 1 o 2 KPI dominantes de todo el deck.
Si la usás en todo, nada destaca.

**Iconos.** Usá los 88 del sistema. Si te falta uno, pedilo — no metas iconos de otro lado,
rompen la consistencia y no van a estar en el próximo deck.

**Voz.** Directa, se habla de vos, sin solemnidad corporativa. Los números se muestran, no se
adornan. Nada de "revolucionario", "solución integral", "sinergia".

**Logo.** Solo las variantes de `assets/logos/`. No lo estires, no lo recolorees, no lo pongas
sobre fondos que no contrasten.

---

## Si algo sale mal

| Síntoma | Qué pasa |
|---|---|
| Faltan iconos | Deck viejo, anterior al fix de iconografía. Regeneralo |
| Colores o tipografía raros | El DS no se aplicó. Verificá que esté seleccionado |
| Slide cortada | Bug de escalado. Pedile que lo corrija citando `slide-fit.js` |
| Falta un icono del set | Abrí un issue en el repo — no lo sustituyas por tu cuenta |

---

## Qué **no** hacer

- **No edites el design system.** Si tenés una mejora, va por el repo. Los cambios hechos
  directo en Claude Design se pierden en el próximo resync.
- **No armes tu propia versión** de un componente o layout. Pedilo y lo sumamos al sistema.
- **No uses este DS para la UI del producto.** App y checkout tienen su propio sistema.

---

## Dudas

Guillermina Alebuena — diseño y producto.
