import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function Timeline({ steps }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'flex-start' } },
    (steps || []).map((s, i) => React.createElement(React.Fragment, { key: i },
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: 280, gap: 16 } },
        React.createElement('div', {
          style: {
            width: 64, height: 64, borderRadius: '50%', background: 'var(--brand-primary)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }
        }, s.icon ? React.createElement(Icon, { name: s.icon, size: 32, color: '#fff' }) : React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28 } }, i + 1)),
        React.createElement('div', { style: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 } },
          React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 30, color: 'var(--text-title)' } }, s.label),
          s.description && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 24, lineHeight: '34px', color: 'var(--text-secondary)' } }, s.description)
        )
      ),
      i < steps.length - 1 && React.createElement('div', { style: { flex: 1, height: 2, background: 'var(--violet-100)', marginTop: 32 } })
    ))
  );
}
