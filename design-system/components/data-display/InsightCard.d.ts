/** Dark card with a diffuse mesh-gradient corner wash — icon badge, metric + trend arrow, overline label, optional caption. Three reading tiers by size/opacity. */
export interface InsightCardProps {
  icon?: string;
  value: string | number;
  trend?: 'up' | 'down';
  label: string;
  context?: string;
  width?: number;
  height?: number;
}
export function InsightCard(props: InsightCardProps): JSX.Element;
