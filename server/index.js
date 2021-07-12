require("dotenv").config();
const path = require("path");
const http = require("http");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dirTree = require("./lib/directory-tree");
const getFileList = require("./helper");

const app = express();
app.use(cors());
app.use(logger("dev"));

const dirEntry = process.env.DATA_DIR ?? "../data";
const filePattern = process.env.FILE_PATTERN ?? ".(jpg|jpeg|json)";
const port = process.env.SERVER_PORT ?? 3030;

const fullFileTree = dirTree(path.join(dirEntry), {
  filePattern: new RegExp(filePattern),
});

const filteredFileTree = dirTree(path.join(dirEntry), {
  filePattern: new RegExp(filePattern),
  depth: 1,
});

/* ROUTING */
app.get("/dir-structure/full", (req, res) => {
  res.send(fullFileTree);
});
app.get("/dir-structure/base", (req, res) => {
  res.send(filteredFileTree);
});
app.get("/dir-structure/custom/", (req, res) => {
  if (req.query.path) {
    let customPath = path.join(req.query.path);
    console.log(customPath);
    let subDirStructure = dirTree(customPath, {
      filePattern: new RegExp(filePattern),
    });
    res.send(subDirStructure);
  } else {
    res.send("path is missing");
  }
});
app.get("/dir-structure/file-list", (req, res) => {
  res.send(getFileList("../data", filePattern));
});
app.use("/data/", express.static(path.join(__dirname, "../data")));

app.use("/edit", require("./routing/metadataedit"));

let server = http.createServer(app);
server.listen(port);
console.log(`http://localhost:${port}  Server gestartet. Auf Port: ${port}`);
