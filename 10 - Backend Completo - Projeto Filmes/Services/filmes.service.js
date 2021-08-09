const filmeModel = require("./../models/filme");

class FilmeService {
  async findAll() {
    return await filmeModel.find();
  }

  async findById(id) {
    return await filmeModel.findById(id);
  }

  async createFilme(filme) {
    return await new filmeModel(filme).save();
  }

  async updateFilme(filme, id) {
    return await filmeModel.findOneAndUpdate({ _id: id }, filme);
  }

  async delete(id) {
    return await filmeModel.findByIdAndDelete(id);
  }
}

module.exports = FilmeService;