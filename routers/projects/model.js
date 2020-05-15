const db = require("../../data/config");

module.exports = {
  find,
  add,
  findBy
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

async function findBy(id) {
  return await db("projects")
    .where({ id })
    .first();
}
