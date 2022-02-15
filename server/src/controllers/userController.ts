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
    const { name, email, password } = req.body;

    const userExists: User = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const newUser = await UserModel.create({
      name,
      email,
      password,
    });

    if (newUser) {
      return res.status(201).json({
        name: newUser.name,
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

  const user = await UserModel.findOne({ email });

  // if (user && await user.matchPassword(password)) {
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      name: user.name,
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
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
};

export const updateProfile = async (
  req: RequestWithInterfaceProfile,
  res: Response
) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    if (req.body.email) user.email = req.body.email;
    if (req.body.name) user.name = req.body.name;
    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();

    if (updatedUser) {
      return res.status(201).json({
        name: updatedUser.name,
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
