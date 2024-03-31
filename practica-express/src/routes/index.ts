import {Router} from "express";
import {readdirSync} from "fs"

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFIleName = (fileName:string)=>{
    return fileName.split('.').shift();
};

readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName = cleanFIleName(fileName);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`/${cleanName}`, moduleRouter.router)
        });
    }
})

export {router};