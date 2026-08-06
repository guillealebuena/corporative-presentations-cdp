import React from 'react';
const SRC = {
  'wordmark-violeta': '../../assets/logos/cdp-wordmark-violeta.png',
  'wordmark-blanco': '../../assets/logos/cdp-wordmark-blanco.png',
  'isotipo': '../../assets/logos/cdp-isotipo-violeta.png',
  'lockup-violeta': '../../assets/logos/cdp-lockup-bajada-violeta.png',
  'lockup-blanco': '../../assets/logos/cdp-lockup-bajada-blanco.png',
};
export function LogoMark({ variant = 'wordmark-violeta', height = 26, style }) {
  const h = Number(height) || height;
  return React.createElement('img', {
    src: SRC[variant] || SRC['wordmark-violeta'], alt: 'Central de Pasajes',
    style: { height: h, display: 'block', ...style }
  });
}
