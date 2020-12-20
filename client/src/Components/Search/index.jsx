import React, { useEffect } from 'react';
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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {requestSearchMohi} from './../../Actions/index.jsx';
import {responseSearchMohi} from './../../Actions/index.jsx';
import { WaveLoading } from 'react-loadingg';

function SearchNavigation({ search }){
  const {loading} = useSelector(state => state.search)
  const {value} = useParams();
  const location = useLocation().pathname.split('/');
  const isActive = location[3];
  const yearNow = new Date().getFullYear();
  const dispatch = useDispatch();

  useEffect(() => {
    getSearch()
  }, [value])

  const getSearch = async () => {
    dispatch(requestSearchMohi())
    await axios.post("https://www.api.mohi.vn/api/auth/search/", { search_text: value})
    .then((res) => {
      dispatch(responseSearchMohi(res.data))
    })
  }

  if(loading){
      return(
        <div className="wrapper" style={{marginTop:'64px'}}>
          <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>
        </div>
      )
  }

  return(
    <>
      <div className="wrapper" style={{marginTop:'64px'}}>
        <div style={{position:'relative'}}>
          <ul className="search-filter-top" style={{position:'fixed', width: '1140px'}}>
            <li>
              <Link to={`/search/${value}/all`} className={isActive === 'all' || !isActive ? `search-filter-top-active` : ''}>Mọi người</Link>
            </li>
          </ul>
        </div>
        <Row className="search-container" >
          <Col span={6} style={{position:'relative'}}>
            <div className="search-filter-sider" style={{padding: '0 20px',position:'fixed', width: '285px'}}>
              <h5>Kết quả tìm kiếm cho: <p>"{value}"</p></h5>
            </div>
          </Col>
          <Col span={12} style={{ paddingRight: '10px', position:'relative'}}>
          <Switch>
            <Route path="/search/:value/all"><FilterAll value={value} /></Route>
            <Route path="/search/:value/post" component={FilterPost}/>
            <Route path="/search/:value/image" component={FilterImage}/>
            <Route path="/search/:value/people" component={FilterPeople}/>
            <Route path="/search/:value/video" component={FilterVideo}/>
            <Route  component={FilterAll}/>
          </Switch>
          </Col>
          <Col span={6} style={{ position:'relative'}}>
            <div className="box-footer" style={{ marginTop: '0', position:'fixed', width: '285px'}}>
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
