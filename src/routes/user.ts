import express from 'express';
import { createUser, listUsers } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', listUsers);

export default userRouter;