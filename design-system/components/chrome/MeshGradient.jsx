import React from 'react';
export function MeshGradient({ opacity = 1, style }) {
  return React.createElement('div', {
    style: {
      position: 'absolute', inset: 0, opacity, pointerEvents: 'none',
      background: 'radial-gradient(circle at 15% 20%, var(--violet-500) 0%, transparent 45%), radial-gradient(circle at 85% 75%, var(--turquoise-500) 0%, transparent 50%)',
      filter: 'blur(60px)', ...style
    }
  });
}
