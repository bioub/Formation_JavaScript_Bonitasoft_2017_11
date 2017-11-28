const fs = require('fs');
const path = require('path');
const async = require('async');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const log = (filePath, msg, cb) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
};

console.time('Logs done');
console.time('Thread idle');
fs.stat(dirPath, (err, stat) => {
  if (err && err.code === 'ENOENT') {
    console.log('dossier logs inexistant');
    return fs.mkdir(dirPath, (err) => {
      if (err) {
        return console.log(err.message);
      }
      next();
    });
  }
  next();
});
console.timeEnd('Thread idle');

function next() {
  async.series([
    next => log(filePath, 'Ligne 1', next),
    next => log(filePath, 'Ligne 2', next),
    next => log(filePath, 'Ligne 3', next),
    next => log(filePath, 'Ligne 4', next),
    next => log(filePath, 'Ligne 5', next),
    next => {
      console.timeEnd('Logs done');
      next();
    }
  ], (err) => {
    if (err) {
      return console.log(err.message);
    }
  });
}