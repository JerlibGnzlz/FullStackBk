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



export const ObtenerPaciente = async (req, res) => {

    const { id } = req.params;
    const paciente = await PacienteModel.findById(id);

    //Cuando se comparan dos objetId se les coloca toString()
    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "Accion no valida" });
    }
    if (paciente) {
        res.json(paciente);

    }

};


export const actualizarPaciente = async (req, res) => {


};

export const eliminarPaciente = async (req, res) => {



};