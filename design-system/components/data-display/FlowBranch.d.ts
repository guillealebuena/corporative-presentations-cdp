/** One root node opening into several branches. */
export interface FlowBranchItem { label: string; description?: string; }
export interface FlowBranchProps { root: string; branches: FlowBranchItem[]; }
export function FlowBranch(props: FlowBranchProps): JSX.Element;
