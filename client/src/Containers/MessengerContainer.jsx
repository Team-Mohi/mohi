import React,{ useEffect, useState} from 'react';
import Messenger from './../Components/Messenger/index.jsx';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { requestOneMessage } from './../Actions/index.jsx';
import { responseOneMessage } from './../Actions/index.jsx';
import { requestMoreOneMessage } from './../Actions/index.jsx';
import { responseMoreOneMessage } from './../Actions/index.jsx';

function MessengerContainer({oneMessage}){
  const { currentPage } = useSelector(state => state.oneMessage);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentPage > 1){
      dispatch(requestMoreOneMessage())
      getMoreOneMessage();
    }
  }, [currentPage])

  const getMoreOneMessage = async () => {
    await axios({
        method: 'GET',
        url: "https://www.api.mohi.vn/api/auth/detail-message/"+ id,
        params: {page : currentPage}
      })
      .then(res =>{
        dispatch(responseMoreOneMessage(res.data))
      })
      .catch(e => {
        if(axios.isCancel(e)) return
      })
  }

  const getMessageOneUser = (idUser) => {
      setId(idUser)
      dispatch(requestOneMessage())

      axios.get('https://www.api.mohi.vn/api/auth/detail-message/'+ idUser)
      .then((res) => {
        dispatch(responseOneMessage(res.data))
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return(
    <Messenger getMessageOneUser={getMessageOneUser}/>
  )
}

export default MessengerContainer;
