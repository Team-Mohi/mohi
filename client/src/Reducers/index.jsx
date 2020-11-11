import { combineReducers } from 'redux';
import { posts } from './Posts.jsx';
import { post } from './Post.jsx';
import { spin } from './Spin.jsx';
import { presentialModal } from './presentialModal.jsx';

const reducers = combineReducers({
  posts,
  post,
  spin,
  presentialModal
});
export default reducers;
