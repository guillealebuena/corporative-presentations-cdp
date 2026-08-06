import React from 'react';
export function Pill({ children, tone = 'soft' }) {
  const tones = {
    soft: { background: 'var(--violet-50)', color: 'var(--brand-primary)' },
    brand: { background: 'rgba(255,255,255,.16)', color: '#fff' },
    turquoise: { background: 'var(--turquoise-50)', color: 'var(--turquoise-800)' },
    solid: { background: 'var(--brand-primary)', color: '#fff' },
    outline: { background: 'transparent', border: '1.5px solid var(--brand-primary)', color: 'var(--brand-primary)' },
    dark: { background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid var(--border-on-dark)' },
  };
  const t = tones[tone] || tones.soft;
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center', padding: '12px 28px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, lineHeight: '28px',
      letterSpacing: '.4px', ...t
    }
  }, children);
}
