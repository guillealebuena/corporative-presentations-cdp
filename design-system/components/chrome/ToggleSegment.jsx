import React from 'react';
export function ToggleSegment({ options, active = 0 }) {
  return React.createElement('div', {
    style: { display: 'inline-flex', background: 'var(--violet-50)', borderRadius: 'var(--radius-pill)', padding: 6, gap: 6 }
  },
    (options || []).map((label, i) => React.createElement('span', {
      key: i,
      style: {
        padding: '12px 28px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: 24,
        fontWeight: i === active ? 600 : 400, color: i === active ? '#fff' : 'var(--text-secondary)',
        background: i === active ? 'var(--brand-primary)' : 'transparent'
      }
    }, label))
  );
}
