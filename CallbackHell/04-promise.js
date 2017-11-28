const fs = require('fs-extra');
const path = require('path');
const util = require('util');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const statPromise = util.promisify(fs.stat);

const log = (filePath, msg) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  })
};

console.time('Logs done');
console.time('Thread idle');

statPromise(dirPath)
  .catch(err => {
    if (err && err.code === 'ENOENT') {
      return fs.mkdir(dirPath);
    }
    throw err;
  })
  .then(() => log(filePath, 'Ligne 1'))
  .then(() => log(filePath, 'Ligne 2'))
  .then(() => log(filePath, 'Ligne 3'))
  .then(() => log(filePath, 'Ligne 4'))
  .then(() => log(filePath, 'Ligne 5'))
  .then(() => console.timeEnd('Logs done'))
  .catch(err => {
    console.log(err.message);
  });

console.timeEnd('Thread idle');