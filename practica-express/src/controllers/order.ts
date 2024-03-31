import { Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { RequestExt } from "../interfaces/request-extend.interface";

const getItems = (_req: RequestExt, res:Response) =>{
    try {
        res.send({
            data:"Esto solo ve las personas con sesion / jwt",
            user:_req.user
        });
    }catch (e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
};

export {getItems};