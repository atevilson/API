import mongoose from "mongoose";

const acessorioSchema = new mongoose.Schema(
    {
        id: {type: Number},
        acessorio: {type: String, required: true},
        modelo: {type: String, required: true},
        valor: {type: Number, required: true}
    }
)

const acessorio = mongoose.model("acessorio", acessorioSchema);

export default acessorio;