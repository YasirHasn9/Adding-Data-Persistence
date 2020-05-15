const db = require("../../data/config");
module.exports = {
  find
};

function find() {
  return db("tasks as t")
    .join("projects as p ", "p.id", "=", "t.project_id")
    .select(
      "t.description",
      "t.notes",
      "t.completed",
      "p.name",
      "p.description as project_description"
    );
}
