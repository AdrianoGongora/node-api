import {sign, verify} from "jsonwebtoken";

const JWT_SECRET = "secreto.01";

const generateToken = async (id:string) => {
    return sign({id}, JWT_SECRET, {
        expiresIn: "24h",
    });
};

const verifyToken = (jwt:string) => {
    return verify(jwt, JWT_SECRET);
};

export {generateToken,verifyToken};