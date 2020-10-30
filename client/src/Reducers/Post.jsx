import * as Types from './../Constants/ActionTypes.jsx';

const initialState = [];

export const post = (state = initialState, action) => {
  switch (action.type) {
    case Types.POST:
      state = action.post
      return [...state]
      break;
    default: return [...state]
  }
}
