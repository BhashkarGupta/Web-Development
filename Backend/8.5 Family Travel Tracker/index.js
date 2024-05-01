import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const world_database = new pg.Client({
  user: "database_connector",
  host: "172.16.10.92",
  database: "world",
  password: "10923855", 
  port: 5432,
});
world_database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = (await world_database.query("SELECT id FROM users;")).rows[0].id;

app.get("/", async (req, res) => {
  let check_users = await get_users();
  if (check_users.length === 0){
    res.render("new.ejs");
  }else{
    res.render("index.ejs", await fetch_data(currentUserId, null));
  }
});

app.post("/add", async (req, res) => {
  res.render("index.ejs", await update_database(currentUserId, req.body.country));
});

app.post("/user", async (req, res) => {
  if(req.body.add){
    res.render("new.ejs");
  }else{
    res.render("index.ejs", await fetch_data(req.body.user, null));
  }
});

app.post("/new", async (req, res) => {
  await add_user(req.body.name, req.body.color);
  currentUserId = (await world_database.query(
    "SELECT id FROM users WHERE name = $1;",
    [req.body.name]
  )).rows[0].id;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

async function get_users(){
  const users = world_database.query("SELECT * FROM users");
  return (await users).rows;
}

async function fetch_data(selected_user, error){
  let country_list = [];
  const color = (await world_database.query("SELECT color FROM users WHERE id = $1;", [selected_user])).rows[0].color;
  const visited_countries = (await world_database.query("SELECT country_code from visited_country WHERE user_id = $1;", [selected_user])).rows;
  visited_countries.forEach((country)=>{
    country_list.push(country.country_code);
  });
  const return_object = {
    countries: country_list,
    color: color,
    error: error,
    total: country_list.length,
    users: await get_users(),
  };
  currentUserId = selected_user;
  return return_object;
}

async function update_database(selected_user, user_entry){
  let send_error = null;
  try{
    const selected_country_code = (await world_database.query(
      "SELECT country_code FROM country_code WHERE LOWER(country_name) = $1;",
      [user_entry.toLowerCase()]
    )).rows[0].country_code;
    try{
      await world_database.query(
        "INSERT INTO visited_country VALUES ($1, $2);",
        [selected_user, selected_country_code]
      );
    }catch(error){
      send_error = "This country has already been selected";
      console.error(error);
    }
  }catch(error){
    send_error = "wrong country name or improper format, please try again.";
    console.error(error);
  }
  return await fetch_data(selected_user,send_error);
}

async function add_user(name, color){
  try{
    await world_database.query(
      "INSERT INTO users (name, color) VALUES ($1, $2);",
      [name, color]
    );
  }catch(error){
    console.error(error);
  }
}