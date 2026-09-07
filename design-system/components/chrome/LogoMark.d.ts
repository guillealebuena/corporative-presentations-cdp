/** Correct logo variant per background. */
export interface LogoMarkProps {
  /** wordmark-violeta (light bg) · wordmark-blanco (dark/brand bg) · wordmark-stacked (three-line, tight/square spaces) · isotipo (circular badge) · lockup-violeta/lockup-blanco (with "Compará. Elegí. Viajá.") · lockup-badge (lockup pre-set on a violet rounded box). */
  variant?: 'wordmark-violeta' | 'wordmark-blanco' | 'wordmark-stacked' | 'isotipo' | 'lockup-violeta' | 'lockup-blanco' | 'lockup-badge';
  height?: number;
  style?: React.CSSProperties;
}
export function LogoMark(props: LogoMarkProps): JSX.Element;
