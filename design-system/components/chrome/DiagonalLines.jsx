import React from 'react';
export function DiagonalLines({ color = 'var(--brand-primary)', opacity = .07, style }) {
  const bg = `repeating-linear-gradient(45deg, ${color} 0 1px, transparent 1px 24px)`;
  return React.createElement('div', {
    style: { position: 'absolute', inset: 0, backgroundImage: bg, opacity, pointerEvents: 'none', ...style }
  });
}
