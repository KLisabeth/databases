/*
  user input: column name, table name
  logged data: the first 20 unique values for the given column, in the given table
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  column: process.argv[2],
  table: process.argv[3]
};
//Select Title From Album LIMIT 0,20
const queryString = `
Select distinct ${userInput.column} 
From ${userInput.table} 
Limit 0,20`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
