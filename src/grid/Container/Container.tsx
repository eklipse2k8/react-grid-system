import { StyleableComponent } from '../../CoreTypes';
import { getConfiguration } from '../../config';
import ScreenClassResolver from '../../context/ScreenClassResolver';
import { getContainerStyle } from './style';
import { styled } from '@stitches/react';
import type * as CSSUtil from '@stitches/react/types/css-util';
import { forwardRef, ReactNode } from 'react';

export interface ContainerProps {
  /**
   * Content of the component
   */
  children: ReactNode;
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xs, not present means fluid everywhere
   */
  xs: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in sm, not present means fluid everywhere
   */
  sm: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in md, not present means fluid everywhere
   */
  md: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in lg, not present means fluid everywhere
   */
  lg: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xl, not present means fluid everywhere
   */
  xl: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxl, not present means fluid everywhere
   */
  xxl: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxxl, not present means fluid everywhere
   */
  xxxl: boolean;
  /**
   * Optional styling
   */
  style?: CSSUtil.CSS;
  /**
   * Use your own component
   */
  component?: StyleableComponent;
}

const Container = forwardRef<HTMLElement, ContainerProps>((props, ref) => {
  return (
    <ScreenClassResolver>
      {(screenClass) => {
        const theStyle = getContainerStyle({
          ...props,
          screenClass,
          containerWidths: getConfiguration().containerWidths,
          gutterWidth: getConfiguration().gutterWidth,
        });
        const StyledComponent = styled(
          props.component !== null && props.component !== undefined ? props.component : 'div',
          {
            ...theStyle,
          },
        );

        // TODO: Add ...rest
        return (
          <StyledComponent ref={ref}>
            {props.children}
          </StyledComponent>
        );
      }}
    </ScreenClassResolver>
  );
});

Container.defaultProps = {
  fluid: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  xxxl: false,
  style: {},
  component: 'div',
};

export default Container;
