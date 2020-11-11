import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  status: false
};

export const presentialModal = (state = initialState, action) => {
  switch (action.type) {
    case Types.STATUS_PRESENTIAL_MODAL:
      return state
      break;
    case Types.TOGGLE_STATUS_PRESENTIAL_MODAL:
      state.status = !state.status
      return {...state}
      break;
    default: return state
  }
}
