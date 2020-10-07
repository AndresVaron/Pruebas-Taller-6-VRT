var express = require("express");
var router = express.Router();
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const options = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255,
      },
      errorType: "flat",
      transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true,
    },
    scaleToSameSize: true,
    ignore: "less",
  };

  // The parameters can be Node Buffers
  // data is the same as usual with an additional getBuffer() function
  const data = await compareImages(
    await fs.readFile(
      "../Cypress/cypress/screenshots/colorPalette.spec.js/Inicial.png"
    ),
    await fs.readFile(
      "../Cypress/cypress/screenshots/colorPalette.spec.js/Final.png"
    ),
    options
  );
  await fs.writeFile("./output.png", data.getBuffer());
  res.render("index", { title: "Express" });
});

module.exports = router;
