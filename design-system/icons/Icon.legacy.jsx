import React from 'react';
const KNOWN = {
  ArrowUUpLeft: ['arrow-u-up-left', 'regular'], User: ['user', 'regular'], Question: ['question', 'regular'],
  Lightbulb: ['lightbulb', 'regular'], Phone: ['phone', 'regular'], FileText: ['file-text', 'regular'],
  MagnifyingGlass: ['magnifying-glass', 'regular'], Heart: ['heart', 'regular'], HeartFill: ['heart', 'fill'],
  CalendarDots: ['calendar-dots', 'regular'], BookBookmark: ['book-bookmark', 'regular'],
  CheckCircle: ['check-circle', 'regular'], Check: ['check', 'regular'], Globe: ['globe', 'regular'],
  GlobeHemisphereWest: ['globe-hemisphere-west', 'regular'], DotsThreeCircle: ['dots-three-circle', 'regular'],
  WarningCircle: ['warning-circle', 'regular'],
  Passenger: ['user', 'regular'], // sin equivalente en Phosphor — sustitución provisoria (ver readme)
};
function toSlug(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
export function Icon({ name, size = 24, color = 'currentColor', style }) {
  const [slug, weight] = KNOWN[name] || [toSlug(name), 'regular'];
  const cls = weight === 'fill' ? 'ph-fill' : 'ph';
  const s = Number(size) || size;
  return React.createElement('i', {
    className: cls + ' ph-' + slug,
    style: { fontSize: s, color, lineHeight: 1, display: 'inline-flex', ...style }
  });
}
