import express from "express";// for http method
import morgan from "morgan";// for logging
import fs from "fs"; // for mamanging file on the local directory
import bodyParser from "body-parser";// to get body of the request
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));//to get root directory path
// import.meta.url - give the url of the current node file
// fileURLToPath(import.meta.url) - convert the file url to file path
// dirname(fileURLToPath(import.meta.url)) - provides the current working directory from the file path
const app = express();
const port = 3000;

//Custom middleware to console log request method and request url
function logger(req, res, next) {
  console.log(`Request Method: ${req.method} Request URL: ${req.url}`);
  next();// to move to next middleware or http method
}

//Function to create brand name from the user input
function brandName(fString, Sstrint){
  var name = "<h2>" + fString[0].toUpperCase() + fString.slice(1) + Sstrint[0].toUpperCase() + Sstrint.slice(1) + "</h2>";
  return name;
}

// morgan middleware for logging to access.log file
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.urlencoded({extended: false}));//to get request body
app.use(logger);// custom middleware function for logging

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");//sending html file from the public folder
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
