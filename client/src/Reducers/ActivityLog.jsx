import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  list: [],
  loading: false
};

export const activities = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_ACTIVITY_LOG:
      return {
        ...state,
        loading: true
      }
      break;
    case Types.RESPONSE_ACTIVITY_LOG:
      return {
        loading: false,
        list: action.payload
      }
      break;
    default: return {...state}
  }
}
