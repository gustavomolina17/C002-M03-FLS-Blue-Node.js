const express = require("express");
const router = express.Router();

const FilmesController = require("./../controllers/filmes.controller.js");

const filmesController = new FilmesController();

// [GET] /filmes - Retorna a lista de filmes
router.get("/filmes", filmesController.getFilmes);

// [GET] /filmes/{id} - Retorna apenas um único filme pelo ID
router.get("/filmes/:id", filmesController.getFilmesById);

// [POST] - /filmes - Cria um novo filme
router.post("/filmes", filmesController.createFilme);

// [PUT] - /filmes/{id} - Atualiza um filme pelo ID
router.put("/filmes/:id", filmesController.updateFilme);

// [Delete] - /filmes{id} - Remover um filme pelo ID
router.delete("/filmes/:id", filmesController.deleteFilme);

module.exports = router;