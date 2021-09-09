const express = require("express");
const router = express.Router();
const zip = require("express-easy-zip");
const path = require("path");

router.use(zip());

router.use("/:PATH", function (req, res) {
  console.log(path.join(__dirname, "../../data/", req.params.PATH));
  res.zip({
    files: [
      {
        path: path.join(__dirname, "../../data/", req.params.PATH),
        name: req.params.PATH,
      },
    ],
    filename: `${req.params.PATH}_${Date.now()}.zip`,
  });
});
module.exports = router;
