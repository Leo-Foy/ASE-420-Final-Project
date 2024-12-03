const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

app.post('/login', (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Missing email or password' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.get(query, [email], (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        //Login successful
        return res.status(200).json({ success: true, message: 'Login successful' });
        
    })
        
});

app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM QA_Set', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});

app.get('/api/flashcardData', (req, res) => {
    const setId = req.query.setId;  
    console.log("Received setId:", setId);  

    if (!setId) {
        return res.status(400).json({ error: 'setId is required' });
    }

    db.all('SELECT * FROM QandA WHERE setId = ?', [setId], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});