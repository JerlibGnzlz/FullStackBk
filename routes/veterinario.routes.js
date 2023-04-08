import { Router } from "express";
import {
    registrar,
    perfil,
    confirmar,
    autenticar
} from "../controllers/veterinarioCtrl.js";
import { checkAuth } from "../middlewares/authMiddleware.js";


const router = Router();


// ─── Routes ──────────────────────────────────────────────────────────────────

router.post("/", registrar);

router.get("/confirmar/:token", confirmar);

router.post("/login", autenticar);

router.get("/perfil", checkAuth, perfil);

export default router;