import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface AxiosRequestConfig {
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | null>;
}

export class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      ...config,
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.axiosInstance.get(url, config);
  }

  async post(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.post(url, body, config);
  }
}
