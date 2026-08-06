import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function ListCard({ title, icon = 'ListBullets', rows = [], width = 410, height = 260 }) {
  return React.createElement('div', {
    style: { width, height, borderRadius: 'var(--radius-md)', border: 'var(--border-card)', boxShadow: 'var(--shadow-card)', background: '#fff', padding: 40, display: 'flex', flexDirection: 'column', gap: 20, boxSizing: 'border-box' }
  },
    title && React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
      React.createElement(Icon, { name: icon, size: 24, color: 'var(--brand-primary)' }),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--text-title)' } }, title)
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
      rows.map((r, i) => React.createElement('div', {
        key: i,
        style: { display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 24, color: 'var(--text-body)', opacity: Math.max(1 - i * .18, .4) }
      },
        React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
          React.createElement(Icon, { name: r.icon || 'Check', size: 24, color: 'var(--brand-primary)' }), r.label),
        r.value && React.createElement('span', { style: { fontWeight: 600 } }, r.value)
      ))
    )
  );
}
