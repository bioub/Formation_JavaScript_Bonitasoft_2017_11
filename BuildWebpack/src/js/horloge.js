import format from 'date-fns/format';
import config from '../config/config.json5';
import { getRandomIntInclusive } from './random';

const locale = 'fr';

class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(now, config.format);
    const r = getRandomIntInclusive(0, 255);
    const g = getRandomIntInclusive(0, 255);
    const b = getRandomIntInclusive(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}

export { Horloge, locale };
