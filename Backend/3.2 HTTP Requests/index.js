import Express from "express";

const server = Express();
const port = 2200;

server.get("/", (req, res) => {
    console.log(req);
    res.send("Hi from Server");
});

server.get("/contact", (req, res) => {
    res.send("<h1> This is contact page <h1>");
});

server.get("/about", (req, res) => {
    res.send("<h1> THis is about page </h1>");
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});