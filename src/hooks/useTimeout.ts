import { ref, onBeforeMount, onBeforeUnmount } from 'vue';

/**
 * timeout hooks, 该函数具有一个
 * @returns
 */
export const useTimeout = () => {
  const timer = ref<number | undefined>(void 0);

  const cancelTimeout = () => {
    if (timer.value) {
      clearTimeout(timer.value);
      timer.value = void 0;
    }
  }

  const perTimeout = (callback: (args: void) => void, ms?: number) => {
    cancelTimeout();
    timer.value = setTimeout(callback, ms);
  };

  onBeforeMount(() => {
    cancelTimeout();
  });

  onBeforeUnmount(() => {
    cancelTimeout();
  });

  return { perTimeout, timer, cancelTimeout };
};

