const express = require("express");
const router = express.Router();
const path = require("path");

const dirTree = require("../lib/directory-tree");
const getFileList = require("../helper");
const dirEntry = process.env.DATA_DIR ?? "../data";
const filePattern = process.env.FILE_PATTERN ?? ".(jpg|jpeg|json)";

const fullFileTree = dirTree(path.join(dirEntry), {
  filePattern: new RegExp(filePattern),
});

const filteredFileTree = dirTree(path.join(dirEntry), {
  filePattern: new RegExp(filePattern),
  depth: 1,
});

router.get("/full", (req, res) => {
  res.send(fullFileTree);
});
router.get("/base", (req, res) => {
  res.send(filteredFileTree);
});
router.get("/custom/", (req, res) => {
  if (req.query.path) {
    let customPath = path.join(req.query.path);
    let subDirStructure = dirTree(customPath, {
      filePattern: new RegExp(filePattern),
    });
    res.send(subDirStructure);
  } else {
    res.send("path is missing");
  }
});
router.get("/file-list", (req, res) => {
  res.send(getFileList("../data", filePattern));
});

module.exports = router;
