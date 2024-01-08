import express from "express";

const app = express();
const port = 3000;

// Custom Middleware to log the request method and request url
function logger(req, res, next){
  console.log(`Request Method: ${req.method} Request URL: ${req.url}`);
  next(); // to go to the next middleware or http request
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
