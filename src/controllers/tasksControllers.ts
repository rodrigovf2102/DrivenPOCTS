import { searchTasks, insertTask } from "../repositories/tasks.js";
import { Request, Response } from 'express';
import { Task } from "../protocols/task.js";
import { searchResponsibles } from "../repositories/responsibles.js";


async function getTasks(req: Request, res: Response) {
    try {
        const responsibleTasks = (await searchTasks()).rows;
        const tasks : Task[] = [];
        for (const responsibleTask of responsibleTasks) {
            const task : Task = {
                name: responsibleTask.name,
                description: responsibleTask.description,
                day: responsibleTask.day,
                status: responsibleTask.status,
                responsible: {
                    name: responsibleTask.responsibleName,
                    age: responsibleTask.age,
                    token: responsibleTask.token
                }
            }
            tasks.push(task);   
        }
        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function postTask(req: Request, res: Response) {
    try {
        const newTask = req.body as Task;
        const insertedTask = await insertTask(newTask);
        console.log(insertedTask)
        return res.status(200).send('task added');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

function updateTask(req: Request, res: Response) {
    /*
    try {
        const id = req.params.taskId as string;
        if (isNaN(Number(id))) {
            return res.status(409).send('task must be a number');
        }
        const taskId = Number(id);
        const token = req.headers.authorization;
        for (const task of tasks) {
            if (task.id === taskId && token === task.responsible.token) {
                task.status = true;
                return res.status(200).send('task completed');
            }
        }
        return res.status(404).send('task or token not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
    */
}

function deleteTask(req: Request, res: Response) {
    /*
    try {
        const id = req.params.taskId as string;
        if (isNaN(Number(id))) {
            return res.status(409).send('task must be a number');
        }
        const taskId = Number(id);
        const token = req.headers.authorization;
        for (let i = 0; i < tasks.length - 1; i++) {
            if (tasks[i].id === taskId && token === tasks[i].responsible.token) {
                tasks.splice(i, 1);
                return res.status(200).send('task removed');
            }
        }
        return res.status(404).send('task or token not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
    */
}

function getTaskQuantityByResponsible(req: Request, res: Response) {
    /*
    const taskPerPeople: ({ name: string, quantity: number })[] = [];
    try {
        for (const responsible of responsibles) {
            const tasksByName = tasks.filter(task=>task.responsible.name===responsible.name);
            const obj = {name:responsible.name, quantity: tasksByName.length};
            taskPerPeople.push(obj);
        }
        return res.status(200).send(taskPerPeople);
    } catch (error) {
        return res.status(500).send(error.message);
    }
    */
}

export { getTasks, postTask, updateTask, deleteTask, getTaskQuantityByResponsible };