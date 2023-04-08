import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const VeterinarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        telefono: {
            type: String,
            default: null,
            trim: true
        },
        web: {
            type: String,
            default: null
        },
        token: {
            type: String,
            default: Date.now(),


        },
        confirmado: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    });

// VeterinarioSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });


export const VeterinarioModel = mongoose.model("Veterinario", VeterinarioSchema);