const db = require("../../data/config");

module.exports = {
  find,
  add,
  findBy,
  findTasks,
  addTask
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

function findTasks(project_id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .where({ project_id });
}

async function addTask(task) {
  const [id] = await db("tasks").insert(task);
  return db("tasks")
    .where({ id })
    .first();
}
