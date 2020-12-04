import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  loadingfriendOfProfile:false,
  list : [],
  friendOfProfile: [],
  searchKeyWords: ''
};

export const friends = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_LIST_FRIEND:
      return {
        ...state
      }
      break;
    case Types.RESPONSE_LIST_FRIEND:
      return {
        ...state,
        loading: !state.loading,
        list: action.payload
      }
      break;
    case Types.REQUEST_FRIEND_OF_PROFILE:
      return {
        ...state,
        loadingfriendOfProfile: true,
      }
      break;
    case Types.RESPONSE_FRIEND_OF_PROFILE:
      return {
        ...state,
        loadingfriendOfProfile: false,
        friendOfProfile: action.payload
      }
      break;
    case Types.SEARCH_FRIEND_OF_PROFILE:
      return {
        ...state,
        searchKeyWords: action.payload
      }
      break;
    default: return {...state}
  }
}
