import { ScreenClass } from '../../CoreTypes';
import { ReactNode } from 'react';
type Props = {
    /**
     * Children of the ScreenClassProvider.
     * This should be all your child React nodes that are using `react-grid-system`.
     */
    children: ReactNode;
    /**
     * Boolean to determine whether own width should be used as source.
     * When provided, the screen class is derived from own dimensions instead of the window.
     */
    useOwnWidth?: boolean;
    /**
     * Screen class to use when it cannot be determined otherwise.
     * Useful for server side rendering.
     */
    fallbackScreenClass?: ScreenClass;
};
export declare const ScreenClassContext: import("react").Context<ScreenClass | undefined>;
declare function ScreenClassProvider({ ...props }: Props): JSX.Element;
declare namespace ScreenClassProvider {
    var defaultProps: {
        useOwnWidth: boolean;
        fallbackScreenClass: null;
    };
}
export default ScreenClassProvider;
