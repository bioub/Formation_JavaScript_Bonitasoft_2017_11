const assert = require('assert');

function tropGrandOuPetit(nb) {
  const entierAlea = Math.floor(Math.random() * 101);

  if (nb > entierAlea) {
    return 'Trop grand';
  }

  if (nb < entierAlea) {
    return 'Trop petit';
  }

  return 'Gagné';
}

try {
  let realRandom = Math.random();
  Math.random = () => 0.5; // Monkey Patch
  assert.deepEqual('Trop petit', tropGrandOuPetit(0));
  assert.deepEqual('Gagné', tropGrandOuPetit(50));
  assert.deepEqual('Trop grand', tropGrandOuPetit(100));
  Math.random = realRandom;
  console.log('Tests OK');
}
catch (err) {
  console.log('Tests fail');
}

console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3
delete Math.sum;
console.log(Math.sum); // undefined

// Création d'un objet qui ne contient que des props
// ou des méthodes mais créé une seule
const coords = {
  x: 10,
  y: 20,
};

for (let key in coords) {
  if (coords.hasOwnProperty(key)) {
    console.log(key); // x y
    console.log(coords[key]); // 10 20
  }
}

const MyMath = {
  sum: (a, b) => a + b,
};

/*
const createButton = function(options) {
  const value = options.value;
  const height = options.height;
  const width = options.width;
  const bgColor = options.bgColor;
  const color = options.color;

  // TODO Création du bouton
};

createButton({

})
*/

// factory pour les objets multi-instanciés
// sans méthodes
const createCoords = (x, y) => ({x, y});
const coords2 = createCoords(10, 20);

// function constructor pour les objets multi-instanciés
// avec des méthodes

const Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je suis Romain
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

const eric = new Contact('Eric');
console.log(eric.hello === romain.hello); // false

// Simuler une propriété privée

const Voiture = function(marque) {
  this.getMarque = function() {
    return marque;
  };
  this.setMarque = function(val) {
    marque = val;
  };
};





const clio = new Voiture('Renault');
console.log(clio.getMarque()); // Renault
clio.setMarque('Peugeot'); // Renault
console.log(clio.getMarque()); // Renault