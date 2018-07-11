import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | faq/faq modal', function() {
  setupComponentTest('faq/faq-modal', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#faq/faq-modal}}
    //     template content
    //   {{/faq/faq-modal}}
    // `);

    this.render(hbs`{{faq/faq-modal}}`);
    expect(this.$()).to.have.length(1);
  });
});
