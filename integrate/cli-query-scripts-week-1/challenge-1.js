/*
  user input: employee first name
  logged data: that employee's last name
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  input: process.argv[2]
};
// Select lastName, firstName From Employee Where firstName Like 'Jane';
const queryString = `
Select lastName
From Employee 
Where firstName Like = '${userInput.input}'`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});

