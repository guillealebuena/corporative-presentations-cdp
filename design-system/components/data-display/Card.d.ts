/** Benefit / feature card for grid layouts. */
export interface CardProps {
  /** Phosphor icon name shown in the 56×56 badge (icon itself rendered at 28px) — every Card carries one. */
  icon: string;
  title: string;
  description: string;
  /** Alternates violet/turquoise across a grid per the brand's top-border rule. */
  accent?: 'violet' | 'turquoise';
  /** Override to match the card's .span-n width in its grid — default 410 assumes span-3. */
  width?: number;
  height?: number;
}
export function Card(props: CardProps): JSX.Element;
