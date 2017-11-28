const index = require('../src');
const assert = require('assert');

try {
  assert.deepEqual(index(), 'index');
  console.log('Tests OK');
}
catch (err) {
  console.log('Tests fail : ' + err.message);
}