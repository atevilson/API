import express from "express";
import db from "./database/dbConnect.js";

// Conexão do banco com a API

db.on("error", console.log.bind(console, "Erro na conexão com o banco de dados!"));
db.once("open", () => {
    console.log("Conexão com o banco bem sucedida!");
});

const app = express();

app.use(express.json());


const carros = [

{id: 1, "Modelo": "Onix Plus", "Motor": "Turbo", "Cor": "Azul", "Potência": "116cv", "Ano": "2023", "Valor": "R$ 86.000"},
{id: 2, "Modelo": "Cruze Sedan", "Motor": "Turbo", "Cor": "Cinza Satin", "Potência": "153cv", "Ano": "2023", "Valor": "R$ 145.020"}

];


// Rota de pesquisa

app.get("/carros", (req, res) => {
    res.status(200).json(carros);
});

// Rota de pesquisa por id
app.get("/carros:id", (req, res) => {
    res.status(200).json(carros);
});

app.post("/carros", (req, res) => {
    carros.push(req.body);
    res.status(201).send("Carro cadastrado!");
});

export default app;