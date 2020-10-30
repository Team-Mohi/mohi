import { combineReducers } from 'redux';
import { posts } from './Posts.jsx';
import { post } from './Post.jsx';

const reducers = combineReducers({
  posts,
  post
});
export default reducers;
