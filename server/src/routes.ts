import express from 'express';
import UserController from '@controllers/UserController'
import { SendMail } from '@controllers/MailController';

const routes = express.Router();
const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('email', SendMail);


export default routes;