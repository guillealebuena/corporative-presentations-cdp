/** Near-imperceptible decorative dot texture — 2px dots every 24px, 5-10% opacity. Absolutely positioned; place inside a `position:relative` slide/card. */
export interface DotGridProps {
  color?: string;
  /** Keep within 0.05-0.10 per the brief. */
  opacity?: number;
  style?: React.CSSProperties;
}
export function DotGrid(props: DotGridProps): JSX.Element;
