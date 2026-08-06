/** Axis-free 2px line trend. */
export interface KpiSparklineProps {
  values: number[];
  color?: string;
  width?: number;
  height?: number;
}
export function KpiSparkline(props: KpiSparklineProps): JSX.Element;
