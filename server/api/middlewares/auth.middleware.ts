import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token: string = request.headers['authorization']?.split(' ')[1] ?? '';
  try {
    let decoded = verify(token, `${process.env.JWT_SECRET}`);
    // @TODO: check decoded data to determine validity!
    next();
  } catch (err) {
    response.status(500).json({ err: err.toString(), data: null });
  }
}

export default authMiddleware;
