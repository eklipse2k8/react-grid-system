import { HTMLAttributes, ReactNode } from 'react';
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
declare const Container: import("react").ForwardRefExoticComponent<ContainerProps & import("react").RefAttributes<HTMLDivElement>>;
export default Container;
