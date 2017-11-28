const { sum } = require('../src/maths');
const assert = require('assert');

try {
  assert.deepEqual(sum(1, 2), 3);
  console.log('Tests OK');
}
catch (err) {
  console.log('Tests fail : ' + err.message);
}