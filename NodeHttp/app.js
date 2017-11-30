const express = require('express');
const morgan = require('morgan');
const contacts = require('./routes/contacts');

const app = express();

app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// app.use((req, res, next) => {
//   if (req.headers.authorization === '123') {
//     return next();
//   }
//   res.statusCode = 401;
//   res.json({
//     msg: 'You must log first',
//   })
// });

app.use('/api/contacts', contacts);

module.exports = app;
