const authRouter = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models");

authRouter.post("/auth/register", async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, secPassword } = req.body;
    console.log(name, email, password, secPassword);
    const uniqUser = await User.findOne({ where: { email } });

    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      secPassword.length < 1
    ) {
      return res.json({ message: "Заполните все поля" });
    }
    if (uniqUser) {
      return res.json({ message: "Пользователь с таким email уже существует" });
    }
    if (password.length < 7) {
      return res.json({ message: "Минимальная длина пароля 8 символов" });
    }
    if (password !== secPassword) {
      return res.json({ message: "Пароли не совпадают" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hash,
      score: 0,
    });

    req.session.user = {
      id: user.id,
      email: user.email,
    };

    res.json({ message: "success", user: {id: user.id, name: user.name, email: user.email, score: user.score} });
  } catch (error) {
    res.json({ error: error.message });
  }
});

authRouter.post("/auth/login", async (req, res) => {
  const { email, password } = req.body
  if ( !email.trim() || !password.trim()) {
    return res.json({ message: "Заполните все поля" });
  }

  if (email.length > 4 && password.length > 7) {
    let user;
    try {
      user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        res.json({ message: "Нет пользователя с таким email и/или паролем." });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    try {
      const compPass = await bcrypt.compare(password, user.password);
      if (!compPass) {
        res.json({ message: "Неверный email и/или пароль." });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    req.session.user = {
      id: user.id,
      email: user.email,
    };
    res.json({ message: "success", user });
  } else {
    res.json({ message: "Слишком короткий email и/или пароль." });
  }
});

authRouter.post("/auth/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: "Не удалось выйти" });
      return;
    }
    res.clearCookie('user_sid');
    res.json({ message: 'success'} )
  });
});


authRouter.get('/auth/user', async (req, res) => {
  if (req.session.user) {
    const user = await User.findOne({ where: {id: req.session.user.id}, attributes: ['id', 'name', 'email','score']});
    res.json({ isUser: true, user });
  } else {
    res.json({ isUser: false });
  }
});

module.exports = authRouter;
