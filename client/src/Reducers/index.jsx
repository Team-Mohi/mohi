import { combineReducers } from 'redux';
import { posts } from './Posts.jsx';
import { spin } from './Spin.jsx';
import { presentialModal } from './presentialModal.jsx';
import { myPages } from './Pages.jsx';
import { myGroups } from './Groups.jsx';
import { message } from './Message.jsx';
import { friends } from './Friends.jsx';
import { friendsMayKnow } from './FriendsMayKnow.jsx';
import { stories } from './Story.jsx';
import { notifycations } from './Notification.jsx';

const reducers = combineReducers({
  posts,
  spin,
  presentialModal,
  myPages,
  myGroups,
  message,
  friends,
  friendsMayKnow,
  stories,
  notifycations
});
export default reducers;
