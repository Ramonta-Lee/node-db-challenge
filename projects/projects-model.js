const db = require("../data/db-config.js");

module.exports = {
  getResources,
  getProjects,
  getTasks
};

function getResources() {
  return db("resources");
}

function getProjects() {
  return db("projects");
}

function getTasks(id) {
  return db("task")
    .select("*")
    .where("project_id", id);
}
