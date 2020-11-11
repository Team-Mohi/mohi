import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  status: false
};

export const spin = (state = initialState, action) => {
  switch (action.type) {
    case Types.STATUS_SPIN:
      return state
      break;
    case Types.TOGGLE_STATUS_SPIN:
      state.status = !state.status
      return {...state}
      break;
    default: return state
  }
}
