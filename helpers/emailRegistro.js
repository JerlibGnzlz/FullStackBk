import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST_NODEMAILER,
        port: process.env.PORT_NODELMAILER,
        auth: {
            user: process.env.USER_NODEMAILER,
            pass: process.env.PASS_NODEMAILER,
        }
    });

    const { email, nombre, token } = datos;

    const info = await transporter.sendMail({
        from: "Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Comprueba tu cuenta en APV",
        text: "Comprueba tu cuenta en APV",
        html: `<p>Hola: ${nombre} comprueba tu cuenta en APV.</p>
        <p>Tu cuenta ya esta lista solo debes comprobarla en el siguiente enlace: 

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar tu cuenta</a></p>

        <p>Si tu no creastes esta cuenta puedes ignorar este mensaje</p>
        `
    });


    console.log("mensaje enviado: %s", info.messageId);
};