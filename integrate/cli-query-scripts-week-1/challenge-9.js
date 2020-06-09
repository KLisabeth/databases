/*
  user input: table name, column name, search string, number of entries
  logged data: return a given number of rows matching the search parameter
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  table_name: process.argv[2],
  column_name: process.argv[3],
  search_string: process.argv[4],
  number_of_entries: process.argv[5]
};
//Select Count(*) From Customer Where Country in( SELECT Country FROM Customer WHERE Country LIKE "%Belgium%" limit 10) === returns 1 as a number of rows
const queryString = `
Select count(*) 
From  ${ userInput.table_name}
Where ${ userInput.column_name} 
like (Select ${ userInput.column_name}
From ${ userInput.table_name}
Where ${ userInput.column_name} like '%${userInput.search_string}%' limit ${number_of_entries})`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
