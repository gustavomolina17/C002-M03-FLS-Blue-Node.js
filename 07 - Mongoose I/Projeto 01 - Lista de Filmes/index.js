// Import do express

const express = require("express");

// Import da biblioteca mongoose

const mongoose = require("mongoose");

// Importação do Model

const filmeModel = require("./models/filme");

// Url de conexão --> mongodb://servidor: porta/nome do banco de dados

//useNewUrlParser --> Para que o Moongoose use o novo sistema de Url

//useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados

mongoose.connect("mongodb://localhost:27017/filmes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Filme = mongoose.model("Filme", filmeModel); //Pega o schema, prepara o Model e retorna um objeto.

//[ADICIONANDO FILMES]

const movie = new Filme({
  nome: "Viúva Negra",
  imagemUrl:
    "https://upload.wikimedia.org/wikipedia/pt/thumb/8/88/Black_Widow_%282020%29.jpg/250px-Black_Widow_%282020%29.jpg",
});

const movie = new Filme({
  nome: "Mortal Kombat",
  imagemUrl:
    "https://br.web.img3.acsta.net/pictures/21/03/31/18/22/5366148.png",
});

const movie = new Filme({
  nome: "The Conjuring 3",
  imagemUrl:
    "https://i.pinimg.com/564x/aa/af/8f/aaaf8f6aadafb06b6ff9a86e353c783c.jpg",
});

// Para verificar se o filme foi salvo corretamente ou se ocorreu um erro

//Promises --> Definem uma ação que vai ser executada no futuro, ou seja, ela pode ser resolvida (com sucesso) ou rejeitada (com erro). Nesse caso, o que vem depois do then é o caso de sucesso, caso contrário será mostrado o erro.

movie
  .save()
  .then(() => {
    console.log("Filme salvo!");
  })
  .catch((err) => {
    console.log(err);
  });

// [LISTANDO FILMES]

// Para listar todos os filmes

Filme.find({})
  .then((filmes) => {
    console.log(filmes);
  })
  .catch((err) => {
    console.log(err);
  });

//Filme Específico ("Mortal Kombat")

Filme.find({ _id: "60febc7cd82945343c9cc217" })
  .then((filme) => {
    console.log(filme);
  })
  .catch((err) => {
    console.log(err);
  });

//[DELETANDO FILMES]

Filme.findByIdAndDelete("60febf545775d242f4de80af")
  .then(() => {
    console.log("Filme Removido!");
  })
  .catch((err) => {
    console.log(err);
  });

//[UPDATE]

Filme.findByIdAndUpdate("60febc7cd82945343c9cc217", {
  nome: "Godzilla vs Kong",
  imagemUrl: "https://www.claquete.com.br/fotos/filmes/poster/7681_medio.jpg",
})
  .then(() => {
    console.log("Filme Atualizado com Sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const port = 3000;

// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
