import React, { useState } from 'react';
import './ActivityLog.css';
import { Link } from 'react-router-dom';
import { FaRegSmile, FaUserFriends } from 'react-icons/fa';
import { MdPublic, MdEdit } from 'react-icons/md';


function ActivityLog() {

    const ActionActivityLog = () => {
        return (
            <React.Fragment>
                <div className="activity-card-main">
                    <div className="activity-left">
                        <div className="activity-action">
                            <FaRegSmile style={{ width: '70px' }} />
                            <p><b>Lập vũ</b> đã bày tỏ cảm xúc về bài viếtđã bày tỏ cảm xúc về bài viết iếtđã bày tỏ cảm xúc về bài </p>
                        </div>
                        <div className="activity-time">
                            <Link to="">07:33, 14 tháng 11, 2020</Link>
                        </div>
                    </div>
                    <div className="activity-main">
                        <div className="activity-main-img">
                            <img src="https://i.pinimg.com/564x/15/ee/0d/15ee0d1a3492507fa161ab582dc663b9.jpg" alt="" />
                            <img src="https://i.pinimg.com/564x/15/ee/0d/15ee0d1a3492507fa161ab582dc663b9.jpg" alt="" />
                        </div>
                        <div className="activity-main-content">
                            <p>	Heloo,anh tên gì đây khong phải thính đâu ..🤷‍♀️</p>
                        </div>
                    </div>
                    <div className="activity-right">
                        <div className="activity-right-private">
                            <button title="Công khai"><MdPublic style={{ width: '30px' }} /></button>
                            <button title="Bỏ hoạt động này" ><MdEdit style={{ width: '30px' }} /></button>
                        </div>
                    </div>
                </div>
                <div className="activity-card-main">
                    <div className="activity-left">
                        <div className="activity-action">
                            <FaRegSmile style={{ width: '70px' }} />
                            <p><b>Lập vũ</b> đã bày tỏ cảm xúc về bài viết </p>
                        </div>
                        <div className="activity-time">
                            <Link to="">07:33, 14 tháng 11, 2020</Link>
                        </div>
                    </div>
                    <div className="activity-main">
                        <div className="activity-main-content">
                            <p>	Heloo,anh tên gì đây khong phải thính đâu ..🤷‍♀️</p>
                        </div>
                    </div>
                    <div className="activity-right">
                        <div className="activity-right-private">
                            <button title="Bạn bè"><FaUserFriends style={{ width: '30px' }} /></button>
                            <button title="Bỏ hoạt động này" ><MdEdit style={{ width: '30px' }} /></button>
                        </div>
                    </div>
                </div>
                <div className="activity-card-main">
                    <div className="activity-left">
                        <div className="activity-action">
                            <FaRegSmile style={{ width: '70px' }} />
                            <p><b>Lập vũ</b> đã bày tỏ cảm xúc về bài viếtđã bày tỏ cảm xúc về bài viết iếtđã bày tỏ cảm xúc về bài </p>
                        </div>
                        <div className="activity-time">
                            <Link to="">07:33, 14 tháng 11, 2020</Link>
                        </div>
                    </div>
                    <div className="activity-main">
                        <div className="activity-main-img">
                            <img src="https://i.pinimg.com/564x/15/ee/0d/15ee0d1a3492507fa161ab582dc663b9.jpg" alt="" />
                            <img src="https://i.pinimg.com/564x/15/ee/0d/15ee0d1a3492507fa161ab582dc663b9.jpg" alt="" />
                            <img src="https://i.pinimg.com/564x/15/ee/0d/15ee0d1a3492507fa161ab582dc663b9.jpg" alt="" /> 
                        </div>
                        
                        <div className="activity-main-content">
                            <p>	Heloo,anh tên gì đây khong phải thính đâu ..🤷‍♀️</p>
                        </div>
                    </div>
                    <div className="activity-right">
                        <div className="activity-right-private">
                            <button title="Công khai"><MdPublic style={{ width: '30px' }} /></button>
                            <button title="Bỏ hoạt động này" ><MdEdit style={{ width: '30px' }} /></button>
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
                    <div className="activity-card">
                        <div className="activity-card-header">
                            <h5>Hôm nay</h5>
                        </div>
                        <ActionActivityLog />
                    </div>
                    <div className="activity-card">
                        <div className="activity-card-header">
                            <h5>Hôm qua</h5>
                        </div>
                        <ActionActivityLog />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ActivityLog;