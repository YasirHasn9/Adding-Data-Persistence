const express = require("express");
const helmet = require("helmet");
const server = express();

const projectRouter = require("../routers/projects/projectRouter");

server.use(express.json());
server.use(helmet());

server.use("/projects", projectRouter);
module.exports = server;
