/** Soft band with a highlighted takeaway phrase. */
export interface InsightBandProps {
  text: string;
  /** Exact substring of text to render in violet semibold. */
  highlight?: string;
}
export function InsightBand(props: InsightBandProps): JSX.Element;
