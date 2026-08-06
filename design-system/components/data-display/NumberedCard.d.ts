/** Giant order number at 8% opacity behind title + description. Reserve for sequences where order truly matters — never for an unordered "N razones" grid (use Card there, with an icon badge, so the grid stays visually consistent). */
export interface NumberedCardProps {
  /** e.g. "01". */
  order: string;
  title: string;
  description: string;
  tone?: 'violet' | 'turquoise';
  width?: number;
  height?: number;
}
export function NumberedCard(props: NumberedCardProps): JSX.Element;
