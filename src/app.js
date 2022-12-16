import express from "express";
import db from "./database/dbConnect.js";

// Conexão do banco com a API

db.on("error", console.log.bind(console, "Erro na conexão com o banco de dados!"));
db.once("open", () => {
    console.log("Conexão com o banco bem sucedida!");
});

const app = express();

app.use(express.json());


export default app;