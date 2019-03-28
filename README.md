ember-bootstrap-model-select
==============================================================================
[![Build Status](https://travis-ci.org/nickschot/ember-bootstrap-model-select.svg?branch=master)](https://travis-ci.org/nickschot/ember-bootstrap-model-select) [![Ember Observer Score](https://emberobserver.com/badges/ember-bootstrap-model-select.svg)](https://emberobserver.com/addons/ember-bootstrap-model-select) [![npm version](https://badge.fury.io/js/ember-bootstrap-model-select.svg)](https://badge.fury.io/js/ember-bootstrap-model-select)

Integrate [ember-model-select](https://github.com/weddingshoppe/ember-model-select) into your [ember-bootstrap](http;//www.ember.bootstrap.com)
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

## Copyright and license

Code and documentation copyright 2018 [Wedding Shoppe Inc.](http://www.weddingshoppeinc.com) and contributors. Code released under [the MIT license](LICENSE.md).

