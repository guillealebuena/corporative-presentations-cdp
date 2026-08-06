import React from 'react';
export function KpiRing({ percent = 0, size = 160, color = 'var(--brand-primary)' }) {
  const r = (size - 8) / 2, c = 2 * Math.PI * r;
  return React.createElement('div', { style: { position: 'relative', width: size, height: size } },
    React.createElement('svg', { width: size, height: size, style: { transform: 'rotate(-90deg)' } },
      React.createElement('circle', { cx: size / 2, cy: size / 2, r, fill: 'none', stroke: 'var(--violet-50)', strokeWidth: 8 }),
      React.createElement('circle', { cx: size / 2, cy: size / 2, r, fill: 'none', stroke: color, strokeWidth: 8, strokeDasharray: c, strokeDashoffset: c * (1 - percent / 100), strokeLinecap: 'round' })
    ),
    React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, color: 'var(--text-title)' } }, percent + '%')
  );
}
