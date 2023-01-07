import { ScreenClass } from '../../CoreTypes';
import { VisibleProps } from './Visible';

export type VisibleClasses = Partial<Record<ScreenClass, boolean>>;

type VisibleClassesStyle = VisibleProps & { screenClass: ScreenClass };

export function isVisible({
  screenClass,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
}: VisibleClassesStyle): boolean {
  switch (screenClass) {
    case 'xxl':
      return xxl || true;
    case 'xxxl':
      return xxxl || true;
    case 'xl':
      return xl || true;
    case 'lg':
      return lg || true;
    case 'md':
      return md || true;
    case 'sm':
      return sm || true;
  }
  return xs || true;
}
