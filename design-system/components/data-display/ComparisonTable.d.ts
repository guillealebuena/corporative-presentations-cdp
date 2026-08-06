/** Three-column current-vs-proposed comparison. */
export interface ComparisonRow {
  label: string;
  current: string;
  proposed: string;
  /** Phosphor icon for a row representing a category. */
  icon?: string;
}
export interface ComparisonTotal extends ComparisonRow {
  /** Aclaración corta al lado del label, ej. "(ventas menos costos)". */
  note?: string;
}
export interface ComparisonTableProps {
  currentLabel?: string;
  proposedLabel?: string;
  /** Segunda línea del encabezado, ej. el stack que usa hoy el cliente. */
  currentSubtitle?: string;
  proposedSubtitle?: string;
  rows: ComparisonRow[];
  /** Fila de cierre. En semantic va toda oscura; en brand solo se destaca la celda de CDP. */
  total?: ComparisonTotal;
  /**
   * semantic (default) — ámbar vs. turquesa, valores a la derecha. El eje es la mejora.
   * brand — violeta de marca, columna de CDP teñida y valores centrados. El eje es CDP vs. el otro.
   */
  variant?: 'semantic' | 'brand';
}
export function ComparisonTable(props: ComparisonTableProps): JSX.Element;
