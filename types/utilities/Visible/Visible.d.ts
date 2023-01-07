import { VisibleClasses } from './style';
import { ReactNode } from 'react';
export type VisibleProps = VisibleClasses & {
    children: ReactNode;
};
declare function Visible({ ...props }: VisibleProps): JSX.Element;
declare namespace Visible {
    var defaultProps: {
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
        xxl: boolean;
        xxxl: boolean;
    };
}
export default Visible;
