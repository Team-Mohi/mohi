import * as Types from './../Constants/ActionTypes.jsx';

export const fetchImagesPost = (imagesPost) => {
  return {
    type: Types.IMAGES_POST,
    imagesPost
  }
}

export const fetchPosts = (posts) => {
  return {
    type: Types.POSTS,
    posts
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

export const toggleStatusPresentialModal = (action) => {
  return {
    type: Types.TOGGLE_STATUS_PRESENTIAL_MODAL,
    action
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

export const fetchMessagePopup = (messages) => {
  return {
    type: Types.MESSAGE_POPUP,
    messages
  }
}

export const fetchFriendRequestPopup = (friends) => {
  return {
    type: Types.LIST_FRIEND_REQUEST,
    friends
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
