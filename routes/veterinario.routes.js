import { Router } from "express";
import {
    registrar,
    perfil,
    confirmar,
    autenticar
} from "../controllers/veterinarioCtrl.js";

const router = Router();

router.post("/", registrar);

router.get("/perfil", perfil);

router.get("/confirmar/:token", confirmar);

router.get("/login", autenticar);


export default router;