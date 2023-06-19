import nodemailer from "nodemailer";

export const emailRegistro = () => {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST_NODEMAILER,
        port: process.env.PORT_NODELMAILER,
        auth: {
            user: process.env.USER_NODEMAILER,
            pass: process.env.PASS_NODEMAILER"
        }
    });
};