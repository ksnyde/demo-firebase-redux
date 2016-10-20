/**
 * ACTIONS CREATOR for studies
 *
 * Action creators are where you store you business logic with an end
 * goal of producting a message that will be dispatched to the
 * Redux store directly or in other cases indirectly by returning
 * a thunk and handing that over to the thunk middleware.
 */
export const updateStudies = (studies) => {
  return {
    type: 'UPDATE_STUDIES',
    studies
  };
}

export const addStudy = (id, study) => {
  return {
    type: 'ADD_STUDY',
    id,
    study
  };
};

export const deleteStudy = (id) => {
  return {
    type: 'DELETE_STUDY',
    id
  };
};
