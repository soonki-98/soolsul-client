import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { InterceptorCallbackType } from './type';

/**
 * REST API 인스턴스
 */
export class Network {
  private _instance: AxiosInstance;

  constructor(baseURL: string | undefined) {
    this._instance = axios.create({
      baseURL,
    });
  }

  public get(url: string, config?: AxiosRequestConfig<any>) {
    return this._instance.get(url, config);
  }
  public put(url: string, data?: any, config?: AxiosRequestConfig<any>) {
    return this._instance.put(url, data, config);
  }
  public post(url: string, data?: any, config?: AxiosRequestConfig<any>) {
    return this._instance.post(url, data, config);
  }
  public delete(url: string, config?: AxiosRequestConfig<any>) {
    return this._instance.delete(url, config);
  }
  public patch(url: string, data?: any, config?: AxiosRequestConfig<any>) {
    return this._instance.patch(url, data, config);
  }

  /**
   * axios 인터셉터
   */
  public interceptor({ reqCallback, resCallback, reqErrorCallback, resErrorCallback }: InterceptorCallbackType) {
    {
      this._instance.interceptors.request.use(
        (config) => {
          // 요청이 전달되기 전에 작업 수행
          reqCallback && reqCallback(config);
          return config;
        },
        (error) => {
          // 요청 오류가 있는 작업 수행
          reqErrorCallback && reqErrorCallback(error);
          return Promise.reject(error);
        }
      );

      // 응답 인터셉터 추가하기
      this._instance.interceptors.response.use(
        (response) => {
          // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
          // 응답 데이터가 있는 작업 수행
          resCallback && resCallback(response);
          return response;
        },
        (error) => {
          // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
          // 응답 오류가 있는 작업 수행
          resErrorCallback && resErrorCallback(error);
          return Promise.reject(error);
        }
      );
      return this._instance;
    }
  }
  get instance() {
    return this._instance;
  }
}
/**
 * REST API 인스턴스
 */
const RestAPI = new Network(process.env.NEXT_PUBLIC_API_BASE_URL);

export default RestAPI;
