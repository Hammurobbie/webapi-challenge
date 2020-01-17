const express = require("express");

const pmHelper = require("../helpers/projectModel");

const router = express.Router();

router.post("/", (req, res) => {
  pmHelper
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
  pmHelper
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
  pmHelper
    .get(req.params.id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the project(s)." });
    });
});

router.put("/:id", (req, res) => {
  pmHelper
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
  pmHelper
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
