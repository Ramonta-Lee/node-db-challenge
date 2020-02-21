const express = require("express");
const helmet = require("helmet");

// TODO ProjectsRouter goes here

const server = express();

server.use(helmet());
server.use(express.json());

// server.use("/api/projects");

server.get("/", (req, res) => {
  res.send(`<h2> DB Modeling!! </h2>`);
});

module.exports = server;
