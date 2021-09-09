require("dotenv").config();
const path = require("path");
const http = require("http");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT ?? 3030;

app.use(cors());
app.use(logger("dev"));

/* ROUTING */

app.use("/data/", express.static(path.join(__dirname, "../data")));

app.use("/dir-structure", require("./routing/structure"));

app.use("/edit", require("./routing/metadataedit"));

app.use("/download", require("./routing/download"));

let server = http.createServer(app).listen(port);
console.log(`http://localhost:${port}  Server gestartet. Auf Port: ${port}`);
