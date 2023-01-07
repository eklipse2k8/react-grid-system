import { HTMLAttributes, ReactNode } from 'react';
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
export declare const GutterWidthContext: import("react").Context<number | undefined>;
declare const Row: import("react").ForwardRefExoticComponent<RowProps & import("react").RefAttributes<HTMLElement>>;
export default Row;
