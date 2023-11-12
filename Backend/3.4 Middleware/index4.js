import express from "express";
import morgan from "morgan";
import fs from "fs";
import bodyParser from "body-parser";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`Request Method: ${req.method} Request URL: ${req.url}`);
  next();
}

function brandName(fString, Sstrint){
  var name = "<h2>" + fString[0].toUpperCase() + fString.slice(1) + Sstrint[0].toUpperCase() + Sstrint.slice(1) + "</h2>";
  return name;
}

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  console.log(req.body.street);
  console.log(req.body.pet);
  res.send("<h1>Your Brand Name is:</h1><br>" + brandName(req.body.street, req.body.pet));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
