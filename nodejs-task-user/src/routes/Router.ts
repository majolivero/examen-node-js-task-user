import { Router } from 'express';
import { userRouter, taskRouter } from './';
import { authRouter } from './authRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/products', taskRouter);
router.use('auth', authRouter);

export default router;