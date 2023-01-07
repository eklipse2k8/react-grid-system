import { ScreenClass } from '../../CoreTypes';
import ScreenClassResolver from '../../context/ScreenClassResolver';
import { ReactNode } from 'react';

type ScreenClassFunction = (screenClass: ScreenClass) => ReactNode;

type Props = {
  /**
   * The function which return value will be rendered.
   * Will be called with one argument: the screen class.
   */
  render: ScreenClassFunction;
};

function ScreenClassRender({ ...props }: Props): JSX.Element {
  return <ScreenClassResolver>{(screenClass) => props.render(screenClass)}</ScreenClassResolver>;
}

export default ScreenClassRender;
