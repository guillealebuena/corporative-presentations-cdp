import React from 'react';
export function ProductCard({ badge = 'none', title, children }) {
  return React.createElement('div', {
    style: { width: 480, borderRadius: 24, border: '1px solid #BABABA', background: '#FFFFFF', overflow: 'hidden', display: 'flex', flexDirection: 'column' }
  },
    badge === 'destacado' && React.createElement('div', {
      style: { height: 80, background: 'var(--brand-primary)', color: '#fff', display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }
    }, 'Destacado'),
    React.createElement('div', { style: { padding: 40, display: 'flex', flexDirection: 'column', gap: 16 } },
      badge === 'promo' && React.createElement('span', {
        style: { display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start', height: 64, padding: '0 32px', background: 'var(--brand-accent)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: 16, borderRadius: 8 }
      }, 'Promo'),
      title && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, color: '#252525' } }, title),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 16, color: '#252525', lineHeight: '22px' } }, children)
    )
  );
}
