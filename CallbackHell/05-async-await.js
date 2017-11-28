const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const log = (filePath, msg) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, line);
};

console.time('Logs done');
console.time('Thread idle');

(async () => {
  try {
    try {
      const stat = await fs.stat(dirPath);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        console.log('dossier logs inexistant');
        await fs.mkdir(dirPath);
      }
    }

    await log(filePath, 'Ligne 1');
    await log(filePath, 'Ligne 2');
    await log(filePath, 'Ligne 3');
    await log(filePath, 'Ligne 4');
    await log(filePath, 'Ligne 5');
    console.timeEnd('Logs done');
  }
  catch (err) {
    console.log(err.message);
  }
})();

console.timeEnd('Thread idle');