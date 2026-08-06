/** Giant faint slide number anchored bottom-right — 240px Poppins SemiBold at 6% opacity. Purely decorative; the real page number still goes in SlideFooter. */
export interface PageNumberWatermarkProps {
  number: string | number;
  color?: string;
}
export function PageNumberWatermark(props: PageNumberWatermarkProps): JSX.Element;
