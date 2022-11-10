import responsibles from "./responsibles.js";
import { Task } from "../protocols/task.js";

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

export default tasks;