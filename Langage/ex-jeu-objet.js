function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// 1 - créer random avec object literal
// tel que random.getIntInclusive(0, 100)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

// 2 - créer une fonction constructeur Jeu
// avec jouer sur son prototype
// tel que  :
// const jeu = new Jeu();
// jeu.jouer();

const jouer = function() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();

  });
};

jouer();

// 3 - Passer des paramètres à Jeu via un objet
// tel que  :
// const jeu = new Jeu({min: 10, max: 20});
// jeu.jouer();

// 4 - Ajouter des valeurs par défaut pour min et max
// tel que  :
// const jeu = new Jeu({max: 20});
// jeu.jouer();