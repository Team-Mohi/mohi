import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  list : []
};

export const notifycations = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_LIST_NOTIFICATION:
      return {
        ...state
      }
      break;
    case Types.RESPONSE_LIST_USER_NOTIFICATION:
      return {
        loading: !state.loading,
        list: [...action.notifycation]
      }
      break;
    default: return state
  }
}
