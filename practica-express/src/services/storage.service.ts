import {Storage} from "../interfaces/storage";
import {StorageModel} from "../models/storage";

const registrarUpload = async ({fileName,idUser,path}:Storage) => {
    return await StorageModel.create({fileName, idUser, path});
};


export {registrarUpload};