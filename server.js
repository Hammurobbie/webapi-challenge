const express = require("express");

const actionRouter = require("./data/routes/actionsRouter");

const projectRouter = require("./data/routes/projectsRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Sprint Challenge API</h1>");
});

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
};

server.use(logger);

server.use("/actions", actionRouter);

server.use("/projects", projectRouter);

module.exports = server;
