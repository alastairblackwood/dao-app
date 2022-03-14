import asyncHandler from 'express-async-handler';
import UserModel, { User } from '../models/userModel';
import generateToken from '../utils/jwt/generateToken';
import { Request, Response } from 'express';
import { UserInterface } from '../interface/userInterface';
import RequestUserInterface from '../interface/RequestUserInterface';
import { RequestWithInterfaceProfile } from '../interface/RequestWithInterfaceProfile';
import bcrypt from 'bcryptjs';

export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    const userExists: User = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const newUser = await UserModel.create({
      email,
      password,
    });

    if (newUser) {
      return res.status(201).json({
        email: newUser.email,
        token: generateToken(newUser._id),
        message: 'Successfully registered',
      });
    } else {
      res.status(400);
      throw new Error('Could not save to database');
    }
  }
);

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log('email', email);
  console.log('pw', password);
  const user = await UserModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      email: user.email,
      token: generateToken(user._id),
      message: 'Successfully authenticated',
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
});

export const userData = (req: RequestWithInterfaceProfile, res: Response) => {
  return res.status(200).json({
    email: req.user.email,
  });
};

export const updateProfile = async (
  req: RequestWithInterfaceProfile,
  res: Response
) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    if (req.body.email) user.email = req.body.email;

    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();

    if (updatedUser) {
      return res.status(201).json({
        email: updatedUser.email,
        token: generateToken(updatedUser._id),
        message: 'Profile updated',
      });
    } else {
      res.status(400);
      throw new Error('Could not save to database');
    }
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};
