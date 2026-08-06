import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function KpiDelta({ value, direction = 'up', delta, label, icon }) {
  const color = direction === 'up' ? 'var(--success)' : 'var(--error)';
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
    icon && React.createElement(Icon, { name: icon, size: 32, color: 'var(--brand-primary)' }),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
      React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-metric-medium-size)', lineHeight: 'var(--text-metric-medium-lh)', color: 'var(--text-title)' } }, value),
      React.createElement(Icon, { name: direction === 'up' ? 'TrendUp' : 'TrendDown', size: 32, color }),
      React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color } }, delta)
    ),
    label && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-eyebrow-size)', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--text-secondary)' } }, label)
  );
}
