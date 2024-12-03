const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error('Error opening database:', err.message);
    else console.log('Connected to SQLite database.');
});


exports.getAllData = (callback) => {
    const query = 'SELECT * FROM users';
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
};

exports.addData = (data, callback) => {
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.run(query, [data.email, data.password], function (err) {
        callback(err, this.lastID);
    });
};