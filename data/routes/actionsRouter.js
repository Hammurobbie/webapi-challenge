const express = require("express");

const amHelper = require("../helpers/actionModel");

const pmHelper = require("../helpers/projectModel");

const router = express.Router();

router.post("/", (req, res) => {
  amHelper
    .insert(req.body)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem creating the project." });
    });
});

router.get("/", (req, res) => {
  amHelper
    .get()
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the project(s)." });
    });
});

router.get("/:id", (req, res) => {
  amHelper
    .get(req.params.id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the project(s)." });
    });
});

//get project actions

router.get("/:id/projects", (req, res) => {
  pmHelper
    .getProjectActions(req.params.id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the project(s)." });
    });
});

router.put("/:id", (req, res) => {
  amHelper
    .update(req.params.id, req.body)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem updating the project." });
    });
});

router.delete("/:id", (req, res) => {
  amHelper
    .remove(req.params.id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem deleting the project." });
    });
});

module.exports = router;
