import React, {useEffect, useState} from 'react';
import GroupAll from './../Components/Group/GroupAll.jsx';
import axios from 'axios';
import {API_MY_GROUP} from './../Constants/Api.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMyGroups} from './../Actions/index.jsx';

function GroupContainer({ myGroups }){
  const groups = useSelector(state => state.myGroups);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiYourGroup()
  }, [])

  const getApiYourGroup = async () => {
      await axios.get('https://www.api.mohi.vn/api/auth/all-groups').then((res) => {
        setLoading(false)
        dispatch(fetchMyGroups(res.data))
      })
  }

  return(
    <GroupAll groups={groups} loading={loading}/>
  )
}
export default GroupContainer;
