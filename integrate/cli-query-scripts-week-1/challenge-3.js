/*
  user input: column to order by, ASC or DSC
  logged data: all columns from the invoices table, sorted as instructed by the user input
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = { 
  column: process.argv[2],
  
};
//Select * From Invoice Order by billingCity ASC
const queryString = `
Select * 
From Invoice 
Order by ${userInput.column} DESC`

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});

