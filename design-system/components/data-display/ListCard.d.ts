/** Row list with decreasing opacity per rank. */
export interface ListCardRow { label: string; value?: string; /** Phosphor icon shown instead of a bullet — every row carries one. */ icon?: string; }
export interface ListCardProps {
  title?: string;
  /** Phosphor icon next to the card title (24px). */
  icon?: string;
  rows: ListCardRow[];
  width?: number;
  height?: number;
}
export function ListCard(props: ListCardProps): JSX.Element;
