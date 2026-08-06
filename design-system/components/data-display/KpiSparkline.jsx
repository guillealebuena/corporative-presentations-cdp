import React from 'react';
export function KpiSparkline({ values = [], color = 'var(--brand-primary)', width = 160, height = 48 }) {
  const max = Math.max(...values, 1), min = Math.min(...values, 0);
  const pts = values.map((v, i) => (i / (values.length - 1)) * width + ',' + (height - ((v - min) / (max - min || 1)) * height)).join(' ');
  return React.createElement('svg', { width, height, viewBox: `0 0 ${width} ${height}` },
    React.createElement('polyline', { points: pts, fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })
  );
}
