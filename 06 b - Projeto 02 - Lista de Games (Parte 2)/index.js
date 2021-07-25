const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

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

// [GET] / - Home
app.get('/', (req, res) => {
    res.send('Projeto - CRUD com jogos v1.0.');
});

// [GET] /jogos - Retorna a lista de jogos
app.get('/jogos', (req, res) => {
    res.send(jogos.filter(Boolean));
});

// [GET] /jogos/{id} - Retorna apenas um único jogo pelo ID
app.get('/jogos/:id', (req, res) => {
    const id = req.params.id - 1;

    const jogo = jogos[id];

    // Validação dos jogos

    if (!jogo) {
        res.send('Jogo não encontrado.');

        return;
    }

    res.send(jogo);
});

// [POST] - /jogos - Cria um novo jogo
app.post('/jogos', (req, res) => {
    const jogo = req.body.jogo;

    const id = jogos.length;

    jogos.push(jogo);

    res.send(`Jogo adicionado com sucesso: '${jogo}'. ID do jogo: '${id}'.`);
});

// [PUT] - /jogos/{id} - Atualiza um jogo pelo ID
app.put('/jogos/:id', (req, res) => {
    const id = req.params.id - 1;

    const jogo = req.body.jogo;

    jogos[id] = jogo;

    res.send(`Jogo atualizado com sucesso: '${jogo}'.`);
});

// [DELETE] - /jogos{id} - Remover um jogo pelo ID
app.delete('/jogos/:id', (req, res) => {
    const id = req.params.id - 1;

    delete jogos[id];

    res.send('Jogo excluído com sucesso.');
});

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}.`);
});
