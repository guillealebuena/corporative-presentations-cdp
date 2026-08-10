import React from 'react';
export function MeshGradient({ opacity = 1, size = 480, corner = 'top-right', color = 'var(--violet-500)', style }) {
  const half = size / 2;
  const pos = {
    'top-right': { top: -half, right: -half },
    'top-left': { top: -half, left: -half },
    'bottom-right': { bottom: -half, right: -half },
    'bottom-left': { bottom: -half, left: -half }
  }[corner] || { top: -half, right: -half };
  return React.createElement('div', {
    style: {
      position: 'absolute', width: size, height: size, borderRadius: '50%', opacity, pointerEvents: 'none',
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: 'blur(50px)', ...pos, ...style
    }
  });
}
