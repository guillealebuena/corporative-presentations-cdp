/** Vertical line with milestone dots. */
export interface FlowMilestone { label: string; description?: string; }
export interface FlowTimelineProps { milestones: FlowMilestone[]; }
export function FlowTimeline(props: FlowTimelineProps): JSX.Element;
