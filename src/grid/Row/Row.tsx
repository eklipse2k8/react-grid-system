import { getConfiguration } from '../../config';
import getStyle from './style';
import { styled } from '@stitches/react';
import { createContext, forwardRef, HTMLAttributes, ReactNode } from 'react';

export type Align = 'normal' | 'start' | 'center' | 'end' | 'stretch';
export type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'initial' | 'inherit';
export type Direction = 'column' | 'row' | 'column-reverse' | 'row-reverse';
export type Wrap = 'nowrap' | 'wrap' | 'reverse';
type StyleableComponent = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content of the element
   */
  children: ReactNode;
  /**
   * Vertical column alignment
   */
  align?: Align;
  /**
   * Horizontal column alignment
   */
  justify?: Justify;
  /**
   * flex-direction style attribute
   */
  direction?: Direction;
  /**
   * flex-wrap style attribute
   */
  wrap?: Wrap;
  /**
   * No gutter for this row
   */
  nogutter?: boolean;
  /**
   * Custom gutter width for this row
   */
  gutterWidth?: number;
  /**
   * Set to apply some debug styling
   */
  debug?: boolean;
  /**
   * Use your own component
   */
  component?: StyleableComponent;
}

export const GutterWidthContext = createContext<number | undefined>(undefined);

const Row = forwardRef<HTMLElement, RowProps>((props, ref) => {
  let theGutterWidth = getConfiguration().gutterWidth;
  if (props.nogutter) {
    theGutterWidth = 0;
  } else if (typeof props.gutterWidth === 'number') {
    theGutterWidth = props.gutterWidth;
  }

  const theStyle = getStyle(props);
  const StyledComponent = styled(
    props.component !== null && props.component !== undefined ? props.component : 'div',
    {
      ...theStyle,
    },
  );

  const {
    children,
    align,
    justify,
    direction,
    wrap,
    nogutter,
    gutterWidth,
    debug,
    component,
    ...rest
  } = props;
  
  return (
    <StyledComponent ref={ref} {...rest}>
      <GutterWidthContext.Provider value={theGutterWidth}>
        {props.children}
      </GutterWidthContext.Provider>
    </StyledComponent>
  );
});

Row.defaultProps = {
  align: 'normal',
  justify: 'start',
  direction: 'row',
  wrap: 'wrap',
  nogutter: false,
  gutterWidth: undefined,
  debug: false,
  component: 'div',
};

export default Row;
