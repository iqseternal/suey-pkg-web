import Cookies from 'js-cookie';
/**
 * cookie 的 Get 方法
 * @param {string} key 存储时使用key值
 * @returns {string} 返回存储的数据
 */
export const ckGet = (key: string) => Cookies.get(key);
/**
 * cookie 的 Set 方法
 * @param {string} key 存储时的key值
 * @param {string} value 存储的数据, 可以是一个任意数据类型
 * @param {number} time 存储的时间, 过期则会自动销毁
 * @returns {void}
 */
export const ckSet = (key: string, data: string, timer?: number) => Cookies.set(key, data, typeof timer === 'number' ? { expires: timer } : void 0);
/**
 * cookie 的 Remove 方法
 * @param {string} key 移除key所存储的数据
 * @returns {void}
 */
export const ckRemove = (key: string) => Cookies.remove(key);

