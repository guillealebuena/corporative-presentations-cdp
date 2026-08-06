import React from 'react';
export function InsightBand({ text, highlight }) {
  const parts = highlight ? text.split(highlight) : [text];
  return React.createElement('div', {
    style: {
      background: 'var(--surface-soft)', borderLeft: '4px solid var(--brand-primary)', borderRadius: 'var(--radius-sm)',
      padding: '40px 48px', display: 'flex', alignItems: 'center'
    }
  }, React.createElement('p', {
    style: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 'var(--text-body-size)', lineHeight: 'var(--text-body-lh)', color: 'var(--text-title)', margin: 0 }
  },
    highlight ? [parts[0], React.createElement('span', { key: 'h', style: { fontWeight: 600, color: 'var(--brand-primary)' } }, highlight), parts[1]] : text
  ));
}
