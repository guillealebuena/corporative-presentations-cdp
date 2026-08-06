/** App status dot, 2x deck scale (8×8→16×16). Pass a semantic color (success/error/warning/turquoise). */
export interface BadgeDotProps {
  color?: string;
  size?: number;
}
export function BadgeDot(props: BadgeDotProps): JSX.Element;
