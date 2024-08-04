import { Router } from 'express';
import TaskController from '../controllers/taskController';

export const taskRouter = Router();

taskRouter.get('/',TaskController.getAllProducts);
taskRouter.get('/:id',TaskController.getTaskById);
taskRouter.get('/user/:userId', TaskController.getTasksByUserId); //Trae tareas por id de usuario
taskRouter.post('/',TaskController.createProduct);