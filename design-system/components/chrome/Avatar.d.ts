/** App avatar, 2x deck scale (40×40→80×80), circular, soft-violet placeholder fill. */
export interface AvatarProps {
  size?: number;
  src?: string;
  /** 1-2 letter initials shown instead of the placeholder icon. */
  initials?: string;
}
export function Avatar(props: AvatarProps): JSX.Element;
