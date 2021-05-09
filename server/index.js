require("dotenv").config();
const path = require("path");
const http = require("http");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dirTree = require("./lib/directory-tree");

const app = express();
app.use(cors());
app.use(logger("dev"));

const dirEntry = process.env.DATA_DIR ?? "../data";
const filePattern = process.env.FILE_PATTERN ?? ".(jpg|jpeg)";

const fileTree = dirTree(path.join(dirEntry), {
  filePattern: new RegExp(filePattern),
});

/* ROUTING */
app.get("/", (req, res) => {
  res.send(fileTree);
});

app.use("/data/", express.static(path.join(__dirname, "../data")));

const port = process.env.SERVER_PORT ?? 3030;
let server = http.createServer(app);
server.listen(port);
console.log(`http://localhost:${port}  Server gestartet. Auf Port: ${port}`);
