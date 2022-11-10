import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getResponsibleByToken, insertResponsible } from "../repositories/responsibles.js";
import { InsertResponsible, Responsible } from "../protocols/responsible.js";

async function postResponsible(req:Request,res:Response){
    try {
        const newInsertResponsible = req.body as InsertResponsible;
        const token = uuidv4();
        const newResponsible : Responsible = {
            name: newInsertResponsible.name,
            age: newInsertResponsible.age,
            token: token
        }
        await insertResponsible(newResponsible);
        return res.status(201).send(`Responsible created with token: ${token}`)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export {postResponsible}