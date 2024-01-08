// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express";
import axios from "axios";

const port = 2100;
const server = express();
const apiURL = "https://secrets-api.appbrewery.com/random";

server.use(express.static("public"));

server.get("/", async (req, res) => {
    const request = await axios.get(apiURL);
    res.render("index.ejs", {
        secret: request.data.secret,
        user: request.data.username,
    });
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

