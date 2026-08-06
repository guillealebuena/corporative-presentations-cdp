import React from 'react';
import { Icon } from './Icon.jsx';
export function Avatar({ size = 80, src, initials }) {
  return React.createElement('div', {
    style: {
      width: size, height: size, borderRadius: 9999, background: '#F9F4FA', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#872191', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: size * .35
    }
  },
    src ? React.createElement('img', { src, alt: '', style: { width: '100%', height: '100%', objectFit: 'cover' } })
      : (initials || React.createElement(Icon, { name: 'User', size: size * .5, color: '#872191' }))
  );
}
