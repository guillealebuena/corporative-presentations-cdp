/** Diffuse violet-to-turquoise mesh gradient for brand backgrounds (covers, dark data slides) — the only place gradients are allowed. Absolutely positioned; place inside a `position:relative` dark-background container. */
export interface MeshGradientProps {
  /** Full-strength by default; pass ~0.15 for a subtle corner wash on a card. */
  opacity?: number;
  style?: React.CSSProperties;
}
export function MeshGradient(props: MeshGradientProps): JSX.Element;
