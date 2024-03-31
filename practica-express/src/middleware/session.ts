import { Response, NextFunction} from "express";
import {verifyToken} from "../utils/jwt.handle";
import {RequestExt} from "../interfaces/request-extend.interface";

const checkJwt = (req:RequestExt,res:Response,next:NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop();
        const verify = verifyToken(`${jwt}`) as  {id:string};
        if(!verify){
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDADA");
        }else{
            req.user = verify;
            next();
        }

    }catch (e){
        console.log(e);
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};

export {checkJwt};