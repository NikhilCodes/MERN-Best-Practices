import HttpException from '../exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || "Something went wrong."

  response.status(status).send({ status, message });
}

export default errorMiddleware;
