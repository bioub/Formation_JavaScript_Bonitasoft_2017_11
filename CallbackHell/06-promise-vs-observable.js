const { Observable } = require('rxjs');

const timeout = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

timeout(1000)
  .then(() => {
    console.log('Promise 1s');
  });

const interval$ = delay => {
  return new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
};

// interval$(1000)
//   .subscribe(() => {
//     console.log('interval 1s');
//   });

Observable.interval(1000)
          .filter(i => i % 2 === 0)
          .map(i => i ** 2)
          .subscribe(i => {
            console.log(`${i} interval 1s`);
          });
