import express from 'express';
import MetricController from '@controllers/MetricController';

const routes = express.Router();
const metricController = new MetricController();

routes.post('/metric',metricController.create);
routes.get('/metric',metricController.get);
routes.delete('/metric/:id',metricController.delete);
routes.put('/metric/:id',metricController.update);

export default routes;