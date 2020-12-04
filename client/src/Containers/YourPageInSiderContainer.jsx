import React, {useEffect, useState} from 'react';
import YourPageInSider from './../Components/NewFeed/YourPageInSider.jsx';
import axios from 'axios';
import {API_MY_PAGE} from './../Constants/Api.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMyPages} from './../Actions/index.jsx';

function YourPageInSiderContainer({ myPages }){
  const pages = useSelector(state => state.myPages);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiYourPage()
  }, [])

  const getApiYourPage = async () => {
      await axios.get('https://www.api.mohi.vn/api/auth/all-mypages').then((res) => {
        dispatch(fetchMyPages(res.data))
      }).catch((err) => {
        console.log(err);
      })
      setLoading(false)
  }

  return(
    <YourPageInSider pages={pages} loading={loading}/>
  )
}
export default YourPageInSiderContainer;
