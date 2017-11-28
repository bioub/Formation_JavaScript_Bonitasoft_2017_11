function externe(msg) {
  // Portée de closure (sauvegardée)
  // let i = 0;
  // msg = null; // GC

  function interne() {
    // i++;
    console.log(msg);
    // console.log(i);
  }

  return interne;
}

const hello = externe('Hello');

hello();
hello();

// Autre exemple de closure
// Avec un callback async

function doItLater(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 1000);
}

doItLater('Hello 1s'); // dans 1s : Hello 1s

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// dans 1s : 3 3 3

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}
// dans 1s : 0 1 2

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// dans 1s : 0 1 2