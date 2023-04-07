import mongoose from "mongoose";


export const connectDb = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`);

    } catch (error) {
        console.log(`Error al conectarse: ${error.message}`);
        process.exit(1);
    }
};