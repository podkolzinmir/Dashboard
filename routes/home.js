// home route

const express = require("express");
const router = express.Router();
const data = require('../config/elephantsql')





router.get("/", async (_, res) => {
  try {
  //  const rows = await data.getData();
    res.render("home", { layout: "main"});
  } catch (e) {
    res.status(404).json({ error: "Home page not found" });
  }
});

module.exports = router;
