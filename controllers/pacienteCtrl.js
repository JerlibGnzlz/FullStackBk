import mongoose from "mongoose";
import { PacienteModel } from "../models/PacientesModel.js";


export const agregarPaciente = async (req, res) => {

    const paciente = new PacienteModel(req.body);

    paciente.veterinario = req.veterinario._id;

    try {

        const pacienteAlmacenado = await paciente.save();
        res.json(pacienteAlmacenado);
    } catch (error) {
        console.log(error);
    }


};


export const ObtenerPacientes = async (req, res) => {
    const pacientes = await PacienteModel.find()
        .where("veterinario")
        .equals(req.veterinario);

    res.json(pacientes);

};