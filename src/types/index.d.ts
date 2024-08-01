declare interface Fn<T = unknown, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFn<T = unknown, R = T> {
  (...arg: T[]): Promise<R>;
}

declare type RefType<T> = T | null;

declare type LabelValueOptions = {
  label: string;
  value: unknown;
  disabled: boolean;
  [key: string]: string | number | boolean;
}[];

declare type EmitType = (event: string, ...args: unknown[]) => void;

declare type TargetContext = '_self' | '_blank';

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
