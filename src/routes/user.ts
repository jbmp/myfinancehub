import express from 'express';
import { createUser, listUsers } from '../controllers/user.controller';

const router = express.Router();

router.post('/', createUser);
router.get('/', listUsers);

export default router;