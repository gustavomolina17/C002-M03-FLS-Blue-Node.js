const http = require('http');

http.createServer(function (req, res) {
    res.end('<h1><b>Bem vindo ao meu site!</b></h1> <h4>https://blueedtech.com.br/</h4>');
}).listen(3000);

console.log('Meu servidor está rodando!');
