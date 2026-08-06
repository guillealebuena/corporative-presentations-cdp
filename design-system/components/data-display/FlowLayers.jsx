import React from 'react';
export function FlowLayers({ layers = [] }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, width: '100%' } },
    layers.map((l, i) => React.createElement('div', {
      key: i,
      style: {
        padding: '24px 32px', background: i === 0 ? 'var(--brand-primary)' : '#fff',
        border: i === 0 ? 'none' : 'var(--border-card)', borderRadius: 'var(--radius-sm)',
        color: i === 0 ? '#fff' : 'var(--text-title)',
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, display: 'flex', justifyContent: 'space-between'
      }
    },
      React.createElement('span', null, l.label),
      l.detail && React.createElement('span', { style: { fontWeight: 400, opacity: .8, fontSize: 24 } }, l.detail)
    ))
  );
}
