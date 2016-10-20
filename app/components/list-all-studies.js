import Ember from 'ember';
import redux from '../mixins/redux';

export default Ember.Component.extend(redux, {
  stateInterest: ['studies']
});
