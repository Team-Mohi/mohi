import React, { useEffect } from 'react';
import Home from './../app/Home.jsx';
import SocketContext from './../Components/Socket/index.jsx';
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
import { readMessageOfList } from './../Actions/index.jsx';
import { addNewMessageOflist } from './../Actions/index.jsx';
import useSound from 'use-sound';
import {PUBLIC_URL} from './../Constants/public.jsx';
var socketIOClient = require('socket.io-client');

const socket = socketIOClient('https://mohi-backend.herokuapp.com/', {
  transports: ['websocket'],
});

function AppContainer(){
  require('./../axios/inceptor.jsx');
  const dispatch = useDispatch();
  const [play] = useSound(PUBLIC_URL + 'sounds/2.mp3', {volume: 0.5});
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;

  const getListMessagePopup = async () => {
    dispatch(requestMessagePopup())

    await axios.get('https://www.api.mohi.vn/api/auth/list-message')
    .then((res) => {
        dispatch(responseMessagePopup(res.data))
    }).catch((e) => {
    })
  }

  const getListMyRequestAddFriend = async () => {
    // dispatch(requestFriendRequestPopup())

    await axios.get('https://www.api.mohi.vn/api/auth/my-request-friend')
    .then((res) => {
      dispatch(responseListMyRequestAddFriend(res.data))
    }).catch((e) => {
    })
  }

  const getListFriendRequest = async () => {
    dispatch(requestFriendRequestPopup())

    await axios.get('https://www.api.mohi.vn/api/auth/users-request')
    .then((res) => {
      dispatch(responseFriendRequestPopup(res.data))
    }).catch((e) => {
    })
  }

  const getListUserSuggestion = async () => {
    await axios.get('https://www.api.mohi.vn/api/auth/users-suggestion')
    .then((res) => {
        dispatch(responseListUserSuggestion(res.data))
    }).catch((e) => {
    })
  }

  const getListStory = async () => {
    await axios.get('https://www.api.mohi.vn/api/auth/get-story-home')
    .then((res) => {
        dispatch(responseListStory(res.data))
    }).catch((e) => {
    })
  }

  const getNotification = async () => {
    await axios.get('https://www.api.mohi.vn/api/auth/notification')
    .then((res) => {
        dispatch(responseListNotification(res.data))
    }).catch((e) => {
    })
  }

  const getListFriend =  async () => {
      dispatch(requestFriend())

      await axios.get('https://www.api.mohi.vn/api/auth/list-friends')
      .then((res) => {
        dispatch(responseFriend(res.data))
      })
      .catch((e) => {
      })
  }

  socket.on('private-chat', function(data){
    play()
  });

  useEffect(() => {

    socket.on('private-chat', function(data){
        dispatch(addNewMessageOflist({type: 'received', from : data.from, message: data.message}))
    });

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
    <SocketContext.Provider value={socket}>
      <Home />
    </SocketContext.Provider>
  )
}

export default AppContainer;
