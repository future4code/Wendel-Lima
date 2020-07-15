import { Request, Response } from 'express';
import moment from 'moment';
import { createTask, getTaskById } from '../data/tasks';
import { getUserById } from '../data/users';

export const createTaskEndpoint = async(req: Request, res: Response) => {
    try {
        if(
            !req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId
        ) {
            throw new Error("Parâmetros inválidos")
        }
        const date = moment(req.body.limitDate, "DD/MM/YYYY");
        await createTask(
            req.body.title,
            req.body.description,
            date,
            req.body.creatorUserId
        );
        res.sendStatus(200)
       
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
};

export const getTaskByIdEndpoint = async (req: Request, res: Response) => {
    try { 
        const task = await getTaskById(req.params.id)
        
        if(!task){
            throw new Error ("Task não encontrada")
        }

        res.status(200).send({
            ...task,
            limitDate: moment(task.limitDate, "YYYY-MM-DD").format("DD/MM/YYYY")
        })
    }catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
};