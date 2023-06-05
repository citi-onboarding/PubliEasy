import { Request, Response } from 'express';
import { Metric } from '@models/Metric';
import { Citi, Crud } from '../global'

export default class MetricController implements Crud {
    async create(req: Request, res: Response) {
        const {metric, metricDescription} = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(metric, metricDescription);
        
        if(isAnyUndefined) {
            return res.status(400).send();
        }

        const newMetric = {metric, metricDescription};
        const {httpStatus, message} = await Citi.insertIntoDatabase (Metric, newMetric);

        return res.status(httpStatus).send({ message });
    }

    async get(req: Request, res: Response){
        const {httpStatus, values} = await Citi.getAll(Metric);
        return res.status(httpStatus).send(values);
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;
        const {value: serviceFound, message } = await Citi.findByID(Metric, id); 
           
        if(!serviceFound) return res.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Metric, serviceFound);
        return res.status(httpStatus).send({ messageFromDelete });
    }

    async update(req: Request, res: Response){
        const { id } = Request.params;
        const { metric, metricDescription } =req.body;

        const isAnyUndefined = Citi.areValuesUndefined(metric, metricDescription, id);
        if(isAnyUndefined) return res.status(400).send();

        const userWithUpdatedValues = { metric, metricDescription };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Metric, id, userWithUpdatedValues);
        return res.status(httpStatus).send({ messageFromUpdate });
    }
}