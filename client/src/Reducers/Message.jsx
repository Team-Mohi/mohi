import * as Types from './../Constants/ActionTypes.jsx';

const initialState = [];

export const message = (state = initialState, action) => {
  switch (action.type) {
    case Types.MESSAGE_POPUP:
      state = action.messages
      return [...state]
      break;
    default: return [...state]
  }
}
