import { ScreenClass } from '../../CoreTypes';
import { ReactNode } from 'react';
type ScreenClassFunction = (screenClass: ScreenClass) => ReactNode;
type Props = {
    /**
     * The function which return value will be rendered.
     * Will be called with one argument: the screen class.
     */
    render: ScreenClassFunction;
};
declare function ScreenClassRender({ ...props }: Props): JSX.Element;
export default ScreenClassRender;
