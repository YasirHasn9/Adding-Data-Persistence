const router = require("express").Router();
const ProjectsDb = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await ProjectsDb.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
