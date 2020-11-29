const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/all", async (req, res) => {
  try {
    let results = await db.all();
    res.json(results).status(200);
  } catch (error) {
    console.log("error", error);
    res.status(500).json("There was an error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    let results = await db.one(req.params.id);
    res.json(results).status(200);
  } catch (error) {
    console.log("error", error);
    res.status(500).json("There was an error");
  }
});

router.post("/", async (req, res) => {
  try {
    let data = req.body;
    let results = await db.add(data.title);
    res.json(results).status(200);
  } catch (error) {
    console.log("error", error);
    res.status(500).json("There was an error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let results = await db.delete(req.params.id);
    res.json(results).status(200);
  } catch (error) {
    console.log("error", error);
    res.status(500).json("There was an error");
  }
});

module.exports = router;
