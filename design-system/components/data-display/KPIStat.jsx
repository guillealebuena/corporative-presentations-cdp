import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function KPIStat({ value, label, context, icon, metricScale = 'hero' }) {
  const valueSize = metricScale === 'medium' ? 'var(--text-metric-medium-size)' : 'var(--text-hero-number-size)';
  const valueLh = metricScale === 'medium' ? 'var(--text-metric-medium-lh)' : 'var(--text-hero-number-lh)';
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
    icon && React.createElement(Icon, { name: icon, size: 32, color: 'var(--brand-primary)' }),
    React.createElement('div', {
      style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: valueSize, lineHeight: valueLh, color: 'var(--brand-primary)' }
    }, value),
    React.createElement('div', {
      style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-eyebrow-size)', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--text-title)' }
    }, label),
    context && React.createElement('div', {
      style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 'var(--text-footnote-size)', lineHeight: 'var(--text-footnote-lh)', color: 'var(--text-secondary)' }
    }, context)
  );
}
