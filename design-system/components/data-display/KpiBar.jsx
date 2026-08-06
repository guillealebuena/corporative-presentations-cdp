import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function KpiBar({ label, value, percent, color = 'var(--brand-primary)', icon }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12, width: '100%' } },
    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: 24, color: 'var(--text-body)' } },
      React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
        icon && React.createElement(Icon, { name: icon, size: 24, color }), label),
      React.createElement('span', { style: { fontWeight: 600 } }, value)
    ),
    React.createElement('div', { style: { height: 4, background: 'var(--violet-50)', borderRadius: 2 } },
      React.createElement('div', { style: { height: 4, width: percent + '%', background: color, borderRadius: 2 } })
    )
  );
}
