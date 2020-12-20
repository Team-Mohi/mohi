import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  currentPage: 1,
  loading: true,
  hasMore: false,
  error: false,
  listPosts: [],
  loadingAddComment: false,
  loadingAddPost: false,
  newComment: ''
};

var findItem = (type, arr, id) => {
  var result = {
    index: -1,
    item: ''
  };

  arr.forEach((item, i) => {
    if(type === 'post'){
      if(item.id === id){
        result.index = i;
        result.item = item;
      }
    }

    if(type === 'comment'){
      if(item.pivot.id === id){
        result.index = i;
        result.item = item;
      }
    }
  });

  return result;
}

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
      var post = findItem('post', state.listPosts, action.payload.idPost);
      state.listPosts[post.index].comment_post = [...state.listPosts[post.index].comment_post, ...action.payload.comment];

      return {...state, loadingAddComment:false, newComment: action.payload}
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
    case Types.UPDATE_COMMENT_POST_PROFILE:
      var post = findItem('post', state.listPosts, action.payload.idPost);
      var commentPost = findItem('comment', post.item.comment_post, action.payload.id);

      state.listPosts[post.index].comment_post[commentPost.index].pivot.comment_Content = action.payload.value;

      return {...state}
      break;
    case Types.UPDATE_POST_PROFILE:
      var post = findItem('post', state.listPosts, action.payload.idPost);
      state.listPosts[post.index] = action.payload.data;

      return {...state}
      break;
    default: return state
  }
}
