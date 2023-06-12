import express from 'express';
import { SendMail } from '@controllers/MailController';

import ServicesController from '@controllers/ServicesController';
import MetricController from '@controllers/MetricController';


const routes = express.Router();
const servicesController = new ServicesController();
const metricController = new MetricController();

routes.post('/email', SendMail);

routes.post('/service',servicesController.create);
routes.get('/service',servicesController.get);
routes.delete('/service/:id',servicesController.delete);
routes.put('/service/:id',servicesController.update);

routes.post('/metric',metricController.create);
routes.get('/metric',metricController.get);
routes.delete('/metric/:id',metricController.delete);
routes.put('/metric/:id',metricController.update);

export default routes;