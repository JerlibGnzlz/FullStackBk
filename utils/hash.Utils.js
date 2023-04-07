import bcrypt from "bcrypt";

export const encrypt = async (password) => {
    return await bcrypt.hash(password, 10);
};