const express = require("express");
const router = express.Router();
const PlantsController = require("../Controllers/plants.controller");

const plantsController = new PlantsController();

// [GET] - /plantas - Retornar a lista de plantas

router.get("/plantas", plantsController.getPlants);

//[GET] -/plantas/ {id} - Retorna uma única planta por id

router.get("/plantas/:id", plantsController.getPlantsById);

//[POST] - /plantas - Adiciona uma nova planta
router.post("/plantas", plantsController.createPlant);

//[PUT] - /plantas /{id} - Altera uma planta pelo id

router.put("/plantas/:id", plantsController.updatePlant);

//[DELETE] - /plantas/{id} - Remove uma planta pelo id

router.delete("/plantas/:id", plantsController.deletePlant);

module.exports = router;
