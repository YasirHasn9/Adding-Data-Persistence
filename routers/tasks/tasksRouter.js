const router = require("express").Router({
  mergeParams: true
});
const taskDb = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await taskDb.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
