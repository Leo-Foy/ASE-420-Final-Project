const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});