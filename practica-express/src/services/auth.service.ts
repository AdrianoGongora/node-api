import {UserModel} from "../models/user";
import {User} from "../interfaces/user.interface";
import {encrypt, verified} from "../utils/bcrypt.handle";
import {Auth} from "../interfaces/auth.interface";
import {generateToken} from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}:User) => {
    const userExist = await UserModel.findOne({email});
    if(userExist) return "ALREADY_USER";
    const passHash = await encrypt(password);
    return await UserModel.create({
        email,
        password:passHash,
        name
    });
};

const loginUser = async ({email, password}:Auth) => {
    const userExist = await UserModel.findOne({email});
    if(!userExist) return "NOT_FOUND";

    const passwordHas = userExist.password;
    const isDCorrect = await verified(password, passwordHas);

    if(!isDCorrect) return "PASSWORD_INCORRECT";
    return  generateToken(userExist.email)
};

export {registerNewUser, loginUser};