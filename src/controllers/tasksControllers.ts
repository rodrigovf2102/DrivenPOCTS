import { searchTasks, addTask, upTask, deleteTaskByIds, getTasksPerUser } from "../repositories/tasks.js";
import { Request, Response } from 'express';
import { InsertTask, Task, TaskEntity } from "../protocols/task.js";
import { getResponsibleByToken, insertResponsible } from "../repositories/responsibles.js";
import { QueryResult } from "pg";

async function getTasks(req: Request, res: Response) {
    try {
        const responsibleTasks = (await searchTasks()).rows;
        const tasks: Task[] = [];
        for (const responsibleTask of responsibleTasks) {
            const task: Task = {
                id: responsibleTask.id,
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
        const newTask = req.body as InsertTask;
        const responsible = (await getResponsibleByToken(newTask.responsibleToken)).rows[0];
        if (!responsible) {
            return res.status(404).send('Error: responsible not found')
        }
        const insertTask: TaskEntity = {
            name: newTask.name,
            description: newTask.description,
            day: newTask.day,
            idResponsible: responsible.id,
            status: newTask.status
        }
        const insertedTask = await addTask(insertTask);
        return res.status(200).send(`task added`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateTask(req: Request, res: Response) {
    const id = req.params.taskId as string
    try {
        if (isNaN(Number(id))) {
            return res.status(409).send('task must be a number');
        }
        const taskId: number = Number(id)
        await upTask(taskId);
        return res.status(200).send('Task completed')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteTask(req: Request, res: Response) {
    try {
        const id = req.params.taskId;
        if (isNaN(Number(id))) {
            return res.status(409).send('task must be a number');
        }
        const taskId = Number(id);
        const token = req.headers.authorization;
        const responsible = (await getResponsibleByToken(token)).rows[0];
        if (!responsible) {
            return res.status(404).send('Error: responsible token is incorrect')
        }
        const task = (await deleteTaskByIds(responsible.id,taskId));
        console.log(task)
        if(task.rowCount === 0){
            return res.status(404).send('Error: task not found')
        }
        return res.status(200).send('task deleted');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getTaskQuantityByResponsible(req: Request, res: Response) {
    try {
        const tasksPerUser = (await getTasksPerUser()).rows;
        return res.status(200).send(tasksPerUser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { getTasks, postTask, updateTask, deleteTask, getTaskQuantityByResponsible };