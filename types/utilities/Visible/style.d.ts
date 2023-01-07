import { ScreenClass } from '../../CoreTypes';
import { VisibleProps } from './Visible';
export type VisibleClasses = Partial<Record<ScreenClass, boolean>>;
type VisibleClassesStyle = VisibleProps & {
    screenClass: ScreenClass;
};
export declare function isVisible({ screenClass, xs, sm, md, lg, xl, xxl, xxxl, }: VisibleClassesStyle): boolean;
export {};
