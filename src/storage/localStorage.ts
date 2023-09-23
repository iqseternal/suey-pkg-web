import { initStorage } from './_';
const { get, set, remove, clear } = initStorage('localStorage');

/**
 * localStorage 的 get 方法
 */
export const loGet = get;
/**
 * localStorage 的 set 方法
 */
export const loSet = set;
/**
 * localStorage 的 remove 方法
 */
export const loRemove = remove;
/**
 * localStorage 的 clear 方法
 */
export const loClear = clear;
