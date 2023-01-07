import ScreenClassResolver from '../../context/ScreenClassResolver';
import { HiddenClasses, isHidden } from './style';
import { ReactNode } from 'react';

export type HiddenProps = HiddenClasses & { children: ReactNode };

function Hidden({ ...props }: HiddenProps): JSX.Element {
  return (
    <ScreenClassResolver>
      {(screenClass) => (isHidden({ screenClass, ...props }) ? null : props.children)}
    </ScreenClassResolver>
  );
}

Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  xxxl: false,
};

export default Hidden;
