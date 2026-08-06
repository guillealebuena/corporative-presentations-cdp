/* @ds-bundle: {"format":4,"namespace":"CentralDePasajesDesignSystem_152b2f","components":[{"name":"Avatar","sourcePath":"components/chrome/Avatar.jsx"},{"name":"BadgeDot","sourcePath":"components/chrome/BadgeDot.jsx"},{"name":"DiagonalLines","sourcePath":"components/chrome/DiagonalLines.jsx"},{"name":"Divider","sourcePath":"components/chrome/Divider.jsx"},{"name":"DotGrid","sourcePath":"components/chrome/DotGrid.jsx"},{"name":"Eyebrow","sourcePath":"components/chrome/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/chrome/Icon.jsx"},{"name":"LogoMark","sourcePath":"components/chrome/LogoMark.jsx"},{"name":"MeshGradient","sourcePath":"components/chrome/MeshGradient.jsx"},{"name":"PageNumberWatermark","sourcePath":"components/chrome/PageNumberWatermark.jsx"},{"name":"Pill","sourcePath":"components/chrome/Pill.jsx"},{"name":"SlideFooter","sourcePath":"components/chrome/SlideFooter.jsx"},{"name":"ToggleSegment","sourcePath":"components/chrome/ToggleSegment.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ChartCard","sourcePath":"components/data-display/ChartCard.jsx"},{"name":"ComparisonTable","sourcePath":"components/data-display/ComparisonTable.jsx"},{"name":"FlowBranch","sourcePath":"components/data-display/FlowBranch.jsx"},{"name":"FlowLayers","sourcePath":"components/data-display/FlowLayers.jsx"},{"name":"FlowRings","sourcePath":"components/data-display/FlowRings.jsx"},{"name":"FlowTimeline","sourcePath":"components/data-display/FlowTimeline.jsx"},{"name":"InsightBand","sourcePath":"components/data-display/InsightBand.jsx"},{"name":"InsightCard","sourcePath":"components/data-display/InsightCard.jsx"},{"name":"KPIStat","sourcePath":"components/data-display/KPIStat.jsx"},{"name":"KpiBar","sourcePath":"components/data-display/KpiBar.jsx"},{"name":"KpiCompare","sourcePath":"components/data-display/KpiCompare.jsx"},{"name":"KpiDelta","sourcePath":"components/data-display/KpiDelta.jsx"},{"name":"KpiHero","sourcePath":"components/data-display/KpiHero.jsx"},{"name":"KpiRing","sourcePath":"components/data-display/KpiRing.jsx"},{"name":"KpiSparkline","sourcePath":"components/data-display/KpiSparkline.jsx"},{"name":"ListCard","sourcePath":"components/data-display/ListCard.jsx"},{"name":"MetricCard","sourcePath":"components/data-display/MetricCard.jsx"},{"name":"NumberedCard","sourcePath":"components/data-display/NumberedCard.jsx"},{"name":"ProductCard","sourcePath":"components/data-display/ProductCard.jsx"},{"name":"QuoteCard","sourcePath":"components/data-display/QuoteCard.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Timeline","sourcePath":"components/data-display/Timeline.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"}],"sourceHashes":{"components/chrome/Avatar.jsx":"82f16f546dd7","components/chrome/BadgeDot.jsx":"a59ca0cbadbe","components/chrome/DiagonalLines.jsx":"da8b7d5e93f2","components/chrome/Divider.jsx":"3a105685fdb5","components/chrome/DotGrid.jsx":"91c0fd73de42","components/chrome/Eyebrow.jsx":"5af8fe3285c8","components/chrome/Icon.jsx":"22d6f5d34bf0","components/chrome/LogoMark.jsx":"d80b0dd7bbee","components/chrome/MeshGradient.jsx":"1bc58e8ae08e","components/chrome/PageNumberWatermark.jsx":"50f853b9901d","components/chrome/Pill.jsx":"8f55d2cda75d","components/chrome/SlideFooter.jsx":"2e342f9b4b5d","components/chrome/ToggleSegment.jsx":"ff4734e641b5","components/data-display/Card.jsx":"21ac22274682","components/data-display/ChartCard.jsx":"f49a33ac3950","components/data-display/ComparisonTable.jsx":"272629d552cc","components/data-display/FlowBranch.jsx":"c7d239c77ad9","components/data-display/FlowLayers.jsx":"ab367926820e","components/data-display/FlowRings.jsx":"db3fee278f89","components/data-display/FlowTimeline.jsx":"5083e11380b9","components/data-display/InsightBand.jsx":"f0a06066bee4","components/data-display/InsightCard.jsx":"b90ef16431f1","components/data-display/KPIStat.jsx":"8f87c599833e","components/data-display/KpiBar.jsx":"a944a7025ba6","components/data-display/KpiCompare.jsx":"211d7de675db","components/data-display/KpiDelta.jsx":"d2dd2c691265","components/data-display/KpiHero.jsx":"93b501dd5cc5","components/data-display/KpiRing.jsx":"613f4eb015fb","components/data-display/KpiSparkline.jsx":"bf6322317236","components/data-display/ListCard.jsx":"de2129cb32c8","components/data-display/MetricCard.jsx":"cf5df8c0577e","components/data-display/NumberedCard.jsx":"4f2926530f45","components/data-display/ProductCard.jsx":"3bcf79c4e4e6","components/data-display/QuoteCard.jsx":"c2184a752e36","components/data-display/Tag.jsx":"0a5b39eef216","components/data-display/Timeline.jsx":"e2e60f017d63","components/forms/Button.jsx":"21e551fb371f","slide-fit.js":"ebd40ed4b4de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CentralDePasajesDesignSystem_152b2f = window.CentralDePasajesDesignSystem_152b2f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chrome/BadgeDot.jsx
try { (() => {
function BadgeDot({
  color = '#35A55D',
  size = 16
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: 9999,
      background: color
    }
  });
}
Object.assign(__ds_scope, { BadgeDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/BadgeDot.jsx", error: String((e && e.message) || e) }); }

// components/chrome/DiagonalLines.jsx
try { (() => {
function DiagonalLines({
  color = 'var(--brand-primary)',
  opacity = .07,
  style
}) {
  const bg = `repeating-linear-gradient(45deg, ${color} 0 1px, transparent 1px 24px)`;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: bg,
      opacity,
      pointerEvents: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { DiagonalLines });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/DiagonalLines.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Divider.jsx
try { (() => {
function Divider({
  inline = false,
  color = 'var(--divider-line)'
}) {
  if (inline) {
    return React.createElement('span', {
      style: {
        display: 'inline-block',
        width: 1,
        height: 14,
        background: color,
        margin: '0 12px',
        verticalAlign: 'middle'
      }
    });
  }
  return React.createElement('div', {
    style: {
      height: 1,
      background: color,
      width: '100%'
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Divider.jsx", error: String((e && e.message) || e) }); }

// components/chrome/DotGrid.jsx
try { (() => {
function DotGrid({
  color = 'var(--brand-primary)',
  opacity = .08,
  style
}) {
  const bg = `radial-gradient(${color} 1px, transparent 1.5px)`;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: bg,
      backgroundSize: '24px 24px',
      opacity,
      pointerEvents: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { DotGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/DotGrid.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'var(--brand-primary)'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('span', {
    style: {
      width: 24,
      height: 3,
      background: color,
      flexShrink: 0
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow-size)',
      lineHeight: 'var(--text-eyebrow-lh)',
      letterSpacing: 'var(--text-eyebrow-tracking)',
      textTransform: 'uppercase',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Icon.jsx
try { (() => {
const KNOWN = {
  ArrowUUpLeft: ['arrow-u-up-left', 'regular'],
  User: ['user', 'regular'],
  Question: ['question', 'regular'],
  Lightbulb: ['lightbulb', 'regular'],
  Phone: ['phone', 'regular'],
  FileText: ['file-text', 'regular'],
  MagnifyingGlass: ['magnifying-glass', 'regular'],
  Heart: ['heart', 'regular'],
  HeartFill: ['heart', 'fill'],
  CalendarDots: ['calendar-dots', 'regular'],
  BookBookmark: ['book-bookmark', 'regular'],
  CheckCircle: ['check-circle', 'regular'],
  Check: ['check', 'regular'],
  Globe: ['globe', 'regular'],
  GlobeHemisphereWest: ['globe-hemisphere-west', 'regular'],
  DotsThreeCircle: ['dots-three-circle', 'regular'],
  WarningCircle: ['warning-circle', 'regular'],
  Passenger: ['user', 'regular'] // sin equivalente en Phosphor — sustitución provisoria (ver readme)
};
function toSlug(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  style
}) {
  const [slug, weight] = KNOWN[name] || [toSlug(name), 'regular'];
  const cls = weight === 'fill' ? 'ph-fill' : 'ph';
  const s = Number(size) || size;
  return React.createElement('i', {
    className: cls + ' ph-' + slug,
    style: {
      fontSize: s,
      color,
      lineHeight: 1,
      display: 'inline-flex',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Icon.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Avatar.jsx
try { (() => {
function Avatar({
  size = 80,
  src,
  initials
}) {
  return React.createElement('div', {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      background: '#F9F4FA',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#872191',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: size * .35
    }
  }, src ? React.createElement('img', {
    src,
    alt: '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || React.createElement(__ds_scope.Icon, {
    name: 'User',
    size: size * .5,
    color: '#872191'
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/chrome/LogoMark.jsx
try { (() => {
const SRC = {
  'wordmark-violeta': '../../assets/logos/cdp-wordmark-violeta.png',
  'wordmark-blanco': '../../assets/logos/cdp-wordmark-blanco.png',
  'isotipo': '../../assets/logos/cdp-isotipo-violeta.png',
  'lockup-violeta': '../../assets/logos/cdp-lockup-bajada-violeta.png',
  'lockup-blanco': '../../assets/logos/cdp-lockup-bajada-blanco.png'
};
function LogoMark({
  variant = 'wordmark-violeta',
  height = 26,
  style
}) {
  const h = Number(height) || height;
  return React.createElement('img', {
    src: SRC[variant] || SRC['wordmark-violeta'],
    alt: 'Central de Pasajes',
    style: {
      height: h,
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/chrome/MeshGradient.jsx
try { (() => {
function MeshGradient({
  opacity = 1,
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      opacity,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 15% 20%, var(--violet-500) 0%, transparent 45%), radial-gradient(circle at 85% 75%, var(--turquoise-500) 0%, transparent 50%)',
      filter: 'blur(60px)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { MeshGradient });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/MeshGradient.jsx", error: String((e && e.message) || e) }); }

// components/chrome/PageNumberWatermark.jsx
try { (() => {
function PageNumberWatermark({
  number,
  color = 'var(--brand-primary)'
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      right: -20,
      bottom: -25,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 105,
      lineHeight: 1,
      color,
      opacity: .035,
      pointerEvents: 'none'
    }
  }, number);
}
Object.assign(__ds_scope, { PageNumberWatermark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/PageNumberWatermark.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Pill.jsx
try { (() => {
function Pill({
  children,
  tone = 'soft'
}) {
  const tones = {
    soft: {
      background: 'var(--violet-50)',
      color: 'var(--brand-primary)'
    },
    brand: {
      background: 'rgba(255,255,255,.16)',
      color: '#fff'
    },
    turquoise: {
      background: 'var(--turquoise-50)',
      color: 'var(--turquoise-800)'
    },
    solid: {
      background: 'var(--brand-primary)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--brand-primary)',
      color: 'var(--brand-primary)'
    },
    dark: {
      background: 'rgba(255,255,255,.1)',
      color: '#fff',
      border: '1px solid var(--border-on-dark)'
    }
  };
  const t = tones[tone] || tones.soft;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '12px 28px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '.4px',
      ...t
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Pill.jsx", error: String((e && e.message) || e) }); }

// components/chrome/SlideFooter.jsx
try { (() => {
function SlideFooter({
  pageNumber
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      left: 'var(--canvas-margin)',
      right: 'var(--canvas-margin)',
      top: 978,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement(__ds_scope.LogoMark, {
    variant: 'wordmark-violeta',
    height: 22
  }), pageNumber && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--brand-primary)'
    }
  }, pageNumber));
}
Object.assign(__ds_scope, { SlideFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/SlideFooter.jsx", error: String((e && e.message) || e) }); }

// components/chrome/ToggleSegment.jsx
try { (() => {
function ToggleSegment({
  options,
  active = 0
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      background: 'var(--violet-50)',
      borderRadius: 'var(--radius-pill)',
      padding: 6,
      gap: 6
    }
  }, (options || []).map((label, i) => React.createElement('span', {
    key: i,
    style: {
      padding: '12px 28px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      fontWeight: i === active ? 600 : 400,
      color: i === active ? '#fff' : 'var(--text-secondary)',
      background: i === active ? 'var(--brand-primary)' : 'transparent'
    }
  }, label)));
}
Object.assign(__ds_scope, { ToggleSegment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/ToggleSegment.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function Card({
  icon,
  title,
  description,
  accent = 'violet',
  width = 410,
  height
}) {
  const accentColor = accent === 'turquoise' ? 'var(--turquoise-500)' : 'var(--brand-primary)';
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-card)',
      borderTop: '4px solid ' + accentColor,
      boxShadow: 'var(--shadow-card)',
      padding: 40,
      background: 'var(--surface-default)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-sm)',
      background: accent === 'turquoise' ? 'var(--turquoise-50)' : 'var(--violet-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: accentColor
  })), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-card-title-size)',
      lineHeight: 'var(--text-card-title-lh)',
      color: 'var(--text-title)'
    }
  }, title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--text-card-desc-size)',
      lineHeight: 'var(--text-card-desc-lh)',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ChartCard.jsx
try { (() => {
function ChartCard({
  title,
  values = [],
  kind = 'bars',
  icon = 'ChartBar'
}) {
  const max = Math.max(...values, 1);
  return React.createElement('div', {
    style: {
      width: 410,
      height: 260,
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      background: '#fff',
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color: 'var(--brand-primary)'
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-title)'
    }
  }, title)), kind === 'bars' ? React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6
    }
  }, values.map((v, i) => React.createElement('div', {
    key: i,
    style: {
      flex: 1,
      height: v / max * 100 + '%',
      background: 'var(--brand-primary)',
      borderRadius: 2
    }
  }))) : React.createElement('svg', {
    viewBox: '0 0 200 60',
    style: {
      flex: 1,
      width: '100%'
    },
    preserveAspectRatio: 'none'
  }, React.createElement('polyline', {
    points: values.map((v, i) => i / (values.length - 1) * 200 + ',' + (60 - v / max * 56)).join(' '),
    fill: 'none',
    stroke: 'var(--brand-primary)',
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { ChartCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ChartCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ComparisonTable.jsx
try { (() => {
function ComparisonTable({
  currentLabel = 'Situación actual',
  proposedLabel = 'Propuesta CDP',
  rows,
  total
}) {
  const th = {
    textAlign: 'left',
    padding: '24px 28px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 24,
    color: 'var(--text-title)',
    background: 'var(--surface-soft)'
  };
  const td = {
    padding: '24px 28px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-footnote-size)',
    lineHeight: 'var(--text-footnote-lh)'
  };
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-table)'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, React.createElement('th', {
    style: th
  }, 'Concepto'), React.createElement('th', {
    style: {
      ...th,
      background: 'var(--surface-risk-soft)',
      color: 'var(--text-risk)'
    }
  }, currentLabel), React.createElement('th', {
    style: {
      ...th,
      background: 'var(--surface-positive-soft)',
      color: 'var(--text-positive)'
    }
  }, proposedLabel))), React.createElement('tbody', null, (rows || []).map((r, i) => React.createElement('tr', {
    key: i,
    style: {
      background: i % 2 ? 'var(--surface-table-alt)' : 'var(--surface-default)'
    }
  }, React.createElement('td', {
    style: {
      ...td,
      color: 'var(--text-body)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, r.icon && React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: 22,
    color: 'var(--text-secondary)'
  }), r.label), React.createElement('td', {
    style: {
      ...td,
      color: 'var(--text-risk)',
      fontWeight: 600,
      fontSize: 'var(--text-table-value-size)',
      textAlign: 'right'
    }
  }, r.current), React.createElement('td', {
    style: {
      ...td,
      color: 'var(--text-positive)',
      fontWeight: 600,
      fontSize: 'var(--text-table-value-size)',
      textAlign: 'right'
    }
  }, r.proposed))), total && React.createElement('tr', {
    style: {
      background: 'var(--surface-total)'
    }
  }, React.createElement('td', {
    style: {
      ...td,
      color: 'var(--text-on-total)',
      fontWeight: 600
    }
  }, total.label), React.createElement('td', {
    style: {
      ...td,
      color: 'var(--text-on-total)',
      fontWeight: 600,
      fontSize: 'var(--text-table-value-size)',
      textAlign: 'right'
    }
  }, total.current), React.createElement('td', {
    style: {
      ...td,
      color: 'var(--text-on-total)',
      fontWeight: 600,
      fontSize: 'var(--text-table-value-size)',
      textAlign: 'right'
    }
  }, total.proposed))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FlowBranch.jsx
try { (() => {
function FlowBranch({
  root,
  branches = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, React.createElement('div', {
    style: {
      alignSelf: 'flex-start',
      padding: '20px 32px',
      background: 'var(--brand-primary)',
      color: '#fff',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24
    }
  }, root), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 40,
      paddingLeft: 20,
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: 20,
      top: -16,
      width: 2,
      height: 16,
      background: 'var(--violet-100)'
    }
  }), branches.map((b, i) => React.createElement('div', {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      borderTop: '2px solid var(--violet-100)',
      paddingTop: 16
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-title)'
    }
  }, b.label), b.description && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--text-secondary)'
    }
  }, b.description)))));
}
Object.assign(__ds_scope, { FlowBranch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FlowBranch.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FlowLayers.jsx
try { (() => {
function FlowLayers({
  layers = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, layers.map((l, i) => React.createElement('div', {
    key: i,
    style: {
      padding: '24px 32px',
      background: i === 0 ? 'var(--brand-primary)' : '#fff',
      border: i === 0 ? 'none' : 'var(--border-card)',
      borderRadius: 'var(--radius-sm)',
      color: i === 0 ? '#fff' : 'var(--text-title)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React.createElement('span', null, l.label), l.detail && React.createElement('span', {
    style: {
      fontWeight: 400,
      opacity: .8,
      fontSize: 24
    }
  }, l.detail))));
}
Object.assign(__ds_scope, { FlowLayers });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FlowLayers.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FlowRings.jsx
try { (() => {
function FlowRings({
  steps = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, steps.map((s, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      width: 260,
      marginLeft: i === 0 ? 0 : -30
    }
  }, React.createElement('div', {
    style: {
      width: 160,
      height: 160,
      borderRadius: '50%',
      border: '3px solid ' + (s.active ? 'var(--brand-primary)' : 'var(--gray-100)'),
      background: s.active ? 'var(--violet-50)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: steps.length - i
    }
  }, React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 48,
    color: s.active ? 'var(--brand-primary)' : 'var(--text-muted)'
  })), React.createElement('div', {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-title)'
    }
  }, s.label), s.description && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--text-secondary)'
    }
  }, s.description)))));
}
Object.assign(__ds_scope, { FlowRings });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FlowRings.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FlowTimeline.jsx
try { (() => {
function FlowTimeline({
  milestones = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingLeft: 40
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: 7,
      top: 8,
      bottom: 8,
      width: 2,
      background: 'var(--violet-100)'
    }
  }), milestones.map((m, i) => React.createElement('div', {
    key: i,
    style: {
      position: 'relative',
      paddingBottom: i < milestones.length - 1 ? 40 : 0
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: -40,
      top: 4,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--brand-primary)',
      border: '3px solid #fff',
      boxShadow: '0 0 0 2px var(--violet-100)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--text-title)'
    }
  }, m.label), m.description && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, m.description))));
}
Object.assign(__ds_scope, { FlowTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FlowTimeline.jsx", error: String((e && e.message) || e) }); }

// components/data-display/InsightBand.jsx
try { (() => {
function InsightBand({
  text,
  highlight
}) {
  const parts = highlight ? text.split(highlight) : [text];
  return React.createElement('div', {
    style: {
      background: 'var(--surface-soft)',
      borderLeft: '4px solid var(--brand-primary)',
      borderRadius: 'var(--radius-sm)',
      padding: '40px 48px',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--text-body-size)',
      lineHeight: 'var(--text-body-lh)',
      color: 'var(--text-title)',
      margin: 0
    }
  }, highlight ? [parts[0], React.createElement('span', {
    key: 'h',
    style: {
      fontWeight: 600,
      color: 'var(--brand-primary)'
    }
  }, highlight), parts[1]] : text));
}
Object.assign(__ds_scope, { InsightBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/InsightBand.jsx", error: String((e && e.message) || e) }); }

// components/data-display/InsightCard.jsx
try { (() => {
function InsightCard({
  icon,
  value,
  trend = 'up',
  label,
  context,
  width = 410,
  height = 260
}) {
  const trendColor = trend === 'up' ? 'var(--success)' : 'var(--error)';
  const trendIcon = trend === 'up' ? 'TrendUp' : 'TrendDown';
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-dark)',
      position: 'relative',
      overflow: 'hidden',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxSizing: 'border-box'
    }
  }, React.createElement(__ds_scope.MeshGradient, {
    opacity: .15
  }), icon && React.createElement('div', {
    style: {
      position: 'relative',
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255,255,255,.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: '#fff'
  })), React.createElement('div', {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-metric-medium-size)',
      lineHeight: 'var(--text-metric-medium-lh)',
      color: '#fff'
    }
  }, value), React.createElement(__ds_scope.Icon, {
    name: trendIcon,
    size: 32,
    color: trendColor
  })), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow-size)',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, label), context && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--text-on-dark-secondary)'
    }
  }, context)));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KPIStat.jsx
try { (() => {
function KPIStat({
  value,
  label,
  context,
  icon,
  metricScale = 'hero'
}) {
  const valueSize = metricScale === 'medium' ? 'var(--text-metric-medium-size)' : 'var(--text-hero-number-size)';
  const valueLh = metricScale === 'medium' ? 'var(--text-metric-medium-lh)' : 'var(--text-hero-number-lh)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color: 'var(--brand-primary)'
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: valueSize,
      lineHeight: valueLh,
      color: 'var(--brand-primary)'
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow-size)',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: 'var(--text-title)'
    }
  }, label), context && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--text-footnote-size)',
      lineHeight: 'var(--text-footnote-lh)',
      color: 'var(--text-secondary)'
    }
  }, context));
}
Object.assign(__ds_scope, { KPIStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KPIStat.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiBar.jsx
try { (() => {
function KpiBar({
  label,
  value,
  percent,
  color = 'var(--brand-primary)',
  icon
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      width: '100%'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      color: 'var(--text-body)'
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color
  }), label), React.createElement('span', {
    style: {
      fontWeight: 600
    }
  }, value)), React.createElement('div', {
    style: {
      height: 4,
      background: 'var(--violet-50)',
      borderRadius: 2
    }
  }, React.createElement('div', {
    style: {
      height: 4,
      width: percent + '%',
      background: color,
      borderRadius: 2
    }
  })));
}
Object.assign(__ds_scope, { KpiBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiBar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiCompare.jsx
try { (() => {
function KpiCompare({
  leftValue,
  leftLabel,
  rightValue,
  rightLabel,
  delta
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: 'right'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-metric-medium-size)',
      lineHeight: 'var(--text-metric-medium-lh)',
      color: 'var(--text-secondary)'
    }
  }, leftValue), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      color: 'var(--text-secondary)'
    }
  }, leftLabel)), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      width: 32,
      height: 1,
      background: 'var(--divider-line)'
    }
  }), delta && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--brand-primary)'
    }
  }, delta)), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-metric-medium-size)',
      lineHeight: 'var(--text-metric-medium-lh)',
      color: 'var(--brand-primary)'
    }
  }, rightValue), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      color: 'var(--text-secondary)'
    }
  }, rightLabel)));
}
Object.assign(__ds_scope, { KpiCompare });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiCompare.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiDelta.jsx
try { (() => {
function KpiDelta({
  value,
  direction = 'up',
  delta,
  label,
  icon
}) {
  const color = direction === 'up' ? 'var(--success)' : 'var(--error)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color: 'var(--brand-primary)'
  }), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-metric-medium-size)',
      lineHeight: 'var(--text-metric-medium-lh)',
      color: 'var(--text-title)'
    }
  }, value), React.createElement(__ds_scope.Icon, {
    name: direction === 'up' ? 'TrendUp' : 'TrendDown',
    size: 32,
    color
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color
    }
  }, delta)), label && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow-size)',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { KpiDelta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiDelta.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiHero.jsx
try { (() => {
function KpiHero({
  value,
  label,
  icon,
  color = 'var(--brand-primary)',
  valueSize = 'var(--text-mega-number-size)',
  valueLh = 'var(--text-mega-number-lh)'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: valueSize,
      lineHeight: valueLh,
      color
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow-size)',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color
    }
  }, label));
}
Object.assign(__ds_scope, { KpiHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiHero.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiRing.jsx
try { (() => {
function KpiRing({
  percent = 0,
  size = 160,
  color = 'var(--brand-primary)'
}) {
  const r = (size - 8) / 2,
    c = 2 * Math.PI * r;
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, React.createElement('svg', {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, React.createElement('circle', {
    cx: size / 2,
    cy: size / 2,
    r,
    fill: 'none',
    stroke: 'var(--violet-50)',
    strokeWidth: 8
  }), React.createElement('circle', {
    cx: size / 2,
    cy: size / 2,
    r,
    fill: 'none',
    stroke: color,
    strokeWidth: 8,
    strokeDasharray: c,
    strokeDashoffset: c * (1 - percent / 100),
    strokeLinecap: 'round'
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 36,
      color: 'var(--text-title)'
    }
  }, percent + '%'));
}
Object.assign(__ds_scope, { KpiRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiRing.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiSparkline.jsx
try { (() => {
function KpiSparkline({
  values = [],
  color = 'var(--brand-primary)',
  width = 160,
  height = 48
}) {
  const max = Math.max(...values, 1),
    min = Math.min(...values, 0);
  const pts = values.map((v, i) => i / (values.length - 1) * width + ',' + (height - (v - min) / (max - min || 1) * height)).join(' ');
  return React.createElement('svg', {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`
  }, React.createElement('polyline', {
    points: pts,
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}
Object.assign(__ds_scope, { KpiSparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiSparkline.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ListCard.jsx
try { (() => {
function ListCard({
  title,
  icon = 'ListBullets',
  rows = [],
  width = 410,
  height = 260
}) {
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      background: '#fff',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxSizing: 'border-box'
    }
  }, title && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: 'var(--brand-primary)'
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-title)'
    }
  }, title)), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, rows.map((r, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      color: 'var(--text-body)',
      opacity: Math.max(1 - i * .18, .4)
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(__ds_scope.Icon, {
    name: r.icon || 'Check',
    size: 24,
    color: 'var(--brand-primary)'
  }), r.label), r.value && React.createElement('span', {
    style: {
      fontWeight: 600
    }
  }, r.value)))));
}
Object.assign(__ds_scope, { ListCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ListCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/MetricCard.jsx
try { (() => {
function MetricCard({
  icon,
  value,
  label,
  context,
  tone = 'light',
  accent = 'violet',
  width = 410,
  height = 260,
  metricScale = 'hero'
}) {
  const isDark = tone === 'dark';
  const accentColor = accent === 'turquoise' ? 'var(--turquoise-400)' : '#fff';
  const bg = isDark ? 'var(--surface-dark)' : accent === 'turquoise' ? 'var(--turquoise-500)' : 'var(--brand-primary)';
  const labelColor = isDark ? 'var(--text-on-dark-secondary)' : 'rgba(255,255,255,.85)';
  const contextColor = isDark ? 'var(--text-on-dark-secondary)' : 'rgba(255,255,255,.7)';
  const valueSize = metricScale === 'medium' ? 'var(--text-metric-medium-size)' : 'var(--text-mega-number-size)';
  const valueLh = metricScale === 'medium' ? 'var(--text-metric-medium-lh)' : 'var(--text-mega-number-lh)';
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: 'var(--radius-md)',
      background: bg,
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxSizing: 'border-box'
    }
  }, icon && React.createElement('div', {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255,255,255,.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: isDark ? accentColor : '#fff'
  })), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: valueSize,
      lineHeight: valueLh,
      color: '#fff'
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow-size)',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), context && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '32px',
      color: contextColor
    }
  }, context)));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/NumberedCard.jsx
try { (() => {
function NumberedCard({
  order,
  title,
  description,
  tone = 'violet',
  width = 410,
  height = 260
}) {
  const accent = tone === 'turquoise' ? 'var(--turquoise-500)' : 'var(--brand-primary)';
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-card)',
      background: '#fff',
      position: 'relative',
      overflow: 'hidden',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 20,
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: -20,
      right: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 160,
      lineHeight: 1,
      color: accent,
      opacity: .08
    }
  }, order), React.createElement('div', {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-title)'
    }
  }, title), React.createElement('div', {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { NumberedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/NumberedCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProductCard.jsx
try { (() => {
function ProductCard({
  badge = 'none',
  title,
  children
}) {
  return React.createElement('div', {
    style: {
      width: 480,
      borderRadius: 24,
      border: '1px solid #BABABA',
      background: '#FFFFFF',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, badge === 'destacado' && React.createElement('div', {
    style: {
      height: 80,
      background: 'var(--brand-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, 'Destacado'), React.createElement('div', {
    style: {
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, badge === 'promo' && React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      height: 64,
      padding: '0 32px',
      background: 'var(--brand-accent)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      borderRadius: 8
    }
  }, 'Promo'), title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: '#252525'
    }
  }, title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 16,
      color: '#252525',
      lineHeight: '22px'
    }
  }, children)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote,
  author
}) {
  return React.createElement('div', {
    style: {
      width: 410,
      height: 260,
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      background: '#fff',
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 56,
      lineHeight: 1,
      color: 'var(--violet-100)'
    }
  }, '\u201C'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--text-title)',
      flex: 1
    }
  }, quote), author && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-secondary)'
    }
  }, author));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
const VARIANTS = {
  default: {
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    color: '#252525'
  },
  outline: {
    background: 'transparent',
    border: '1px solid #252525',
    color: '#252525'
  },
  secondary: {
    background: '#FFFFFF',
    border: '1px solid #1BCEC8',
    color: '#1BCEC8'
  },
  expired: {
    background: '#A7A7A7',
    border: '1px solid #A7A7A7',
    color: '#FFFFFF'
  },
  'primary-soft': {
    background: '#F9F4F9',
    border: '1px solid #F9F4F9',
    color: '#872191'
  }
};
function Tag({
  variant = 'default',
  serviceClass = false,
  icon,
  children
}) {
  if (serviceClass) {
    return React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 48,
        padding: '0 20px',
        borderRadius: 9999,
        border: '1px solid #252525',
        color: '#252525',
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: 24
      }
    }, icon && React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 24,
      color: '#252525'
    }), children);
  }
  const v = VARIANTS[variant] || VARIANTS.default;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 48,
      padding: '0 20px',
      borderRadius: 8,
      background: v.background,
      border: v.border,
      color: v.color,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 24
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: v.color
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Timeline.jsx
try { (() => {
function Timeline({
  steps
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, (steps || []).map((s, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 280,
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--brand-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.icon ? React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 32,
    color: '#fff'
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28
    }
  }, i + 1)), React.createElement('div', {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--text-title)'
    }
  }, s.label), s.description && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      lineHeight: '34px',
      color: 'var(--text-secondary)'
    }
  }, s.description))), i < steps.length - 1 && React.createElement('div', {
    style: {
      flex: 1,
      height: 2,
      background: 'var(--violet-100)',
      marginTop: 32
    }
  }))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const VARIANTS = {
  default: {
    background: '#872191',
    border: '2px solid #872191',
    color: '#FFFFFF',
    fontWeight: 600
  },
  secondary: {
    background: '#1BCEC8',
    border: '2px solid #1BCEC8',
    color: '#FFFFFF',
    fontWeight: 400
  },
  outline: {
    background: 'transparent',
    border: '2px solid #872191',
    color: '#872191',
    fontWeight: 400
  },
  'white-outline': {
    background: 'transparent',
    border: '2px solid #FFFFFF',
    color: '#FFFFFF',
    fontWeight: 400
  },
  'gray-outline': {
    background: 'transparent',
    border: '2px solid #2E2E2E',
    color: '#2E2E2E',
    fontWeight: 400
  },
  ghost: {
    background: 'transparent',
    border: 'none',
    color: '#000000',
    fontWeight: 400
  },
  success: {
    background: '#35A55D',
    border: '2px solid #35A55D',
    color: '#FFFFFF',
    fontWeight: 600
  },
  error: {
    background: '#EF4444',
    border: '2px solid #EF4444',
    color: '#FFFFFF',
    fontWeight: 600
  },
  warning: {
    background: '#9A3412',
    border: '2px solid #9A3412',
    color: '#FFFFFF',
    fontWeight: 600
  },
  filter: {
    background: 'transparent',
    border: '2px solid #424242',
    color: '#2E2E2E',
    fontWeight: 400
  }
};
const OUTLINE_FAMILY = ['outline', 'white-outline', 'gray-outline', 'filter'];
function Button({
  variant = 'default',
  size = 'default',
  disabled = false,
  icon,
  children
}) {
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
      height,
      padding,
      borderRadius: isFilter ? 999 : 20,
      background: v.background,
      border,
      color,
      fontFamily: 'var(--font-body)',
      fontWeight: v.fontWeight,
      fontSize,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled && !isOutline ? .5 : 1
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// slide-fit.js
try { (() => {
(function () {
  function fit(vp) {
    var slide = vp.querySelector('.slide');
    if (!slide || !vp.clientWidth || !vp.clientHeight) return;
    var scale = Math.min(vp.clientWidth / 1920, vp.clientHeight / 1080);
    slide.style.transform = 'translate(-50%,-50%) scale(' + scale + ')';
  }
  function fitAll() {
    document.querySelectorAll('.slide-viewport').forEach(fit);
  }
  window.addEventListener('resize', fitAll);
  if (window.ResizeObserver) {
    document.querySelectorAll('.slide-viewport').forEach(function (vp) {
      new ResizeObserver(function () {
        fit(vp);
      }).observe(vp);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fitAll);
  } else {
    fitAll();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slide-fit.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.BadgeDot = __ds_scope.BadgeDot;

__ds_ns.DiagonalLines = __ds_scope.DiagonalLines;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.DotGrid = __ds_scope.DotGrid;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.MeshGradient = __ds_scope.MeshGradient;

__ds_ns.PageNumberWatermark = __ds_scope.PageNumberWatermark;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SlideFooter = __ds_scope.SlideFooter;

__ds_ns.ToggleSegment = __ds_scope.ToggleSegment;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ChartCard = __ds_scope.ChartCard;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.FlowBranch = __ds_scope.FlowBranch;

__ds_ns.FlowLayers = __ds_scope.FlowLayers;

__ds_ns.FlowRings = __ds_scope.FlowRings;

__ds_ns.FlowTimeline = __ds_scope.FlowTimeline;

__ds_ns.InsightBand = __ds_scope.InsightBand;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.KPIStat = __ds_scope.KPIStat;

__ds_ns.KpiBar = __ds_scope.KpiBar;

__ds_ns.KpiCompare = __ds_scope.KpiCompare;

__ds_ns.KpiDelta = __ds_scope.KpiDelta;

__ds_ns.KpiHero = __ds_scope.KpiHero;

__ds_ns.KpiRing = __ds_scope.KpiRing;

__ds_ns.KpiSparkline = __ds_scope.KpiSparkline;

__ds_ns.ListCard = __ds_scope.ListCard;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.NumberedCard = __ds_scope.NumberedCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Button = __ds_scope.Button;

})();
