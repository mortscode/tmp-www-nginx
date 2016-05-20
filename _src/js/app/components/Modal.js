import $ from 'properjs-hobo';

export default class Modal {
  constructor(elem) {
    this.$elem = $(elem);
    this.$modal = $('.js-modal');
    this.$modalContent = $('.js-modal-content');
    this.dataModal = this.$elem.data('modal');

    this.initialize();
  }

  initialize() {
    this._clickEvents();
  }

  _clickEvents() {
    this.$elem.on('click', (e) => {
      e.preventDefault();
      this.$modal.addClass('-active');
    });

    this.$modal.on('click', (e) => {
      e.preventDefault();
      this.$modal.removeClass('-active');
    });
  }
}
