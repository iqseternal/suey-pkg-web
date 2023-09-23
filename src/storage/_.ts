/** storage的类型 */
export type StorageType = 'localStorage' | 'sessionStorage';

/** 使用storage的get方法时, 自定义解析 */
export type StorageGetDiyFn<T> = (data: string) => T;

/** 使用storage的set方法时, 自定义解密 */
export type StorageSetDiyFn<T> = (data: T) => string;

const parseData = <T>(data: string): T => {
  try { return JSON.parse(data) as unknown as T; }
  catch { return data as unknown as T; }
}

const stringifyData = <T>(data: T): string => {
  try { return JSON.stringify(data); }
  catch {
    console.warn(`序列化失败`);
    return '';
  }
}

export const initStorage = (storageType: StorageType) => {
  if (!window) throw new Error(`not have window...`);

  const storage = window[storageType];
  if (!storage) throw new Error(`not have window.${storageType}...`);


  function get<T>(key: string): T {
    const data = storage.getItem(key);
    if (!data) return null;
    return parseData(data);
  }

  function set<T>(key: string, value: T): void {
    const data = stringifyData(value);
    storage.setItem(key, data);
  }

  function remove(key: string): void {
    storage.removeItem(key);
  }

  function clear(): void {
    storage.clear();
  }

  return { get, set, remove, clear };
}
