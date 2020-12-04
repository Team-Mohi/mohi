import React, {useState} from 'react';
import {Button} from './../Components/Footer/ButtonAdd.jsx';
import axios from 'axios';
export default function ButtonContainer(props){

  const addFriend = async (id) => {
      await axios.post('https://www.api.mohi.vn/api/auth/add-friend', {follow_users_ReceivedUser: id})
  }

  return(
    <React.Fragment>
      <Button id={props.id} addFriend={addFriend}/>
    </React.Fragment>
  )
}
