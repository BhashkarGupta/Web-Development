import express from "express";

const server = express();
const port = 2100;
var currentDate = new Date();

server.get("/", (req, res) => {
    res.render("index.ejs",
    { day: currentDate.getDay()}
    );
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});