import Component from '@ember/component';

export default Component.extend({
  didRender() {
    $('.ui.modal').modal('show');
  }
});
