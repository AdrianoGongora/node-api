import {Router} from "express";
import {deleteItems, getItem, getItems, postItems, updateItems} from "../controllers/blog";

const router = Router();

router.get('/', getItems);
router.get('/', getItem);
router.post('/', postItems);
router.put('/', updateItems);
router.delete('/', deleteItems);


export {router};