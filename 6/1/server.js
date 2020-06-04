import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", function (req, res) {
  res.send(req.body);
});

app.listen(8080);
