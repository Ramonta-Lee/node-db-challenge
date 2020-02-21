const express = require("express");
// TODO Projects model
const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve Projects" });
    });
});

router.post("/", (req, res) => {
  Projects.addProject()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to add Project" });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })

    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to get list of resources." });
    });
});

router.get("/task/:id", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve list of tasks" });
    });
});

module.exports = router;
