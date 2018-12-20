import Control from 'ember-bootstrap/components/bs-form/element/control';
import ControlValidationMixin from 'ember-bootstrap/mixins/control-validation';
import layout from '../../../../templates/components/bs-form/element/control/model-select';

export default Control.extend(ControlValidationMixin, {
  layout
});
