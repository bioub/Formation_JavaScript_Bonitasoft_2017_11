// 'use strict';

global.prenom = 'Gladys';

var contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
  console.log('Bonjour ' + p1 + ', ' + p2 + ' je suis ' + this.prenom);
}

hello('Jean', 'Eric');
hello.call(contact, 'Jean', 'Eric');
hello.call(contact, ...['Jean', 'Eric']);
hello.apply(contact, ['Jean', 'Eric']);

function bind(fn, applyThis) {
  return function() {
    fn.apply(applyThis, arguments);
  };
}

const helloContact = bind(hello, contact);
helloContact('Jean', 'Eric');

const helloES5 = hello.bind(contact); // ES5
helloES5('Jean', 'Eric');