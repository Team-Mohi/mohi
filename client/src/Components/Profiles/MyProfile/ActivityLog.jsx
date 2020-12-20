import React, { useState } from 'react';
import './ActivityLog.css';
import { Link } from 'react-router-dom';
import { FaRegSmile, FaUserFriends, FaUserLock, FaUserAlt, FaCommentAlt,FaShare } from 'react-icons/fa';
import { MdPublic, MdEdit } from 'react-icons/md';
import { BsFilePost, BsCardImage} from 'react-icons/bs';
import { AiOutlineHistory, AiOutlineUserSwitch} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import moment from 'moment';
require('moment/locale/vi');

function ActivityLog({ activities }) {
    const {list, loading} = useSelector(state => state.activities);
    const activity = [];
    let listDate = [];

    if(loading){
      return(

            <div className="wrapper">
              <div className="activity-container">
                <WaveLoading />
              </div>
            </div>
      )
    }

    const contentActivity = (type) => {
        if(type === 'haha' || type === 'love' || type === 'wow' || type === 'like' || type === 'angry' || type === 'sad'){
          return <span>Bạn đã bày tỏ cảm xúc bài viết</span>
        }

        if(type === 'comment'){
          return <span>Bạn đã bình luận bài viết</span>
        }

        if(type === 'share_post'){
          return <span>Bạn đã chia sẻ bài viết</span>
        }

        if(type === 'push_post'){
          return <span>Bạn đã đăng bài viết mới</span>
        }

        if(type === 'push_story'){
          return <span>Bạn đã đăng tin mới</span>
        }

        if(type === 'add_friend'){
          return <span>Bạn đã gửi lời mời kết bạn</span>
        }

        if(type === 'received_request_add_friend'){
          return <span>Bạn đã nhận được lời mời kết bạn</span>
        }

        if(type === 'update_avatar'){
          return <span>Bạn đã cập nhật ảnh đại diện</span>
        }

        if(type === 'update_cover'){
          return <span>Bạn đã cập nhật ảnh bìa</span>
        }
    }

    const iconActivity = (type) => {
        if(type === 'haha' || type === 'love' || type === 'wow' || type === 'like' || type === 'angry' || type === 'sad'){
          return <FaRegSmile style={{ width: '70px' }} />
        }

        if(type === 'comment'){
          return <FaCommentAlt style={{ width: '70px' }} />
        }

        if(type === 'share_post'){
          return <FaShare style={{ width: '70px' }} />
        }

        if(type === 'push_post'){
          return <BsFilePost style={{ width: '70px' }} />
        }

        if(type === 'push_story'){
          return <AiOutlineHistory style={{ width: '70px' }} />
        }

        if(type === 'add_friend'){
          return <AiOutlineUserSwitch style={{ width: '70px' }} />
        }

        if(type === 'received_request_add_friend'){
          return <AiOutlineUserSwitch style={{ width: '70px' }} />
        }

        if(type === 'update_avatar'){
          return <BsCardImage style={{ width: '70px' }} />
        }

        if(type === 'update_cover'){
          return <BsCardImage style={{ width: '70px' }} />
        }
    }

    const ActionActivityLog = (props) => {
        return (
            <React.Fragment>
                <div className="activity-card-main">
                    <div className="activity-left">
                        <div className="activity-action">
                            {iconActivity(props.ac.activity_Action)}
                            <p>{contentActivity(props.ac.activity_Action)}</p>
                        </div>
                    </div>
                    <div className="activity-right">
                        <div className="activity-right-private">
                          <p>{moment(moment.utc(props.ac.created_at).toDate()).format('LLLL')}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    const TimeCustom = (props) => {
      let isExitDate = listDate.indexOf(moment(moment.utc(props.ac.created_at)).toDate().getDate());

      if(isExitDate < 0){
        listDate.push(moment(moment.utc(props.ac.created_at)).toDate().getDate());

        return <h5 className="border-bottom">{moment(moment.utc(props.ac.created_at).toDate()).locale('vi-vn').format('LL')}</h5>
      }else {
        return null
      }
    }

    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="activity-container">
                    <div className="activity-title">
                        <h5>Nhật ký hoạt động</h5>
                    </div>
                    {list.map((ac, index) => {
                      return(
                        <div className="activity-card" key={index}>
                            <div
                              className={"activity-card-header"}
                            >
                                <TimeCustom ac={ac}/>
                            </div>
                            <ActionActivityLog ac={ac}/>
                        </div>
                      )
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}

export default ActivityLog;
