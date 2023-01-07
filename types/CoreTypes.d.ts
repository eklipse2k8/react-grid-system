import { ReactNode } from "react";
export type ScreenClass = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export declare const NO_PROVIDER_FLAG = "NO_PROVIDER_FLAG";
export type ScreenClassNode = (screenClass: ScreenClass) => ReactNode;
export type StyleableComponent = keyof JSX.IntrinsicElements | React.ComponentType<any>;
export type Configuration = {
    breakpoints: Array<number>;
    containerWidths: Array<number>;
    gutterWidth: number;
    gridColumns: 12;
    defaultScreenClass: ScreenClass;
    maxScreenClass: ScreenClass;
};
