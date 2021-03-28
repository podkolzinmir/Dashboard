// settings route

const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    res.render("settings");
  } catch (e) {
    res.status(404).json({ error: "Settings page not found" });
  }
});
router.post("/test", async (req, res) => {
  console.log("settings test route was hit ");
  return res.status(200).send({ success: true });
});

module.exports = router;
