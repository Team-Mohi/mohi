import React, { createElement, useState, useRef } from 'react';
import './PostNewFeed.css';
import {
    UserOutlined,
    AntDesignOutlined,
    DislikeOutlined,
    LikeOutlined,
    DislikeFilled,
    LikeFilled
} from '@ant-design/icons';
import {
    Form,
    Input,
    Comment,
    List,
    Card,
    Avatar,
    Tooltip,
    Popover
} from 'antd';
import { AiOutlineLike, AiOutlineIssuesClose } from "react-icons/ai";
import { FaRegCommentAlt, FaRegWindowClose } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { GoEyeClosed } from "react-icons/go";
import { MdClose } from "react-icons/md";
import moment from 'moment';
import { BsThreeDots } from "react-icons/bs";

function PostNewFeed() {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [modalVisible, setModalVisible] = useState()
    const focusComment = useRef();
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    function handleFocusComment() {
        focusComment.current.focus();
    };
    function setModalImagePostVisible() {
        setModalVisible({ opacity: 1, visibility: "visible" });
    }
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Trả lời</span>,
    ];

    const Editor = ({ onChange, onSubmit, submitting, value }) => (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Item>
                    <Input ref={focusComment} className="input-comment-newfeed" onChange={onChange} placeholder="Viết bình luận..." value={value} />
                </Form.Item>
            </Form>
        </>
    );

    const settingPost = (
        <>
            <List className="setting-post">
                <List.Item><GoEyeClosed /> Ẩn bài viết</List.Item>
                <List.Item><AiOutlineIssuesClose /> Bỏ theo dõi someone</List.Item>
                <List.Item><FaRegWindowClose /> Ẩn bài viết từ someone</List.Item>
            </List>
        </>
    );

    return (
        <>
            <List
                className="ant-card-bordered"
                style={{ width: '100%', background: 'white' }}
            >
                <Card
                    title={<>
                        <Avatar src="images/gaixinh.jpg" />
                        <div style={{ paddingLeft: "10px", display: "inline-block" }}>
                            <div >
                                Nguyễn Văn Phước
                            </div>
                            <div
                                style={{ marginTop: "-5px", fontSize: "14px", fontWeight: "normal", fontStyle: "italic" }}
                            >
                                14 phuts truowc
                            </div>
                        </div>
                        <span style={{ position: "absolute", right: 0, cursor: "pointer", fontSize: "20px" }}>
                            <Popover placement="bottomRight" content={settingPost} trigger="click">
                                <BsThreeDots />
                            </Popover>
                        </span>
                    </>}
                    style={{ width: '100%' }}
                    cover={
                        <>
                            <div className="content-post" style={{ maxWidth: '100%', wordWrap: "break-word" }}>
                                Project will complete on four month - make by Mohi Team aaa aaa aa aaa aaaa aaa  aaa aaa aaa aaaa aa aaaaa aaaaa aaa aa aaaaa aaa  aaa aaaaa aaaaa aaaa aaaaaaaaa a
                            </div>
                            <img
                                onClick={() => setModalImagePostVisible()}
                                alt="example"
                                src="https://i.pinimg.com/564x/c3/3e/0f/c33e0f308942d422219c9e401ac7dd35.jpg"
                            />
                            <div
                                className="modal-image-post"
                                style={modalVisible}
                                onClick={() => setModalVisible()}
                            >
                                <div
                                    style={{
                                        textAlign: "right",
                                        color: "white",
                                        marginRight: "10px",
                                        cursor: "pointer",
                                        fontSize: "20px",
                                        fontWeight: "bold"
                                    }}
                                    onClick={() => setModalVisible()}
                                >
                                    <MdClose />
                                </div>
                                <div className="d-flex justify-content-center align-items-center h-100 modal-image">
                                    <div className="ant-card-cover">
                                        <img
                                            alt="example"
                                            src="https://i.pinimg.com/564x/c3/3e/0f/c33e0f308942d422219c9e401ac7dd35.jpg"
                                        />
                                    </div>
                                    <div className="ant-card-cover">
                                        <img
                                            alt="example"
                                            src="https://i.pinimg.com/564x/c3/3e/0f/c33e0f308942d422219c9e401ac7dd35.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    actions={[
                        <div >< AiOutlineLike className="action-post" key="like" /></div>,
                        <div onClick={() => handleFocusComment()}>< FaRegCommentAlt className="action-post" key="comment" /></div>,
                        <div><RiShareForwardLine className="action-post" key="share" /></div>,
                    ]}
                >
                    <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                    >
                        <Avatar src="images/gaixinh.jpg" />
                        <Avatar
                            style={{
                                backgroundColor: '#f56a00',
                            }}
                        >
                            K
                </Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />
                        </Tooltip>
                        <Avatar
                            style={{
                                backgroundColor: '#1890ff',
                            }}
                            icon={<AntDesignOutlined />}
                        />
                    </Avatar.Group>
                    <span style={{ marginLeft: "5px" }}>Nguyễn Văn Phước, Trần Tiến Đạt và 1.000 người khác</span>

                </Card>
                <Comment
                    style={{ paddingTop: "10px", boxSizing: 'border-box', borderLeft: '1px solid #f0f0f0', borderRight: '1px solid #f0f0f0' }}
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                        />
                    }
                />
                <Comment
                    style={{ boxSizing: 'border-box', borderLeft: '1px solid #f0f0f0', borderRight: '1px solid #f0f0f0' }}

                    actions={actions}
                    author={<span>Han Solo</span>}
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                            and efficiently.
                            </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                />
            </List>
        </>
    )
}

export default PostNewFeed;