import { generarJWT } from "../helpers/generarJWT.js";
import { VeterinarioModel } from "../models/VeterinarioModel.js";
import { encrypt, comparar } from "../helpers/hash.js";


const registrar = async (req, res) => {

    const { email, password, nombre } = req.body;

    const existeUsuario = await VeterinarioModel.findOne({ email });

    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const passwordHashado = await encrypt(password);

        const veterinario = new VeterinarioModel({ nombre, email, password: passwordHashado });
        const veterinario_Guardado = await veterinario.save();
        res.json({ msg: "Usuario registrado con exito", veterinario_Guardado });

    } catch (error) {
        console.log(error);
    }
};

const perfil = async (req, res) => {

    try {
        console.log(req.veterinario);
        const { veterinario } = req;
        res.json({ perfil: veterinario });
    } catch (error) {
        console.log(error);
    }

};

const confirmar = async (req, res) => {
    const { token } = req.params;

    const usuarioConfirmar = await VeterinarioModel.findOne({ token });

    if (!usuarioConfirmar) {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;

        await usuarioConfirmar.save();
        res.json({ msg: "Usuario confirmado correctamente" });


    } catch (error) {
        console.log(error);
    }
};

const autenticar = async (req, res) => {
    const { email, password } = req.body;

    const existeUsuario = await VeterinarioModel.findOne({ email });
    try {
        if (!existeUsuario) {
            const error = new Error("El Usuario no existe ");
            return res.status(404).json({ msg: error.message });
        }

        if (!existeUsuario.confirmado) {
            const error = new Error("Tu cuenta no ha sido confirmada ");
            return res.status(403).json({ msg: error.message });
        }

        const passwordHashado = existeUsuario.password;
        const data = {
            usuario: existeUsuario
        };

        res.json({ token: generarJWT(existeUsuario.id), data });


        // console.log(existeUsuario);

        const compararPassword = await comparar(password, passwordHashado);
        if (!compararPassword) {
            const error = new Error("Password incorrecto");


            return res.status(403).json({ msg: error.message });
        } else {
            res.json({ msg: "Password Correctamente" });
        }

    } catch (error) {
        console.log(error);
    }
};

export {
    registrar,
    perfil,
    confirmar,
    autenticar
};