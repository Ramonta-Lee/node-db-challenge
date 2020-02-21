const db = require("../data/db-config.js");

module.exports = {
  getResources,
  getProjects,
  getTasks
};

function getResources() {
  return db("resources");
}

function addProject() {}

function getProjects() {
  return db("projects");
}

function getTasks(id) {
  return db("task")
    .join("projects", "projects.id", "task.project_id")
    .select(
      "task.description as task_description",
      "projects.description",
      "projects.name"
    )
    .where("project_id", id);
}
