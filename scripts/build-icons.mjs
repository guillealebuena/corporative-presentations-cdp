/**
 * Genera design-system/icons/icons.js a partir de los SVG en design-system/icons/src/.
 *
 *   npm run build:icons
 *
 * Sin dependencias. Los 88 glifos que usa el DS están vendorizados en icons/src/ (77 KB).
 * No instalamos @phosphor-icons/core: son 9000+ archivos para usar 88.
 *
 * ── Agregar un icono ──────────────────────────────────────────────────────────
 * 1. Bajá el SVG de phosphoricons.com en peso Regular
 * 2. Guardalo en design-system/icons/src/ con el nombre en kebab-case (chart-bar.svg)
 * 3. Sumá el nombre en CamelCase a SET, en la categoría que corresponda
 * 4. npm run build:icons
 *
 * No edites icons.js a mano: se regenera y perdés el cambio.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'design-system', 'icons', 'src');
const OUT = path.join(ROOT, 'design-system', 'icons', 'icons.js');

/** Set oficial de iconos del DS, agrupado por categoría. */
const SET = {
  'Marca y producto': ['Bus', 'Ticket', 'ShoppingCart', 'Storefront', 'Buildings', 'MapPin',
    'MapTrifold', 'Path', 'Armchair', 'Suitcase', 'SuitcaseRolling', 'AirplaneTilt', 'Train'],
  'Personas': ['User', 'UserCircle', 'Users', 'UsersThree', 'Handshake', 'Headset'],
  'Negocio y datos': ['ChartLineUp', 'ChartBar', 'ChartPieSlice', 'PresentationChart', 'TrendUp',
    'TrendDown', 'Target', 'Gauge', 'Percent', 'Coins', 'CurrencyCircleDollar', 'CreditCard',
    'Receipt', 'Briefcase'],
  'Confianza': ['ShieldCheck', 'SealCheck', 'Certificate', 'Medal', 'Trophy', 'Star', 'Heart',
    'HeartFill', 'ThumbsUp', 'LockKey'],
  'Comunicación': ['ChatCircleText', 'Phone', 'DeviceMobile', 'Envelope', 'EnvelopeSimple',
    'WhatsappLogo', 'Megaphone'],
  'Tiempo': ['Clock', 'CalendarDots', 'CalendarCheck', 'Hourglass'],
  'Estado': ['Check', 'CheckCircle', 'WarningCircle', 'Info', 'XCircle', 'Question', 'DotsThreeCircle'],
  'Tecnología': ['Globe', 'GlobeHemisphereWest', 'Desktop', 'GearSix', 'PlugsConnected', 'Lightning',
    'RocketLaunch', 'Sparkle', 'PuzzlePiece', 'Stack', 'WifiHigh', 'Translate'],
  'Contenido y UI': ['FileText', 'BookBookmark', 'Note', 'ListChecks', 'Rows', 'Lightbulb',
    'MagnifyingGlass', 'ArrowRight', 'ArrowUpRight', 'ArrowUUpLeft', 'CaretRight', 'CaretDown',
    'Plus', 'Minus', 'X'],
};

/**
 * Alias de conceptos propios de CDP hacia su glifo.
 * Toda sustitución se documenta acá, no se resuelve en silencio.
 */
const ALIASES = {
  Passenger: 'User',    // SUSTITUCIÓN: sin equivalente Phosphor. Pendiente glifo propio de CDP.
  Pasajero: 'User',
  Colectivo: 'Bus',
  Empresa: 'Buildings',
  Agencia: 'Storefront',
};

/** CamelCase → kebab-case. Maneja mayúsculas consecutivas (ArrowUUpLeft). */
const OVERRIDE = { ArrowUUpLeft: 'arrow-u-up-left', HeartFill: 'heart-fill' };
function slug(name) {
  if (OVERRIDE[name]) return OVERRIDE[name];
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

if (!fs.existsSync(SRC)) {
  console.error(`No existe ${path.relative(ROOT, SRC)}`);
  process.exit(1);
}

const icons = {};
const missing = [];

for (const [group, names] of Object.entries(SET)) {
  for (const name of names) {
    const file = path.join(SRC, slug(name) + '.svg');
    if (!fs.existsSync(file)) { missing.push(`${name} (${group}) → src/${slug(name)}.svg`); continue; }
    icons[name] = fs.readFileSync(file, 'utf8')
      .replace(/^[\s\S]*?<svg[^>]*>/, '')
      .replace(/<\/svg>[\s\S]*$/, '')
      .trim();
  }
}

if (missing.length) {
  console.error('Faltan estos SVG en icons/src/:');
  missing.forEach((m) => console.error('  ' + m));
  process.exit(1);
}

for (const [alias, target] of Object.entries(ALIASES)) {
  if (!icons[target]) {
    console.error(`Alias "${alias}" apunta a "${target}", que no está en el set.`);
    process.exit(1);
  }
}

// Avisar si hay SVG huérfanos en src/ que nadie declaró en SET
const declared = new Set(Object.keys(icons).map(slug));
const orphans = fs.readdirSync(SRC)
  .filter((f) => f.endsWith('.svg'))
  .filter((f) => !declared.has(f.replace('.svg', '')));
if (orphans.length) {
  console.warn(`Advertencia: ${orphans.length} SVG en src/ sin declarar en SET (no se compilan):`);
  orphans.forEach((o) => console.warn('  ' + o));
}

const out = [
  '// Central de Pasajes — Design System · Iconografía',
  '// Glifos Phosphor Regular embebidos como SVG inline. Sin CDN, sin webfont.',
  '// GENERADO — no editar a mano. Regenerar con: npm run build:icons',
  '// viewBox 0 0 256 256 · fill currentColor · paths rellenos, sin stroke',
  '',
  'export const ICONS = {',
  ...Object.keys(icons).sort().map((k) => `  ${k}: '${icons[k].replace(/'/g, "\\'").replace(/\n/g, '')}',`),
  '};',
  '',
  '// Alias: nombres propios de CDP mapeados a su glifo. Documentar toda sustitución acá.',
  'export const ALIASES = {',
  ...Object.entries(ALIASES).map(([a, t]) =>
    `  ${a}: '${t}',${a === 'Passenger' ? '   // SUSTITUCIÓN: sin equivalente Phosphor. Pendiente glifo propio de CDP.' : ''}`),
  '};',
  '',
  'export const ICON_NAMES = Object.keys(ICONS).sort();',
  'export const hasIcon = (n) => Boolean(ICONS[n] || ICONS[ALIASES[n]]);',
  '',
].join('\n');

fs.writeFileSync(OUT, out);

const kb = (Buffer.byteLength(out) / 1024).toFixed(1);
console.log(`${Object.keys(icons).length} iconos · ${Object.keys(ALIASES).length} alias · ${kb} KB → design-system/icons/icons.js`);
