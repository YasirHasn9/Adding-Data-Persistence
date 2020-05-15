const express = require("express");
const helmet = require("helmet");
const server = express();

const projectRouter = require("../routers/projects/projectRouter");
const resourcesRouter = require("../routers/resources/resourcesRouter");
const tasksRouter = require("../routers/tasks/tasksRouter");

server.use(express.json());
server.use(helmet());

server.use("/projects", projectRouter);
server.use("/projects/resources", resourcesRouter);
server.use("/projects/tasks", tasksRouter);
module.exports = server;
