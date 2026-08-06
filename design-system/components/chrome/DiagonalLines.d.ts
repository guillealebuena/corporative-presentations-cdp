/** Near-imperceptible 45° diagonal hairlines (1px, 24px repeat), 5-10% opacity — for slide corners. Absolutely positioned; place inside a `position:relative` container and usually clip to a corner with a mask or a smaller sized wrapper. */
export interface DiagonalLinesProps {
  color?: string;
  opacity?: number;
  style?: React.CSSProperties;
}
export function DiagonalLines(props: DiagonalLinesProps): JSX.Element;
