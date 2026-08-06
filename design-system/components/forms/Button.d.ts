/**
 * Button geometry recreated from the App at 2x deck scale (App→deck: height 56/36→112/72, radius 10→20,
 * padding 16/14→32/28, gap 6→12, border 1→2). Text sizes are NOT scaled (18/14, per the deck's own type system).
 */
export interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'white-outline' | 'gray-outline' | 'ghost' | 'success' | 'error' | 'warning' | 'filter';
  /** default = 112px tall · sm = 72px tall. Ignored for variant="filter" (always pill, 72px). */
  size?: 'default' | 'sm';
  /** Only visibly affects outline/white-outline/gray-outline/filter — text and border turn #A7A7A7. */
  disabled?: boolean;
  /** Optional leading Phosphor icon name. */
  icon?: string;
  children: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
