import HttpClient from './base.api';
import { SERVER_URL } from '../globals';

class MainApi extends HttpClient {
  constructor() {
    super(`${SERVER_URL}`);
  }
}

export default MainApi;
