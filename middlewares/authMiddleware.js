import jwt from "jsonwebtoken";
import { VeterinarioModel } from "../models/VeterinarioModel.js";

export const checkAuth = async (req, res, next) => {

    if (req.headers.authorization) {

        try {
            const token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.veterinario = await VeterinarioModel.findById(decoded.id).select("-password -token -confirmado");

            return next();

        } catch (error) {
            const e = new Error("Token no valido");
            return res.status(403).json({ msg: e.message });
        }

        next();
    }

};



