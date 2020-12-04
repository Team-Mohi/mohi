import * as Types from './../Constants/ActionTypes.jsx';

const initialState = [];

export const myPages = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MY_PAGE:
      state = action.myPages.data
      return [...state]
      break;
    default: return [...state]
  }
}
