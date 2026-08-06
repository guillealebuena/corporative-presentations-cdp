import React from 'react';
export function BadgeDot({ color = '#35A55D', size = 16 }) {
  return React.createElement('span', {
    style: { display: 'inline-block', width: size, height: size, borderRadius: 9999, background: color }
  });
}
