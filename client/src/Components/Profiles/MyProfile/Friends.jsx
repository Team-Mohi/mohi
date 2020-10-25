import React from 'react';
import {AiFillPicture} from 'react-icons/ai';
import {FaCheck} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import {Row, Col} from 'antd';

function Friends(){
  const path = useLocation().pathname.split('/');
  const isActive = path[3];

  const FriendsAll = () => {
    return(
      <div className="friends-all">
      <Row>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
      </Row>
      </div>

    )
  }

  const FriendsRecent = () => {
    return(
      <div className="friends-all">
      <Row>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
      </Row>
      </div>
    )
  }
  const FriendsWithUpComingBirthdays = () => {
    return(
      <div className="friends-all">
      <Row>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
      </Row>
      </div>
    )
  }
  const FriendsCurrentCity = () => {
    return(
      <div className="friends-all">
      <Row>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
      </Row>
      </div>
    )
  }
  const Followers = () => {
    return(
      <div className="friends-all">
      <Row>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
      </Row>
      </div>
    )
  }
  const Following = () => {
    return(
      <div className="friends-all">
      <Row>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="friend-item-container">
              <div className="friend-item-left">
                <div className="friend-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-item-info">
                  <div className="friend-item-name">
                    <Link to="">
                    Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-item-desc">
                    Hot girl
                  </div>
                </div>
              </div>
              <div className="friend-item-right">
                <button><FaCheck /> Bạn bè</button>
              </div>
            </div>
          </Col>
      </Row>
      </div>
    )
  }
  return(
    <div className="profile-firends-container">
      <div className="galerry-head">
        <div className="galerry-title">
          <AiFillPicture /><h5> Bạn bè</h5>
        </div>
        <div className="galerry-navigation">
          <ul>
            <Link to="/profile/friends/friends-all">
              <li ><span className={isActive === 'friends-all' || !isActive ? 'galerry-active' : ''}>Tất cả bạn bè</span></li>
            </Link>
            <Link to="/profile/friends/friends-recent">
              <li ><span className={isActive === 'friends-recent' ? 'galerry-active' : ''}>Đã thêm gần đây</span></li>
            </Link>
            <Link to="/profile/friends/friends-with-upcoming-birthdays">
              <li ><span className={isActive === 'friends-with-upcoming-birthdays' ? 'galerry-active' : ''}>Sinh nhật</span></li>
            </Link>
            <Link to="/profile/friends/friends-current-city">
              <li ><span className={isActive === 'friends-current-city' ? 'galerry-active' : ''}>Thành phố hiện tại</span></li>
            </Link>
            <Link to="/profile/friends/followers">
              <li ><span className={isActive === 'followers' ? 'galerry-active' : ''}>Người theo dõi</span></li>
            </Link>
            <Link to="/profile/friends/following">
              <li ><span className={isActive === 'following' ? 'galerry-active' : ''}>Đang theo dõi</span></li>
            </Link>
            <span className="search-friend">
              <input name="search_friend" placeholder="Tìm kiếm bạn bè" type="text"/>
              <button ><BsSearch /></button>

            </span>
            <div className="clear"></div>
          </ul>
        </div>
      </div>
      <div className="galerry-content">
        <Switch>
          <Route path="/profile/friends/friends-all" component={FriendsAll}/>
          <Route path="/profile/friends/friends-recent" component={FriendsRecent}/>
          <Route path="/profile/friends/friends-with-upcoming-birthdays" component={FriendsWithUpComingBirthdays}/>
          <Route path="/profile/friends/friends-current-city" component={FriendsCurrentCity}/>
          <Route path="/profile/friends/followers" component={Followers}/>
          <Route path="/profile/friends/following" component={Following}/>
          <Route component={FriendsAll}/>
        </Switch>
      </div>
    </div>
  )



}

export default Friends;
