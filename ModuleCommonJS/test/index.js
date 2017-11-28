const fs = require('fs');

const files = fs.readdirSync(__dirname);

for (let f of files) {
  if (f.startsWith('test-')) {
    require(__dirname + '/' + f);
  }
}