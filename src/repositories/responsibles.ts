import { Responsible } from "../protocols/responsible.js";
import { v4 as uuidv4 } from 'uuid';
import { connection } from "../database/database.js";
import { QueryResult } from "pg";


async function searchResponsibles(): Promise<QueryResult<Responsible>> {
    return connection.query('SELECT * FROM responsibles');
}
/*
const responsibles: Responsible[] = [{
    id: 1,
    name: 'Rodrigo',
    age: 19,
    token: uuidv4()
},
{
    id: 2,
    name: 'Lucas',
    age: 23,
    token: uuidv4()
},
{
    id: 3,
    name: 'Paulo',
    age: 24,
    token: uuidv4()
}]

export default responsibles;
*/

export { searchResponsibles }