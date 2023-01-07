import { HiddenClasses } from './style';
import { ReactNode } from 'react';
export type HiddenProps = HiddenClasses & {
    children: ReactNode;
};
declare function Hidden({ ...props }: HiddenProps): JSX.Element;
declare namespace Hidden {
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
export default Hidden;
