const express = require('express');
const app = express();

const port = 3000;

const filmes = [
    'Capitão América: O primeiro vingador',
    'Capitã Marvel',
    'O Incrível Hulk',
];

// [GET] / - Home
app.get('/', (req, res) => {
    res.send('Hello, Bluemer!');
});

// [GET] /filmes - Retorna a lista de filmes
app.get('/filmes', (req, res) => {
    res.send(filmes);
});

// [GET] /filmes/{id} - Retorna apenas um único filme pelo ID
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;

    const filme = filmes[id];

    res.send(filme);
});

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});
