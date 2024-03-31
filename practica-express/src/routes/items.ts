import { Router } from "express";
import {deleteItems, getItem, getItems, postItems, updateItems} from "../controllers/item";
import {logMiddleware} from "../middleware/log";

const router = Router();

router.get('/', getItems);
router.get('/:id',logMiddleware, getItem);

router.post('/', postItems);
router.put('/:id', updateItems);
router.delete('/:id', deleteItems);


export { router };