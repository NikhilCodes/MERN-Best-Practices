import { NextFunction, Request, Response } from "express";

function corsMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "PUT, OPTIONS, GET, POST, DELETE"
  );
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
  );
  response.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  next();
}

export default corsMiddleware;
