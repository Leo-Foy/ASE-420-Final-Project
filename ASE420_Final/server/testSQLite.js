const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error('Error opening database:', err.message);
    }
    console.log('SQLite3 is working!');
    db.close();
});