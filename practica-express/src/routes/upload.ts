import {Router} from "express";
import multerMiddleware from "../middleware/file";
import {getFile} from "../controllers/upload";
import {checkJwt} from "../middleware/session";


const router = Router();

router.get('/', checkJwt,multerMiddleware.single("single"), getFile);

export {router};