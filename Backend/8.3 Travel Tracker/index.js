import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const world_database = new pg.Client({
  user: "postgres",
  host: "172.16.10.92",
  database: "world",
  password: "",
  port: 5432,
});

await world_database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs", await query_database(null));
});

app.post("/add", async(req, res)=>{
  res.render("index.ejs", await update_database(req.body.country))
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

async function update_database(user_entry){
  let sql_query = `SELECT country_code FROM country_code WHERE LOWER(country_name) = '${user_entry.toLowerCase()}'`;
  let send_error = null;
  try{
    let raw_user_selection = await world_database.query(sql_query);
    let selected_country_code = raw_user_selection.rows[0].country_code;
    try{
      sql_query = `INSERT INTO visited_countries (country_code) VALUES ('${selected_country_code}')`;
      await world_database.query(sql_query);
    }catch(error){
      send_error = "This country has already been selected";
      console.error(error);
    }
  }catch(error){
    console.error(error);
    send_error = "wrong country name or improper format, please try again.";
  }
  return await query_database(send_error); 
}

async function query_database(error){
  let visited_countries_list = [];
  let raw_visited_countries = await world_database.query(
    "SELECT country_code FROM visited_countries"
  );
  for(let i = 0; i < raw_visited_countries.rows.length; i++){
    visited_countries_list.push(raw_visited_countries.rows[i].country_code);
  }
  let return_object = {
    countries: visited_countries_list,
    total: visited_countries_list.length,
    error: error,
  };
  return return_object;
}