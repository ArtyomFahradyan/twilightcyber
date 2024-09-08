import { AxiosError } from "axios";
import {
  useRequest as useRequestHook,
  Result,
  Options,
  Plugin,
  Service,
} from "t-react-hooks";
import { UNAUTHORIZED } from "@constants";
import { networkErrorNotification } from "components";
import { TAny } from "types";

/**
 * This hook is our wrapper around t-react-hooks to make
 * our life easier when trying to call fetch methods
 */

function devLog(...params: TAny): void {
  if (process.env.VITE_APP_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(...params);
  }
}

export function useRequest<TData, TParams extends TAny[]>(
  service: Service<TData, TParams>,
  baseOptions: Options<TData, TParams>,
  options?: { showErrorNotification?: boolean; withoutAuth?: boolean },
  plugins?: Plugin<TData, TParams>[]
): Result<TData, TParams> {
  const onError = baseOptions.onError;
  const onSuccess = baseOptions.onSuccess;
  const defOptions = options || {
    showErrorNotification: true,
    withoutAuth: false,
  };

  baseOptions.onSuccess = (data: TData, params: TParams) => {
    onSuccess && onSuccess(data, params);

    devLog(`Req:Success ${service.name} call`, { data, params });
  };

  baseOptions.onError = async (e: Error, params: TParams) => {
    devLog(`Req:Error ${service.name} call`, {
      error: e as TAny,
      params,
    });
    const error = e as AxiosError;

    if (error?.response?.status === UNAUTHORIZED && !defOptions?.withoutAuth) {
      networkErrorNotification(error?.response?.status || 0);

      setTimeout(async () => {
        //logout
      }, 3000);
    }

    onError?.(error, params);
    if (defOptions?.showErrorNotification) {
      networkErrorNotification(
        error?.response?.status || 0,
        error?.response?.data as TAny
      );
    }
  };

  return useRequestHook(service, baseOptions, plugins);
}
