import Control from 'ember-bootstrap/components/bs-form/element/control';
import { computed } from '@ember/object';
import formValidationClass from 'ember-bootstrap/utils/cp/form-validation-class';

export default class ModelSelectControl extends Control {
  @formValidationClass('validationType')
  formValidationClass;

  @computed('formValidationClass', 'triggerClass', 'disabled')
  get concatenatedTriggerClass(){
    let s = `form-control`;

    if(this.get('formValidationClass')){
      s += ` ${this.get('formValidationClass')}`;
    }

    if(this.get('triggerClass')){
      s += ` ${this.get('triggerClass')}`;
    }

    if(this.get('disabled')){
      s += ` disabled`;
    }

    return s;
  }
}
