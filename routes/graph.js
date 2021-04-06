// graph route

const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  var data = [
    9, 3, 5, 2, 3
  ];

  
  try {
    console.log(data);
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