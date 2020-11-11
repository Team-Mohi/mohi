import React, {useEffect} from 'react';
import PostNewFeed from './../Components/NewFeed/PostNewFeed.jsx';
import axios from 'axios';

function PostNewFeedContainer(props){

  useEffect(() => {
    getPostsNewFeed()
  },[]);

  const getPostsNewFeed = async () => {
    await axios.get('/api/auth/posts-new-feed?page=1').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err.response);
    })
  }
  return(
    <PostNewFeed  post={props.post}/>
  )
}

export default PostNewFeedContainer;
