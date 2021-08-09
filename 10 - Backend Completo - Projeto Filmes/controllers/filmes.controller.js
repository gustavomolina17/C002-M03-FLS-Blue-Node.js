const FilmeService = require("./../services/filmes.service");
const mongoose = require("mongoose");

const filmeService = new FilmeService();

class FilmesController {
  async getFilmes(req, res) {
    const filmes = await filmeService.findAll();
    res.send(filmes);
  }

  async getFilmesById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const filme = await filmeService.findById(id);

    // Validação das mensagens
    if (!filme) {
      res.status(404).send("Filme não encontrado.");

      return;
    }

    res.send(filme);
  }

  async createFilme(req, res) {
    const filme = req.body;

    // Validação

    if (!filme || !filme.nome || !filme.imagemUrl) {
      res.status(400).send({
        message:
          'Filme inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    const filmeSalvo = await filmeService.createFilme(filme);

    res.send(filmeSalvo);
  }

  async updateFilme(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send("Código inválido.");
      return;
    }

    const filme = await filmeService.findById(id);

    // Validação das mensagens
    if (!filme) {
      res.status(404).send("Filme não encontrado.");

      return;
    }

    const novoFilme = req.body;

    if (!Object.keys(novoFilme).length) {
      res.status(400).send({ message: "O body da requisição está vazio." });

      return;
    }

    if (!novoFilme || !novoFilme.nome || !novoFilme.imagemUrl) {
      res.status(400).send({
        message:
          'Filme inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    filmeService.updateFilme(novoFilme, id);
    const filmeAtualizado = await filmeService.findById(id);

    res.send(filmeAtualizado);
  }

  async deleteFilme(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const filme = await filmeService.findById(id);

    // Validação das mensagens
    if (!filme) {
      res.status(404).send("Filme não encontrado.");

      return;
    }

    await filmeService.delete(id);

    res.send({ message: "Filme excluído com sucesso" });
  }
}

module.exports = FilmesController;