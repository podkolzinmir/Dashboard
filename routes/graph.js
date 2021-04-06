// graph route

const express = require("express");
const router = express.Router();
const staticJSON = require("../staticData/data.json");

router.get("/", async (_, res) => {
  var data = fetchData();
  var failCount = 0;
  var passCount = 0;
  var pSafe = 0;
  var pUnsafe = 0;
  for (dp of data) {
    if (dp.models_passed == 0) {
      passCount++;
    }
    if (dp.models_passed == 3) {
      failCount++;
    }
    if (dp.models_passed == 1){
      pSafe++;
    }
    if (dp.models_passed == 2){
      pUnsafe++;
    }
  }

  var barArr = [passCount, pSafe, pUnsafe, failCount];
  var pieArr = [passCount, failCount];
  console.log(pieArr);
  console.log(barArr);
  try {
    console.log(data);
    res.render("graph", { data, pieArr, barArr });
  } catch (e) {
    res.status(404).json({ error: "Graph page not found" });
  }
});

router.post("/test", async (req, res) => {
  console.log("graph test route was hit ");
  return res.status(200).send({ success: true });
});

function fetchData() {
  var returnArr = [];
  for (dataPoint of staticJSON) {
    //we have a safe situation "100%"
    //OR
    //we don't have a safe situation "100%"
    if (dataPoint.models_passed == 0 || dataPoint.models_passed == 3 ||dataPoint.models_passed == 2 || dataPoint.models_passed == 1 ) {
      returnArr.push(dataPoint);
    }
  }
  console.log(returnArr);
  return returnArr;
}

module.exports = router;
