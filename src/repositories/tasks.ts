import { Task, TaskEntity, TaskPerResponsible } from "../protocols/task.js";
import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { ResponbibleTask } from "../protocols/responsibleTask.js";

async function searchTasks(): Promise<QueryResult<ResponbibleTask>> {
    return connection.query(
        `SELECT tasks.*, responsibles.name AS "responsibleName",responsibles.age,responsibles.token 
        FROM tasks 
            JOIN responsibles ON "tasks"."idResponsible" = "responsibles"."id";`);
}

async function addTask(task: TaskEntity): Promise<QueryResult> {
    return connection.query(`INSERT INTO tasks (name,description,day,"idResponsible",status)
                            VALUES ($1, $2, $3, $4, $5)`,
        [task.name, task.description, task.day, task.idResponsible, task.status])
}

async function upTask(taskId: number): Promise<QueryResult> {
    return connection.query(`UPDATE tasks SET status=$1 WHERE id=$2`, [true, taskId])
}

async function getTaskByIds(idResponsible: number, taskId: number): Promise<QueryResult<TaskEntity>> {
    return connection.query(`SELECT * FROM tasks WHERE id=$1 AND "idResponsible=$2"`, [idResponsible, taskId]);
}

async function deleteTaskByIds(idResponsible: number, taskId: number): Promise<QueryResult> {
    return connection.query(`DELETE FROM tasks WHERE id=$1 AND "idResponsible"=$2`, [idResponsible, taskId]);
}

async function getTasksPerUser() : Promise<QueryResult<TaskPerResponsible>>{
    return connection.query(`SELECT responsibles.name, COUNT("responsibles"."id") AS "tasksNumber" FROM tasks 
                                JOIN responsibles ON "tasks"."idResponsible" = "responsibles"."id" 
                                GROUP BY responsibles.name `)
}

export { searchTasks, addTask, upTask, getTaskByIds, deleteTaskByIds, getTasksPerUser };