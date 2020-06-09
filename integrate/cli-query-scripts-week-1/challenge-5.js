/*
  user input: name of table, name of column, search string
  logged data: all entries in the table who's column matches the search
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  column: process.argv[2],
  table: process.argv[3],
  searchString: process.argv[4]
};
//Select City From Customer Where City Like '%Prague%'
// hint:  `... LIKE '%${userInput.searchString}%'`
const queryString = `
Select ${userInput.column} 
From ${userInput.table} 
Where ${userInput.column} 
Like '%${userInput.searchString}%'`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
