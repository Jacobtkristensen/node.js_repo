import bcrypt from "bcrypt";

const saltRounds = 14;

async function hashPassword(password){
    return await bcrypt.hash(password, saltRounds);
}

async function comparePasswords(password, hash){
    return await bcrypt.compare(password, hash);
}

export { hashPassword, comparePasswords };