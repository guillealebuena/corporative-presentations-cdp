/** 4px progress bar, label left, value right. */
export interface KpiBarProps {
  label: string;
  /** Displayed value text, e.g. "82%". */
  value: string;
  /** Fill percentage 0-100. */
  percent: number;
  color?: string;
  /** Optional Phosphor icon before the label. */
  icon?: string;
}
export function KpiBar(props: KpiBarProps): JSX.Element;
