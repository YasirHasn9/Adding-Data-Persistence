const db = require("../../data/config");
module.exports = {
  find,
  add
};

function find() {
  return db("resources");
}


