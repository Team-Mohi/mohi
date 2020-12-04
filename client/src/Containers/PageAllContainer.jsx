import React, {useEffect, useState} from 'react';
import PageAll from './../Components/Page/PageAll.jsx';
import axios from 'axios';
import {API_MY_PAGE} from './../Constants/Api.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMyPages} from './../Actions/index.jsx';

function PageAllContainer({ myPages }){
  const pages = useSelector(state => state.myPages);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiYourPage()
  }, [])

  const getApiYourPage = async () => {
      await axios.get('https://www.api.mohi.vn/api/auth/all-mypages').then((res) => {
        setLoading(false)
        dispatch(fetchMyPages(res.data))
      })
  }

  return(
    <PageAll pages={pages} loading={loading}/>
  )
}
export default PageAllContainer;
