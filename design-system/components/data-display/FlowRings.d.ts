/** Interlocking 160px rings, active violet vs inactive gray. */
export interface FlowRingStep { icon: string; label: string; description?: string; active?: boolean; }
export interface FlowRingsProps { steps: FlowRingStep[]; }
export function FlowRings(props: FlowRingsProps): JSX.Element;
