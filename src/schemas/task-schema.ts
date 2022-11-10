import Joi from "joi";
import { Task } from "../protocols/task";

export const taskValidation = Joi.object<Task>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    day: Joi.date().required(),
    responsible: Joi.object({
        name:Joi.string().required(),
        age:Joi.string().required()
    }).required(),
    status: Joi.boolean().required()
})