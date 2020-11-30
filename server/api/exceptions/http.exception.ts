import ValidationException from './validation.exception';

class HttpException extends Error {
  status: number | any;
  constructor(statusOrError: number | any, message: string = '') {
    super(message);

    if (typeof statusOrError === 'number') {
      this.status = statusOrError;
      this.message = message;
    } else {
      this.status = 500;
      this.message = 'Something went wrong!';
    }
  }
}

export default HttpException;
