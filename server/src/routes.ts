import express from 'express';
import ServicesController from '@controllers/ServicesController';

const routes = express.Router();
const servicesController = new ServicesController();

routes.post('/service',servicesController.create);
routes.get('/service',servicesController.get);
routes.delete('/service/:id',servicesController.delete);
routes.put('/service/:id',servicesController.update);

export default routes;
