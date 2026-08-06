/** Standard content-slide footer: wordmark left, two-digit page number right, at y=978. Covers, dividers and the closing slide never carry this. */
export interface SlideFooterProps {
  /** Two-digit slide number, e.g. "02". Omit to hide the number. */
  pageNumber?: string;
}
export function SlideFooter(props: SlideFooterProps): JSX.Element;
