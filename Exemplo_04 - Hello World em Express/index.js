const express = require('express'); // Importando o Express
const app = express(); // Iniciando o Express

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/blue', (req, res) => {
    res.send('<h1>Welcome, Bluemer!</h1>');
});

app.get('/blue/info', (req, res) => {
    res.send('<h3>Brincando com Node.js</h3>');
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log('Ocorreu um erro!');
    } else {
        console.log('Servidor iniciado com sucesso!');
    }
});
