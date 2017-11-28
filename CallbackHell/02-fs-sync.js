const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const log = (filePath, msg) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
};

console.time('Logs done');
console.time('Thread idle');

try {
  try {
    const stat = fs.statSync(dirPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('dossier logs inexistant');
      fs.mkdirSync(dirPath);
    }
  }

  log(filePath, 'Ligne 1');
  log(filePath, 'Ligne 2');
  log(filePath, 'Ligne 3');
  log(filePath, 'Ligne 4');
  log(filePath, 'Ligne 5');
  console.timeEnd('Logs done');
  console.timeEnd('Thread idle');
}
catch (err) {
  console.log(err.message);
}