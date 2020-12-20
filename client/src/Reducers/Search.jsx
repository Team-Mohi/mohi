import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading: true,
  listProfile: [],
  listPost: []
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_SEARCH_MOHI:
      state.loading = true
      return {...state}
      break;
    case Types.RESPONSE_SEARCH_MOHI:
      state.loading = false;
      state.listProfile = action.payload.infoUsers;
      state.listPost = action.payload.listPosts;
      return {...state}
      break;
    default: return {...state}
  }
}
