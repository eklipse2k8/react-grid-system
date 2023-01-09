import { ScreenClass } from '../../CoreTypes';
import { getConfiguration } from '../../config';
import ScreenClassResolver from '../../context/ScreenClassResolver';
import { getContainerStyle } from './style';
import { styled } from '@stitches/react';
import { StyledComponent } from '@stitches/react/types/styled-component';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content of the component
   */
  children: ReactNode;
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xs, not present means fluid everywhere
   */
  xs?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in sm, not present means fluid everywhere
   */
  sm?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in md, not present means fluid everywhere
   */
  md?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in lg, not present means fluid everywhere
   */
  lg?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xl, not present means fluid everywhere
   */
  xl?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxl, not present means fluid everywhere
   */
  xxl?: boolean;
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxxl, not present means fluid everywhere
   */
  xxxl?: boolean;
}

function createContainer(screenClass: ScreenClass, props: ContainerProps): StyledComponent<'div'> {
  const theStyle = getContainerStyle({
    ...props,
    screenClass,
    containerWidths: getConfiguration().containerWidths,
    gutterWidth: getConfiguration().gutterWidth,
  });
  return styled('div', {
    ...theStyle,
  });
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  return (
    <ScreenClassResolver>
      {(screenClass) => {
        const { children, fluid, xs, sm, md, lg, xl, xxl, xxxl, ...rest } = props;
        const ContainerImpl = createContainer(screenClass, props);
        return (
          <ContainerImpl ref={ref} {...rest}>
            {props.children}
          </ContainerImpl>
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
};

export default Container;
