const router = require("express").Router({
  mergeParams: true
});
const ProjectsDb = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await ProjectsDb.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProject = await ProjectsDb.add(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await ProjectsDb.findBy(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(401).json({
        message: "Project not found"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id/tasks", async (req, res, next) => {
  try {
    const project = await ProjectsDb.findBy(req.params.id);
    if (project) {
      const tasks = await ProjectsDb.findTasks(req.params.id);
      res.json(tasks);
    } else {
      res.status(401).json({
        message: "Project not found"
      });
    }
  } catch (err) {
    next(err);
  }
});
router.post("/:id/tasks/", async (req, res, next) => {
  try {
    const project = await ProjectsDb.findBy(req.params.id);
    if (project) {
      const task = await ProjectsDb.addTask(req.body);
      res.json(task);
    } else {
      res.status(401).json({
        message: "Project not found"
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
