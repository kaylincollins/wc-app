const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('../database/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/submissions', db.fetchAllForms, (req, res) => {
  res.end();
})

app.post('/submit', db.saveForm, (req, res) => {
  res.end();
})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
// const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));