// Schema -->  é uma estrutura de dados de documento (ou forma do documento) que é aplicada por meio da camada de aplicativo.

// Model --> são construtores que pegam um schema e criam uma instância de um documento equivalente a registros em um banco de dados relacional.

//Collections (Coleção) --> são equivalentes a tabelas em bancos de dados relacionais. Eles podem conter vários documentos JSON.

const mongoose = require("mongoose");

const filmeModel = new mongoose.Schema({
  nome: { type: String, required: true },
  imagemUrl: { type: String, required: true },
});

module.exports = filmeModel;
