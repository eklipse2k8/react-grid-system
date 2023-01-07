import { StyleableComponent } from '../../CoreTypes';
import type * as CSSUtil from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
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
declare const Container: import("react").ForwardRefExoticComponent<ContainerProps & import("react").RefAttributes<HTMLElement>>;
export default Container;
