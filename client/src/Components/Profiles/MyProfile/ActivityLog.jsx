import React, { useState } from 'react';
import './ActivityLog.css';
import { Link } from 'react-router-dom';
import { FaRegSmile, FaUserFriends, FaUserLock, FaUserAlt } from 'react-icons/fa';
import { MdPublic, MdEdit } from 'react-icons/md';
import {useSelector} from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import moment from 'moment';

function ActivityLog({ activities }) {
    const {list, loading} = useSelector(state => state.activities);
    const activity = [];

    if(loading){
      return(
        <WaveLoading />
      )
    }

    const contentActivity = (type) => {
        if(type === 'haha' || type === 'love' || type === 'wow' || type === 'like' || type === 'angry' || type === 'sad'){

        }

        if(type === 'comment'){
        }

        if(type === 'share'){
        }

        if(type === 'push_post'){
        }

        if(type === 'push_story'){
        }

        if(type === 'send_request_add_friend'){
        }

        if(type === 'received_request_add_friend'){
        }
    }

    const ActionActivityLog = (props) => {
        return (
            <React.Fragment>
                <div className="activity-card-main">
                    <div className="activity-left">
                        <div className="activity-action">
                            <FaRegSmile style={{ width: '70px' }} />
                            <p>Bạn đã bày tỏ cảm xúc về bài viếtđã bày tỏ cảm xúc về bài viết iếtđã bày tỏ cảm xúc về bài </p>
                        </div>
                    </div>
                    <div className="activity-main">
                      {props.ac.images_post.filter(img => img.post_images_Type === 'image').length ?
                        <div className="activity-main-img">
                          {props.ac.images_post.filter(img => img.post_images_Type === 'image').map((img, index) => {
                            return(
                              <img src={img.post_images_Url} alt="" />
                            )
                          })}
                        </div>

                        : null}
                        <div className="activity-main-content">
                            <p>{props.ac.post_Content}‍</p>
                        </div>
                    </div>
                    <div className="activity-right">
                        <div className="activity-right-private">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
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
                            <div className="activity-card-header">
                                <h5>{moment(moment.utc(ac.created_at).toDate()).locale('vi-vn').format('LLLL')}</h5>
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
