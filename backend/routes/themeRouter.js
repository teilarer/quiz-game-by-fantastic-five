const themeRouter = require('express').Router();
const { Theme } = require('../db/models');

themeRouter.get('/', async (req, res) => {
  console.log('fffff')
  const allThemes = await Theme.findAll();
  console.log(allThemes)
  res.json(allThemes);
});

module.exports = themeRouter;