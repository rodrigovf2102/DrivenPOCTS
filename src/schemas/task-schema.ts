import Joi from "joi";

export const taskValidation = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    day: Joi.date().required(),
    responsible: Joi.object().required(),
    status: Joi.boolean().required()
})