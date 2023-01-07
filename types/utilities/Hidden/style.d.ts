import { ScreenClass } from '../../CoreTypes';
import { HiddenProps } from './Hidden';
export type HiddenClasses = Partial<Record<ScreenClass, boolean>>;
type HiddenClassesStyle = HiddenProps & {
    screenClass: ScreenClass;
};
export declare function isHidden({ screenClass, xs, sm, md, lg, xl, xxl, xxxl, }: HiddenClassesStyle): boolean;
export {};
