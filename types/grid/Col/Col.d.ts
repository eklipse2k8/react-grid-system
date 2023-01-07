import { StyleableComponent } from '../../CoreTypes';
import { ColumnClasses, ColumnWidth } from './style';
import type * as CSSUtil from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export type ColProps = {
    /**
     * Content of the column
     */
    children: ReactNode;
    /**
     * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
     */
    xs: ColumnWidth;
    /**
     * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
     */
    sm: ColumnWidth;
    /**
     * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
     */
    md: ColumnWidth;
    /**
     * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
     */
    lg: ColumnWidth;
    /**
     * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
     */
    xl: ColumnWidth;
    /**
     * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
     */
    xxl: ColumnWidth;
    /**
     * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
     */
    xxxl: ColumnWidth;
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
     * Optional styling
     */
    style?: CSSUtil.CSS;
    /**
     * Set to apply some debug styling
     */
    debug?: boolean;
    /**
     * Use your own component
     */
    component?: StyleableComponent;
};
declare const Col: import("react").ForwardRefExoticComponent<ColProps & import("react").RefAttributes<HTMLElement>>;
export default Col;
