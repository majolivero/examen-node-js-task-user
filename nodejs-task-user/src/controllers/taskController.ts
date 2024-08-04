import { Request, Response } from 'express';
import { container } from 'tsyringe';
import TaskService from '../services/taskService';

export default class TaskController {
    static async getAllTasks(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const tasks = await taskService.getAllTasks();
        res.json(tasks); //Envia la lista de tareas como una respuesta JSON
    }

    static async getTaskById(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const tasks = await taskService.getTaskById(parseInt(req.params.id));
        res.json(tasks); //Envia la tarea encontrada como una respuesta JSON
    }

    static async getTasksByUserId(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const tasks = await taskService.getTasksByUserId(parseInt(req.params.userId));
        res.json(tasks); //Envía la lista de tareas encontradas como una respuesta JSON
    }

    static async createTask(req: Request, res: Response) {
        const taskService = container.resolve(TaskService);
        const task = await taskService.createTask(req.body);
        res.status(201).json(task); ////Envía la nueva tarea creada como una respuesta JSON con el código de estado 201 (Creado).
    }
}