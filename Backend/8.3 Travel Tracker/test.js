import pg from "pg";

const world_database = new pg.Client({
    user: "postgres",
    host: "172.16.10.92",
    database: "world",
    password: "258456P",
    port: 5432,
});
await world_database.connect();
// database.connect();
// let user_selection = "Cuba"

// const result = await database.query(`select country_code from country_code WHERE country_name = '${user_selection}'`);

// console.log(result.rows[0].country_code);

// for(let i = 0; i < result.rows.length; i++){
//     console.log(result.rows[i].country_code);
// }
async function update_database(user_entry){
    // await world_database.connect();
    let raw_user_selection = await world_database.query(
      `SELECT country_code FROM country_code WHERE country_name = '${user_entry}'`
    );
    let selected_country_code = raw_user_selection.rows[0].country_code;
    let sql_query = `INSERT INTO visited_countries (country_code) VALUES ('${selected_country_code}')`;
    await world_database.query(sql_query);
    // await world_database.end();
  }

async function query_database(){
    // await world_database.connect();
    let raw_visited_countries = await world_database.query(
      "SELECT country_code FROM visited_countries"
    );
    // await world_database.end();
    let visited_countries_list = [];
    
    for(let i = 0; i < raw_visited_countries.rows.length; i++){
      visited_countries_list.push(raw_visited_countries.rows[i].country_code);
    }
    return visited_countries_list;
  }

await update_database("India");
console.log(await query_database());