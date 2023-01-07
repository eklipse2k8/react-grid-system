import { RowProps } from './Row';
import { Property } from '@stitches/react/types/css';
import type * as CSSUtil from '@stitches/react/types/css-util';

export default function createRowStyle({
  gutterWidth,
  align,
  justify,
  debug,
  style,
  direction,
  wrap,
}: RowProps): CSSUtil.CSS {
  // Vertical alignment
  let alignItems: Property.AlignItems | undefined;
  if (align === 'start') {
    alignItems = 'flex-start';
  } else if (align === 'end') {
    alignItems = 'flex-end';
  } else {
    alignItems = align;
  }

  // Horizontal alignment
  let justifyContent: Property.JustifyContent | undefined;
  if (justify === 'start') {
    justifyContent = 'flex-start';
  } else if (justify === 'end') {
    justifyContent = 'flex-end';
  } else if (justify === 'between') {
    justifyContent = 'space-between';
  } else if (justify === 'around') {
    justifyContent = 'space-around';
  } else {
    justifyContent = justify;
  }

  const flexDirection: Property.FlexDirection | undefined = direction;

  let flexWrap: Property.FlexWrap | undefined;
  if (wrap === 'reverse') {
    flexWrap = 'wrap-reverse';
  } else {
    flexWrap = wrap;
  }

  const styles: CSSUtil.CSS = {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
  };

  if (gutterWidth !== undefined) {
    styles.marginLeft = -gutterWidth / 2;
    styles.marginRight = -gutterWidth / 2;
  }

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return { ...styles, ...style };
}
