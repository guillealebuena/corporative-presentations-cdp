import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function ChartCard({ title, values = [], kind = 'bars', icon = 'ChartBar' }) {
  const max = Math.max(...values, 1);
  return React.createElement('div', {
    style: { width: 410, height: 260, borderRadius: 'var(--radius-md)', border: 'var(--border-card)', boxShadow: 'var(--shadow-card)', background: '#fff', padding: 30, display: 'flex', flexDirection: 'column', gap: 16, boxSizing: 'border-box' }
  },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
      React.createElement(Icon, { name: icon, size: 32, color: 'var(--brand-primary)' }),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--text-title)' } }, title)
    ),
    kind === 'bars'
      ? React.createElement('div', { style: { flex: 1, display: 'flex', alignItems: 'flex-end', gap: 6 } },
          values.map((v, i) => React.createElement('div', { key: i, style: { flex: 1, height: (v / max) * 100 + '%', background: 'var(--brand-primary)', borderRadius: 2 } })))
      : React.createElement('svg', { viewBox: '0 0 200 60', style: { flex: 1, width: '100%' }, preserveAspectRatio: 'none' },
          React.createElement('polyline', {
            points: values.map((v, i) => (i / (values.length - 1)) * 200 + ',' + (60 - (v / max) * 56)).join(' '),
            fill: 'none', stroke: 'var(--brand-primary)', strokeWidth: 2
          }))
  );
}
