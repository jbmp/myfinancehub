import express from 'express';
import useRrouter from './user';

const router = express.Router();

router.use('/users', useRrouter);

export default router;