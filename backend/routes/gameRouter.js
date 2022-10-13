const gameRouter = require("express").Router();
const { Card } = require("../db/models");

gameRouter.get("/", async (req, res) => {
  try {
    const newGame = await Card.findAll();
    res.json({
      data: newGame,
    });
  } catch (error) {
    res.json(error.message);
  }
});

gameRouter.get("/:id", async (req, res) => {
  const id = req.params
  console.log(id);
  try {
    const newGame = await Card.findAll();
    res.json({
      data: newGame,
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = gameRouter;
