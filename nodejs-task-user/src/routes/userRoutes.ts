import { Router } from 'express';
import UserController from '../controllers/userController';

export const userRouter = Router();

userRouter.get('/',UserController.getAllUsers);
userRouter.get('/:id',UserController.getUserById);
userRouter.post('/',UserController.createUser);


//Esta ruta se utiliza para manejar solicitudes de inicio de sesión, donde los datos de la solitud POST 
//por ejemplo, nombre de usuario y contraseña, son procesados por el método login del AuthController