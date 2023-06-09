import express from 'express';
import { SendMail } from '@controllers/MailController';

const routes = express.Router();

routes.post('/email', SendMail);


export default routes;