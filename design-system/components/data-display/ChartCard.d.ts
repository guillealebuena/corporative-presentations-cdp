/** Hairline bars or a sparkline inside a card. */
export interface ChartCardProps {
  title: string;
  values: number[];
  kind?: 'bars' | 'sparkline';
  /** Phosphor icon next to the title — defaults to "ChartBar". */
  icon?: string;
}
export function ChartCard(props: ChartCardProps): JSX.Element;
