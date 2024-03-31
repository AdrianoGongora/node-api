import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getItem = (_req: Request, res:Response) => {
    try {

    }catch (e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

const getItems = (_req: Request, res:Response) =>{
    try {

    }catch (e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
};

const updateItems = (_req: Request, res:Response) =>{
    try {

    }catch (e){
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
};

const postItems = (_req: Request, res:Response) =>{
    try {

    }catch (e){
        handleHttp(res, 'ERROR_POST_BLOG')
    }
};

const deleteItems = (_req: Request, res:Response) =>{
    try {

    }catch (e){
        handleHttp(res, 'ERROR_DELETE_BLOG')
    }
};

export {getItem,getItems,postItems,updateItems,deleteItems};