import express from "express";

const app = express();

app.use(express.json());


const carros = [

{id: 1, "modelo": "Onix Plus", "Motor": "Turbo", "Cor": "Azul", "Potência": "116cv", "Ano": "2023", "Valor": 86.000},
{id: 2, "modelo": "Cruze Sedan", "Motor": "Turbo", "Cor": "Cinza Satin", "Potência": "153cv", "Ano": "2023", "Valor": 145.020}

];


// Rota de pesquisa

app.get("/carros", (req, res) => {
    res.status(200).json(carros);
});

export default app;