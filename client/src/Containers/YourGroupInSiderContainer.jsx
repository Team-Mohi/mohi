import React, {useEffect, useState} from 'react';
import YourGroupInSider from './../Components/NewFeed/YourGroupInSider.jsx';
import axios from 'axios';
import {API_MY_GROUP} from './../Constants/Api.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMyGroups} from './../Actions/index.jsx';

function YourGroupInSiderContainer({ myGroups }){
  const groups = useSelector(state => state.myGroups);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiYourGroup()
  }, [])

  const getApiYourGroup = async () => {
      await axios.get('https://www.api.mohi.vn/api/auth/all-groups').then((res) => {
        dispatch(fetchMyGroups(res.data))
      })
      setLoading(false)
  }

  return(
    <YourGroupInSider groups={groups} loading={loading}/>
  )
}
export default YourGroupInSiderContainer;
