import React from 'react';
import { Icon } from '../chrome/Icon.jsx';
export function KpiHero({ value, label, icon, color = 'var(--brand-primary)', valueSize = 'var(--text-mega-number-size)', valueLh = 'var(--text-mega-number-lh)' }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
    icon && React.createElement(Icon, { name: icon, size: 32, color }),
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: valueSize, lineHeight: valueLh, color } }, value),
    React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-eyebrow-size)', letterSpacing: '1.2px', textTransform: 'uppercase', color } }, label)
  );
}
