import React from 'react';
export function Divider({ inline = false, color = 'var(--divider-line)' }) {
  if (inline) {
    return React.createElement('span', {
      style: { display: 'inline-block', width: 1, height: 14, background: color, margin: '0 12px', verticalAlign: 'middle' }
    });
  }
  return React.createElement('div', { style: { height: 1, background: color, width: '100%' } });
}
