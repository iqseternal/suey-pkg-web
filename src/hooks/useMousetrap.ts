
import type { Ref } from 'vue';
import { onBeforeMount, onBeforeUnmount, onMounted, ref, isRef } from 'vue';

import type { MousetrapInstance } from 'mousetrap';
import Mousetrap, { bind } from 'mousetrap';

export type MousetrapAction = 'keyup' | 'keydown';

export type MousetrapBindFn = (e: Mousetrap.ExtendedKeyboardEvent, combo: string) => void;

export type MousetrapBinds = [(string | string[]), MousetrapBindFn, MousetrapAction?][];

export type { MousetrapInstance };
export { Mousetrap };

/**
 * 为元素添加一个快捷方式
 * @param el
 * @param keys
 * @param callback
 * @param action
 */
export function useMousetrap(el: HTMLElement | Ref<HTMLElement>, keys: string | string[], callback: MousetrapBindFn, action?: MousetrapAction): Ref<MousetrapInstance>;

/**
 * 为元素添加多个快捷方式
 * @param el
 * @param binds
 */
export function useMousetrap(el: HTMLElement | Ref<HTMLElement>, binds?: MousetrapBinds): Ref<MousetrapInstance>;

/**
 * 全局添加一个快捷方式
 * @param keys
 * @param callback
 * @param action
 */
export function useMousetrap(keys: string | string[], callback: MousetrapBindFn, action?: MousetrapAction): Ref<MousetrapInstance>;

/**
 * 全局添加多个快捷方式
 * @param binds
 */
export function useMousetrap(binds: MousetrapBinds): Ref<MousetrapInstance>;

export function useMousetrap(
  _1: HTMLElement | Ref<HTMLElement> | string | string[] | MousetrapBinds,
  _2?: string | string[] | MousetrapBinds | (MousetrapBindFn),
  _3?: (MousetrapBindFn) | MousetrapAction,
  _4?: MousetrapAction
): Ref<MousetrapInstance> {
  let dom = ref(void 0) as unknown as Ref<HTMLElement>;

  if (isRef(_1)) dom = _1;
  else if (_1 instanceof HTMLElement) dom = ref(_1);

  let binds: MousetrapBinds = [];

  // 第四个重载
  if (Array.isArray(_1) && (_1 as []).every(e => Array.isArray(e))) binds = _1 as MousetrapBinds;
  // 第三个重载
  else if (((Array.isArray(_1) && (_1 as string[]).every(e => typeof e === 'string')) || typeof _1 === 'string') && typeof _2 === 'function' && (typeof _3 === 'string' || _3 === void 0)) binds = [[_1 as (string | string[]), _2, _3 as unknown as (MousetrapAction)]];
  // 第二个重载
  else if ((_1 instanceof HTMLElement || isRef(_1)) && (Array.isArray(_2) && _2.length >= 2 && typeof _2[1] === 'function')) binds = _2 as MousetrapBinds;
  // 第一个重载
  else if ((_1 instanceof HTMLElement || isRef(_1)) && Array.isArray(_2) && (_2 as string[]).every(e => typeof e === 'string') && typeof _3 === 'function' && (typeof _4 === 'string' || _4 === void 0)) binds = [[_2 as (string | string[]), _3, _4]];

  let mousetrap = ref() as Ref<MousetrapInstance>;

  onMounted(() => {
    mousetrap.value = (dom.value instanceof HTMLElement) ? new Mousetrap(dom.value) : new Mousetrap();
    mousetrap.value.reset();

    binds.forEach(bind => mousetrap.value.bind(bind[0], bind[1], bind[2]));
  });

  onBeforeUnmount(() => {
    if (mousetrap.value) mousetrap.value.reset();
  });

  return mousetrap;
}
