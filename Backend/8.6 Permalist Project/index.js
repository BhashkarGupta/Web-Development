import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const todo_database = new pg.Client({
  user: "database_connector",
  host: "172.16.10.92",
  database: "todo_database",
  password: "10923855", 
  port: 5432,
});

todo_database.connect();

app.get("/", async(req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: await get_task_list(),
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  try{
    await todo_database.query(
      "INSERT INTO tasklist (title) VALUES ($1);",
      [item]
    );
  }catch(error){
    console.error(error);
  }
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  try{
    await todo_database.query(
      "UPDATE tasklist SET title = $1 WHERE id = $2;",
      [req.body.updatedItemTitle, req.body.updatedItemId]
    );
  }catch(error){
    console.error(error);
  }
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  try{
    await todo_database.query(
      "DELETE FROM tasklist WHERE id = $1;",
      [req.body.deleteItemId]
    );
  }catch(error){
    console.error(error);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function get_task_list(){
  try{
    let items = (await todo_database.query("SELECT * FROM tasklist")).rows;
    return items;
  }catch(error){
    console.error(error);
  }
}