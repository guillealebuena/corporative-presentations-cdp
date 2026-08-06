/**
 * Graphic separator — replaces the middle-dot ("·") as a redaction habit when two data points share a line.
 * inline=true renders a 1×14px vertical hairline with 12px space on each side; inline=false renders a full-width 1px horizontal rule.
 */
export interface DividerProps {
  inline?: boolean;
  color?: string;
}
export function Divider(props: DividerProps): JSX.Element;
