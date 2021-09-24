const express = require("express");
const router = express.Router();
const zip = require("express-easy-zip");
const path = require("path");
const dirEntry = process.env.DATA_DIR ?? "../data";

router.use(zip());

router.use("/:PATH", function (req, res) {
  res.zip({
    files: [
      {
        path: path.join(__dirname, "../", dirEntry, req.params.PATH),
        name: req.params.PATH,
      },
    ],
    filename: `${req.params.PATH}_${Date.now()}.zip`,
  });
});
module.exports = router;
