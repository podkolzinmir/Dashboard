// home route

const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    res.render("home", { layout: "main" });
  } catch (e) {
    res.status(404).json({ error: "Home page not found" });
  }
});

router.post("/test", async (req, res) => {
  console.log("home test route was hit ");
  return res.status(200).send({ success: true });
});

module.exports = router;
