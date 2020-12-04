import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  currentPage: 1,
  loading: true,
  hasMore: false,
  error: false,
  listPosts: [],
  loadingAddComment: false,
  loadingAddPost: false,
};

export const myPosts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FECTH_POSTS_PROFILE:
      return {
              ...state,
              listPosts: [],
              currentPage: 1,
              loading: true
            }
      break;
    case Types.RESPONSE_POSTS_PROFILE:
      state.listPosts = action.posts.data
      state.loading = false
      state.hasMore = action.posts.last_page > action.posts.current_page
      return {...state}
      break;
    case Types.SET_CURRENT_PAGE_PROFILE:
      state.currentPage = state.currentPage + 1
      return {...state}
      break;
    case Types.FECTH_MORE_POSTS_PROFILE:
      return {
              ...state,
              loading: true
            }
      break;
    case Types.RESPONSE_MORE_POSTS_PROFILE:
      state.listPosts = [...state.listPosts, ...action.posts.data]
      state.loading = false
      state.hasMore = action.posts.last_page > action.posts.current_page
      return {...state}
      break;
    case Types.REQUEST_ADD_COMMENT_PROFILE:
      return {...state, loadingAddComment: true}
      break;
    case Types.RESPONSE_ADD_COMMENT_PROFILE:
      return {...state, loadingAddComment:false}
      break;
    case Types.REQUEST_ADD_POSTS_PROFILE:
      return {...state, loadingAddPost:true}
      break;
    case Types.RESPONSE_ADD_POSTS_PROFILE:
      return {
        ...state,
        loadingAddPost:false,
        listPosts: [...action.payload, ...state.listPosts]
      }
      break;
    default: return state
  }
}
