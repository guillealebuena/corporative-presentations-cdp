/** Correct logo variant per background. */
export interface LogoMarkProps {
  /** wordmark-violeta (light bg) · wordmark-blanco (dark/brand bg) · isotipo (square) · lockup-violeta/lockup-blanco (with "Compará. Elegí. Viajá."). */
  variant?: 'wordmark-violeta' | 'wordmark-blanco' | 'isotipo' | 'lockup-violeta' | 'lockup-blanco';
  height?: number;
  style?: React.CSSProperties;
}
export function LogoMark(props: LogoMarkProps): JSX.Element;
