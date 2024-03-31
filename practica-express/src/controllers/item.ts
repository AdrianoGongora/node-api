import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import {getCarById, getCars, insertCar, updateCar, delteCar} from "../services/item.services";

const getItem = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCarById(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (_req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};

const updateItems = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
};

const postItems = async ({body}: Request, res:Response) =>{
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    }catch (e){
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
};

const deleteItems = async ({params}: Request, res:Response) =>{
    try {
        const { id } = params;
        const response = await delteCar(id);
        res.send(response);
    }catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export {getItem,getItems,postItems,updateItems,deleteItems};