const router = require("express").Router();
const taskDb = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await taskDb.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
