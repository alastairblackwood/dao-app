import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel';
import { UserInterface } from '../../interface/userInterface';
import express, { Request, Response } from 'express';

/**
 * Do not keep this, for experimentation only
 */
interface DecodedJwt {
  user: any;
  id: string;
}

const authenticate = asyncHandler(
  async (req: Request<any>, res: Response<any>, next): Promise<void> => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as DecodedJwt;
        console.log(decoded);
        decoded.user = await User.findById(decoded.id).select('-password');
        next();
      } catch (err) {
        res.status(401);
        throw new Error('Invalid token');
      }
    }
    if (!token) {
      res.status(401);
      throw new Error('Authorization token not provided');
    }
  }
);

export default authenticate;
