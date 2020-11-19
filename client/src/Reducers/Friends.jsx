import * as Types from './../Constants/ActionTypes.jsx';

const initialState = [];

export const friends = (state = initialState, action) => {
  switch (action.type) {
    case Types.LIST_FRIEND_REQUEST:
      state = action.friends
      return [...state]
      break;
    default: return [...state]
  }
}
