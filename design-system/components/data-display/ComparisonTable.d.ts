/** Three-column current-vs-proposed comparison. */
export interface ComparisonRow { label: string; current: string; proposed: string; /** Phosphor icon for a row representing a category. */ icon?: string; }
export interface ComparisonTableProps {
  currentLabel?: string;
  proposedLabel?: string;
  rows: ComparisonRow[];
  /** Rendered as the dark ink total row at the bottom. */
  total?: ComparisonRow;
}
export function ComparisonTable(props: ComparisonTableProps): JSX.Element;
