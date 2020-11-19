import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  list : []
};

export const friendsMayKnow = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_LIST_USER_SUGGESTION:
      return {
        ...state
      }
      break;
    case Types.RESPONSE_LIST_USER_SUGGESTION:
      return {
        loading: !state.loading,
        list: [...action.users]
      }
      break;
    default: return state
  }
}
