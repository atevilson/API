import express from "express";
import AcessorioController from "../controllers/acessorioController.js";

const router = express.Router();

router
    .get("/acessorio", AcessorioController.listarAcessorios)
    .get("/acessorio/:id", AcessorioController.buscarAcessoriosPorId)
    .post("/acessorio", AcessorioController.cadastroDeAcessorios)
    .put("/acessorio/:id", AcessorioController.atualizarAcessorios)
    .delete("/acessorio/:id", AcessorioController.deletarAcessorios);


export default router;