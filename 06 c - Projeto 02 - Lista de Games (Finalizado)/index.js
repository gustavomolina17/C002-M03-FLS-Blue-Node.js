const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

// Transformando a lista de strings em uma lista de Objetos
const games = [
    {
        id: 1,
        nome: 'Sonic the Hedgehog 4',
        imagemUrl: 'https://static.wikia.nocookie.net/sonic/images/c/c0/Sonic_4_Episode_II_boxart.png/revision/latest?cb=20180802192844',
    },
    {
        id: 2,
        nome: 'Need for Speed Underground',
        imagemUrl: 'https://cf.shopee.com.br/file/2ccc83354630ee6a6eb0469eea7687a3',
    },
    {
        id: 3,
        nome: 'Crash Team Racing',
        imagemUrl: 'https://m.media-amazon.com/images/I/71bOy1d1O-L._AC_SX522_.jpg',
    },
    {
        id: 4,
        nome: 'God of War',
        imagemUrl: 'https://m.media-amazon.com/images/I/81G+JvL8TIL.jpg',
    },
    {
        id: 5,
        nome: 'Donkey Kong Country',
        imagemUrl: 'https://m.media-amazon.com/images/I/91+xZjhGTSL._AC_SY550_.jpg',
    },
];

//Funções de validação dos games

const getGamesValidos = () => games.filter(Boolean);

const getGameById = id => getGamesValidos().find(game => game.id === id);

const getGameIndexById = id => getGamesValidos().findIndex(game => game.id === id);

// [GET] / - Home
app.get('/', (req, res) => {
    res.send('Hello, Bluemer!');
});

// [GET] /games - Retorna a lista de games
app.get('/games', (req, res) => {
    res.send(getGamesValidos());
});

// [GET] /games/{id} - Retorna apenas um único game pelo ID
app.get('/games/:id', (req, res) => {
    const id = +req.params.id;
    const game = getGameById(id);

    // Verificando se o game existe

    if (!game) {
        res.send('Game não encontrado.');

        return;
    }

    res.send(game);
});

// [POST] - /games - Cria um novo game
// - Adaptando para funcionar com lista de Objetos
app.post('/games', (req, res) => {
    const game = req.body;

    // Validação

    if (!game|| !game.nome|| !game.imagemUrl) {
        res.status(400).send({ message: 'Game inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".' });

        return;
    }
	
// Pega o último elemento da lista de games

  const lastGame = games[games.length - 1];
  
  // Testa se a lista não está vazia
  
  if (games.length) {
    // Pega o valor do ultimo ID disponivel e soma 1
    game.id = lastGame.id + 1;
    games.push(game);
  } else {
    // Caso a lista esteja vazia o valor do id é 1
  
    game.id = 1;

    games.push(game);
  }

    res.send(game);
});

// [PUT] - /games/{id} - Atualiza um game pelo ID
// - Adaptando para funcionar com lista de Objetos
app.put('/games/:id', (req, res) => {
    const id = +req.params.id;

    const gameIndex = getGameIndexById(id);

    // Validação

    if (gameIndex < 0) {
        res.status(404).send({ message: 'O game que você está tentando editar não foi encontrado.' });

        return;
    }

    const novoGame = req.body;

    if (!Object.keys(novoGame).length) {
        res.status(400).send({ message: 'O body da requisição está vazio.' });

        return;
    }

    if (!novoGame
        || !novoGame.nome
        || !novoGame.imagemUrl) {

        res.status(400).send({ message: 'Game inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".' });

        return;
    }

    const game = getGameById(id);

    games[gameIndex] = {
        ...game,
        ...novoGame,
    };

    res.send(games[gameIndex]);
});

// [Delete] - /games{id} - Remover um game pelo ID
app.delete('/games/:id', (req, res) => {
    const id = +req.params.id;

    const gameIndex = getGameIndexById(id);

  
   // Validação

  if (gameIndexIndex < 0) {
    res.status(404).send({
      message: "O game que você está tentando editar não foi encontrado.",
    });

    return;
  }

  games.splice(gameIndex, 1); // Para apagar efetivamente o conteúdo

  res.send({ message: "Game excluído com sucesso" });
});

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});
