import { AxiosRequestConfig, AxiosResponse } from "axios";

export type InterceptorCallbackType = {
  reqCallback: (config?: AxiosRequestConfig<any>) => void;
  resCallback: (response?: AxiosResponse<any, any>) => void;
  reqErrorCallback: (error?: any) => void;
  resErrorCallback: (error?: any) => void;
};
