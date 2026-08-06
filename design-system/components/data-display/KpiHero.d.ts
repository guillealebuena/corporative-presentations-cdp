/** Number at 120-160px, the largest figure on a slide. */
export interface KpiHeroProps {
  value: string | number;
  label: string;
  /** Optional Phosphor icon above the number. */
  icon?: string;
  /** Overrides icon/value/label color together — use for dark backgrounds (e.g. "#fff"). */
  color?: string;
  /** Override the value's font-size — use for a secondary hero KPI at the medium scale (e.g. "76px" with valueLh "80px"). Defaults to the 140px mega scale. */
  valueSize?: string;
  valueLh?: string;
}
export function KpiHero(props: KpiHeroProps): JSX.Element;
