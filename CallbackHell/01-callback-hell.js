const fs = require('fs');
const path = require('path');

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
  log(filePath, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }
    log(filePath, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log(filePath, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log(filePath, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log(filePath, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.timeEnd('Logs done');
          });
        });
      });
    });
  });
}