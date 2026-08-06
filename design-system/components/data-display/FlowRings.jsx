import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function FlowRings({ steps = [] }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'flex-start' } },
    steps.map((s, i) => React.createElement('div', { key: i, style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: 260, marginLeft: i === 0 ? 0 : -30 } },
      React.createElement('div', {
        style: {
          width: 160, height: 160, borderRadius: '50%', border: '3px solid ' + (s.active ? 'var(--brand-primary)' : 'var(--gray-100)'),
          background: s.active ? 'var(--violet-50)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: steps.length - i
        }
      }, React.createElement(Icon, { name: s.icon, size: 48, color: s.active ? 'var(--brand-primary)' : 'var(--text-muted)' })),
      React.createElement('div', { style: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 } },
        React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--text-title)' } }, s.label),
        s.description && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 24, lineHeight: '32px', color: 'var(--text-secondary)' } }, s.description)
      )
    ))
  );
}
