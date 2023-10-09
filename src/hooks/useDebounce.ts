import { useTimeout } from './useTimeout';

export const useDebounce = (fn: (...args: any[]) => void, wait = 300) => {
  const { perTimeout, cancelTimeout } = useTimeout();

  return () => {
    cancelTimeout();

    perTimeout(() => fn && fn(), wait);
  };
};
