import React, {useState} from 'react';
import CreatePost from './../Components/NewFeed/CreatePost.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNewStory } from './../Actions/index.jsx';
import { requestAddNewStory } from './../Actions/index.jsx';

function CreatePostContainer(props){
  const [statusCreatePost, setStatusCreatePost] = useState();
  const dispatch = useDispatch();

  const submitCreatePost = async (valueEditor, fileList, privacyNewFeed, privacyStory, placeNewFeed, placeStory, listMention) => {
    setStatusCreatePost('loading')
    let mention = [];
    listMention.map(m => {
      mention.push(m.data.mention.id)
    })
    let tags = mention.filter((value, index, mention) => mention.indexOf(value) === index);
    let tag = tags.toString();

    let data = {
      placeStory: placeStory,
      placePost: placeNewFeed,
      post_Content: valueEditor,
      post_Privacy: privacyNewFeed,
      tag_users_UserId: tag,
      story_Privacy: privacyStory,
      post_images_Url: fileList
    }
    await axios.post('https://www.api.mohi.vn/api/auth/create-post-profile', data).then((res) => {
      setStatusCreatePost('success')
      props.successCreatePost(res.data)
      if(res.data.newStory.length){
        dispatch(requestAddNewStory())
        axios.get("https://www.api.mohi.vn/api/auth/get-story-home")
        .then((res) => {
          dispatch(addNewStory(res.data))
        })
      }
    }).catch((e) => {
      setStatusCreatePost('error')
      props.errorCreatePost()
    })
  }

  return(
    <CreatePost submitCreatePost={submitCreatePost} statusCreatePost={statusCreatePost}/>
  )
}

export default CreatePostContainer;
