const express = require("express");
const foodModel = require("../models/food");
const app = express();

//[GET]

app.get("/foods", async (req, res) => {
  const foods = await foodModel.find({});

  try {
    return res.send(foods);
  } catch (error) {
    res.status(500).send(error);
  }
});

//POST

app.post("/food", async (request, response) => {
  const food = new foodModel(request.body);

  try {
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Patch = Outra maneira de trabalhar com UPDATE

app.patch("/food/:id", async (request, response) => {
  try {
    await foodModel.findByIdAndUpdate(request.params.id, request.body);
    await foodModel.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/food/:id", async (request, response) => {
  try {
    const food = await foodModel.findByIdAndDelete(request.params.id);

    if (!food) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
