import axios, { AxiosInstance } from 'axios';

class HttpClient {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 5000
    });

    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  }

  _handleResponse = (data: any) => data.data;

  _handleError = (error: string) => Promise.reject(error);
}

export default HttpClient;
