import * as Types from './../Constants/ActionTypes.jsx';

export const responseUpdateAvatar= (payload) => {
  return {
    type: Types.RESPONSE_UPDATE_AVATAR,
    payload
  }
}

export const requestUpdateAvatar = () => {
  return {
    type: Types.REQUEST_UPDATE_AVATAR
  }
}

export const responseActivityLog = (payload) => {
  return {
    type: Types.RESPONSE_ACTIVITY_LOG,
    payload
  }
}

export const requestActivityLog = () => {
  return {
    type: Types.REQUEST_ACTIVITY_LOG
  }
}

export const responseAddInfoProfile = (payload) => {
  return {
    type: Types.RESPONSE_ADD_INFO_PROFILE,
    payload
  }
}

export const requestAddInfoProfile = () => {
  return {
    type: Types.REQUEST_ADD_INFO_PROFILE
  }
}

export const responseDeleteInfoProfile = (payload) => {
  return {
    type: Types.RESPONSE_DELETE_INFO_PROFILE,
    payload
  }
}

export const requestDeleteInfoProfile = () => {
  return {
    type: Types.REQUEST_DELETE_INFO_PROFILE
  }
}

export const responseUpdateProfile = (payload) => {
  return {
    type: Types.RESPONSE_UPDATE_PROFILE,
    payload
  }
}

export const requestUpdateProfile = () => {
  return {
    type: Types.REQUEST_UPDATE_PROFILE
  }
}

export const responseListMyRequestAddFriend = (payload) => {
  return {
    type: Types.RESPONSE_LIST_MY_REQUEST,
    payload
  }
}

export const setLoadMoreDefault = () => {
  return {
    type: Types.LOAD_MORE_iMAGE_VIDEO_DEFAULT
  }
}

export const loadMoreVideoProfile = () => {
  return {
    type: Types.RESPONSE_MORE_VIDEO_PROFILE
  }
}

export const loadMoreImageProfile = () => {
  return {
    type: Types.RESPONSE_MORE_IMAGE_PROFILE
  }
}

export const responseImageProfile = (payload) => {
  return {
    type: Types.RESPONSE_IMAGE_PROFILE,
    payload
  }
}

export const requestImageProfile = () => {
  return {
    type: Types.REQUEST_IMAGE_PROFILE
  }
}

export const searchFriendProfile = (payload) => {
  return {
    type: Types.SEARCH_FRIEND_OF_PROFILE,
    payload
  }
}

export const requestFriendProfile = () => {
  return {
    type: Types.REQUEST_FRIEND_OF_PROFILE
  }
}

export const responseFriendProfile = (payload) => {
  return {
    type: Types.RESPONSE_FRIEND_OF_PROFILE,
    payload
  }
}

export const requestAddNewStory = () => {
  return {
    type: Types.REQUEST_ADD_NEW_STORY
  }
}

export const addNewStory = (payload) => {
  return {
    type: Types.ADD_NEW_STORY,
    payload
  }
}

export const requestInfoProfile = () => {
  return {
    type: Types.FECTH_INFO_PROFILE
  }
}

export const responseInfoProfile = (payload) => {
  return {
    type: Types.RESPONSE_INFO_PROFILE,
    payload
  }
}

export const requestAddPostsProfile = () => {
  return {
    type: Types.REQUEST_ADD_POSTS_PROFILE
  }
}

export const responseAddPostsProfile = (payload) => {
  return {
    type: Types.RESPONSE_ADD_POSTS_PROFILE,
    payload
  }
}

export const responsePostsProfile = (posts) => {
  return {
    type: Types.RESPONSE_POSTS_PROFILE,
    posts
  }
}

export const requestPostsProfile = () => {
  return {
    type: Types.FECTH_POSTS_PROFILE
  }
}

export const responseMorePostsProfile = (posts) => {
  return {
    type: Types.RESPONSE_MORE_POSTS_PROFILE,
    posts
  }
}

export const fetchMorePostsProfile = () => {
  return {
    type: Types.FECTH_MORE_POSTS_PROFILE
  }
}

export const requestAddCommentProfile = () => {
    return {
      type: Types.REQUEST_ADD_COMMENT_PROFILE
    }
}

export const responseAddCommentProfile = (payload) => {
    return {
      type: Types.RESPONSE_ADD_COMMENT_PROFILE,
      payload
    }
}

export const removeOneNoti = (payload) => {
    return {
      type: Types.DELETE_ONE_NOTI,
      payload
    }
}

export const requestAddComment = () => {
    return {
      type: Types.REQUEST_ADD_COMMENT
    }
}

export const responseAddComment = (payload) => {
    return {
      type: Types.RESPONSE_ADD_COMMENT,
      payload
    }
}

export const setCurrentOneMessage = () => {
    return {
      type: Types.SET_CURRENT_ONE_MESSAGE
    }
}

export const requestMoreOneMessage = () => {
  return {
    type: Types.REQUEST_MORE_ONE_MESSAGE
  }
}

export const responseMoreOneMessage = (payload) => {
  return {
    type: Types.RESPONSE_MORE_ONE_MESSAGE,
    payload
  }
}

export const requestOneMessage = () => {
  return {
    type: Types.REQUEST_ONE_MESSAGE
  }
}

export const responseOneMessage = (payload) => {
  return {
    type: Types.RESPONSE_ONE_MESSAGE,
    payload
  }
}

export const fetchImagesPost = (imagesPost) => {
  return {
    type: Types.IMAGES_POST,
    imagesPost
  }
}

export const setCurrentPageProfile = () => {
    return {
      type: Types.SET_CURRENT_PAGE_PROFILE
    }
}

export const setCurrentPage = () => {
    return {
      type: Types.SET_CURRENT_PAGE
    }
}

export const responsePosts = (posts) => {
  return {
    type: Types.RESPONSE_POSTS,
    posts
  }
}

export const fetchPosts = () => {
  return {
    type: Types.FECTH_POSTS
  }
}

export const responseMorePosts = (posts) => {
  return {
    type: Types.RESPONSE_MORE_POSTS,
    posts
  }
}

export const fetchMorePosts = () => {
  return {
    type: Types.FECTH_MORE_POSTS
  }
}

export const statusSpin = () => {
  return {
    type: Types.STATUS_SPIN
  }
}

export const toggleStatusSpin = () => {
  return {
    type: Types.TOGGLE_STATUS_SPIN
  }
}

export const toggleStatusPresentialModal = (action, data) => {
  return {
    type: Types.TOGGLE_STATUS_PRESENTIAL_MODAL,
    action,
    data
  }
}

export const fetchMyPages = (myPages) => {
  return {
    type: Types.FETCH_MY_PAGE,
    myPages
  }
}

export const fetchMyGroups = (myGroups) => {
  return {
    type: Types.FETCH_MY_GROUP,
    myGroups
  }
}

export const requestMessagePopup = () => {
  return {
    type: Types.REQUEST_MESSAGE_POPUP
  }
}

export const responseMessagePopup = (payload) => {
  return {
    type: Types.RESPONSE_MESSAGE_POPUP,
    payload
  }
}

export const requestFriendRequestPopup = () => {
  return {
    type: Types.REQUEST_LIST_FRIEND_REQUEST
  }
}

export const responseFriendRequestPopup = (payload) => {
  return {
    type: Types.RESPONSE_LIST_FRIEND_REQUEST,
    payload
  }
}

export const requestFriend = () => {
  return {
    type: Types.REQUEST_LIST_FRIEND
  }
}

export const responseFriend = (payload) => {
  return {
    type: Types.RESPONSE_LIST_FRIEND,
    payload
  }
}

export const fetchListUserSuggestion = () => {
  return {
    type: Types.REQUEST_LIST_USER_SUGGESTION
  }
}

export const responseListUserSuggestion = (users) => {
  return {
    type: Types.RESPONSE_LIST_USER_SUGGESTION,
    users
  }
}

export const fetchListStory = () => {
  return {
    type: Types.REQUEST_LIST_STORY
  }
}

export const responseListStory = (stories) => {
  return {
    type: Types.RECEIVED_LIST_STORY,
    stories
  }
}

export const fetchListNotification = () => {
  return {
    type: Types.REQUEST_LIST_NOTIFICATION
  }
}

export const responseListNotification = (notifycation) => {
  return {
    type: Types.RESPONSE_LIST_USER_NOTIFICATION,
    notifycation
  }
}
