import React from 'react';
export function QuoteCard({ quote, author }) {
  return React.createElement('div', {
    style: { width: 410, height: 260, borderRadius: 'var(--radius-md)', border: 'var(--border-card)', boxShadow: 'var(--shadow-card)', background: '#fff', padding: 30, display: 'flex', flexDirection: 'column', gap: 16, boxSizing: 'border-box' }
  },
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 56, lineHeight: 1, color: 'var(--violet-100)' } }, '\u201C'),
    React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 24, lineHeight: '32px', color: 'var(--text-title)', flex: 1 } }, quote),
    author && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--text-secondary)' } }, author)
  );
}
