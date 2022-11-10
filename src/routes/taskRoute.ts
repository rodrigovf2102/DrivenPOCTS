import express from 'express'
import { postResponsible } from '../controllers/responsiblesControllers.js';
import { getTasks, postTask, updateTask, deleteTask, getTaskQuantityByResponsible } from '../controllers/tasksControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { responsibleValidation } from '../schemas/responsible-schema.js';
import { taskValidation } from '../schemas/task-schema.js';

const Routes = express.Router();

Routes.get('/tasks',getTasks)
Routes.post('/addTask', validateSchema(taskValidation) ,postTask)
Routes.post('/addResponsible',validateSchema(responsibleValidation),postResponsible)
Routes.put('/completeTask/:taskId',updateTask)
Routes.delete('/deleteTask/:taskId',deleteTask)
Routes.get('/tasksInfo',getTaskQuantityByResponsible)

export default Routes;