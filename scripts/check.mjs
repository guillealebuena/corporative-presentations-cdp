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
// por construccion: nadie lo puede pedir por nombre y Claude no lo tiene en el
// vocabulario. Esta validacion evita que el catalogo vuelva a quedar corto.
console.log('\n[9] Cobertura del catalogo de Slides');
const spansDe = (src) => new Set([...src.matchAll(/class="[^"]*\b(span-\d+)/g)].map((m) => m[1]));
const cardsSlides = files.filter((f) => /guidelines[/\\]slides[/\\].+\.html$/.test(f));
const tplSlides = files.filter((f) => /templates[/\\].+\.dc\.html$/.test(f));
const enCatalogo = new Set();
for (const f of cardsSlides) for (const s of spansDe(fs.readFileSync(f, 'utf8'))) enCatalogo.add(s);
const faltan = new Map();
for (const f of tplSlides) {
  for (const s of spansDe(fs.readFileSync(f, 'utf8'))) {
    if (!enCatalogo.has(s)) { if (!faltan.has(s)) faltan.set(s, []); faltan.get(s).push(rel(f)); }
  }
}
if (faltan.size) {
  for (const [s, fsx] of faltan) fail(`${s} se usa en templates (${fsx[0]}${fsx.length > 1 ? ` y ${fsx.length - 1} mas` : ''}) y ninguna ficha de guidelines/slides lo muestra — ese ancho no esta en el catalogo`);
} else {
  ok(`${cardsSlides.length} fichas cubren los ${enCatalogo.size} anchos que usan los ${tplSlides.length} slides de templates`);
}

// ── Resumen ───────────────────────────────────────────────────────────────────
console.log(`\n${errors ? '✗' : '✓'} ${errors} errores · ${warns} advertencias\n`);
process.exit(errors ? 1 : 0);
