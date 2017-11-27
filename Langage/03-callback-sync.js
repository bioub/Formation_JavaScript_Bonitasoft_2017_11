const nbs = [2, 3, 4];

nbs.forEach(function(nb, i) {
  console.log(nb, i);
});

nbs.filter(nb => nb % 2 === 0)
   .map(nb => nb * nb)
   .forEach(function(nb, i) {
     console.log(nb, i);
   });

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log(sum); // 9

// acc: 0, nb: 2 => 0 + 2 : 2
// acc: 2, nb: 3 => 2 + 3 : 5
// acc: 5, nb: 4 => 5 + 4 : 9

Array.prototype.myForEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    var nb = this[i];
    cb(nb, i, this);
  }
};

nbs.myForEach(function(nb, i) {
  console.log(nb, i);
});

console.log('fin');