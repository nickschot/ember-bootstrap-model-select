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

## Copyright and license

Code and documentation copyright 2018 [Wedding Shoppe Inc.](http://www.weddingshoppeinc.com) and contributors. Code released under [the MIT license](LICENSE.md).

