import express from "express";
import CarrosController from "../controllers/carrosController.js";

const router = express.Router();

router
    .get("/carros", CarrosController.buscarCarros)
    .get("/carros/:id", CarrosController.buscarCarrosPorId)
    .post("/carros", CarrosController.cadastroDeCarros)
    .put("/carros/:id", CarrosController.atualizarCarros)
    .delete("/carros/:id", CarrosController.deletarCarros);



export default router;