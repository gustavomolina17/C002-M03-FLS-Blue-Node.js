const PlantService = require("../services/plants.service");
const mongoose = require("mongoose");
const model = require("../Models/planta");
const plantService = new PlantService();

class PlantsController {
  async getPlants(req, res) {
    const plants = await plantService.findAll();
    res.send(plants);
  }

  async getPlantsById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("ID inválido.");
      return;
    }

    const planta = await plantService.findById(id);

    if (!planta) {
      res.status(404).send({ message: "Planta não encontrada" });
      return;
    }
    res.send(planta);
  }

  async createPlant(req, res) {
    const plant = req.body;

    if (plant.length < model.length) {
      res.sendStatus(400).send({
        message:
          "Certifique-se de que  todos os campos estejam preenchidos:'nome','tipo', 'imagemURL', 'alimento'.",
      });
    }

    if (plant.alimento === true || plant.alimento === false) {
      const plantaSalva = await plantService.createPlant(plant);

      res.send(plantaSalva);
    } else {
      res.send({
        messsage:
          "Certifique-se que o valor passado para o alimento é BOLEANO!",
      });
      return;
    }
  }

  async updatePlant(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("ID inválido.");
      return;
    }

    const planta = await plantService.findById(id);

    const novaPlanta = req.body;

    if (!planta) {
      res.status(404).send("Planta não encontrada");
      return; // p/ parar a execução
    }

    if (!novaPlanta || planta.length !== novaPlanta.length) {
      res
        .status(400)
        .send(
          "Verifique se os campos:'nome','tipo', 'imagemURL', 'alimento' foram enviados na requisição."
        );
      return; // p/ parar a execução
    }

    plantService.updatePlant(novaPlanta, id);
    const plantaAtulizada = await plantService.findById(id);
    res.send(plantaAtulizada);
  }

  async deletePlant(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("ID inválido.");
      return;
    }

    const planta = await plantService.findById(id);

    if (!planta) {
      res.status(404).send("Planta não encontrada");
      return; // p/ parar a execução
    }

    await plantService.delete(id);

    res.send({ message: "Planta excluída com sucesso!!!" });
  }
}

module.exports = PlantsController;
