/*
  user input: column name, starting index, number of entries
  logged data: a specific number artist names, starting at a specific row number
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  column_name: process.argv[2], 
  starting_index: process.argv[3],
  number_of_entries: process.argv[4],
};
//Select ArtistId, Name From Artist Where ArtistId >= 10 LIMIT 10
const queryString = `
Select ArtistId, Name 
From ${userInput.column_name} 
Where ArtistId >= ${userInput.starting_index} 
LIMIT ${userInput.number_of_entries}`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
