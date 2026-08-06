import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function MetricCard({ icon, value, label, context, tone = 'light', accent = 'violet', width = 410, height = 260, metricScale = 'hero' }) {
  const isDark = tone === 'dark';
  const accentColor = accent === 'turquoise' ? 'var(--turquoise-400)' : '#fff';
  const bg = isDark ? 'var(--surface-dark)' : (accent === 'turquoise' ? 'var(--turquoise-500)' : 'var(--brand-primary)');
  const labelColor = isDark ? 'var(--text-on-dark-secondary)' : 'rgba(255,255,255,.85)';
  const contextColor = isDark ? 'var(--text-on-dark-secondary)' : 'rgba(255,255,255,.7)';
  const valueSize = metricScale === 'medium' ? 'var(--text-metric-medium-size)' : 'var(--text-mega-number-size)';
  const valueLh = metricScale === 'medium' ? 'var(--text-metric-medium-lh)' : 'var(--text-mega-number-lh)';
  return React.createElement('div', {
    style: { width, height, borderRadius: 'var(--radius-md)', background: bg, padding: 40, display: 'flex', flexDirection: 'column', gap: 20, boxSizing: 'border-box' }
  },
    icon && React.createElement('div', {
      style: { width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }, React.createElement(Icon, { name: icon, size: 28, color: isDark ? accentColor : '#fff' })),
    React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 8 } },
      React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: valueSize, lineHeight: valueLh, color: '#fff' } }, value),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-eyebrow-size)', letterSpacing: '1.2px', textTransform: 'uppercase', color: labelColor } }, label),
      context && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 24, lineHeight: '32px', color: contextColor } }, context)
    )
  );
}
