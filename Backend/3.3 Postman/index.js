import express from "express";

const server = express();
const port = 2100;

server.get("/", (req, res) => {
    res.send("<h1>This is Homie</h1>");
});

server.post("/post", (req, res) => {
    res.sendStatus(201);
});

server.put("/put", (req, res) => {
    res.sendStatus(200);
});

server.patch("/patch", (req, res) => {
    res.sendStatus(200);
});

server.delete("/delete", (req, res) => {
    res.sendStatus(200);
});

server.listen(port, () => {
    console.log(`Server started listening on ${port}`);
});