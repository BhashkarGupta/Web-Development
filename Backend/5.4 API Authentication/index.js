import express from "express";
import axios from "axios";

const app = express();
const port = 2100;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "bhashkar";
const yourPassword = "#Mysecurepassword";
const yourAPIKey = "25e825ad-4640-4ecb-ad1c-6952941eea66";
const yourBearerToken = "97f95aa6-aba2-49e0-8a87-f85a35aeb2d5";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    const reply = response.data;
    const result = JSON.stringify(reply);
    res.render("index.ejs", {content: result});
  } catch (error) {
    res.render("index.ejs", {content: error.message});
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}all?page=2`,{
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const reply = response.data;
    const result = JSON.stringify(reply);
    res.render("index.ejs", { content: result });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    const reply = response.data;
    const result = JSON.stringify(reply);
    res.render("index.ejs", { content: result });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
    const reply = response.data;
    const result = JSON.stringify(reply);
    res.render("index.ejs", { content: result });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
