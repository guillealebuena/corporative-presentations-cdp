import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
const VARIANTS = {
  default: { background: '#872191', border: '2px solid #872191', color: '#FFFFFF', fontWeight: 600 },
  secondary: { background: '#1BCEC8', border: '2px solid #1BCEC8', color: '#FFFFFF', fontWeight: 400 },
  outline: { background: 'transparent', border: '2px solid #872191', color: '#872191', fontWeight: 400 },
  'white-outline': { background: 'transparent', border: '2px solid #FFFFFF', color: '#FFFFFF', fontWeight: 400 },
  'gray-outline': { background: 'transparent', border: '2px solid #2E2E2E', color: '#2E2E2E', fontWeight: 400 },
  ghost: { background: 'transparent', border: 'none', color: '#000000', fontWeight: 400 },
  success: { background: '#35A55D', border: '2px solid #35A55D', color: '#FFFFFF', fontWeight: 600 },
  error: { background: '#EF4444', border: '2px solid #EF4444', color: '#FFFFFF', fontWeight: 600 },
  warning: { background: '#9A3412', border: '2px solid #9A3412', color: '#FFFFFF', fontWeight: 600 },
  filter: { background: 'transparent', border: '2px solid #424242', color: '#2E2E2E', fontWeight: 400 },
};
const OUTLINE_FAMILY = ['outline', 'white-outline', 'gray-outline', 'filter'];
export function Button({ variant = 'default', size = 'default', disabled = false, icon, children }) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const isFilter = variant === 'filter';
  const isOutline = OUTLINE_FAMILY.includes(variant);
  const height = isFilter ? 72 : size === 'sm' ? 72 : 112;
  const fontSize = 24;
  const padding = isFilter ? '16px 32px' : size === 'sm' ? '24px 28px' : '28px 32px';
  const color = disabled && isOutline ? '#A7A7A7' : v.color;
  const border = disabled && isOutline ? '2px solid #A7A7A7' : v.border;
  return React.createElement('button', {
    disabled,
    style: {
      height, padding, borderRadius: isFilter ? 999 : 20, background: v.background, border, color,
      fontFamily: 'var(--font-body)', fontWeight: v.fontWeight, fontSize, lineHeight: 1,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled && !isOutline ? .5 : 1
    }
  },
    icon && React.createElement(Icon, { name: icon, size: 24, color }),
    children
  );
}
