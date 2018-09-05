ember-bootstrap-model-select
==============================================================================

Integrate [ember-model-select](https://github.com/weddingshoppe/ember-model-select) into your [ember-bootstrap](http;//www.ember.bootstrap.com)
forms.

Installation
------------------------------------------------------------------------------

```
ember install ember-bootstrap-model-select
```


Usage
------------------------------------------------------------------------------

With this addon installed, you have a new `controlType` of `model-select` available.

```hbs
{{#bs-form model=yourModel as |form|}}  
  {{form.element controlType="model-select" property="foo" label="Choose" options=options}}
{{/bs-form}}
```

If your options array consists of objects, use the `optionLabelPath` to specify the property that should be used as the
options label:

```hbs
{{#bs-form model=yourModel as |form|}}  
  {{form.element controlType="power-select" property="foo" label="Choose" options=options optionLabelPath="title"}}
{{/bs-form}}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-bootstrap-model-select`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
