const themeRouter = require('express').Router();
const { Theme } = require('../db/models');

themeRouter.get('/', async (req, res) => {
  const allThemes = await Theme.findAll();
  res.json(allThemes);
});

module.exports = themeRouter;