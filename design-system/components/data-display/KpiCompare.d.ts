/** Two values side by side with the delta between them. */
export interface KpiCompareProps {
  leftValue: string | number;
  leftLabel: string;
  rightValue: string | number;
  rightLabel: string;
  /** e.g. "+38%". */
  delta?: string;
}
export function KpiCompare(props: KpiCompareProps): JSX.Element;
