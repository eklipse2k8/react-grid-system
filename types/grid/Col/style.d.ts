import { ScreenClass } from '../../CoreTypes';
import { ColProps } from './Col';
import type * as CSSUtil from '@stitches/react/types/css-util';
export type ColumnWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'content';
export type ColumnClasses<T> = Partial<Record<ScreenClass, T>>;
interface ColumnStyleConfig extends ColProps {
    forceWidth?: number;
    width?: ColumnClasses<number | string>;
    screenClass: ScreenClass;
    gutterWidth?: number;
    gridColumns: number;
}
export declare function createColStyle({ forceWidth, width, offset, pull, push, order, debug, screenClass, gutterWidth, style, gridColumns, }: ColumnStyleConfig): CSSUtil.CSS;
export {};
