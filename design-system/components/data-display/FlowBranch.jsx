import React from 'react';
export function FlowBranch({ root, branches = [] }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 40 } },
    React.createElement('div', {
      style: { alignSelf: 'flex-start', padding: '20px 32px', background: 'var(--brand-primary)', color: '#fff', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24 }
    }, root),
    React.createElement('div', { style: { display: 'flex', gap: 40, paddingLeft: 20, position: 'relative' } },
      React.createElement('div', { style: { position: 'absolute', left: 20, top: -16, width: 2, height: 16, background: 'var(--violet-100)' } }),
      branches.map((b, i) => React.createElement('div', { key: i, style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 8, borderTop: '2px solid var(--violet-100)', paddingTop: 16 } },
        React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--text-title)' } }, b.label),
        b.description && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 24, lineHeight: '32px', color: 'var(--text-secondary)' } }, b.description)
      ))
    )
  );
}
