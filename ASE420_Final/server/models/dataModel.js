const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error('Error opening database:', err.message);
    else console.log('Connected to SQLite database.');
});

// Query to get all data
exports.getAllData = (callback) => {
    const query = 'SELECT * FROM your_table_name';
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
};

// Query to add new data
exports.addData = (data, callback) => {
    const query = 'INSERT INTO your_table_name (name) VALUES (?)';
    db.run(query, [data.name], function (err) {
        callback(err, this.lastID);
    });
};