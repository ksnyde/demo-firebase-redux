import Ember from 'ember';
import * as studies from 'factual-food/redux/actions/studies';
const { get } = Ember;

export default Ember.Route.extend({
  redux: Ember.inject.service(),
  firebase: Ember.inject.service(),

  afterModel() {
    const {firebase, redux} = this.getProperties('firebase', 'redux');
    firebase.on('value', function(snapshot) {
      const changes = snapshot.val();
      if (changes.studies) {
        redux.dispatch(studies.updateStudies(changes.studies));
      }
    });
    //
    // studies.on('value', snapshot => {
    //   actions.updateStudies(snapshot.val());
    // });
  }

});
