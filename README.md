ember-bootstrap-model-select
==============================================================================

Integrate [ember-model-select](https://github.com/nickschot/ember-model-select) into your [ember-bootstrap](http;//www.ember.bootstrap.com)
forms.

Installation
------------------------------------------------------------------------------

```
ember install ember-bootstrap-model-select
```


Usage
------------------------------------------------------------------------------

With this addon installed, you have a new `controlType` of `model-select` available which enables you to set `belongsTo` relationships on the form.

```hbs
{{#bs-form model=yourModel as |form|}}  
  {{#form.element controlType="model-select" label="My Relationship" property="myOtherModel" as |el|}}
    {{el.control
      modelName='my-other-model'
      labelProperty='name'
    }}
  {{/form.element}}
{{/bs-form}}

```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

