import React from 'react';
export function Eyebrow({ children, color = 'var(--brand-primary)' }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
    React.createElement('span', { style: { width: 24, height: 3, background: color, flexShrink: 0 } }),
    React.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-eyebrow-size)',
        lineHeight: 'var(--text-eyebrow-lh)', letterSpacing: 'var(--text-eyebrow-tracking)',
        textTransform: 'uppercase', color
      }
    }, children)
  );
}
