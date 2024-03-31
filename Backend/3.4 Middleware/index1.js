import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(import.meta.url) // "file:///home/max/Documents/WebDevelopment/Web-Development/Backend/3.4%20Middleware/index1.js"
// console.log(fileURLToPath(import.meta.url)) // /home/max/Documents/WebDevelopment/Web-Development/Backend/3.4 Middleware/index1.js
// console.log(dirname(fileURLToPath(import.meta.url))) // /home/max/Documents/WebDevelopment/Web-Development/Backend/3.4 Middleware

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); // to get the information which is coming from the form 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body, req.body.street, req.body.pet);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
