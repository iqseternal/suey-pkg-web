import { initStorage } from './_';
const { get, set, remove, clear } = initStorage('sessionStorage');

/**
 * sessionStorage 的 get 方法
 */
export const seGet = get;
/**
 * sessionStorage 的 set 方法
 */
export const seSet = set;
/**
 * sessionStorage 的 remove 方法
 */
export const seRemove = remove;
/**
 * sessionStorage 的 clear 方法
 */
export const seClear = clear;
