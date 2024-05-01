import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const database_connector = new pg.Client({
  user: "database_connector",
  host: "172.16.10.92",
  database: "authentication_v1",
  password: "10923855", 
  port: 5432,
});

database_connector.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  await create_user(email, password);
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const aunticated = await check_login(email, password);
  console.log(aunticated);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function create_user(email, password){
  try{
    await database_connector.query(
      "INSERT INTO users(email, password) VALUES ($1, $2);",
      [email, password]
    );
    console.log("user added");
  }catch(error){
    console.error(error);
  }
}

async function check_login(email, password){
  try{
    const stored_password = (await database_connector.query(
      "SELECT password FROM users WHERE email = $1;",
      [email]
    )).rows[0].password;
    // const stored_password = (await database_connector.query(`SELECT password FROM users WHERE email = '${email}'`)).rows[0].password;
    console.log(typeof(stored_password), typeof(password));
    console.log(stored_password, password);
    if (stored_password === password){
      return true;
    }else{
      return false;
    }
  }catch(error){
    console.error(error);
  }
}