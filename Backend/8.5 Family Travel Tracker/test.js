import pg from "pg";

const world_database = new pg.Client({
    user: "database_connector",
    host: "172.16.10.92",
    database: "world",
    password: "10923855",
    port: 5432,
});

world_database.connect();
const selected_user = 1;
// let country_list = [];

// const users = (await world_database.query("SELECT color FROM users WHERE id = $1;", [selected_user])).rows[0].color;
// const visited_countries = (await world_database.query("SELECT country_code from visited_country WHERE user_id = $1;", [selected_user])).rows;
//   visited_countries.forEach((country)=>{
//     country_list.push(country.country_code);
//   });
// console.log(users);
// console.log(country_list);

// async function fetch_data(selected_user, error){
//   let country_list = [];
//   const color = (await world_database.query("SELECT color FROM users WHERE id = $1;", [selected_user])).rows[0].color;
//   const visited_countries = (await world_database.query("SELECT country_code from visited_country WHERE user_id = $1;", [selected_user])).rows;
//   visited_countries.forEach((country)=>{
//     country_list.push(country.country_code);
//   });
//   const return_object = {
//     countries: country_list,
//     color: color,
//     error: error,
//     total: country_list.length,
//     users: await get_users(),
//   };
//   return return_object;
// }

// async function get_users(){
//   const users = world_database.query("SELECT * FROM users");
//   return (await users).rows;
// }

// console.log(await fetch_data(selected_user, null));

let currentUserId = (await world_database.query(
  "SELECT id FROM users WHERE name = $1;",
  ['Bhashkar']
)).rows[0].id;

console.log(currentUserId);