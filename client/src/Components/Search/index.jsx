import React from 'react';
import {Link, Route, Switch, useParams, useLocation} from 'react-router-dom';
import './search.css';
import FilterPost from './Filter/filter_post.jsx';
import FilterImage from './Filter/filter_image.jsx';
import FilterVideo from './Filter/filter_video.jsx';
import FilterPeople from './Filter/filter_people.jsx';
import FilterAll from './Filter/filter_all.jsx';
import { GoPrimitiveDot } from "react-icons/go";
import {
  Row,
  Col
} from 'antd';

function SearchNavigation(){
  const {value} = useParams();
  const location = useLocation().pathname.split('/');
  const isActive = location[3];
  const yearNow = new Date().getFullYear();
  return(
    <>
      <div className="container" style={{marginTop:'64px'}}>
        <div style={{position:'relative'}}>
          <ul className="search-filter-top" style={{position:'fixed', width: '1140px'}}>
            <li>
              <Link to={`/search/${value}/all`} className={isActive=='all' || !isActive ? `search-filter-top-active` : ''}>Tất cả</Link>
            </li>
            <li>
              <Link to={`/search/${value}/post`} className={isActive=='post' ? `search-filter-top-active` : ''}>Bài viết</Link>
            </li>
            <li>
              <Link to={`/search/${value}/people`} className={isActive=='people' ? `search-filter-top-active` : ''}>Mọi người</Link>
            </li>
            <li>
              <Link to={`/search/${value}/image`} className={isActive=='image' ? `search-filter-top-active` : ''}>Ảnh</Link>
            </li>
            <li>
              <Link to={`/search/${value}/video`} className={isActive=='video' ? `search-filter-top-active` : ''}>Video</Link>
            </li>
          </ul>
        </div>
        <Row className="search-container" >
          <Col span={6} style={{padding: '0 20px',position:'relative'}}>
            <div className="search-filter-sider" style={{padding: '0 20px',position:'fixed'}}>
              <h5>Kết quả tìm kiếm cho: <p>"{value}"</p></h5>
              <div className="search-filter-boss">
                <h6>Bài viết của</h6>
                <ul>
                  <label htmlFor="some_one">
                    <li>
                      <input type="radio" id="some_one" name="filter-boss"/>Bất kì ai
                    </li>
                  </label>
                    <label htmlFor="you">
                    <li>
                      <input type="radio" id="you" name="filter-boss"/>Bạn
                    </li>
                  </label>
                    <label htmlFor="your_friends">
                    <li>
                      <input type="radio" id="your_friends" name="filter-boss"/>Bạn bè của bạn
                    </li>
                  </label>
                </ul>
              </div>
              <div className="search-filter-order">
                <h6>Đã đăng trong nhóm</h6>
                <ul>
                  <label htmlFor="some_groups">
                    <li>
                      <input type="radio" id="some_groups" name="filter-group"/>Nhóm bất kì
                    </li>
                  </label>
                    <label htmlFor="your_groups">
                    <li>
                      <input type="radio" id="your_groups" name="filter-group"/>Nhóm của bạn
                    </li>
                  </label>
                </ul>
              </div>
              <div className="search-filter-time">
                <h6>Ngày đăng</h6>
                <ul>
                  <label htmlFor="some_time">
                    <li>
                      <input type="radio" id="some_time" name="filter-time"/>Ngày bất kì
                    </li>
                  </label>
                </ul>
              </div>
            </div>
          </Col>
          <Col span={12}>
          <Switch>
            <Route path="/search/:value/all" component={FilterAll}/>
            <Route path="/search/:value/post" component={FilterPost}/>
            <Route path="/search/:value/image" component={FilterImage}/>
            <Route path="/search/:value/people" component={FilterPeople}/>
            <Route path="/search/:value/video" component={FilterVideo}/>
            <Route  component={FilterAll}/>
          </Switch>
          </Col>
          <Col span={6} style={{padding: '0 20px', position:'relative'}}>
            <div className="box-footer" style={{marginTop: '0', position:'fixed', width: '277px'}}>
                <ul>
                    <li><GoPrimitiveDot />
                        <Link to="privacy">Quyền riêng tư</Link>
                    </li>
                    <li><GoPrimitiveDot />
                        <Link to="rules-mohi">Điều khoản</Link>
                    </li>
                    <li><GoPrimitiveDot />
                        <Link to="privacy-policy">Chính sách bảo mật</Link>
                    </li>
                    <li><GoPrimitiveDot />
                        <Link to="help">Trợ giúp</Link>
                    </li>
                </ul>
                <div className="brand-app">Mohi &copy; {yearNow}</div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default SearchNavigation;
