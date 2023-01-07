/* global window */
import { ScreenClass } from './CoreTypes';
import { getConfiguration } from './config';
import { useState, useEffect, RefObject } from 'react';

function getViewPort(source?: RefObject<HTMLElement>): number | undefined {
  if (source && source.current && source.current.clientWidth) {
    return source.current.clientWidth;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }
  return undefined;
}

export const screenClasses: Array<ScreenClass> = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export function useScreenClass(
  source?: RefObject<HTMLElement>,
  fallbackScreenClass?: ScreenClass,
): ScreenClass {
  const getScreenClass = () => {
    const { breakpoints, defaultScreenClass, maxScreenClass } = getConfiguration();

    let newScreenClass: ScreenClass = defaultScreenClass;

    const viewport = getViewPort(source);
    if (viewport !== undefined) {
      newScreenClass = 'xs';
      if (breakpoints[0] && viewport >= breakpoints[0]) {
        newScreenClass = 'sm';
      }
      if (breakpoints[1] && viewport >= breakpoints[1]) {
        newScreenClass = 'md';
      }
      if (breakpoints[2] && viewport >= breakpoints[2]) {
        newScreenClass = 'lg';
      }
      if (breakpoints[3] && viewport >= breakpoints[3]) {
        newScreenClass = 'xl';
      }
      if (breakpoints[4] && viewport >= breakpoints[4]) {
        newScreenClass = 'xxl';
      }
      if (breakpoints[5] && viewport >= breakpoints[5]) {
        newScreenClass = 'xxxl';
      }
    } else if (fallbackScreenClass !== undefined) {
      newScreenClass = fallbackScreenClass;
    }

    const newScreenClassIndex = screenClasses.indexOf(newScreenClass);
    const maxScreenClassIndex = screenClasses.indexOf(maxScreenClass);
    if (maxScreenClassIndex >= 0 && newScreenClassIndex > maxScreenClassIndex) {
      newScreenClass = screenClasses[maxScreenClassIndex];
    }

    return newScreenClass;
  };

  const [screenClass, setScreenClass] = useState<ScreenClass>(() => getScreenClass());

  useEffect(() => {
    function onWindowResize(event: Event) {
      setScreenClass(getScreenClass());
    }
    window.addEventListener('resize', onWindowResize, false);
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
    };
  }, []);

  return screenClass;
}
