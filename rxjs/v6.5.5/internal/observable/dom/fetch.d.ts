import { Observable } from "../../Observable.d.ts";
import { ObservableInput } from "../../types.d.ts";
export declare function fromFetch<T>(
  input: string | Request,
  init: RequestInit & {
    selector: (response: Response) => ObservableInput<T>;
  },
): Observable<T>;
export declare function fromFetch(
  input: string | Request,
  init?: RequestInit,
): Observable<Response>;
