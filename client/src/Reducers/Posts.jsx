import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  currentPage: 1,
  loading: true,
  hasMore: false,
  error: false,
  listPosts: [],
  loadingAddComment: false,
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FECTH_POSTS:
      return {
              ...state,
              listPosts: [],
              currentPage: 1,
              loading: true
            }
      break;
    case Types.RESPONSE_POSTS:
      state.listPosts = action.posts.data
      state.loading = false
      state.hasMore = action.posts.last_page > action.posts.current_page
      return {...state}
      break;
    case Types.SET_CURRENT_PAGE:
      state.currentPage = state.currentPage + 1
      return {...state}
      break;
    case Types.FECTH_MORE_POSTS:
      return {
              ...state,
              loading: true
            }
      break;
    case Types.RESPONSE_MORE_POSTS:
      state.listPosts = [...state.listPosts, ...action.posts.data]
      state.loading = false
      state.hasMore = action.posts.last_page > action.posts.current_page
      return {...state}
      break;
    case Types.REQUEST_ADD_COMMENT:
      return {...state, loadingAddComment: true}
      break;
    case Types.RESPONSE_ADD_COMMENT:
      return {...state, loadingAddComment:false}
      break;
    default: return state
  }
}
