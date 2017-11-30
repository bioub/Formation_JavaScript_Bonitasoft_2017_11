const express = require('express');
const morgan = require('morgan');
const path = require('path');
const contacts = require('./routes/contacts');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
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

// 404
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.msg || 'Not Found',
  });
});

// 500
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;
