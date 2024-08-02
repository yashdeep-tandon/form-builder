// backend/server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const secretKey = 'your_secret_key';

app.get('/bundle.js', (req, res) => {
  const token = req.query.token;
  if (!token) {
    return res.status(403).send('Access denied.');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).send('Access denied.');
    }
    res.sendFile(path.resolve(__dirname, '../frontend/dist/bundle.js'));
  });
});

app.listen(8000, () => console.log('Server running on port 8000'));
