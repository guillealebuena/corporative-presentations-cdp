import React from 'react';
const SRC = {
  'wordmark-violeta': '../../assets/logos/cdp-wordmark-violeta.svg',
  'wordmark-blanco': '../../assets/logos/cdp-wordmark-blanco.svg',
  'wordmark-stacked': '../../assets/logos/cdp-wordmark-stacked-violeta.svg',
  'isotipo': '../../assets/logos/cdp-isotipo-violeta.svg',
  'lockup-violeta': '../../assets/logos/cdp-lockup-bajada-violeta.svg',
  'lockup-blanco': '../../assets/logos/cdp-lockup-bajada-blanco.svg',
  'lockup-badge': '../../assets/logos/cdp-lockup-badge-violeta.svg',
};
export function LogoMark({ variant = 'wordmark-violeta', height = 26, style }) {
  const h = Number(height) || height;
  return React.createElement('img', {
    src: SRC[variant] || SRC['wordmark-violeta'], alt: 'Central de Pasajes',
    style: { height: h, display: 'block', ...style }
  });
}
