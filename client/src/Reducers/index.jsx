import { combineReducers } from 'redux';
import { posts } from './Posts.jsx';
import { myPosts } from './MyPost.jsx';
import { spin } from './Spin.jsx';
import { presentialModal } from './presentialModal.jsx';
import { myPages } from './Pages.jsx';
import { myGroups } from './Groups.jsx';
import { message } from './Message.jsx';
import { friendsRequest } from './FriendsRequest.jsx';
import { friends } from './Friends.jsx';
import { friendsMayKnow } from './FriendsMayKnow.jsx';
import { stories } from './Story.jsx';
import { notifycations } from './Notification.jsx';
import { oneMessage } from './OneMessage.jsx';
import { profile } from './Profile.jsx';
import { activities } from './ActivityLog.jsx';
import { search } from './Search.jsx';
import { onePost } from './OnePost.jsx';

const reducers = combineReducers({
  posts,
  spin,
  presentialModal,
  myPages,
  myGroups,
  message,
  friendsRequest,
  friends,
  friendsMayKnow,
  stories,
  notifycations,
  oneMessage,
  myPosts,
  profile,
  activities,
  search,
  onePost
});
export default reducers;
