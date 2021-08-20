const express = require("express");
const plantsRoutes = require("./Routes/plants.routes");

const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_Plantas", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(plantsRoutes);

//[GET] - / (Home)

app.get("/", (req, res) => {
  res.send("Batata, você é meu amor!!!");
});

const port = 3000; // Dá problema ao fazer deply no Heroku

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
