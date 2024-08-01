/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<object, object, unknown>;
  export default Component;
}

declare module 'virtual:*' {
  const result: unknown;
  export default result;
}
