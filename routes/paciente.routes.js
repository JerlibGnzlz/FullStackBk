import { Router } from "express";
import {
    agregarPaciente,
    ObtenerPacientes,
    ObtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from "../controllers/pacienteCtrl.js";
import { checkAuth } from "../middlewares/authMiddleware.js";

const router = Router();


router.post("/", checkAuth, agregarPaciente);

router.get("/", checkAuth, ObtenerPacientes);

router.get("/:id", checkAuth, ObtenerPaciente);

router.put("/:id", checkAuth, actualizarPaciente);

router.delete("/:id", checkAuth, eliminarPaciente);




export default router;
