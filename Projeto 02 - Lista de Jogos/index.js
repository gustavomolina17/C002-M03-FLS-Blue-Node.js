const express = require('express');
const app = express();

const port = 3000;

const jogos = [
    'Avengers - Playstation 4',
    'Super Mario Odyssey - Nintendo Switch',
    'Mario Kart 8 - Nintendo Switch',
    'Ratchet & Clank - PlayStation 5',
    'Final Fantasy VII Remake Intergrade - PlayStation 5',
    'Star Wars Jedi: Fallen Order - PlayStation 5',
    'Devil May Cry 5 Special Edition - Playstation 5',
    'Crash Nsane Trilogy - Playstation 4',
    'The Last of Us II -  Playstation 4 ',
    'Resident Evil 3 - Xbox One',
];

// Laço para percorrer a lista e mostrar no console o conteúdo + indice.
jogos.forEach(function (item, indice) {
    console.log(item, indice);
});

// Usando variáveis para envio de mensagens
const msg1 = 'Seja bem vindo, Bluemer!!';
const msg2 = 'Nesse Codelab criaremos uma lista de Jogos :)';
const msg3 = 'Escolha os seus jogos favoritos e let´s work.';

// [GET] / - Home
app.get('/', (req, res) => {
    res.send('<h1>' + msg1 + '</h1>' + '<h3>' + msg2 + '</h3>' + '<h4>' + msg3 + '</h4>');
});

// - [GET] /jogos - Retorna a lista de jogos
app.get('/jogos', (req, res) => {
    res.send(jogos);
});

// - [GET] /jogos/{id} - Retorna apenas um único jogo pelo ID
app.get('/jogos/:id/', (req, res) => {
    const id = req.params.id - 1;
    const jogo = jogos[id];

    res.send(jogo);
});

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});
