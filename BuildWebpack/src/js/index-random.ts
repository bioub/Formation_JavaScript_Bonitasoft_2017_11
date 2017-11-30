import { getRandomIntInclusive } from './random';
import * as $ from 'jquery'

// declare var $: jQuery;

setInterval(() => {
  $(document.body).html(String(getRandomIntInclusive(0, 100)));
}, 1000);
