import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2100;

app.use(bodyParser.urlencoded({ extended: true }));

function letterCount(fName, lName){
  var sum = fName.length + lName.length;
  return sum;
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", { count: letterCount(req.body.fName, req.body.lName) });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
