import React from 'react';
import { MeshGradient } from '../chrome/MeshGradient.jsx';
import { Icon } from '../chrome/Icon.jsx';
export function InsightCard({ icon, value, trend = 'up', label, context, width = 410, height = 260 }) {
  const trendColor = trend === 'up' ? 'var(--success)' : 'var(--error)';
  const trendIcon = trend === 'up' ? 'TrendUp' : 'TrendDown';
  return React.createElement('div', {
    style: { width, height, borderRadius: 'var(--radius-md)', background: 'var(--surface-dark)', position: 'relative', overflow: 'hidden', padding: 40, display: 'flex', flexDirection: 'column', gap: 20, boxSizing: 'border-box' }
  },
    React.createElement(MeshGradient, { opacity: .15 }),
    icon && React.createElement('div', {
      style: { position: 'relative', width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }, React.createElement(Icon, { name: icon, size: 28, color: '#fff' })),
    React.createElement('div', { style: { position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 8 } },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
        React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-metric-medium-size)', lineHeight: 'var(--text-metric-medium-lh)', color: '#fff' } }, value),
        React.createElement(Icon, { name: trendIcon, size: 32, color: trendColor })
      ),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-eyebrow-size)', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#fff' } }, label),
      context && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 24, lineHeight: '32px', color: 'var(--text-on-dark-secondary)' } }, context)
    )
  );
}
