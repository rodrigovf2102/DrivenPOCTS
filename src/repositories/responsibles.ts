import { Responsible } from "../protocols/responsible.js";

import { connection } from "../database/database.js";
import { QueryResult } from "pg";

async function getResponsibleByToken(token: string) : Promise<QueryResult<Responsible>> {
    return connection.query('SELECT * FROM responsibles WHERE token=$1', [token]);
}

async function insertResponsible(responsible : Responsible) : Promise<QueryResult>{
    return connection.query('INSERT INTO responsibles (name,age,token) VALUES ($1,$2,$3)',
                            [responsible.name,responsible.age,responsible.token])
}

export { getResponsibleByToken, insertResponsible }