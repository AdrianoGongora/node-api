import {compare, hash} from "bcryptjs";

const encrypt = async (password:string) => {
    return await hash(password, 8);
}

const verified = async (password: string, passHash: string) => {
    return await compare(password, passHash);
}

export { encrypt, verified}

