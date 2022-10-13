const homeRouter = require('express').Router();
const { User } = require('../db/models');

homeRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const users = await User.findAll({
        order: [['score', 'DESC']],
      });
      res.json({ users });
    } catch ({ message }) {
      res.json({ message: 'items did not found' });
    }
  })
  .put(async (req, res) => {
    try {
      const userId = req.session.user.id;
      const { score } = req.body;
      const data = await User.findOne({ where: { id: userId } });
      data.score = score;
      const r = await data.save();
      res.json({ r });
    } catch (error) {
      res.json(error.message);
    }
  });

module.exports = homeRouter;
