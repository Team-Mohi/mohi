import React, {useEffect} from 'react';
import ActivityLog from './../Components/Profiles/MyProfile/ActivityLog.jsx';
import axios from 'axios';
import {responseActivityLog} from './../Actions/index.jsx';
import {requestActivityLog} from './../Actions/index.jsx';
import { useDispatch } from 'react-redux';

function ActivityLogContainer(){
  const dispatch = useDispatch();

  const getActivityLog = async () => {
    dispatch(requestActivityLog())
    await axios.get("https://www.api.mohi.vn/api/auth/list-activity")
    .then((res) => {
      dispatch(responseActivityLog(res.data))
    })
  }

  useEffect(() => {
    getActivityLog()
  }, [])

  return(
    <ActivityLog />
  )
}

export default ActivityLogContainer;
