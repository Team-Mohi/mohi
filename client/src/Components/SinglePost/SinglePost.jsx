import React, { useState, useEffect } from 'react';
import './SinglePost.css';
import { TiWorld } from 'react-icons/ti';
import { FaRegCommentAlt, FaRegWindowClose, FaUserLock, FaUserAlt } from "react-icons/fa";
import { AiOutlineLike } from 'react-icons/ai';
import { IoIosShareAlt } from "react-icons/io";
import CommentEditor from './CommentEditor.jsx';
import {Link, useParams, Redirect} from 'react-router-dom';
import axios from 'axios';
import {requestOnePost} from './../../Actions/index.jsx';
import {responseOnePost} from './../../Actions/index.jsx';
import {useSelector, useDispatch} from 'react-redux';
import { WaveLoading } from 'react-loadingg';

function SinglePost({ onePost }) {

    return <Redirect to="/comming-soon" />

    const {data} = useSelector(state => state.onePost)
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
    const {idPost} = useParams();

    useEffect(() => {
      getPost(idPost)
    },[idPost])

    const getPost = async (idPost) => {
        dispatch(requestOnePost())
        await axios.get("https://www.api.mohi.vn/api/auth/detail-post/" + idPost)
        .then((res) => {
          dispatch(responseOnePost(res.data))
        })
    }

    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="single-post-container">
                    <div className="single-post-left">
                        <div className="single-post-header">
                            <div className="single-post-avatar">
                                <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                            </div>
                            <div className="single-post-title">
                                <div className="single-post-name">
                                    <Link to="">{currentUser.user_first_name + " " + currentUser.user_last_name}</Link>
                                </div>
                                <div className="single-post-time">
                                    3 giờ trước
                                </div>
                                <div className="single-post-private">
                                    <TiWorld />
                                </div>
                            </div>
                        </div>
                        <div className="single-post-content">
                            Ảnh này đẹp không mọi người
                        </div>
                        <div className="single-post-media">
                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                        </div>
                        <div className="single-post-button">
                            <div className="single-post-react">
                                <button><AiOutlineLike /></button>
                                <button><FaRegCommentAlt /></button>
                                <button><IoIosShareAlt /></button>
                            </div>
                        </div>
                    </div>
                    <div className="single-post-right">

                        <div className="single-post-comment">
                            <div className="single-post-comment-input">
                                <CommentEditor />
                            </div>
                            <div className="single-post-comment-items">
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiiẢnh chất lượng quá bạn ơiiẢnh chất lượng quá bạn ơii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post-comment-item">
                                    <div className="single-post-comment-title">
                                        <div className="single-post-comment-avatar">
                                            <img src="https://i.pinimg.com/564x/21/93/ce/2193ce8e50d4283b31ce0fb1a08e47ff.jpg" alt="" />
                                        </div>
                                        <div className="single-post-comment-detail">
                                            <div className="single-post-comment-name">
                                                Nguyễn Văn Phước
                                            </div>
                                            <div className="single-post-comment-content">
                                                Ảnh chất lượng quá bạn ơiii
                                            </div>
                                        </div>
                                        <div className="single-post-comment-time">
                                            3 giờ trước
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SinglePost;
