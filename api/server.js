const express = require("express");
const helmet = require("helmet");
const server = express();

const projectRouter = require("../routers/projects/projectRouter");
const resourcesRouter = require("../routers/resources/resourcesRouter");

server.use(express.json());
server.use(helmet());

server.use("/projects", projectRouter);
server.use("/projects/resources", resourcesRouter);
module.exports = server;
