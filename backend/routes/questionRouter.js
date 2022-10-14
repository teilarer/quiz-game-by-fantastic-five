const questionRouter = require('express').Router();
const { Question, Theme } = require('../db/models');

questionRouter.get('/', async (req, res) => {
  const allQuestions = await Question.findAll({
    where: { status: true },
    include: {
      model: Theme,
    },
  });
  res.json(allQuestions);
});
module.exports = questionRouter;
