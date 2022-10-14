require("dotenv").config();

const express = require("express");
const { sequelize } = require("./db/models");
const config = require("./config/config");

const authRouter = require("./routes/authRoute");
// const lkRouter = require("./routes/lkRouter");
const homeRouter = require("./routes/homeRouter");
const themeRouter = require('./routes/themeRouter');
const questionRouter = require('./routes/questionRouter');
const { use } = require("./routes/authRoute");
const app = express();
config(app);

const PORT = process.env.PORT ?? 4000;

app.use("/api", authRouter);
// app.use("/lk", lkRouter);
app.use("/home", homeRouter);
app.use('/themes/loaded', themeRouter);
app.use('/cards/loaded', questionRouter);


app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port...`);
    await sequelize.authenticate();
  } catch (error) {
    console.log(error.message);
  }
});
