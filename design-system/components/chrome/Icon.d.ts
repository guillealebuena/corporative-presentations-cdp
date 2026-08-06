/**
 * Phosphor Regular icon (filled paths, no stroke). Renders inline SVG — no web font,
 * no CDN, so it survives standalone HTML, PPTX and PDF exports and works offline.
 * Reexported from icons/Icon.jsx; the glyph data lives in icons/icons.js (92 glyphs).
 * Sizes used in the deck: 24 inline, 28 card badge, 32 standalone, 22 table row.
 */
export interface IconProps {
  /** Any name in the set — see ICON_NAMES in icons/icons.js. CDP-specific concepts
   * (Passenger, Colectivo, Empresa, Agencia) resolve through documented aliases.
   * An unknown name renders nothing and warns in the console. */
  name: string;
  size?: number;
  /** CSS color; defaults to inherited text color. */
  color?: string;
  /** Accessible label. Without it the icon is aria-hidden. */
  title?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
