import express from "express";
import AcessorioController from "../controllers/acessorioController";

const routerAcessorio = express.Router();

routerAcessorio
    .get("/acessorio", AcessorioController.listarAcessorios)
    .get("/acessorio", AcessorioController.buscarAcessoriosPorId)
    .post("/acessorio", AcessorioController.cadastroDeAcessorios)
    .put("/acessorio", AcessorioController.atualizarAcessorios)
    .delete("/acessorio", AcessorioController.deletarAcessorios);


export default routerAcessorio;