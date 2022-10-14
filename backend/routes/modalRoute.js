const router = require('express').Router();
const { Question, User } = require('../db/models');

router.put('/', async (req, res) => {
    console.log(req.body)
    const { id, points } = req.body;
    try {
      const user = await User.findOne({
        where: { id },
      });
      console.log(user.score)
      console.log(points)
      user.score = +user.score + Number(points);
      console.log(user.score)
      await user.save()
      res.json({user, status: 'success'});
    } catch (error) {
      res.json({ status: false});
    }
  });

module.exports = router;
