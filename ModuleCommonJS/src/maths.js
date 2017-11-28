// (function (exports, require, module, __filename, __dirname) {
const sum = (a, b) => a + b;
exports.substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;

exports.sum = sum;
module.exports.multiply = multiply;
// });