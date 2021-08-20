const mongoose = require("mongoose");

const PlantaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  imagemURL: { type: String, required: true },
  alimento: { type: Boolean, required: true },
});

const Planta = mongoose.model("db_Plantas", PlantaSchema);

module.exports = Planta;
