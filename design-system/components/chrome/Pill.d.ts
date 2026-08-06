/** Category pill for covers, dividers, and decorative chip use. */
export interface PillProps {
  children: React.ReactNode;
  /** soft = violet-on-white · brand = translucent white (on violet bg) · turquoise = accent soft ·
   * solid = full violet fill · outline = violet border, transparent fill · dark = translucent on dark backgrounds. */
  tone?: 'soft' | 'brand' | 'turquoise' | 'solid' | 'outline' | 'dark';
}
export function Pill(props: PillProps): JSX.Element;
