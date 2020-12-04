import React, {useEffect} from 'react';
import {AiFillPicture} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import {Row, Col, Tooltip} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {searchFriendProfile} from './../../../Actions/index.jsx';
import FriendItem from './FriendItem.jsx';

function Friends({ friends, friendsRequest }){
  const path = useLocation().pathname.split('/');
  const isActive = path[3];
  const dispatch = useDispatch();
  const {friendOfProfile, searchKeyWords, list, loadingfriendOfProfile} = useSelector(state => state.friends)
  const listfriendsRequest = useSelector(state => state.friendsRequest.list)
  const listMyRequest = useSelector(state => state.friendsRequest.listMyRequest)

  useEffect(() => {
    dispatch(searchFriendProfile(''))
  }, [])

  const onSearchChange = (e) => {
    dispatch(searchFriendProfile(e.target.value))
  }

  const FriendsAll = () => {

    if(!friendOfProfile.length){
      return(
        <div style={{paddingTop: '50px', textAlign: 'center'}}>Không có bạn bè hiển thị</div>
      )
    }

    return(
      <div className="friends-all">
      <Row>
        {friendOfProfile.filter(fr => {
          const name = fr.user_first_name + ' ' + fr.user_last_name;

          return name.toLowerCase().replace(/\s/g,'').indexOf(searchKeyWords.toLowerCase().replace(/\s/g,'')) !== -1
        }).map((friends, index) => {
          return(
            <FriendItem key={index} friends={friends} list={list} listfriendsRequest={listfriendsRequest} listMyRequest={listMyRequest}/>
          )
        })}
        {!friendOfProfile.filter(fr => {
          const name = fr.user_first_name + ' ' + fr.user_last_name;

          return name.toLowerCase().replace(/\s/g,'').indexOf(searchKeyWords.toLowerCase().replace(/\s/g,'')) !== -1
        }).length &&
        <div style={{color: 'rgba(0,128,128)', fontSize: '16px', textAlign: 'center', width:'100%', fontWeight: '600'}}>Không có dữ liệu hiển thị</div>
        }
      </Row>
    </div>
    )
  }

  if(loadingfriendOfProfile){
    return <div></div>
  }

  return(
    <div className="profile-firends-container">
      <div className="galerry-head">
        <div className="galerry-title">
          <AiFillPicture /><h5> Bạn bè</h5>
        </div>
        <div className="galerry-navigation">
          <ul>
              <li ><span className={isActive === 'friends-all' || !isActive ? 'galerry-active' : ''}>Tất cả bạn bè</span></li>
            <span className="search-friend">
              <input name="search_friend" placeholder="Tìm kiếm bạn bè" type="text" onChange={onSearchChange}/>
            </span>
            <div className="clear"></div>
          </ul>
        </div>
      </div>
      <div className="galerry-content">
        <Switch>
          <Route component={FriendsAll}/>
        </Switch>
      </div>
    </div>
  )



}

export default Friends;
