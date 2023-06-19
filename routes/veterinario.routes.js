import { Router } from "express";
import {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
} from "../controllers/veterinarioCtrl.js";
import { checkAuth } from "../middlewares/authMiddleware.js";


const router = Router();


// ─── Routes ──────────────────────────────────────────────────────────────────


/**
 * Area publica
 */
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvidePassword", olvidePassword);
router.get("/olvidePassword/:token", comprobarToken);
router.post("/olvidePassword/:token", nuevoPassword);




/**
 * Area privada
 */
router.get("/perfil", checkAuth, perfil);

export default router;