const db = require("../../data/config");

module.exports = {
  find,
  add
};

function find() {
  return db("projects");
}

async function add(project) {
  const [id] = await db("projects").insert(project);
  return db("projects")
    .where({ id })
    .first();
}
