import Joi from "joi";
import { InsertTask } from "../protocols/task";

export const taskValidation = Joi.object<InsertTask>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    day: Joi.date().required(),
    responsibleToken: Joi.string().required(),
    status: Joi.boolean().required()
})