import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema : ObjectSchema) {
    return (req : Request, res : Response, next : NextFunction) => {
      const { error } = schema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const messageError = error.details.map((item) => item.message);
        return res.status(422).send(messageError);
      }
      next();
    };
  }
  