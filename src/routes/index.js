import express from "express";
import carros from "./routes.js";
import acessorio from "./routesAcessorio.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("API de cadastro de carros");
    });

    app.use(
        express.json(),
        carros,
        acessorio)
}

export default routes;