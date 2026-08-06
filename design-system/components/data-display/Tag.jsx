import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
const VARIANTS = {
  default: { background: '#FFFFFF', border: '1px solid #E5E5E5', color: '#252525' },
  outline: { background: 'transparent', border: '1px solid #252525', color: '#252525' },
  secondary: { background: '#FFFFFF', border: '1px solid #1BCEC8', color: '#1BCEC8' },
  expired: { background: '#A7A7A7', border: '1px solid #A7A7A7', color: '#FFFFFF' },
  'primary-soft': { background: '#F9F4F9', border: '1px solid #F9F4F9', color: '#872191' },
};
export function Tag({ variant = 'default', serviceClass = false, icon, children }) {
  if (serviceClass) {
    return React.createElement('span', {
      style: {
        display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 20px', borderRadius: 9999,
        border: '1px solid #252525', color: '#252525', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 24
      }
    }, icon && React.createElement(Icon, { name: icon, size: 24, color: '#252525' }), children);
  }
  const v = VARIANTS[variant] || VARIANTS.default;
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 20px', borderRadius: 8,
      background: v.background, border: v.border, color: v.color,
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 24
    }
  }, icon && React.createElement(Icon, { name: icon, size: 24, color: v.color }), children);
}
