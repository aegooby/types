import { MonoTypeOperatorFunction } from "../types.d.ts";
export declare function distinctUntilChanged<T>(
  compare?: (x: T, y: T) => boolean,
): MonoTypeOperatorFunction<T>;
export declare function distinctUntilChanged<T, K>(
  compare: (x: K, y: K) => boolean,
  keySelector: (x: T) => K,
): MonoTypeOperatorFunction<T>;
