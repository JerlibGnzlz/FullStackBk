import bcrypt from "bcrypt";

// ─── Encryptar Password ──────────────────────────────────────────────────────

export const encrypt = async (password) => {
    return await bcrypt.hash(password, 10);
};


export const comparar = async (password, passwordHashado) => {
    return await bcrypt.compare(password, passwordHashado);
};