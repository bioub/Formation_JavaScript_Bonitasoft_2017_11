import * as format from 'date-fns/format';
// import config from '../config/config.json5';
import { getRandomIntInclusive } from './random';
import 'core-js/fn/function/bind';

const locale = 'fr';

interface HorlogeOptions {
  container: HTMLElement;
}

class Horloge {

  private container: HTMLElement;

  constructor(options: HorlogeOptions) {
    const { container } = options;
    this.container = container;
  }

  _render() {
    const now = new Date();
    this.container.innerText = format(now, 'HH:mm:ss');
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
