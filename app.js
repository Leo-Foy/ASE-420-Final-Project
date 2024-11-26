const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');  // Create or open the database

db.serialize(() => {
  // Example of creating a table
  db.run("CREATE TABLE IF NOT EXISTS user (id INT, name TEXT)");

  // Example of inserting data
  const stmt = db.prepare("INSERT INTO user VALUES (?, ?)");
  stmt.run(1, 'Alice');
  stmt.run(2, 'Bob');
  stmt.finalize();

  // Query the database
  db.each("SELECT id, name FROM user", (err, row) => {
    console.log(`${row.id}: ${row.name}`);
  });
});

db.close();
