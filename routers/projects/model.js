const db = require("../../data/config");

module.exports = {
  find,
  add,
  findBy,
  tasks
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

function tasks(project_id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .where({ project_id });
}
