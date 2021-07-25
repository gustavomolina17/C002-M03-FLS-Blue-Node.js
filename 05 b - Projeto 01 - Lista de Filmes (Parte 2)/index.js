const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const filmes = [
  "Capitão América: O primeiro vingador",
  "Capitã Marvel",
  "O Incrivel Hulk",
  "Homem de Ferro",
  "Homem de Ferro 2",
];

// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

// [GET] /filmes - Retorna a lista de filmes
app.get("/filmes", (req, res) => {
  res.send(filmes.filter(Boolean));
});

// [GET] /filmes/{id} - Retorna apenas um único filme pelo ID
app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;

  const filme = filmes[id];

  // Validação dos filmes

  if (!filme) {
    res.send("Filme não encontrado.");

    return;
  }

  res.send(filme);
});

// [POST] - /filmes - Cria um novo filme
app.post("/filmes", (req, res) => {
  const filme = req.body.filme;

  const id = filmes.length;

  filmes.push(filme);

  res.send(`Filme adicionado com sucesso: '${filme}'. ID do filme: '${id}'.`);
});

// [PUT] - /filmes/{id} - Atualiza um filme pelo ID
app.put("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;

  const filme = req.body.filme;

  filmes[id] = filme;

  res.send(`Filme atualizado com sucesso: '${filme}'.`);
});

// [DELETE] - /filmes{id} - Remover um filme pelo ID
app.delete("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;

  delete filmes[id];

  res.send("Filme excluído com sucesso.");
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
