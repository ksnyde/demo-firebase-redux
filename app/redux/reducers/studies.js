import Immutable from 'immutable';
/**
 * studies Reducer
 *
 * This reducer takes in the localised state which
 * is owned by this reducer; it MUST be a pure function
 * with no side-effects.
 *
 * The "action" is expected to be an Object/OrderedMap who's only
 * required property is "type".
 *
 * Note: you should always assign a default
 * value for state and handle all unknown
 * actions by returning the state back unchanged
 *
 * Note: Javascript Objects most closely map to
 * "OrderedMap" as an Immutable data structure. Javascript
 * Arrays map to "List".
 */
const defaultState = Immutable.OrderedMap();
const reducer = (state, action) => {

  switch(action.type) {

    case 'UPDATE_STUDIES':
      return Immutable.OrderedMap(action.studies);

    case 'ADD_STUDIES':

      return [];

    case 'DELETE_STUDIES':

      return [];

    default:
      return state || defaultState;
  } // end switch

};

export default reducer;
