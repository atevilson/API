import express from "express";
import CarrosController from "../controllers/carrosController.js";

const router = express.Router();

router
    .get("/carros", CarrosController.buscarCarros)
    .get("/carros/:id", CarrosController.buscarCarrosPorId)
    .post("/carros", CarrosController.cadastroDeCarros);



export default router;