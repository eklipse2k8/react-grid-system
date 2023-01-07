import { ScreenClass } from '../../CoreTypes';
import { ContainerProps } from './Container';
import type * as CSSUtil from '@stitches/react/types/css-util';

export type ContainerStyleParams = ContainerProps & {
  screenClass: ScreenClass;
  containerWidths: number[];
  gutterWidth: number;
};

export function getContainerStyle({
  fluid,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
  style,
  screenClass,
  containerWidths,
  gutterWidth,
}: ContainerStyleParams): CSSUtil.CSS {
  const styles: CSSUtil.CSS = {
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: gutterWidth / 2,
    paddingRight: gutterWidth / 2,
  };

  if (fluid && !xs && !sm && !md && !lg && !xl) {
    return { ...styles, ...style };
  }

  if (screenClass === 'xs' && containerWidths[0] && !xs) {
    styles.maxWidth = containerWidths[0];
  }

  if (screenClass === 'sm' && containerWidths[0] && !sm) {
    styles.maxWidth = containerWidths[0];
  }

  if (screenClass === 'md' && containerWidths[1] && !md) {
    styles.maxWidth = containerWidths[1];
  }

  if (screenClass === 'lg' && containerWidths[2] && !lg) {
    styles.maxWidth = containerWidths[2];
  }

  if (screenClass === 'xl' && containerWidths[3] && !xl) {
    styles.maxWidth = containerWidths[3];
  }

  if (screenClass === 'xxl' && containerWidths[4] && !xxl) {
    styles.maxWidth = containerWidths[4];
  }
  if (screenClass === 'xxxl' && containerWidths[5] && !xxxl) {
    styles.maxWidth = containerWidths[5];
  }

  return { ...styles, ...style };
}
