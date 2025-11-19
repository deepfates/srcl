import * as React from 'react';

import { useHotkeys } from '@modules/hotkeys';
import * as Utilities from '@common/utilities';

export function useDebouncedCallback<T>(ms: number, f: (...args: T[]) => void, deps: any[]): (...args: T[]) => void {
  let throttled = false;
  let latestArgs: T | null = null;

  const clearThrottle = () => {
    throttled = false;

    if (latestArgs !== null) {
      f(latestArgs);
      latestArgs = null;
    }
  };

  return React.useCallback(
    (args) => {
      if (throttled) {
        latestArgs = args;
      } else {
        f(args);

        throttled = true;

        setTimeout(clearThrottle, ms);
      }
    },
    [...deps, ms]
  );
}

export const useGlobalNavigationHotkeys = () => {
  const onHandleSubmit = (event: KeyboardEvent) => {
    const target = event.target;
    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();
      target.click();
    }
  };

  const onHandleNextFocus = (event: KeyboardEvent) => {
    const target = event.target;
    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();
      const nextFocusable = Utilities.findNextFocusable(target as Element, 'next');
      if (nextFocusable) {
        nextFocusable.focus();
      }
    }
  };

  const onHandlePreviousFocus = (event: KeyboardEvent) => {
    const target = event.target;
    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();
      const previousFocusable = Utilities.findNextFocusable(target as Element, 'previous');
      if (previousFocusable) {
        previousFocusable.focus();
      }
    }
  };

  useHotkeys('ArrowDown', onHandleNextFocus);
  useHotkeys('ArrowUp', onHandlePreviousFocus);
  useHotkeys('ArrowRight', onHandleNextFocus);
  useHotkeys('ArrowLeft', onHandlePreviousFocus);
  useHotkeys('Enter', onHandleSubmit);
  useHotkeys(' ', onHandleSubmit);
};
