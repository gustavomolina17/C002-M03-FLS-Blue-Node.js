const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmeSchema = new Schema({
  nome: { type: String, required: true },
  imagemUrl: { type: String, required: true }
});

const Filme = mongoose.model('Filme', FilmeSchema);

module.exports = Filme;