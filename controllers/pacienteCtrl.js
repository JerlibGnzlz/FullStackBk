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

    if (!paciente) {
        res.status(400).json({ msg: "No encontrado" });
    }

    //Cuando se comparan dos objetId se les coloca toString()
    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "Accion no valida" });
    }

    res.json(paciente);


};


export const actualizarPaciente = async (req, res) => {

    const { id } = req.params;
    // const paciente = new PacienteModel(req.body);

    const paciente = await PacienteModel.findById(id);


    if (!paciente) {
        res.status(400).json({ msg: "No encontrado" });
    }

    //Cuando se comparan dos objetId se les coloca toString()
    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "Accion no valida" });
    }

    paciente.nombre = req.body.nombre || paciente.nombre;
    paciente.propietario = req.body.propietario || paciente.propietario;
    paciente.email = req.body.email || paciente.email;
    paciente.fecha = req.body.fecha || paciente.fecha;
    paciente.sintomas = req.body.sintomas || paciente.sintomas;

    try {
        const pacienteActualizado = await paciente.save();
        res.json(pacienteActualizado);
    } catch (error) {
        console.log(error);
    }
    // res.json(pacienteActualizado);
};


export const eliminarPaciente = async (req, res) => {

    const { id } = req.params;
    // const paciente = new PacienteModel(req.body);

    const paciente = await PacienteModel.findById(id);


    if (!paciente) {
        res.status(400).json({ msg: "No encontrado" });
    }

    //Cuando se comparan dos objetId se les coloca toString()
    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "Accion no valida" });
    }
    try {
        await paciente.deleteOne();
        res.json({ msg: "Paciente eliminado" });
    } catch (error) {
        console.log(error);
    }

};