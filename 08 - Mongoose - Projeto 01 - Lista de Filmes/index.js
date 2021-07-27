const express = require("express");

const mongoose = require("mongoose");

const Filme = require("./models/filme");

mongoose.connect("mongodb://localhost:27017/movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const port = 3001;

app.use(express.json());

// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

// [GET] /filmes - Retorna a lista de filmes (OK)
app.get("/filmes", async (req, res) => {
  const filmes = await Filme.find();
  res.send(filmes);
});

// [GET] /filmes/{id} - Retorna apenas um único filme pelo ID (OK)
app.get("/filmes/:id", async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (filme == null) {
      return res
        .status(404)
        .send({ message: "Não é possível encontrar o filme." });
    }
    res.send(filme);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// [POST] - /filmes - Cria um novo filme (OK)

app.post("/filmes", async (req, res) => {
  const filme = new Filme({
    nome: req.body.nome,
    imagemUrl: req.body.imagemUrl,
  });

  // Validação

  if (!filme || !filme.nome || !filme.imagemUrl) {
    res.status(400).send({
      message:
        'Filme inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
    });

    return;
  }

  const filmeSalvo = await filme.save();

  res.send(filmeSalvo);
});

// [PUT] - /filmes/{id} - Atualiza um filme pelo ID

app.put("/filmes/:id", async (req, res) => {
  try {
    const filme = await Filme.findOneAndUpdate(req.params.id);
    if (filme == null) {
      return res.status(404).send({ message: "Filme não encontrado" });
    }
    if (req.body.nome != null) {
      filme.nome = req.body.nome;
    }
    if (req.body.imagemUrl != null) {
      filme.imagemUrl = req.body.imagemUrl;
    }
    const updatedfilme = await filme.save();
    res.send(updatedfilme);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// [Delete] - /filmes{id} - Remover um filme pelo ID
app.delete("/filmes/:id", async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (filme == null) {
      return res.status(404).send({ message: "Filme não encontrado" });
    }
    await filme.remove();
    res.send({ message: "Filme deletado com sucesso!" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
