import { ScreenClass } from '../../CoreTypes';
import { HiddenProps } from './Hidden';

export type HiddenClasses = Partial<Record<ScreenClass, boolean>>;

type HiddenClassesStyle = HiddenProps & { screenClass: ScreenClass };

export function isHidden({
  screenClass,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
}: HiddenClassesStyle): boolean {
  switch (screenClass) {
    case 'xxl':
      return xxl || false;
    case 'xxxl':
      return xxxl || false;
    case 'xl':
      return xl || false;
    case 'lg':
      return lg || false;
    case 'md':
      return md || false;
    case 'sm':
      return sm || false;
  }
  return xs || false;
}
