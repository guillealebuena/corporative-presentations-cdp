/**
 * Phosphor Regular icon (filled paths, no stroke). Requires the Phosphor web font loaded once per page:
 * <script src="https://unpkg.com/@phosphor-icons/web"></script>.
 * Sizes used in the deck: 24 inline, 28 card badge, 32 standalone, 22 table row.
 */
export interface IconProps {
  /** A name drawn in the App (ArrowUUpLeft, User, Question, Lightbulb, Phone, FileText, MagnifyingGlass,
   * Heart, HeartFill, CalendarDots, BookBookmark, CheckCircle, Check, Globe, GlobeHemisphereWest,
   * DotsThreeCircle, WarningCircle, Passenger) or any other Phosphor Regular glyph name (PascalCase, auto-slugged). */
  name: string;
  size?: number;
  /** CSS color; defaults to inherited text color. */
  color?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
