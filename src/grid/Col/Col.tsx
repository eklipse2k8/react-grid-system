import { StyleableComponent } from '../../CoreTypes';
import { getConfiguration } from '../../config';
import ScreenClassResolver from '../../context/ScreenClassResolver';
import { GutterWidthContext } from '../Row/Row';
import { ColumnClasses, ColumnWidth, createColStyle } from './style';
import { styled } from '@stitches/react';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content of the column
   */
  children: ReactNode;
  /**
   * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
   */
  xs?: ColumnWidth;
  /**
   * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
   */
  sm?: ColumnWidth;
  /**
   * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
   */
  md?: ColumnWidth;
  /**
   * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
   */
  lg?: ColumnWidth;
  /**
   * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
   */
  xl?: ColumnWidth;
  /**
   * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
   */
  xxl?: ColumnWidth;
  /**
   * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
   */
  xxxl?: ColumnWidth;
  /**
   * A fixed width of the column for all screenclasses"
   */
  width?: ColumnClasses<number | string>;
  /**
   * The offset of this column for all screenclasses
   */
  offset?: ColumnClasses<number>;
  /**
   * The amount this column is pushed to the right for all screenclasses
   */
  push?: ColumnClasses<number>;
  /**
   * The amount this column is pulled to the left for all screenclasses
   */
  pull?: ColumnClasses<number>;
  /**
   * The order this column is pulled to the left for all screenclasses
   */
  order?: ColumnClasses<number>;
  /**
   * Set to apply some debug styling
   */
  debug?: boolean;
  /**
   * Use your own component
   */
  component?: StyleableComponent;
}

const Col = forwardRef<HTMLElement, ColProps>((props, ref) => {
  return (
    <ScreenClassResolver>
      {(screenClass) => (
        <GutterWidthContext.Consumer>
          {(gutterWidth) => {
            const theStyle = createColStyle({
              ...props,
              forceWidth: undefined,
              screenClass,
              gutterWidth,
              gridColumns: getConfiguration().gridColumns,
            });
            const StyledComponent = styled(
              props.component !== null && props.component !== undefined ? props.component : 'div',
              {
                ...theStyle,
              },
            );

            const {
              children,
              xs,
              sm,
              md,
              lg,
              xl,
              xxl,
              xxxl,
              width,
              offset,
              push,
              pull,
              order,
              debug,
              component,
              ...rest
            } = props;

            return (
              <StyledComponent ref={ref} {...rest}>
                {props.children}
              </StyledComponent>
            );
          }}
        </GutterWidthContext.Consumer>
      )}
    </ScreenClassResolver>
  );
});

Col.defaultProps = {
  debug: false,
  component: 'div',
};

export default Col;
