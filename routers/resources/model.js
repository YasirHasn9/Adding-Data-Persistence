const db = require("../../data/config");
module.exports = {
  find,
  add
};

function find() {
  return db("resources");
}

async function add(project) {
  const [id] = await db("resources").insert(project);
  return db("resources")
    .where({ id })
    .first();
}
