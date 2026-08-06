import React from 'react';
import { ICONS, ALIASES } from './icons.js';

/**
 * Icono del DS de Central de Pasajes.
 * Reemplazo drop-in del Icon anterior: misma API (name, size, color, style).
 *
 * Diferencia clave: renderiza SVG inline en vez de <i class="ph">, así que
 * NO depende del webfont de Phosphor vía CDN. Funciona en exports standalone,
 * PPTX, PDF y offline.
 *
 * Tamaños del sistema: 22 filas de tabla · 24 texto inline · 28 badges de card · 32 suelto.
 */
export function Icon({ name, size = 24, color = 'currentColor', style, title, ...rest }) {
  const resolved = ICONS[name] ? name : ALIASES[name];
  const body = ICONS[resolved];

  if (!body) {
    if (typeof console !== 'undefined') {
      console.warn(`[CDP DS] Icono desconocido: "${name}". Ver ICON_NAMES en icons.js.`);
    }
    return null;
  }

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 256 256',
    width: size,
    height: size,
    fill: color,
    role: title ? 'img' : 'presentation',
    'aria-label': title || undefined,
    'aria-hidden': title ? undefined : 'true',
    focusable: 'false',
    style: { display: 'inline-block', flexShrink: 0, verticalAlign: 'middle', ...style },
    dangerouslySetInnerHTML: { __html: (title ? `<title>${title}</title>` : '') + body },
    ...rest,
  });
}

export default Icon;
