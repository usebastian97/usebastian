/// <reference types="astro/client" />

declare module 'alpinejs' {
  export interface Alpine {
    start(): void;
    data(name: string, callback: () => Record<string, unknown>): void;
    store(name: string, value?: Record<string, unknown>): Record<string, unknown>;
    effect(callback: () => void): void;
    entangle(getter: () => unknown, setter: (value: unknown) => void): unknown;
    watch(getter: () => unknown, callback: (value: unknown) => void): void;
    show(el: Element, callback?: () => void, fallback?: () => void): void;
    hide(el: Element, callback?: () => void, fallback?: () => void): void;
    transition(
      name: string,
      callback: (el: Element, show: boolean, callback?: () => void) => void
    ): void;
  }

  const Alpine: Alpine;
  export default Alpine;
}

declare global {
  interface Window {
    Alpine: import('alpinejs').default;
  }
}
