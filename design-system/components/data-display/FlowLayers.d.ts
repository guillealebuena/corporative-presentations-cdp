/** Stacked layers for a simple architecture diagram. */
export interface FlowLayer { label: string; detail?: string; }
export interface FlowLayersProps { layers: FlowLayer[]; }
export function FlowLayers(props: FlowLayersProps): JSX.Element;
