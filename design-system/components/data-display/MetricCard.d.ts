/** Icon badge (56×56, icon at 28px) → hero metric 140/140 (dominant, reserve for the 1-2 truly dominant KPIs of the deck) → overline label → optional caption context. If value is a long string (e.g. "USD 122.000.000"), pass a smaller valueSize/valueLh (e.g. 76/80) instead of shrinking the whole component. */
export interface MetricCardProps {
  /** Phosphor icon name for the 56×56 badge. */
  icon?: string;
  value: string | number;
  label: string;
  context?: string;
  /** light = solid brand fill (violet/turquoise) · dark = surface-dark fill (#19021C). */
  tone?: 'light' | 'dark';
  accent?: 'violet' | 'turquoise';
  /** Override to match the card's .span-n width in its grid — default 410x260 assumes span-3. */
  width?: number;
  height?: number;
  /** hero = 140px mega scale (1-2 dominant KPIs per deck) · medium = 48px, for supporting metrics alongside a hero. */
  metricScale?: 'hero' | 'medium';
}
export function MetricCard(props: MetricCardProps): JSX.Element;
