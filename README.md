设置 npm 源

npm config set registry https://registry.npmjs.org

安装

npm install @suey/pkg-web --save

pnpm install @suey/pkg-web --save


```vue
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useMousetrap } from '@suey/pkg-web';

const router = useRouter();

// 监听键盘快捷键 Alt + 左右方向键, 只要当前组件存活(没有被销毁), 那么这个快捷键事件就存在
useMousetrap([
  ['alt+left', () => router.back(), 'keyup'],
  ['alt+right', () => router.forward(), 'keyup']
]);

// 你也可以写成单个的形式
useMousetrap('alt+left', () => router.back(), 'keyup');
useMousetrap('alt+right', () => router.forward(), 'keyup');

// 也可以多个快捷键触发同一个事件, 那么你的 key 应该更换为数组的形式
useMousetrap(['alt+left', 'left'], () => router.back(), 'keyup');
</script>
```

```typescript
// pkg-web

// cookie
export declare const ckGet: (key: string) => string;
export declare const ckSet: (key: string, data: string, timer?: number) => string;
export declare const ckRemove: (key: string) => void;

// localstorage
export declare const loGet: <T>(key: string) => T;
export declare const loSet: <T>(key: string, value: T) => void;
export declare const loRemove: (key: string) => void;
export declare const loClear: () => void;

// sessionstorage
export declare const seGet: <T>(key: string) => T;
export declare const seSet: <T>(key: string, value: T) => void;
export declare const seRemove: (key: string) => void;
export declare const seClear: () => void;

// 监听键盘快捷键
export declare function useMousetrap(el: HTMLElement | Ref<HTMLElement>, keys: string | string[], callback: MousetrapBindFn, action?: MousetrapAction): Ref<MousetrapInstance>;
export declare function useMousetrap(el: HTMLElement | Ref<HTMLElement>, binds?: MousetrapBinds): Ref<MousetrapInstance>;
export declare function useMousetrap(keys: string | string[], callback: MousetrapBindFn, action?: MousetrapAction): Ref<MousetrapInstance>;
export declare function useMousetrap(binds: MousetrapBinds): Ref<MousetrapInstance>;

// 监听 DOM 事件
export declare function useEventListenerForElement<K extends keyof HTMLElementEventMap>(dom: HTMLElement, evtKey: K, listener: (ev: HTMLElementEventMap[K]) => any): void;
export declare function useEventListenerForElement<K extends keyof HTMLElementEventMap>(dom: HTMLElement, props: Record<K, (ev: HTMLElementEventMap[K]) => any>): void;
export declare function useEventListener<K extends keyof HTMLElementEventMap>(dom: Ref<HTMLElement>, evtKey: K, listener: (ev: HTMLElementEventMap[K]) => any): void;
export declare function useEventListener<K extends keyof HTMLElementEventMap>(dom: Ref<HTMLElement>, props: Record<K, (ev: HTMLElementEventMap[K]) => any>): void;

// 设置 DOM 样式
export declare const cssRoot: HTMLElement;
export declare const setCssVar: <T extends string>(node: HTMLElement, cssVar: T, value: string, isImportant?: boolean) => void;
export declare const getCssVar: (node: HTMLElement, cssVar: string) => string;
export declare const setCssVars: (node: HTMLElement, properties: Record<string, string>, isImportant?: boolean) => void;
export declare const setCssVarForRoot: <T extends string>(cssVar: T, value: string) => void;
export declare const getCssVarForRoot: (cssVar: string) => string;
export declare const setCssVarsForRoot: (properties: Record<string, string>) => void;
export declare const setStyleProperty: <T extends keyof CSSStyleDeclaration>(node: HTMLElement, key: T, value: CSSStyleDeclaration[T]) => CSSStyleDeclaration[T];
export declare const setStyleProperties: (node: HTMLElement, styleProperties: Partial<CSSStyleDeclaration>) => void;
```
