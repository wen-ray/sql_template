const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./src/sample.db", sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    let sql = `
    CREATE TABLE IF NOT EXISTS Users(
        id TEXT PRIMARY KEY,
        Username TEXT,
        Emali TEXT,
        DOB TEXT
    );
    `
    db.exec(sql);
    console.log("Connected to database!");
})

let sql = `
--SQL QUERY HERE
`

//how can we execute the sql query?
