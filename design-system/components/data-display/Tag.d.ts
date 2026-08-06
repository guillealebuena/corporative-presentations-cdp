/**
 * App chip, 2x deck scale (height 20/16→40/32). serviceClass=true renders the pill-shaped
 * Tag/ServiceClass variant (cama, semicama…) instead — radius 9999, height 24→48, border #252525, text 12.
 */
export interface TagProps {
  variant?: 'default' | 'outline' | 'secondary' | 'expired' | 'primary-soft';
  size?: 'default' | 'sm';
  /** Renders the ServiceClass pill instead of a rectangular tag; ignores variant/size. */
  serviceClass?: boolean;
  children: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
