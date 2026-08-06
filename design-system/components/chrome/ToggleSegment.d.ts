/** Decorative segmented control for showing a data cut. */
export interface ToggleSegmentProps {
  /** 2-3 short labels. */
  options: string[];
  /** Index of the selected segment. */
  active?: number;
}
export function ToggleSegment(props: ToggleSegmentProps): JSX.Element;
