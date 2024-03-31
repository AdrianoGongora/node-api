import {sign, verify} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SCRET || "token.1010101010";

const generateToken = async (id:string) => {
    return sign({id}, JWT_SECRET, {
        expiresIn: "24h",
    });
};

const verifyToken = (jwt:string) => {
    return verify(jwt, JWT_SECRET);
};

export {generateToken,verifyToken};