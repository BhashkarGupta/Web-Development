//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const filePath =  dirname(fileURLToPath(import.meta.url));
const server = express();
const port = 2100;

function secFunction(ans){
    if (ans === "ILoveProgramming"){
        var path = "/public/secret.html";
    }
    else{
        var path = "/public/index.html";
    }
    return path;
}

server.use(bodyParser.urlencoded({extended: false}));

server.get("/", (req, res) => {
    res.sendFile(filePath + "/public/index.html");
});

server.post("/check", (req, res) => {
    res.sendFile(filePath + secFunction(req.body["password"]));
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});