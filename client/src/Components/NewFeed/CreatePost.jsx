import React, { useState, useRef } from 'react';
import './CreatePost.css';
import { Comment, Avatar, Form, Input, Upload, Modal, List, Switch, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FaUserTag, FaImage, FaUserFriends, FaLock } from "react-icons/fa";
import { MdPublic } from "react-icons/md";

function CreatePost() {
    const { Option } = Select;
    const [previewVisible, setPreviewVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisaled] = useState(true);
    const [previewImage, setPreviewImage] = useState();
    const [valuePost, setValuePost] = useState();
    const [previewTitle, setPreviewTitle] = useState();
    const [fileList, setFileList] = useState([]);
    const [zIndexModal, setZIndexModal] = useState();
    const [styleOptionPost, setStyleOptionPost] = useState();
    const [stylePresentation, setStylePresentation] = useState();
    const uploadImageNewPost = useRef();

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    const handleUploadImage = () => {
        uploadImageNewPost.current.upload.uploader.onClick()
    }
    const handleCancel = () => setPreviewVisible(false);
    const handleChange = ({ fileList }) => setFileList(fileList);
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };
    function showModalCreatePost() {
        setZIndexModal({ position: "relative", zIndex: "311" })
        setStylePresentation({ bottom: "0%", opacity: ".6", transition: "opacity .6s" })
        setStyleOptionPost({ display: "block" })
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text" >Thêm ảnh</div>
        </div>
    );
    const onChange = (e) => {
        setValuePost(e.target.value)
        if (e.target.value) {
            setDisaled(false)
            return
        }
        setDisaled(true)
    }
    const Editor = () => (
        <>
            <Form >
                <Form.Item>
                    <Input
                        autoFocus
                        style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", outline: 'none', userSelect: 'text', overflowWrap: 'break-word' }}
                        className="input-create-post"
                        onChange={onChange}
                        placeholder="Bạn đang nghĩ dì?"
                        value={valuePost}
                    />

                </Form.Item>
            </Form>
        </>
    );

    return (
        <>
            <div
                className="presentation"
                onClick={() => {
                    setStylePresentation(); setZIndexModal(); setStyleOptionPost()
                }}
                style={stylePresentation}
            ></div>
            <div
                className="create-post p-3 mb-2"
                style={zIndexModal}
                onClick={() => showModalCreatePost()}
            >
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <>
                            <Editor
                            />
                            <div className="d-flex upload-image"
                            >
                                <Upload
                                    className=" d-flex upload-image-new-post"
                                    ref={uploadImageNewPost}
                                    multiple
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                >
                                    {fileList.length > 0 ? uploadButton : null}
                                </Upload>
                                <Modal
                                    visible={previewVisible}
                                    title={previewTitle}
                                    footer={null}
                                    onCancel={handleCancel}
                                >
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </>
                    }
                />
                <hr />
                <div
                    className="d-flex action-new-post"
                    style={{ justifyContent: "space-around", fontSize: "14px" }}
                >
                    <div
                        onClick={handleUploadImage}
                    >
                        <FaImage style={{ fontSize: "20px" }} />
                        <span> Ảnh/Video</span>
                    </div>
                    <div>
                        <FaUserTag style={{ fontSize: "20px" }} />
                        <span>Gắn thẻ bạn bè</span>
                    </div>
                </div>
                <List
                    className="option-post"
                    style={styleOptionPost}
                >
                    <List.Item className="privacy-new-post">
                        <div>
                            <Switch></Switch>
                            <span className="place-post">Tin của bạn</span>
                        </div>
                        <Select className="select-privacy" defaultValue="public" style={{ width: 140 }} loading>
                            <Option value="public"><MdPublic /> Công khai</Option>
                            <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                            <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                        </Select>
                    </List.Item>
                    <List.Item className="privacy-new-post">
                        <div>
                            <Switch defaultChecked></Switch>
                            <span className="place-post">Bảng tin</span>
                        </div>
                        <Select className="select-privacy" defaultValue="public" style={{ width: 140 }} loading>
                            <Option value="public"><MdPublic /> Công khai</Option>
                            <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                            <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                        </Select>
                    </List.Item>
                    <Button
                        className="submit-create-post"
                        onClick={() => setLoading(true)}
                        type="primary"
                        block loading={loading}
                        disabled={disabled}
                    >
                        Đăng
                    </Button>
                </List>
            </div>
        </>
    )
}

export default CreatePost;
