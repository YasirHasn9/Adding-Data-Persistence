const db = require("../../data/config");
module.exports = {
  find,
  add
};

function find() {
  return db("resources");
}

async function add(resource) {
  const [id] = await db("resources").insert(resource);
  return db("resources")
    .where({ id })
    .first();
}
