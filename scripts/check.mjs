/**
 * Chequeos de integridad del design system.
 *
 *   npm run check
 *
 * Corré esto antes de cada PR y antes de resincronizar el bundle con Claude Design.
 * Detecta lo que rompe en silencio: rutas muertas, iconos inexistentes, CDNs colados.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DS = path.join(path.dirname(__dirname), 'design-system');

let errors = 0, warns = 0;
const fail = (m) => { console.error('  ✗ ' + m); errors++; };
const warn = (m) => { console.warn('  ! ' + m); warns++; };
const ok = (m) => console.log('  ✓ ' + m);

// uploads/ es material fuente archivado: exports crudos de Claude Design que apuntan a su
// runtime (_ds/<uuid>/...). No forman parte del bundle y sus rutas no resuelven en local.
const SKIP = new Set(['node_modules', 'uploads']);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(p, out); }
    else out.push(p);
  }
  return out;
}

const files = walk(DS);
const rel = (p) => path.relative(DS, p).replace(/\\/g, '/');

// ── 1. Sin fuentes de iconos desde CDN en todo el bundle ──────────────────────
// Antes solo miraba icons/. El bug original vivia en los slides y templates: cargaban
// el webfont de Phosphor desde unpkg y los iconos desaparecian al exportar.
console.log('\n[1] Iconografía sin CDN');
let cdnHits = 0;
for (const f of files.filter((f) => /\.(js|jsx|html|css|md)$/.test(f))) {
  const src = fs.readFileSync(f, 'utf8');
  if (/@phosphor-icons\/web|fontawesome|material-icons|bootstrap-icons/i.test(src)) {
    fail(`${rel(f)} referencia una fuente de iconos externa`); cdnHits++;
  }
  if (/<i\s+class="ph[\s-]/.test(src)) {
    fail(`${rel(f)} usa <i class="ph"> — el webfont no carga en los exports`); cdnHits++;
  }
}
if (!cdnHits) ok(`${files.length} archivos revisados, sin fuentes de iconos externas`);

// ── 2. Todo icono referenciado existe ─────────────────────────────────────────
console.log('\n[2] Iconos referenciados');
const iconsJs = path.join(DS, 'icons', 'icons.js');
if (!fs.existsSync(iconsJs)) fail('Falta icons/icons.js — corré npm run build:icons');
else {
  const src = fs.readFileSync(iconsJs, 'utf8');
  const known = new Set([
    ...[...src.matchAll(/^\s{2}([A-Za-z][A-Za-z0-9]*):\s*'/gm)].map((m) => m[1]),
  ]);
  const used = new Map();
  for (const f of files.filter((f) => /\.(jsx|html|md)$/.test(f))) {
    const s = fs.readFileSync(f, 'utf8');
    // icon="X" (JSX) · icon: 'X' (objeto/prompt.md) · icon = 'X' (default de prop desestructurada)
    for (const m of s.matchAll(/\bicon\s*[:=]\s*\\?["']([A-Z][A-Za-z0-9]*)/g)) {
      if (!used.has(m[1])) used.set(m[1], rel(f));
    }
    // <Icon name="X" /> (JSX) — acotado a Icon: un name: suelto es cualquier prop
    for (const m of s.matchAll(/<Icon\s+name=\\?["']([A-Z][A-Za-z0-9]*)/g)) {
      if (!used.has(m[1])) used.set(m[1], rel(f));
    }
    // createElement(Icon, { name: "X" }) — JSX precompilado, mismo acotamiento a Icon
    for (const m of s.matchAll(/createElement\(Icon,\s*\{[^}]*?\bname:\s*["']([A-Z][A-Za-z0-9]*)/g)) {
      if (!used.has(m[1])) used.set(m[1], rel(f));
    }
  }
  const bad = [...used].filter(([n]) => !known.has(n));
  if (bad.length) bad.forEach(([n, f]) => fail(`icono "${n}" no existe en el set (usado en ${f})`));
  else ok(`${used.size} iconos distintos referenciados, todos existen (set de ${known.size})`);
}

// ── 3. Rutas relativas que resuelven ──────────────────────────────────────────
console.log('\n[3] Rutas relativas');
let checked = 0;
for (const f of files.filter((f) => f.endsWith('.html'))) {
  const s = fs.readFileSync(f, 'utf8');
  for (const m of s.matchAll(/(?:src|href)="(?!https?:|data:|#)([^"]+)"/g)) {
    const target = path.resolve(path.dirname(f), m[1].split(/[?#]/)[0]);
    checked++;
    if (!fs.existsSync(target)) fail(`${rel(f)} → ${m[1]} (no existe)`);
  }
}
if (checked) ok(`${checked} referencias relativas verificadas`);

// ── 4. Contrato del manifest ──────────────────────────────────────────────────
console.log('\n[4] Contrato de _ds_manifest.json');
const manifestPath = path.join(DS, '_ds_manifest.json');
if (!fs.existsSync(manifestPath)) warn('Falta _ds_manifest.json (lo genera Claude Design)');
else {
  const m = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  for (const p of m.globalCssPaths || []) {
    if (!fs.existsSync(path.join(DS, p))) fail(`globalCssPaths → ${p} no existe`);
  }
  for (const c of m.components || []) {
    if (c.sourcePath && !fs.existsSync(path.join(DS, c.sourcePath))) {
      fail(`componente "${c.name}" → ${c.sourcePath} no existe`);
    }
  }
  ok(`${(m.components || []).length} componentes y ${(m.globalCssPaths || []).length} CSS globales resuelven`);
}

// ── 5. React en modo desarrollo ───────────────────────────────────────────────
console.log('\n[5] Build de React');
const dev = files.filter((f) => /\.(html|js)$/.test(f))
  .filter((f) => /react(-dom)?\.development\.js/.test(fs.readFileSync(f, 'utf8')));
if (dev.length) dev.forEach((f) => fail(`${rel(f)} usa react.development.js (pesado, y desde CDN)`));
else ok('sin builds de desarrollo');

// JSX sin compilar implica Babel en runtime, o sea un CDN más — la deuda que [7] ya reporta.
const uncompiledJsx = files.filter((f) => f.endsWith('.html'))
  .filter((f) => /type=["']text\/babel["']/.test(fs.readFileSync(f, 'utf8')));
if (uncompiledJsx.length) uncompiledJsx.forEach((f) => fail(`${rel(f)} tiene <script type="text/babel"> — JSX sin precompilar, depende de Babel en runtime`));
else ok('sin JSX sin compilar (type="text/babel")');

// ── 6. Tag @dsCard en guidelines ──────────────────────────────────────────────
console.log('\n[6] Tag @dsCard en guidelines');
const guides = files.filter((f) => /guidelines[/\\][^/\\]+[/\\][^/\\]+\.html$/.test(f));
const noTag = guides.filter((f) => !fs.readFileSync(f, 'utf8').split('\n')[0].includes('@dsCard'));
if (noTag.length) noTag.forEach((f) => fail(`${rel(f)} no tiene @dsCard en la primera linea — no va a aparecer en el indice`));
else ok(`${guides.length} guidelines con tag`);

// ── 7. Recursos externos ──────────────────────────────────────────────────────
// El chequeo [1] solo miraba fuentes de ICONOS. Las tipografias venian de
// fonts.googleapis.com y pasaban limpias: renderizaban bien en pantalla y caian a la
// sans-serif del sistema en cada export. Misma clase de falla, distinto recurso.
// Todo lo que la presentacion necesita para renderizar tiene que estar embebido.
console.log('\n[7] Recursos externos');
const NS = /^https?:\/\/(www\.)?w3\.org\//; // namespaces XML: no se descargan
let extStyle = 0, extScript = 0;
for (const f of files.filter((f) => /\.(html|css|jsx|js)$/.test(f))) {
  const src = fs.readFileSync(f, 'utf8');
  // hoja de estilo o tipografia externa → rompe el render del export
  for (const m of src.matchAll(/@import\s+url\(\s*['"]?(https?:\/\/[^'")]+)/gi)) {
    if (!NS.test(m[1])) { fail(`${rel(f)} importa CSS externo: ${m[1].slice(0, 60)}`); extStyle++; }
  }
  for (const m of src.matchAll(/<link[^>]+href=["'](https?:\/\/[^"']+)/gi)) {
    if (!NS.test(m[1])) { fail(`${rel(f)} linkea una hoja externa: ${m[1].slice(0, 60)}`); extStyle++; }
  }
  // script externo → ya no es deuda tolerada: React/ReactDOM viven vendorizados en vendor/
  for (const m of src.matchAll(/<script[^>]+src=["'](https?:\/\/[^"']+)/gi)) {
    if (!NS.test(m[1])) { fail(`${rel(f)} carga un script desde CDN: ${m[1].slice(0, 60)}`); extScript++; }
  }
}
if (!extStyle && !extScript) ok('sin CSS, tipografías ni scripts externos');

// ── 8. Pie en las slides de contenido ─────────────────────────────────────────
// Una slide de contenido se reconoce por .slide-frame. El pie con logo y numero de
// pagina no es decorativo: es lo que hace que un slide suelto se lea como de CDP.
// Ya paso que un deck entero saliera sin logo en ninguna slide y nada lo detecto,
// porque en pantalla se veia bien. El logo va como asset, nunca escrito como texto.
console.log('\n[8] Pie en las slides de contenido');
const slideFiles = files.filter((f) => /\.(html)$/.test(f) && /(templates|guidelines[/\\]slides)[/\\]/.test(f));
let sinPie = 0, pieSinLogo = 0, nombreEscrito = 0;
for (const f of slideFiles) {
  const src = fs.readFileSync(f, 'utf8');
  if (!/class="[^"]*slide-frame/.test(src)) continue;   // portada, divisor y cierre no llevan pie
  if (!/class="[^"]*slide-footer/.test(src)) { fail(`${rel(f)} es una slide de contenido y no tiene .slide-footer — va a salir sin logo ni numero de pagina`); sinPie++; continue; }
  const footer = src.slice(src.search(/class="[^"]*slide-footer/));
  if (!/assets[/\\]logos[/\\]|LogoMark|SlideFooter/.test(footer)) { fail(`${rel(f)} tiene pie pero sin logo — el logo es un asset, no una palabra`); pieSinLogo++; }
  if (/>\s*CENTRAL\s*DE\s*PASAJES\s*</i.test(footer)) { fail(`${rel(f)} escribe "Central de Pasajes" como texto en el pie — tiene que ser el logo`); nombreEscrito++; }
}
if (!sinPie && !pieSinLogo && !nombreEscrito) ok(`${slideFiles.length} slides revisadas, todas las de contenido con pie y logo`);

// ── 9. El catalogo de Slides cubre lo que usan los templates ─────────────────
// El panel del DS solo muestra lo que tiene @dsCard, y ese tag se lee unicamente
// dentro de guidelines/. Un layout inventado adentro de un template queda invisible
// por construccion: nadie lo puede pedir por nombre y no entra en el vocabulario
// con el que se elige el tipo de slide. Regla: la ficha se agrega primero.
//
// Se compara la COMPOSICION (que anchos y cuantos de cada uno), no el fondo: el
// tema oscuro es una variante declarada en la ficha 12, no un layout aparte.
console.log('\n[9] Cobertura del catalogo de Slides');
const composicion = (src) => {
  const c = new Map();
  for (const m of src.matchAll(/class="[^"]*\b(span-\d+)/g)) c.set(m[1], (c.get(m[1]) || 0) + 1);
  const marco = /class="[^"]*slide-frame/.test(src) ? 'frame' : 'libre';
  return marco + ' ' + [...c.entries()].sort().map(([k, n]) => `${k}x${n}`).join(' ');
};
const fichas = files.filter((f) => /guidelines[/\\]slides[/\\].+\.html$/.test(f));
const tplSlides = files.filter((f) => /templates[/\\].+\.dc\.html$/.test(f))
  .filter((f) => !/@template/.test(fs.readFileSync(f, 'utf8').slice(0, 400)));
const enCatalogo = new Set(fichas.map((f) => composicion(fs.readFileSync(f, 'utf8'))));
const sinFicha = new Map();
for (const f of tplSlides) {
  const k = composicion(fs.readFileSync(f, 'utf8'));
  if (!enCatalogo.has(k)) { if (!sinFicha.has(k)) sinFicha.set(k, []); sinFicha.get(k).push(rel(f)); }
}
if (sinFicha.size) {
  for (const [k, fsx] of sinFicha) fail(`la composicion "${k}" se usa en ${fsx.length} slide(s) de templates (${fsx[0]}) y ninguna ficha de guidelines/slides la muestra — agregar la ficha al apartado Slides`);
} else {
  ok(`${fichas.length} fichas cubren las ${enCatalogo.size} composiciones del catalogo; los ${tplSlides.length} slides de templates no usan ninguna que falte`);
}

// ── 10. La grilla de 12 columnas es la unica forma de dimensionar ─────────────
// Contrato 3 del readme: grid-column:span n es la UNICA forma de dimensionar un
// bloque, para que el ancho caiga siempre en 260/410/560/710/860/1010/1160/1760.
// Pisar grid-template-columns en un .slide-body deja anchos que no existen en el
// sistema y ademas saca a esa slide del catalogo, porque su composicion no matchea
// con ninguna ficha.
console.log('\n[10] La grilla de 12 columnas, sin excepciones');
let pisadas = 0;
for (const f of files.filter((f) => /\.(html)$/.test(f))) {
  const src = fs.readFileSync(f, 'utf8');
  for (const m of src.matchAll(/class="[^"]*slide-body[^"]*"[^>]*style="([^"]*)"/g)) {
    if (/grid-template-columns|column-gap/.test(m[1])) { fail(`${rel(f)} pisa la grilla del .slide-body (${m[1].slice(0, 60)}) — usar span-n`); pisadas++; }
  }
}
if (!pisadas) ok('ningun .slide-body pisa grid-template-columns ni column-gap');

// ── 11. Piso de 24px en los tokens de texto ────────────────────────────
// El readme declara 24px como minimo absoluto "sin excepciones". Antes de la 5.2 el
// propio tokens/typography.css declaraba cinco tamanos por debajo (17/19/20/21/23),
// asi que cualquier componente que siguiera el token rendereaba texto ilegible en
// proyeccion. El archivo que define la regla no puede ser el que la rompe.
console.log('\n[11] Piso de 24px en los tokens de texto');
{
  const tipo = fs.readFileSync(path.join(DS, 'tokens', 'typography.css'), 'utf8');
  let bajos = 0;
  for (const m of tipo.matchAll(/(--text-[a-z0-9-]*-size)\s*:\s*(\d+)px/g)) {
    const [, name, px] = m;
    if (Number(px) < 24) { fail(`${name} declara ${px}px — el piso del sistema es 24px`); bajos++; }
  }
  if (!bajos) ok('ningun token de texto declara menos de 24px');
}

// ── 12. Los tokens de texto describen lo que se pinta ────────────────────
// Un token que no usa nadie es una trampa: parece autoridad y manda a quien lo lea a
// una escala que no existe en ningun slide. Y un tamano pintado sin token obliga a
// escribir numeros a mano. Las dos direcciones se chequean sobre guidelines/slides.
console.log('\n[12] Los tokens de texto describen la escala real');
{
  const tipo = fs.readFileSync(path.join(DS, 'tokens', 'typography.css'), 'utf8');
  const declarados = new Set([...tipo.matchAll(/--text-[a-z0-9-]*-size\s*:\s*(\d+)px/g)].map((m) => Number(m[1])));
  const pintados = new Map();
  for (const f of files.filter((f) => f.includes(`guidelines${path.sep}slides`) && f.endsWith('.html'))) {
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/font-size:\s*(\d+)px/g)) {
      const px = Number(m[1]);
      if (!pintados.has(px)) pintados.set(px, rel(f));
    }
  }
  let sueltos = 0;
  for (const [px, donde] of pintados) {
    if (!declarados.has(px)) { fail(`${donde} pinta ${px}px y no hay token con ese valor`); sueltos++; }
    if (px < 24) { fail(`${donde} pinta ${px}px, por debajo del piso de 24px`); sueltos++; }
  }
  if (!sueltos) ok(`los ${pintados.size} tamanos que pintan las fichas existen como token`);
}

// ── 13. Espaciado dentro de la escala ───────────────────────────────
// Escala: 8/12/16/20/24/32/40/48/64/80/96/128. Los componentes de producto
// (Button, Tag, ProductCard, ToggleSegment) reproducen la UI de la app y tienen su
// propia escala: quedan exentos a proposito.
console.log('\n[13] Espaciado dentro de la escala');
{
  const ESCALA = new Set([0, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]);
  const EXENTOS = new Set(['Button.jsx', 'Tag.jsx', 'ProductCard.jsx', 'ToggleSegment.jsx']);
  let fuera = 0;
  for (const f of files.filter((f) => f.endsWith('.jsx'))) {
    if (EXENTOS.has(path.basename(f))) continue;
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/\b(padding|gap|rowGap|columnGap|marginTop|marginBottom)\s*:\s*(\d+)\b/g)) {
      if (!ESCALA.has(Number(m[2]))) { warn(`${rel(f)} usa ${m[1]}:${m[2]} — fuera de la escala de espaciado`); fuera++; }
    }
  }
  if (!fuera) ok('todo padding y gap de los componentes de slide cae en la escala');
}

// ── 14. Un solo alto de logo en el pie ──────────────────────────────
// El pie arranca en y=978 y el margen inferior cierra en 1000: 22px entra exacto.
// Con 26 el logo se pasa 4px, y ademas convivian los dos valores (fichas en 26,
// templates en 22), asi que un deck mezclado mostraba dos logos de distinto tamano.
console.log('\n[14] Un solo alto de logo en el pie');
{
  const altos = new Map();
  for (const f of files.filter((f) => f.endsWith('.html'))) {
    const src = fs.readFileSync(f, 'utf8');
    const i = src.indexOf('slide-footer');
    if (i < 0) continue;
    const m = src.slice(i).match(/<img[^>]*logos\/[^>]*height:\s*(\d+)px/);
    if (m) { const h = Number(m[1]); if (!altos.has(h)) altos.set(h, []); altos.get(h).push(rel(f)); }
  }
  if (altos.size > 1) {
    fail(`el logo del pie tiene ${altos.size} alturas distintas: ${[...altos.keys()].join(', ')}px`);
    for (const [h, fs0] of altos) if (h !== 22) fs0.slice(0, 4).forEach((x) => fail(`  ${x} usa ${h}px, deberia ser 22px`));
  } else if (altos.size === 1 && ![...altos.keys()].includes(22)) {
    fail(`el logo del pie mide ${[...altos.keys()][0]}px — el sistema fija 22px`);
  } else ok(`las ${[...altos.values()][0]?.length ?? 0} slides con pie usan el logo a 22px`);
}

// ── Resumen ───────────────────────────────────────────────────────────────────
console.log(`\n${errors ? '✗' : '✓'} ${errors} errores · ${warns} advertencias\n`);
process.exit(errors ? 1 : 0);
