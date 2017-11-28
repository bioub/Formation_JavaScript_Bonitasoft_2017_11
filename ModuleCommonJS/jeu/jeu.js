const readline = require('readline');
const random = require('./random');

// 2 - class
module.exports = class Jeu {
  constructor(options = {}) {
    // 3 - default value
    // options = options || {};

    // 4 - destructuring object
    // const min = options.min || 0;
    // const max = (options.max !== undefined) ? options.max : 100;
    const {
      min = 0,
      max = 100,
    } = options;

    // Object.assign(this, {min: 0, max: 100}, options);

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      // 5 - Template string
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();

    });
  }
}