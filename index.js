import Domodule from 'domodule';
import { default as relative, Units } from '@firstandthird/relative';

class Relative extends Domodule {
  get required() {
    return {
      options: ['date']
    };
  }

  postInit() {
    this.render();
  }

  render() {
    const result = relative(this.options.date);
    this.el.innerHTML = result.string;

    if (result.difference < Units.Hours) {
      setTimeout(this.render.bind(this), 6000);
    }
  }
}

Domodule.register('Relative', Relative);

export default Relative;
