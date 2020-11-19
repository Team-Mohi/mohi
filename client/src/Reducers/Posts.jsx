import * as Types from './../Constants/ActionTypes.jsx';

const initialState = [];

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.POSTS:
      return [...state, ...action.posts]
      break;
    default: return [...state]
  }
}
