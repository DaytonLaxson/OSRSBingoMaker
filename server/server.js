const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the client/public directory
app.use(express.static(path.join(__dirname, '../client/public')));

// API routes can go here
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});