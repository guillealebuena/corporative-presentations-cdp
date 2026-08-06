import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function Card({ icon, title, description, accent = 'violet', width = 410, height }) {
  const accentColor = accent === 'turquoise' ? 'var(--turquoise-500)' : 'var(--brand-primary)';
  return React.createElement('div', {
    style: {
      width, height, borderRadius: 'var(--radius-md)', border: 'var(--border-card)', borderTop: '4px solid ' + accentColor,
      boxShadow: 'var(--shadow-card)', padding: 40, background: 'var(--surface-default)',
      display: 'flex', flexDirection: 'column', gap: 20, boxSizing: 'border-box'
    }
  },
    React.createElement('div', {
      style: {
        width: 56, height: 56, borderRadius: 'var(--radius-sm)', background: accent === 'turquoise' ? 'var(--turquoise-50)' : 'var(--violet-50)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }
    }, React.createElement(Icon, { name: icon, size: 28, color: accentColor })),
    React.createElement('div', {
      style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-card-title-size)', lineHeight: 'var(--text-card-title-lh)', color: 'var(--text-title)' }
    }, title),
    React.createElement('div', {
      style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 'var(--text-card-desc-size)', lineHeight: 'var(--text-card-desc-lh)', color: 'var(--text-secondary)' }
    }, description)
  );
}
