/** Hero number with label and context. */
export interface KPIStatProps {
  /** The number shown large, e.g. "+38%". Never adorn or annotate the figure itself. */
  value: string | number;
  label: string;
  context?: string;
  /** Optional Phosphor icon above the number — every KPI carries one per the icon rule. */
  icon?: string;
  /** hero = 76px (default) · medium = 48px, for a supporting KPI shown next to a KpiHero/MetricCard hero metric. */
  metricScale?: 'hero' | 'medium';
}
export function KPIStat(props: KPIStatProps): JSX.Element;
