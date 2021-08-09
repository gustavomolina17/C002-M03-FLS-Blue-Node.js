const express = require("express");
const cors = require("cors");
const filmesRoutes = require("./routes/filmes.routes");

const app = express();

app.use(express.json());

// Iniciando mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/banco-filmes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));


// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

app.use(filmesRoutes);

const port = 5000;

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
