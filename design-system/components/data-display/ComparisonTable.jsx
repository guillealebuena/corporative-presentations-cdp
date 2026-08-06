import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function ComparisonTable({ currentLabel = 'Situación actual', proposedLabel = 'Propuesta CDP', rows, total }) {
  const th = { textAlign: 'left', padding: '24px 28px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--text-title)', background: 'var(--surface-soft)' };
  const td = { padding: '24px 28px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-footnote-size)', lineHeight: 'var(--text-footnote-lh)' };
  return React.createElement('table', {
    style: { width: '100%', borderCollapse: 'collapse', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-table)' }
  },
    React.createElement('thead', null, React.createElement('tr', null,
      React.createElement('th', { style: th }, 'Concepto'),
      React.createElement('th', { style: { ...th, background: 'var(--surface-risk-soft)', color: 'var(--text-risk)' } }, currentLabel),
      React.createElement('th', { style: { ...th, background: 'var(--surface-positive-soft)', color: 'var(--text-positive)' } }, proposedLabel)
    )),
    React.createElement('tbody', null,
      (rows || []).map((r, i) => React.createElement('tr', { key: i, style: { background: i % 2 ? 'var(--surface-table-alt)' : 'var(--surface-default)' } },
        React.createElement('td', { style: { ...td, color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: 12 } },
          r.icon && React.createElement(Icon, { name: r.icon, size: 22, color: 'var(--text-secondary)' }), r.label),
        React.createElement('td', { style: { ...td, color: 'var(--text-risk)', fontWeight: 600, fontSize: 'var(--text-table-value-size)', textAlign: 'right' } }, r.current),
        React.createElement('td', { style: { ...td, color: 'var(--text-positive)', fontWeight: 600, fontSize: 'var(--text-table-value-size)', textAlign: 'right' } }, r.proposed)
      )),
      total && React.createElement('tr', { style: { background: 'var(--surface-total)' } },
        React.createElement('td', { style: { ...td, color: 'var(--text-on-total)', fontWeight: 600 } }, total.label),
        React.createElement('td', { style: { ...td, color: 'var(--text-on-total)', fontWeight: 600, fontSize: 'var(--text-table-value-size)', textAlign: 'right' } }, total.current),
        React.createElement('td', { style: { ...td, color: 'var(--text-on-total)', fontWeight: 600, fontSize: 'var(--text-table-value-size)', textAlign: 'right' } }, total.proposed)
      )
    )
  );
}
