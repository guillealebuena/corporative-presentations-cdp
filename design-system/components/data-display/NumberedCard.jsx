import React from 'react';
export function NumberedCard({ order, title, description, tone = 'violet', width = 410, height = 260 }) {
  const accent = tone === 'turquoise' ? 'var(--turquoise-500)' : 'var(--brand-primary)';
  return React.createElement('div', {
    style: { width, height, borderRadius: 'var(--radius-md)', border: 'var(--border-card)', background: '#fff', position: 'relative', overflow: 'hidden', padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 20, boxSizing: 'border-box' }
  },
    React.createElement('div', { style: { position: 'absolute', top: -20, right: 10, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 160, lineHeight: 1, color: accent, opacity: .08 } }, order),
    React.createElement('div', { style: { position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: 'var(--text-title)' } }, title),
    React.createElement('div', { style: { position: 'relative', fontFamily: 'var(--font-body)', fontSize: 24, lineHeight: '32px', color: 'var(--text-secondary)' } }, description)
  );
}
