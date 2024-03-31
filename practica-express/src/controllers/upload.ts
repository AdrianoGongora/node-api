import {Response} from "express";
import {registrarUpload} from "../services/storage.service";
import {handleHttp} from "../utils/error.handler";
import {RequestExt} from "../interfaces/request-extend.interface";
import {Storage} from "../interfaces/storage";


const getFile = async (req: RequestExt, res: Response) => {
    try {
        const {user, file} = req;
        const dataToRegister: Storage = {
            fileName: `${file?.fieldname}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const reponse = await registrarUpload(dataToRegister);
        res.send("AQUI_DEBE_LLEGAR_FILE");
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
}

export {getFile}