/** Value + trend arrow + percent change, green up / red down. */
export interface KpiDeltaProps {
  value: string | number;
  direction?: 'up' | 'down';
  /** e.g. "+12%". */
  delta: string;
  label?: string;
  /** Optional Phosphor icon above the value. */
  icon?: string;
}
export function KpiDelta(props: KpiDeltaProps): JSX.Element;
