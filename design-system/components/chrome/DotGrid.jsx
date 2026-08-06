import React from 'react';
export function DotGrid({ color = 'var(--brand-primary)', opacity = .08, style }) {
  const bg = `radial-gradient(${color} 1px, transparent 1.5px)`;
  return React.createElement('div', {
    style: { position: 'absolute', inset: 0, backgroundImage: bg, backgroundSize: '24px 24px', opacity, pointerEvents: 'none', ...style }
  });
}
