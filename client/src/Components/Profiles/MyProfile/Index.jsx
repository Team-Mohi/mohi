import React, {useEffect} from 'react';
import HeaderProfile from './HeaderProfile.jsx';
import './ProFile.css';
import {Route, Switch} from 'react-router-dom';
import TimeLine from './TimeLine.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Friends from './Friends.jsx';
import ActivityLogContainer from './../../../Containers/ActivityLogContainer.jsx';

function MyProfile(props){

  useEffect(() => {
    window.scrollTo(64,0)
  },[])

  const sendReactionPost = (reaction, postId) => {
    props.sendReactionPost(reaction, postId)
  }

  const onSubmitComment = (value, idPost) => {
    props.onSubmitComment(value, idPost)
  }

  const loadingSendRequestSetting = (type, idPost, idUser) => {
    props.loadingSendRequestSetting(type, idPost, idUser)
  }

  return (
    <>
      <div className="wrapper" >
        <HeaderProfile />
        <div className="profile-content" style={{margin: '10px 0'}}>
          <Switch>
            <Route exact path="/profile/:idProfile"><TimeLine sendReactionPost={sendReactionPost} onSubmitComment={onSubmitComment} loadingSendRequestSetting={loadingSendRequestSetting} loadingSetting={props.loadingSetting}/></Route>
            <Route path="/profile/:idProfile/timeline"><TimeLine sendReactionPost={sendReactionPost} onSubmitComment={onSubmitComment} loadingSendRequestSetting={loadingSendRequestSetting} loadingSetting={props.loadingSetting}/></Route>
            <Route path="/profile/:idProfile/friends" component={Friends}/>
            <Route path="/profile/:idProfile/about"><About /></Route>
            <Route path="/profile/:idProfile/gallery" component={Gallery}/>
            <Route path="/profile/:idProfile/activity-log" component={ActivityLogContainer}/>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default MyProfile;
