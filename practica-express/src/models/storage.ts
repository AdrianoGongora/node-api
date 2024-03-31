import {model, Schema} from "mongoose";
import {Storage} from "../interfaces/storage";

const StorageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        idUser: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const  StorageModel = model('storage', StorageSchema);