const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://dbuser:fLdIrDvjIUrFAWx1@cluster0.fwba3.mongodb.net/test",
  {
    useNewUrlParser: true, //Nova string de conexão
    useUnifiedTopology: true, //monitoramento do banco
  }
);

app.use(foodRouter);

app.listen(3001, () => {
  console.log("Servidor rodando");
});
