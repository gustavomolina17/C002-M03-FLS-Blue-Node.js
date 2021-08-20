const plantaModel = require("../Models/planta");

class plantsService {
  async findAll() {
    return await plantaModel.find();
  }

  async findById(id) {
    return await plantaModel.findById(id);
  }

  async createPlant(plant) {
    return await new plantaModel(plant).save();
  }

  async updatePlant(plant, id) {
    return await plantaModel.findByIdAndUpdate({ _id: id }, plant);
  }

  async delete(id) {
    return await plantaModel.findByIdAndDelete(id);
  }
}

module.exports = plantsService;
