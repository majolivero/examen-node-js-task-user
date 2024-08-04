import { Router } from 'express';
import AuthController from '../controllers/authControllers';

export const authRouter = Router();

authRouter.post('/login', AuthController.login);
