import nodemailer from "nodemailer";

export const emailOlvidePassword = async (datos) => {
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
        subject: "Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola: ${nombre} has solicitado reestablecer tu password.</p>

        <p>Sigue el siguiente enlace para generar un nuevo password: 

        <a href="${process.env.FRONTEND_URL}/olvidePassword/${token}">Reestablecer password</a></p>

        <p>Si tu no creastes esta cuenta puedes ignorar este mensaje</p>
        `
    });


    console.log("mensaje enviado: %s", info.messageId);
};