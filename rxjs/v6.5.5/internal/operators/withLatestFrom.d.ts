import {
  ObservableInput,
  OperatorFunction,
  ObservedValueOf,
} from "../types.d.ts";
export declare function withLatestFrom<T, R>(
  project: (v1: T) => R,
): OperatorFunction<T, R>;
export declare function withLatestFrom<T, O2 extends ObservableInput<any>, R>(
  source2: O2,
  project: (v1: T, v2: ObservedValueOf<O2>) => R,
): OperatorFunction<T, R>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  R,
>(
  v2: O2,
  v3: O3,
  project: (v1: T, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R,
): OperatorFunction<T, R>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  R,
>(
  v2: O2,
  v3: O3,
  v4: O4,
  project: (
    v1: T,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>,
    v4: ObservedValueOf<O4>,
  ) => R,
): OperatorFunction<T, R>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  R,
>(
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  project: (
    v1: T,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>,
    v4: ObservedValueOf<O4>,
    v5: ObservedValueOf<O5>,
  ) => R,
): OperatorFunction<T, R>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  O6 extends ObservableInput<any>,
  R,
>(
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  v6: O6,
  project: (
    v1: T,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>,
    v4: ObservedValueOf<O4>,
    v5: ObservedValueOf<O5>,
    v6: ObservedValueOf<O6>,
  ) => R,
): OperatorFunction<T, R>;
export declare function withLatestFrom<T, O2 extends ObservableInput<any>>(
  source2: O2,
): OperatorFunction<T, [T, ObservedValueOf<O2>]>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
>(
  v2: O2,
  v3: O3,
): OperatorFunction<T, [T, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
>(
  v2: O2,
  v3: O3,
  v4: O4,
): OperatorFunction<
  T,
  [T, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]
>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
>(
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
): OperatorFunction<
  T,
  [
    T,
    ObservedValueOf<O2>,
    ObservedValueOf<O3>,
    ObservedValueOf<O4>,
    ObservedValueOf<O5>,
  ]
>;
export declare function withLatestFrom<
  T,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  O6 extends ObservableInput<any>,
>(
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  v6: O6,
): OperatorFunction<
  T,
  [
    T,
    ObservedValueOf<O2>,
    ObservedValueOf<O3>,
    ObservedValueOf<O4>,
    ObservedValueOf<O5>,
    ObservedValueOf<O6>,
  ]
>;
export declare function withLatestFrom<T, R>(
  ...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>
): OperatorFunction<T, R>;
export declare function withLatestFrom<T, R>(
  array: ObservableInput<any>[],
): OperatorFunction<T, R>;
export declare function withLatestFrom<T, R>(
  array: ObservableInput<any>[],
  project: (...values: Array<any>) => R,
): OperatorFunction<T, R>;
