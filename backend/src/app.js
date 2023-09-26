const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use(router);

module.exports = app;
