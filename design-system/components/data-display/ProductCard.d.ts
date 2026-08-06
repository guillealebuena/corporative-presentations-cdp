/**
 * The App's actual Card (not the presentation benefit-card "Card"), 2x deck scale: radius 12→24,
 * padding 20→40, border 0.5px→1px #BABABA, body text 16 Regular #252525 (unscaled). badge="promo" adds the
 * turquoise Card/Badge Promo chip inline; badge="destacado" adds the violet Card/Badge Destacado top band.
 */
export interface ProductCardProps {
  badge?: 'none' | 'promo' | 'destacado';
  title?: string;
  children: React.ReactNode;
}
export function ProductCard(props: ProductCardProps): JSX.Element;
