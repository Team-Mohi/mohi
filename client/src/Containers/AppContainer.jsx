import React, { useEffect } from 'react';
import Home from './../app/Home.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchMessagePopup } from './../Actions/index.jsx';
import { fetchFriendRequestPopup } from './../Actions/index.jsx';
import { fetchListUserSuggestion } from './../Actions/index.jsx';
import { fetchListStory } from './../Actions/index.jsx';
import { responseListStory } from './../Actions/index.jsx';
import { responseListUserSuggestion } from './../Actions/index.jsx';
import { fetchListNotification } from './../Actions/index.jsx';
import { responseListNotification } from './../Actions/index.jsx';

function AppContainer(){
  require('./../axios/inceptor.jsx');

  const dispatch = useDispatch();

  const getListMessagePopup = async () => {
    await axios.get('/api/auth/list-message')
    .then((res) => {
        dispatch(fetchMessagePopup(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListFriendRequest = async () => {
    await axios.get('/api/auth/users-request')
    .then((res) => {
      dispatch(fetchFriendRequestPopup(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListUserSuggestion = async () => {
    await axios.get('/api/auth/users-suggestion')
    .then((res) => {
        dispatch(responseListUserSuggestion(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getListStory = async () => {
    await axios.get('/api/auth/get-story-home')
    .then((res) => {
        dispatch(responseListStory(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  const getNotification = async () => {
    await axios.get('/api/auth/notification')
    .then((res) => {
        dispatch(responseListNotification(res.data))
    }).catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
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
