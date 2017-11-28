const hello = require('../src/hello');
const assert = require('assert');

try {
  assert.deepEqual(hello('Romain'), 'Bonjour Romain');
  console.log('Tests OK');
}
catch (err) {
  console.log('Tests fail : ' + err.message);
}