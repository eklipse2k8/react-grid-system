import { ScreenClass } from './CoreTypes';
import { RefObject } from 'react';
export declare const screenClasses: Array<ScreenClass>;
export declare function useScreenClass(source?: RefObject<HTMLElement>, fallbackScreenClass?: ScreenClass): ScreenClass;
