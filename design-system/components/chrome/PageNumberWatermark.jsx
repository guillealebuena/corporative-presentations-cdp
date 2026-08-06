import React from 'react';
export function PageNumberWatermark({ number, color = 'var(--brand-primary)' }) {
  return React.createElement('div', {
    style: {
      position: 'absolute', right: -20, bottom: -25, fontFamily: 'var(--font-display)', fontWeight: 600,
      fontSize: 105, lineHeight: 1, color, opacity: .035, pointerEvents: 'none'
    }
  }, number);
}
