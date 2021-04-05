// graph route

const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  var data = [
    { time: 1617424498717, val: 39 },
    { time: 1617424498718, val: 34 },
    { time: 1617424498719, val: 59 },
    { time: 1617424498720, val: 80 },
  ];
  try {
    res.render("graph", {
      data: data,
    });
  } catch (e) {
    res.status(404).json({ error: "Graph page not found" });
  }
});

router.post("/test", async (req, res) => {
  console.log("graph test route was hit ");
  return res.status(200).send({ success: true });
});

module.exports = router;