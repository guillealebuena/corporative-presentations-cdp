/** Small corner "guiño" — a soft radial light for compact graphic elements (cards, badges, icon wells). Never for full-slide or full-canvas backgrounds; gradients are not a background resource in this system. */
export interface MeshGradientProps {
  /** Full-strength by default; pass ~0.15–0.2 for a subtle accent inside a card. */
  opacity?: number;
  /** Diameter in px of the glow. Default 480 — size it well under the container so it reads as an accent, not a wash. */
  size?: number;
  corner?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: string;
  style?: React.CSSProperties;
}
export function MeshGradient(props: MeshGradientProps): JSX.Element;
