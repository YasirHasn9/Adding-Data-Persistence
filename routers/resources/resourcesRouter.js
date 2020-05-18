const router = require("express").Router();
const ResourcesDb = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await ResourcesDb.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProject = await ResourcesDb.add(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
