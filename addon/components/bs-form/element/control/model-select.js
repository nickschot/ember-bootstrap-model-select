import Control from 'ember-bootstrap/components/bs-form/element/control';
import ControlValidationMixin from 'ember-bootstrap/mixins/control-validation';
import layout from '../../../../templates/components/bs-form/element/control/model-select';
import { computed } from '@ember/object';

export default Control.extend(ControlValidationMixin, {
  layout,

  concatenatedTriggerClass: computed('formFeedbackClass', 'triggerClass', 'disabled', function(){
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
  })
});
