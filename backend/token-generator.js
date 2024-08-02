// backend/token-generator.js
const jwt = require('jsonwebtoken');
const secretKey = '@123';

const token = jwt.sign({ user: 'authorized_user' }, secretKey, { expiresIn: '1h' });
console.log(token);
