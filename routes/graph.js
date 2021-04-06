// graph route

const express = require("express");
const router = express.Router();
const fetcher = require("../config/elephantsql");

router.get("/", async (_, res) => {
  const data = await fetcher.getData();
  res.json(data);
  // try {
  //   console.log(data);
  //   res.render("graph", { data });
  // } catch (e) {
  //   res.status(404).json({ error: "Graph page not found" });
  // }
});

router.post("/test", async (req, res) => {
  console.log("graph test route was hit ");
  return res.status(200).send({ success: true });
});

module.exports = router;
