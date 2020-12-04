import * as Types from './../Constants/ActionTypes.jsx';

const initialState = [];

export const myGroups = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MY_GROUP:
      state = action.myGroups.data
      return [...state]
      break;
    default: return [...state]
  }
}
