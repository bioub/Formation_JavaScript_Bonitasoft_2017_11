'use strict';

import { Horloge } from './horloge';

const divElt = document.querySelector('.horloge');
const clock = new Horloge({
  container: <HTMLElement> divElt,
});
clock.start();
