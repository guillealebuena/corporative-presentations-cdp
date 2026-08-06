import React from 'react';
export function KpiCompare({ leftValue, leftLabel, rightValue, rightLabel, delta }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 40 } },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'right' } },
      React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-metric-medium-size)', lineHeight: 'var(--text-metric-medium-lh)', color: 'var(--text-secondary)' } }, leftValue),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 24, color: 'var(--text-secondary)' } }, leftLabel)
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 } },
      React.createElement('div', { style: { width: 32, height: 1, background: 'var(--divider-line)' } }),
      delta && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--brand-primary)' } }, delta)
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
      React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-metric-medium-size)', lineHeight: 'var(--text-metric-medium-lh)', color: 'var(--brand-primary)' } }, rightValue),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 24, color: 'var(--text-secondary)' } }, rightLabel)
    )
  );
}
