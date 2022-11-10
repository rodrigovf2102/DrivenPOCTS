import Joi from "joi";
import { InsertResponsible } from "../protocols/responsible.js";

export const responsibleValidation = Joi.object<InsertResponsible>({
    name: Joi.string().required(),
    age: Joi.number().required()
})