import {Car} from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar = async (item:Car) => {
    return await ItemModel.create(item);
};

const getCars = async () => {
    return await ItemModel.find({});
};

const getCarById = async (id:string) =>{
    return await ItemModel.findOne({_id:id});
}

const updateCar = async (id:string,data:Car)=>{
    return ItemModel.findOneAndUpdate({
        _id: id
    }, data, {new: true});
};

const delteCar = async (id:string) => {
    return await ItemModel.deleteOne({_id:id});
};

export {insertCar, getCars, getCarById, updateCar, delteCar};