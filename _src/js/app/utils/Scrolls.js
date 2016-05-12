//import $ from 'properjs-hobo';
import emitter from './emitter';

export default class Scrolls {

  constructor($elem) {
    this.$elem = $elem;
    this.topOffset = null;

    this.initialize();
  }

  initialize() {
    emitter.on('app--scroll', () => {
      this.topOffset = this.$elem[0].getBoundingClientRect().top;
      // console.log(this.$elem);
      if (this.topOffset <= 0) {
        this.$elem.addClass('top');
      }
    });
  }
}
