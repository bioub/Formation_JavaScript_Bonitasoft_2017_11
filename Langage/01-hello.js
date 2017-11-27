// (function (exports, require, module, __filename, __dirname) {

// Module : créer une portée de fichier
// Automatique dans Node.js (Module CommonJS)
// Manuel ici : Module IIFE
// IIFE : Immediately Invoked Function Expression
// Voir aussi : AMD, ES6
(function () {
  /**
   * Additionne 2 paramètres
   * @param {number} a Le premier nombre
   * @param {number} b Le deuxième nombre
   * @returns {number} La somme
   */
  const sum = (a, b) => a + b;

  for (let i = 0; i < 3; i++) {
    console.log(sum(i, i));
  }
}());
// });