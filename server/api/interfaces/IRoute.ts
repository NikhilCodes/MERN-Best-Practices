import { ErrorRequestHandler, RequestHandler } from 'express';

export interface IRoute {
  httpVerb: string;
  path?: string;
  handlers: (ErrorRequestHandler | RequestHandler)[];
}
