const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const sessionConfig = require('./sessionConfig');

module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cors({ origin: ['http://localhost:3000'] }));
};
