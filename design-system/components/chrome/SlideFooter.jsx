import React from 'react';
import { LogoMark } from './LogoMark.jsx';
export function SlideFooter({ pageNumber }) {
  return React.createElement('div', {
    style: {
      position: 'absolute', left: 'var(--canvas-margin)', right: 'var(--canvas-margin)', top: 978,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }
  },
    React.createElement(LogoMark, { variant: 'wordmark-violeta', height: 22 }),
    pageNumber && React.createElement('span', {
      style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24, color: 'var(--brand-primary)' }
    }, pageNumber)
  );
}
