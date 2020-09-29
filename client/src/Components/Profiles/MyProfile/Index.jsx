import React from 'react';
import HeaderProfile from './HeaderProfile.jsx';
import './ProFile.css';
import {Route} from 'react-router-dom';
import TimeLine from './TimeLine.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Friends from './Friends.jsx';

function MyProfile(){
  return (
    <>
      <div className="container" >
        <HeaderProfile />
        <div className="profile-content" style={{margin: '20px 0'}}>
          <Route exact path="/profile" component={TimeLine}/>
          <Route path="/profile/timeline" component={TimeLine}/>
          <Route path="/profile/friends" component={Friends}/>
          <Route path="/profile/about" component={About}/>
          <Route path="/profile/gallery" component={Gallery}/>
        </div>
      </div>
    </>
  )
}

export default MyProfile;
