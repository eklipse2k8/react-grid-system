import ScreenClassResolver from '../../context/ScreenClassResolver';
import { VisibleClasses, isVisible } from './style';
import { ReactNode } from 'react';

export type VisibleProps = VisibleClasses & { children: ReactNode };

function Visible({ ...props }: VisibleProps): JSX.Element {
  return (
    <ScreenClassResolver>
      {(screenClass) => (!isVisible({ screenClass, ...props }) ? null : props.children)}
    </ScreenClassResolver>
  );
}

Visible.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  xxxl: false,
};

export default Visible;
