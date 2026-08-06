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

// ── 1. Sin dependencias de CDN en la iconografía ──────────────────────────────
console.log('\n[1] Iconografía sin CDN');
const iconFiles = files.filter((f) => /icons[/\\].*\.(js|jsx)$/.test(f));
if (!iconFiles.length) fail('No se encontró icons/');
for (const f of iconFiles) {
  const src = fs.readFileSync(f, 'utf8');
  if (/unpkg\.com|cdn\.jsdelivr|phosphor-icons\/web/.test(src)) fail(`${rel(f)} referencia un CDN`);
  if (/class(Name)?\s*[:=]\s*['"`]?ph[\s-]/.test(src)) fail(`${rel(f)} usa clases de webfont Phosphor`);
}
if (!errors) ok(`${iconFiles.length} archivos de iconografía, sin dependencias externas`);

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
    for (const m of s.matchAll(/\bicon=\\?["']([A-Z][A-Za-z0-9]*)/g)) {
      if (!used.has(m[1])) used.set(m[1], rel(f));
    }
    for (const m of s.matchAll(/<Icon\s+name=\\?["']([A-Z][A-Za-z0-9]*)/g)) {
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
if (dev.length) warn(`${dev.length} archivos usan react.development.js (pesado, y desde CDN)`);
else ok('sin builds de desarrollo');

// ── Resumen ───────────────────────────────────────────────────────────────────
console.log(`\n${errors ? '✗' : '✓'} ${errors} errores · ${warns} advertencias\n`);
process.exit(errors ? 1 : 0);
