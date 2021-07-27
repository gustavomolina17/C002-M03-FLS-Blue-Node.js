const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  imagemUrl: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("filme", filmeSchema);
