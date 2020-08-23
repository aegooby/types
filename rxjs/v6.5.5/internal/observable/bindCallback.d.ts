import { SchedulerLike } from "../types.d.ts";
import { Observable } from "../Observable.d.ts";
/** @deprecated resultSelector is no longer supported, use a mapping function. */
export declare function bindCallback(
  callbackFunc: Function,
  resultSelector: Function,
  scheduler?: SchedulerLike,
): (...args: any[]) => Observable<any>;
export declare function bindCallback<R1, R2, R3, R4>(
  callbackFunc: (
    callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any,
  ) => any,
  scheduler?: SchedulerLike,
): () => Observable<any[]>;
export declare function bindCallback<R1, R2, R3>(
  callbackFunc: (callback: (res1: R1, res2: R2, res3: R3) => any) => any,
  scheduler?: SchedulerLike,
): () => Observable<[R1, R2, R3]>;
export declare function bindCallback<R1, R2>(
  callbackFunc: (callback: (res1: R1, res2: R2) => any) => any,
  scheduler?: SchedulerLike,
): () => Observable<[R1, R2]>;
export declare function bindCallback<R1>(
  callbackFunc: (callback: (res1: R1) => any) => any,
  scheduler?: SchedulerLike,
): () => Observable<R1>;
export declare function bindCallback(
  callbackFunc: (callback: () => any) => any,
  scheduler?: SchedulerLike,
): () => Observable<void>;
export declare function bindCallback<A1, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1) => Observable<any[]>;
export declare function bindCallback<A1, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    callback: (res1: R1, res2: R2, res3: R3) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1) => Observable<[R1, R2, R3]>;
export declare function bindCallback<A1, R1, R2>(
  callbackFunc: (arg1: A1, callback: (res1: R1, res2: R2) => any) => any,
  scheduler?: SchedulerLike,
): (arg1: A1) => Observable<[R1, R2]>;
export declare function bindCallback<A1, R1>(
  callbackFunc: (arg1: A1, callback: (res1: R1) => any) => any,
  scheduler?: SchedulerLike,
): (arg1: A1) => Observable<R1>;
export declare function bindCallback<A1>(
  callbackFunc: (arg1: A1, callback: () => any) => any,
  scheduler?: SchedulerLike,
): (arg1: A1) => Observable<void>;
export declare function bindCallback<A1, A2, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2) => Observable<any[]>;
export declare function bindCallback<A1, A2, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (res1: R1, res2: R2, res3: R3) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2) => Observable<[R1, R2, R3]>;
export declare function bindCallback<A1, A2, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (res1: R1, res2: R2) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2) => Observable<[R1, R2]>;
export declare function bindCallback<A1, A2, R1>(
  callbackFunc: (arg1: A1, arg2: A2, callback: (res1: R1) => any) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2) => Observable<R1>;
export declare function bindCallback<A1, A2>(
  callbackFunc: (arg1: A1, arg2: A2, callback: () => any) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2) => Observable<void>;
export declare function bindCallback<A1, A2, A3, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3) => Observable<any[]>;
export declare function bindCallback<A1, A2, A3, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (res1: R1, res2: R2, res3: R3) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3) => Observable<[R1, R2, R3]>;
export declare function bindCallback<A1, A2, A3, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (res1: R1, res2: R2) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3) => Observable<[R1, R2]>;
export declare function bindCallback<A1, A2, A3, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (res1: R1) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3) => Observable<R1>;
export declare function bindCallback<A1, A2, A3>(
  callbackFunc: (arg1: A1, arg2: A2, arg3: A3, callback: () => any) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3) => Observable<void>;
export declare function bindCallback<A1, A2, A3, A4, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<any[]>;
export declare function bindCallback<A1, A2, A3, A4, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (res1: R1, res2: R2, res3: R3) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<[R1, R2, R3]>;
export declare function bindCallback<A1, A2, A3, A4, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (res1: R1, res2: R2) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<[R1, R2]>;
export declare function bindCallback<A1, A2, A3, A4, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (res1: R1) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<R1>;
export declare function bindCallback<A1, A2, A3, A4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: () => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<void>;
export declare function bindCallback<A1, A2, A3, A4, A5, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<any[]>;
export declare function bindCallback<A1, A2, A3, A4, A5, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (res1: R1, res2: R2, res3: R3) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (
  arg1: A1,
  arg2: A2,
  arg3: A3,
  arg4: A4,
  arg5: A5,
) => Observable<[R1, R2, R3]>;
export declare function bindCallback<A1, A2, A3, A4, A5, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (res1: R1, res2: R2) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<[R1, R2]>;
export declare function bindCallback<A1, A2, A3, A4, A5, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (res1: R1) => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<R1>;
export declare function bindCallback<A1, A2, A3, A4, A5>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: () => any,
  ) => any,
  scheduler?: SchedulerLike,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<void>;
export declare function bindCallback<A, R>(
  callbackFunc: (...args: Array<A | ((result: R) => any)>) => any,
  scheduler?: SchedulerLike,
): (...args: A[]) => Observable<R>;
export declare function bindCallback<A, R>(
  callbackFunc: (...args: Array<A | ((...results: R[]) => any)>) => any,
  scheduler?: SchedulerLike,
): (...args: A[]) => Observable<R[]>;
export declare function bindCallback(
  callbackFunc: Function,
  scheduler?: SchedulerLike,
): (...args: any[]) => Observable<any>;