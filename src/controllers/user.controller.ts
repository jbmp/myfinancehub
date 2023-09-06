import { Request, Response } from 'express';
import User from '../models/user';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email, name } = req.body;

  const newUser = new User({username, password, email, name});
  await newUser.save();
  res.status(200).json({ newUser });
};

const listUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await User.find();

  res.status(200).json({ users });
};

export {
  createUser,
  listUsers,
};