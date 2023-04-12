import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    propietario: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    },
    sintomas: {
        type: String,
        require: true
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Veterinario"

    }
},
    {
        versionKey: false,
        timestamps: true
    });



export const pacienteModel = new mongoose.model("Pacientes", pacienteSchema);