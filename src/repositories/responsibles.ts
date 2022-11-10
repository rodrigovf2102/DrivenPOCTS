import { Responsible } from "../protocols/responsible.js";
import { v4 as uuidv4 } from 'uuid';

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