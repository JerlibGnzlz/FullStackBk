import { Router } from "express";
import {
    agregarPaciente,
    ObtenerPacientes
} from "../controllers/pacienteCtrl.js";

const router = Router();


router.post("/", agregarPaciente);
router.get("/", ObtenerPacientes);




export default router;
