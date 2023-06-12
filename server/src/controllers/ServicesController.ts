import { Request, Response } from 'express';
import { Services } from '@models/Services';
import { Citi, Crud } from '../global'

export default class ServicesController implements Crud {
    async create(req: Request, res: Response) {
        const {image, name, description} = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, name, description);
        
        if(isAnyUndefined) {
            return res.status(400).send();
        }

        const newService = { image, name, description };
        const {httpStatus, message} = await Citi.insertIntoDatabase (Services, newService);

        return res.status(httpStatus).send({ message });
    }

    async get(req: Request, res: Response){
        const {httpStatus, values} = await Citi.getAll(Services);
        return res.status(httpStatus).send(values);
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;
        const {value: serviceFound, message } = await Citi.findByID(Services, id); 
           
        if(!serviceFound) return res.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Services, serviceFound);
        return res.status(httpStatus).send({ messageFromDelete });
    }

    async update(req: Request, res: Response){
        const { id } = req.params;
        const { image, name, description } =req.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, name, description, id);
        if(isAnyUndefined) return res.status(400).send();

        const userWithUpdatedValues = { image, name, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Services, id, userWithUpdatedValues);
        return res.status(httpStatus).send({ messageFromUpdate });
    }
}