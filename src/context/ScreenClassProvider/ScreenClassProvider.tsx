import { ScreenClass } from '../../CoreTypes';
import { getConfiguration } from '../../config';
import { useScreenClass } from '../../utils';
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';

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

export const ScreenClassContext = createContext<ScreenClass | undefined>(undefined);

function ScreenClassProvider({ ...props }: Props): JSX.Element {
  const screenClassRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const detectedScreenClass = useScreenClass(screenClassRef, props.fallbackScreenClass);
  const { defaultScreenClass } = getConfiguration();

  const screenClass = mounted
    ? detectedScreenClass
    : props.fallbackScreenClass || defaultScreenClass;

  useEffect(() => setMounted(true), []);

  return (
    <ScreenClassContext.Provider value={screenClass}>
      {props.useOwnWidth ? <div ref={screenClassRef}>{props.children}</div> : props.children}
    </ScreenClassContext.Provider>
  );
}

ScreenClassProvider.defaultProps = {
  useOwnWidth: false,
  fallbackScreenClass: null,
};

export default ScreenClassProvider;
