import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  list : [],
  listMyRequest: []
};

export const friendsRequest = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_LIST_FRIEND_REQUEST:
      return {
        ...state
      }
      break;
    case Types.RESPONSE_LIST_FRIEND_REQUEST:
      return {
        ...state,
        loading: !state.loading,
        list: action.payload
      }
      break;
    case Types.RESPONSE_LIST_MY_REQUEST:
      return {
        ...state,
        listMyRequest: action.payload
      }
      break;
    default: return {...state}
  }
}
