import React from 'react';
import { Icon } from '../chrome/Icon.jsx';

/**
 * Tabla comparativa de tres columnas: concepto · situación actual · propuesta CDP.
 *
 * variant="semantic" (default) — par ámbar/turquesa. Comunica "malo vs. bueno".
 *   Para cuando el eje es la mejora en sí: ahorro, reducción de costos, riesgo que baja.
 *
 * variant="brand" — violeta de marca, columna de propuesta destacada de punta a punta.
 *   Para cuando el eje es "ellos vs. nosotros": propuestas comerciales donde la comparación
 *   es contra la situación del cliente o un competidor, y lo que se refuerza es CDP.
 */
export function ComparisonTable({
  currentLabel = 'Situación actual',
  proposedLabel = 'Propuesta CDP',
  currentSubtitle,
  proposedSubtitle,
  rows,
  total,
  variant = 'semantic',
}) {
  const brand = variant === 'brand';
  const valueAlign = brand ? 'center' : 'right';

  const th = {
    textAlign: 'left',
    padding: '24px 28px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 24,
    color: 'var(--text-title)',
    background: 'var(--surface-soft)',
  };
  const td = {
    padding: '24px 28px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-footnote-size)',
    lineHeight: 'var(--text-footnote-lh)',
  };
  const sub = (color) => ({
    display: 'block',
    marginTop: 4,
    fontSize: 'var(--text-footnote-size)',
    fontWeight: 400,
    color,
  });

  // Encabezados: en brand, la columna de propuesta es un bloque violeta sólido.
  const thCurrent = brand
    ? { ...th, textAlign: 'center' }
    : { ...th, background: 'var(--surface-risk-soft)', color: 'var(--text-risk)' };
  const thProposed = brand
    ? { ...th, textAlign: 'center', background: 'var(--brand-primary)', color: 'var(--text-on-brand)' }
    : { ...th, background: 'var(--surface-positive-soft)', color: 'var(--text-positive)' };

  const header = (label, subtitle, style, subColor) =>
    React.createElement('th', { style },
      label,
      subtitle && React.createElement('span', { style: sub(subColor) }, subtitle)
    );

  // Celdas de valor
  const cellCurrent = {
    ...td,
    textAlign: valueAlign,
    fontWeight: 600,
    fontSize: 'var(--text-table-value-size)',
    color: brand ? 'var(--text-body)' : 'var(--text-risk)',
  };
  const cellProposed = {
    ...td,
    textAlign: valueAlign,
    fontWeight: 600,
    fontSize: 'var(--text-table-value-size)',
    color: brand ? 'var(--brand-primary)' : 'var(--text-positive)',
    // En brand la columna ganadora se tiñe entera, no solo el encabezado.
    ...(brand ? { background: 'var(--violet-50)' } : null),
  };

  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-table)',
    },
  },
    React.createElement('thead', null,
      React.createElement('tr', null,
        React.createElement('th', { style: th }, brand ? 'Métrica' : 'Concepto'),
        header(currentLabel, currentSubtitle, thCurrent, 'var(--text-secondary)'),
        header(proposedLabel, proposedSubtitle, thProposed,
          brand ? 'rgba(255,255,255,.75)' : 'var(--text-positive)')
      )
    ),
    React.createElement('tbody', null,
      (rows || []).map((r, i) =>
        React.createElement('tr', {
          key: i,
          style: { background: i % 2 ? 'var(--surface-table-alt)' : 'var(--surface-default)' },
        },
          React.createElement('td', {
            style: { ...td, color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: 12 },
          },
            r.icon && React.createElement(Icon, { name: r.icon, size: 22, color: 'var(--text-secondary)' }),
            r.label
          ),
          React.createElement('td', { style: cellCurrent }, r.current),
          React.createElement('td', { style: cellProposed }, r.proposed)
        )
      ),
      total && React.createElement('tr', {
        // En brand el énfasis va solo en la celda ganadora; en semantic, en toda la fila.
        style: brand ? null : { background: 'var(--surface-total)' },
      },
        React.createElement('td', {
          style: {
            ...td,
            fontWeight: 600,
            color: brand ? 'var(--text-title)' : 'var(--text-on-total)',
          },
        },
          total.label,
          total.note && React.createElement('span', {
            style: {
              marginLeft: 10,
              fontSize: 'var(--text-footnote-size)',
              fontWeight: 400,
              color: brand ? 'var(--text-muted)' : 'rgba(255,255,255,.7)',
            },
          }, total.note)
        ),
        React.createElement('td', {
          style: {
            ...td,
            textAlign: valueAlign,
            fontWeight: 600,
            fontSize: 'var(--text-table-value-size)',
            color: brand ? 'var(--text-body)' : 'var(--text-on-total)',
          },
        }, total.current),
        React.createElement('td', {
          style: {
            ...td,
            textAlign: valueAlign,
            fontWeight: 600,
            fontSize: 'var(--text-table-value-size)',
            ...(brand
              ? { background: 'var(--violet-600)', color: 'var(--text-on-brand)' }
              : { color: 'var(--text-on-total)' }),
          },
        }, total.proposed)
      )
    )
  );
}
