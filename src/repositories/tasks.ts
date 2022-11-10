import { Task } from "../protocols/task.js";
import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { ResponbibleTask } from "../protocols/responsibleTask.js";

async function searchTasks() : Promise<QueryResult<ResponbibleTask>>{
    return connection.query(
        `SELECT tasks.*, responsibles.name AS "responsibleName",responsibles.age,responsibles.token 
        FROM tasks 
            JOIN responsibles ON "tasks"."idResponsible" = "responsibles"."id";`);
}

async function insertTask(task : Task) : Promise<QueryResult>{
    return connection.query(`INSERT INTO tasks (name,description,day,responsible,status)
                            VALUES ($1, $2, $3, $4, $5)`,
                            [task.name,task.description,task.day,task.responsible,task.status])
}
/*
const tasks : Task[] = [
    {
        id:1,
        name:'Cozinhar',
        description:'fazer o almoço',
        day: new Date('2022,11,9'),
        responsible: responsibles[0],
        status:false
    },
    {
        id:2,
        name:'Limpar a sala',
        description:'passar a vassoura na sala',
        day: new Date('2022,11,10'),
        responsible: responsibles[1],
        status:false
    },
    {
        id:3,
        name:'Lavar a louça',
        description:'lavar a louça da cozinha',
        day: new Date('2022,11,11'),
        responsible: responsibles[2],
        status:false
    }
]
*/
export { searchTasks, insertTask };