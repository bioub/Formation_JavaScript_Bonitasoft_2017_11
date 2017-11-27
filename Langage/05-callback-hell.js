setTimeout(function () {
  console.log('1s');
  setTimeout(function () {
    console.log('2s');
    setTimeout(function () {
      console.log('3s');
      setTimeout(function () {
        console.log('4s');
        setTimeout(function () {
          console.log('5s');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log('fin');
