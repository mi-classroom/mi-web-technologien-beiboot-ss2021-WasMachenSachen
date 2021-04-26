require("dotenv").config();
const fs = require("fs");
const path = require("path");
const http = require("http");
const express = require("express");
const logger = require("morgan");
const os = require("os");
const cors = require("cors");
const dirTree = require("./lib/directory-tree");

const app = express();
app.use(cors());
app.use(logger("dev"));

const dirEntry = process.env.DATA_DIR;
const filePattern = process.env.FILE_PATTERN;

const fileTree = dirTree(path.join(dirEntry), {
  filePattern: new RegExp(filePattern),
});

/* ROUTING */
app.get("/", (req, res) => {
  res.send(fileTree);
});

app.use("/data/", express.static(path.join(__dirname, "../data")));

let server = http.createServer(app);
server.listen(process.env.SERVER_PORT);
console.log(
  `http://${os.hostname()}:${
    process.env.SERVER_PORT
  }  Server gestartet. Auf Port: ${process.env.SERVER_PORT}`
);
