import mongoose from "mongoose";

const modelosDeCarroSchema = new mongoose.Schema({
    id: {type: Number},
    modelo: {type: String, required: true},
    motor: {type: String, required: true},
    acessorio: {type: mongoose.Schema.Types.ObjectId, ref: "acessorio"}, //required: true},
    cor: {type: String, required: true},
    potencia: {type: String, required: true},
    ano: {type: Number, required: true},
    valor: {type: Number, required: true},

});

const carros = mongoose.model("carros", modelosDeCarroSchema);

export default carros;