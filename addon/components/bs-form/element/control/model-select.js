import Control from 'ember-bootstrap/components/bs-form/element/control';
import ControlValidationMixin from 'ember-bootstrap/mixins/control-validation';
import { computed } from '@ember/object';

export default class ModelSelectControl extends Control.extend(ControlValidationMixin) {
  @computed('formFeedbackClass', 'triggerClass', 'disabled')
  get concatenatedTriggerClass(){
    let s = `form-control`;

    if(this.get('formFeedbackClass')){
      s += ` ${this.get('formFeedbackClass')}`;
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
