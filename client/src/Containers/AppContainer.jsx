import React, { useEffect } from 'react';
import Home from './../app/Home.jsx';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { requestMessagePopup } from './../Actions/index.jsx';
import { responseMessagePopup } from './../Actions/index.jsx';
import { responseFriendRequestPopup } from './../Actions/index.jsx';
import { requestFriendRequestPopup } from './../Actions/index.jsx';
import { responseFriend } from './../Actions/index.jsx';
import { requestFriend } from './../Actions/index.jsx';
import { fetchListUserSuggestion } from './../Actions/index.jsx';
import { fetchListStory } from './../Actions/index.jsx';
import { responseListStory } from './../Actions/index.jsx';
import { responseListUserSuggestion } from './../Actions/index.jsx';
import { fetchListNotification } from './../Actions/index.jsx';
import { responseListNotification } from './../Actions/index.jsx';
import { responseListMyRequestAddFriend } from './../Actions/index.jsx';

function AppContainer(){
  require('./../axios/inceptor.jsx');
  const dispatch = useDispatch();

  const getListMessagePopup = async () => {
    dispatch(requestMessagePopup())

    await axios.get('https://www.api.mohi.vn/api/auth/list-message')
    .then((res) => {
        dispatch(responseMessagePopup(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListMyRequestAddFriend = async () => {
    // dispatch(requestFriendRequestPopup())

    await axios.get('https://www.api.mohi.vn/api/auth/my-request-friend')
    .then((res) => {
      dispatch(responseListMyRequestAddFriend(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListFriendRequest = async () => {
    dispatch(requestFriendRequestPopup())

    await axios.get('https://www.api.mohi.vn/api/auth/users-request')
    .then((res) => {
      dispatch(responseFriendRequestPopup(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListUserSuggestion = async () => {
    await axios.get('https://www.api.mohi.vn/api/auth/users-suggestion')
    .then((res) => {
        dispatch(responseListUserSuggestion(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListStory = async () => {
    await axios.get('https://www.api.mohi.vn/api/auth/get-story-home')
    .then((res) => {
        dispatch(responseListStory(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getNotification = async () => {
    await axios.get('https://www.api.mohi.vn/api/auth/notification')
    .then((res) => {
        dispatch(responseListNotification(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListFriend =  async () => {
      dispatch(requestFriend())

      await axios.get('https://www.api.mohi.vn/api/auth/list-friends')
      .then((res) => {
        dispatch(responseFriend(res.data))
      })
      .catch((e) => {
        console.log(e);
      })
  }

  useEffect(() => {
    getListMyRequestAddFriend()

    getListFriend()

    dispatch(fetchListUserSuggestion());
    getListUserSuggestion();

    getListMessagePopup();

    getListFriendRequest();

    dispatch(fetchListStory());
    getListStory();

    dispatch(fetchListNotification())
    getNotification();
  },[])

  return(
    <Home />
  )
}

export default AppContainer;
