import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { fetchPosts } from './../../Actions/index.jsx';

export default function InfiniteScrolling(pageNumber){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const dispatch = useDispatch();
  let cancel

  useEffect(() => {

    setLoading(true)
    setError(false)
    getPostNewFeed()

    return () => cancel()
  }, [pageNumber])

  const getPostNewFeed = async () => {

    await axios({
      method: 'GET',
      url: "/api/auth/get-post-home",
      params: {page : pageNumber},
      cancelToken : new axios.CancelToken(c => cancel = c)
    })
    .then(res =>{
      dispatch(fetchPosts(res.data.data))
      setHasMore(res.data.last_page > res.data.current_page)
      setLoading(false)
    })
    .catch(e => {
      if(axios.isCancel(e)) return
      setError(true)
    })
  }

    return { loading, error, hasMore }
}
