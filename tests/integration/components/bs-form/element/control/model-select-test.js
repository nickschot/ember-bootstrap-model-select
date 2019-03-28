import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { clickTrigger } from 'ember-power-select/test-support/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import defaultScenario from '../../../../../../../dummy/mirage/scenarios/default';
import EmberObject from '@ember/object';

module('Integration | Component | bs-form/element/control/model-select', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function(){
    defaultScenario(this.server);
    
    this.set('user', null);
    this.set('model', EmberObject.create({
      user: null
    }))
  });

  test('it renders as blockless control component', async function(assert) {
    await render(hbs`
    {{#bs-form model=this as |form|}}
      {{#form.element controlType="model-select" property="user" as |el|}}
        {{el.control
          modelName="user"
          labelProperty="name"
        }}
      {{/form.element}}
    {{/bs-form}}`);

    assert.dom('.ember-power-select-trigger').exists({ count: 1 });

    await clickTrigger('.ember-model-select');
    assert.dom('.ember-power-select-option').exists({ count: 25 });
  });

  test('it renders as block control component', async function(assert) {
    await render(hbs`
    {{#bs-form model=this as |form|}}
      {{#form.element controlType="model-select" property="user" as |el|}}
        {{el.control
          modelName="user"
          labelProperty="name"
        }}
      {{/form.element}}
    {{/bs-form}}`);

    assert.dom('.ember-power-select-trigger').exists({ count: 1 });

    await clickTrigger('.ember-model-select');
    assert.dom('.ember-power-select-option').exists({ count: 25 });
  });

  test('it renders placeholder', async function(assert) {
    await render(hbs`
    {{#bs-form model=this as |form|}}
      {{#form.element controlType="model-select" property="user" placeholder="something" as |el|}}
        {{el.control
          modelName="user"
          labelProperty="name"
        }}
      {{/form.element}}
    {{/bs-form}}`);
    assert.dom('.ember-power-select-trigger').hasText('something');

    await render(hbs`
    {{#bs-form model=this as |form|}}
      {{#form.element controlType="model-select" property="user" placeholder="something" as |el|}}
        {{#el.control
          modelName="user"
          labelProperty="name"
        as |val|}}
          {{val}}
        {{/el.control}}
      {{/form.element}}
    {{/bs-form}}`);
    assert.dom('.ember-power-select-trigger').hasText('something');
  });

  test('it can disable select', async function(assert) {
    await render(hbs`
    {{#bs-form model=this as |form|}}
      {{#form.element controlType="model-select" property="user" disabled=true as |el|}}
        {{el.control
          modelName="user"
          labelProperty="name"
        }}
      {{/form.element}}
    {{/bs-form}}`);
    assert.dom('.ember-power-select-trigger').hasAttribute('aria-disabled');

    await render(hbs`
    {{#bs-form model=this as |form|}}
      {{#form.element controlType="model-select" property="user" disabled=true as |el|}}
        {{#el.control
          modelName="user"
          labelProperty="name"
        as |val|}}
          {{val}}
        {{/el.control}}
      {{/form.element}}
    {{/bs-form}}`);
    assert.dom('.ember-power-select-trigger').hasAttribute('aria-disabled');
  });

  test('it passes power-select options', async function(assert) {
    await render(hbs`
    {{#bs-form model=model as |form|}}
      {{#form.element controlType="model-select" modelName="user" property="user" as |el|}}
        {{el.control
          modelName="user"
          labelProperty="name"
          
          searchEnabled=false
          triggerClass="form-control"
         }}
      {{/form.element}}
    {{/bs-form}}`);

    assert.dom('.form-control').exists({ count: 1 });

    await clickTrigger('.ember-model-select');
    assert.dom('.ember-power-select-search-input').doesNotExist();
  });

  test('it passes model-select options', async function(assert) {
    await render(hbs`
    {{#bs-form model=model as |form|}}
      {{#form.element controlType="model-select" modelName="user" property="user" as |el|}}
        {{el.control
          modelName="user"
          labelProperty="name"
          
          pageSize=10
         }}
      {{/form.element}}
    {{/bs-form}}`);

    assert.dom('.form-control').exists({ count: 1 });

    await clickTrigger('.ember-model-select');
    assert.dom('.ember-power-select-option').exists({ count: 10 });
  });
});
