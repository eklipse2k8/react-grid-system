import { ScreenClass } from '../../CoreTypes';
import { ContainerProps } from './Container';
import type * as CSSUtil from '@stitches/react/types/css-util';
export type ContainerStyleParams = ContainerProps & {
    screenClass: ScreenClass;
    containerWidths: number[];
    gutterWidth: number;
};
export declare function getContainerStyle({ fluid, xs, sm, md, lg, xl, xxl, xxxl, style, screenClass, containerWidths, gutterWidth, }: ContainerStyleParams): CSSUtil.CSS;
