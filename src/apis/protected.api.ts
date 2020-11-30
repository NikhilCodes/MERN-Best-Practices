import HttpClient from './base.api';
import { getUserToken, SERVER_URL } from '../../globals';
import { AxiosRequestConfig } from 'axios';
import routes from './routes';

class MainApiProtected extends HttpClient {
  constructor() {
    super(`${SERVER_URL}`);

    this._initializeRequestInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  }

  _handleRequest = (config: AxiosRequestConfig) => {
    config.headers['authorization'] = `Bearer ${getUserToken()}`;

    return config;
  }

  getAllProducts = () => {
    return this.instance.get(
      `${routes.PRODUCT}`
    );
  }
}

export default MainApiProtected;
