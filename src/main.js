const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

// let sql = `
//     CREATE TABLE IF NOT EXISTS Users(
//     ID TEXT PRIMARY KEY,
//     Username TEXT,
//     Email TEXT
//     DOB TEXT
//     );
// `
// let sql = `
//     SELECT name FROM pragma_table_info("Users");
// `
// let sql = `
//     ALTER TABLE Users
//     RENAME COLUMN Email TO Emali;
// `
// let sql=`
//     INSERT INTO Users(ID, Username, Emali, DOB)
//     VALUES("1234567888/88","Timmy","timmy@failure.org","2005-10-28");
// `
// let show = `SELECT name FROM pragma_table_info("Users"); `

let sql=`
    DELETE FROM Users
    WHERE id = "1234567";
`

// db.exec(sql);

db.all(sql, CallbackFunc);
// db.all(sql,(error, results)=>{

//     if(error)return console.error(error);
//     results.forEach(row =>{
//         console.log(row);
//     });
// });

