import express from "express";
import carros from "./routes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("API de cadastro de carros");
    });

    app.use(express.json(),carros)
}

export default routes;