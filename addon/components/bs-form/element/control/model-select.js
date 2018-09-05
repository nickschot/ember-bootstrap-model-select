import Control from 'ember-bootstrap/components/bs-form/element/control';
import ControlValidationMixin from 'ember-bootstrap/mixins/control-validation';
import layout from '../../../../templates/components/bs-form/element/control/model-select';
import { reads } from '@ember/object/computed';

export default Control.extend(ControlValidationMixin, {
  layout,

  selectedModelId: reads('value.id'),

  actions: {
    change(){
      this.onChange(...arguments);
    }
  }
});
