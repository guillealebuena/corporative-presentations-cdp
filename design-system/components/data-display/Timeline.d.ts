/** Connected sequential steps. */
export interface TimelineStep { label: string; description?: string; /** Phosphor icon shown in the step's circle instead of the order number. */ icon?: string; }
export interface TimelineProps { steps: TimelineStep[]; }
export function Timeline(props: TimelineProps): JSX.Element;
