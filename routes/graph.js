// graph route

const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    res.render("graph");
  } catch (e) {
    res.status(404).json({ error: "Graph page not found" });
  }
});

router.post("/test", async (req, res) => {
  console.log("graph test route was hit ");
  return res.status(200).send({ success: true });
});

module.exports = router;
