import { getRandomIntInclusive } from './random';

setInterval(() => {
  document.body.innerText = getRandomIntInclusive(0, 100);
}, 1000);
