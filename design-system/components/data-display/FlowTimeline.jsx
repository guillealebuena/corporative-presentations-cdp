import React from 'react';
export function FlowTimeline({ milestones = [] }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', position: 'relative', paddingLeft: 40 } },
    React.createElement('div', { style: { position: 'absolute', left: 7, top: 8, bottom: 8, width: 2, background: 'var(--violet-100)' } }),
    milestones.map((m, i) => React.createElement('div', { key: i, style: { position: 'relative', paddingBottom: i < milestones.length - 1 ? 40 : 0 } },
      React.createElement('div', { style: { position: 'absolute', left: -40, top: 4, width: 16, height: 16, borderRadius: '50%', background: 'var(--brand-primary)', border: '3px solid #fff', boxShadow: '0 0 0 2px var(--violet-100)' } }),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 30, color: 'var(--text-title)' } }, m.label),
      m.description && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 24, lineHeight: '32px', color: 'var(--text-secondary)', marginTop: 8 } }, m.description)
    ))
  );
}
