import express from "express";
import dotenv from "dotenv/config";
import veterinarioRoutes from "./routes/veterinario.routes.js";
import pacienteRoutes from "./routes/paciente.routes.js";
import cors from "cors";

const app = express();
// app.use(cors("http://localhost:5173"));
app.use(cors(process.env.FRONTEND_URL));

import { connectDb } from "./config/db.js";

app.use(express.json());
const PORT = process.env.PORT || 4001;

// dotenv.config();


app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);


app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
    connectDb();

});