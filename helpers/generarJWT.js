import jwt from "jsonwebtoken";

// ─── Generar El Token ────────────────────────────────────────────────────────


export const generarJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

// ─── Verificar El Token ──────────────────────────────────────────────────────


// const verifyToken = (jwt) => {
//     const isOk = verify(jwt, process.env.JWT_SECRET);
//     return isOk;
// };