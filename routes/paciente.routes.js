import { Router } from "express";
import {
    agregarPaciente,
    ObtenerPacientes
} from "../controllers/pacienteCtrl.js";
import { checkAuth } from "../middlewares/authMiddleware.js";

const router = Router();


router.post("/", checkAuth, agregarPaciente);
router.get("/", checkAuth, ObtenerPacientes);




export default router;
