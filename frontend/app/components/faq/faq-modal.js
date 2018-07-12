import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didRender() {
    $('.ui.modal').modal('show');
  }
});
