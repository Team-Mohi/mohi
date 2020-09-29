import React, {useEffect, useState} from 'react';
import {Row, Col} from 'antd';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import {AiFillPicture, AiOutlineLike} from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa';

function Gallery(){

  const path = useLocation().pathname.split('/');
  const isActive = path[3];
  const [isChangeAlbum, setIsChangeAlbum] = useState(true);

  useEffect(() =>{
    setIsChangeAlbum(true)
  },[isActive])

  function changeContentAlbum(){
      setIsChangeAlbum(false)
  }

  const ListALl = () => {
    return(
      <>
        <Row>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-girl-xinh-thai-lan-Nene.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://chieuta.com/wp-content/uploads/2017/11/hinh-anh-nhung-co-gai-xinh-dep-de-thuong.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://chieuta.com/wp-content/uploads/2015/12/hinh-anh-girl-xinh-mat-moc-de-thuong.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://2.bp.blogspot.com/-JAdNFMLXAkc/UvugyhRr3eI/AAAAAAAABBc/SXK2liM1r-I/s1600/anh-gai-dep1a2.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-girl-xinh-thai-lan-Nene.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://1.bp.blogspot.com/-72T_Cw7K2fc/Vh_ZxMNiPcI/AAAAAAAAO_M/cxizWKHLSEw/s1600/anh-girl-xinh-kute-gai-9x-de-thuong-nhat%2B%252815%2529.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://tse2.mm.bing.net/th?id=OIP.OjD5wfTmrihLcR3BOhZCPwHaJ4&pid=Api&P=0&w=300&h=300")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://tse2.explicit.bing.net/th?id=OIP.lqShMaHBzNKv8xn63XsdjQHaJ4&pid=Api&P=0&w=300&h=300")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://3.bp.blogspot.com/-Fipft62OkAo/UZJCuusU6-I/AAAAAAAACv4/2bxGISkGNrg/s1600/hinh-anh-dep-girl-xinh-taihinhnendep.com-2.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="galerry-overview-item-container">
              <Link to="">
                <div className="galerry-overview-item">
                  <div className="galerry-overview-item-image">
                    <i style={{backgroundImage:'url("https://images.kienthuc.net.vn/zoom/800/uploaded/tongbao/2019_09_08/buc-anh-hiem-hoi-van-toan-va-ban-gai-xinh-dep-xuat-hien-cung-mot-khung-hinh-hinh-3.jpg")'}}></i>
                  </div>
                  <div className="galerry-overview-item-info">
                    <div className="galerry-overview-item-info-title">
                      Ảnh đại diện
                    </div>
                    <div className="galerry-overview-item-info-action">
                      <p>100 <AiOutlineLike /></p>
                      <p>23 <FaCommentDots /></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </>
    )
  }

  const Album = () => {
    return(
        <div className="album">
        {isChangeAlbum ?
          <Row>
            <Col span={12}>
              <div className="album-item-container" >
                <div className="album-item" onClick={() => changeContentAlbum()}>
                    <div className="album-image">
                      <img src="https://4.bp.blogspot.com/-5ua3eXbFkoA/U0p1xA8jIII/AAAAAAAAAnI/KdQ201BBMA0/s1600/anh-girl-xinh__Hinhnendl.com+(6).jpg" alt="" />
                    </div>
                    <div className="album-info">
                      <div className="album-title">
                        Ảnh đại diện
                      </div>
                      <div className="album-count">
                        12 mục
                      </div>
                    </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="album-item-container" >
                <div className="album-item" onClick={() => changeContentAlbum()}>
                    <div className="album-image">
                      <img src="https://4.bp.blogspot.com/-N3pimB9qxIg/VwUe_7Sqh3I/AAAAAAAATRA/9rM2kCEng54F1Crj5kf1N6-tutzshx4Qg/s1600/Girl-xinh-ohaylam.com-%25284%2529.jpg" alt="" />
                    </div>
                    <div className="album-info">
                      <div className="album-title">
                        Ảnh đại diện
                      </div>
                      <div className="album-count">
                        12 mục
                      </div>
                    </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="album-item-container" >
                <div className="album-item" onClick={() => changeContentAlbum()}>
                    <div className="album-image">
                      <img src="https://4.bp.blogspot.com/-N3pimB9qxIg/VwUe_7Sqh3I/AAAAAAAATRA/9rM2kCEng54F1Crj5kf1N6-tutzshx4Qg/s1600/Girl-xinh-ohaylam.com-%25284%2529.jpg" alt="" />
                    </div>
                    <div className="album-info">
                      <div className="album-title">
                        Ảnh đại diện
                      </div>
                      <div className="album-count">
                        12 mục
                      </div>
                    </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="album-item-container" >
                <div className="album-item" onClick={() => changeContentAlbum()}>
                    <div className="album-image">
                      <img src="https://4.bp.blogspot.com/-N3pimB9qxIg/VwUe_7Sqh3I/AAAAAAAATRA/9rM2kCEng54F1Crj5kf1N6-tutzshx4Qg/s1600/Girl-xinh-ohaylam.com-%25284%2529.jpg" alt="" />
                    </div>
                    <div className="album-info">
                      <div className="album-title">
                        Ảnh đại diện
                      </div>
                      <div className="album-count">
                        12 mục
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        : <><div className="album-head-title">Ảnh đại diện</div><ListALl /></>}
        </div>
    )
  }
  console.log(isChangeAlbum)
  return(
    <>
      <div className="galerry-container">
        <div className="galerry-head">
          <div className="galerry-title">
            <AiFillPicture /><h5>Ảnh</h5>
          </div>
          <div className="galerry-navigation">
            <ul>
              <Link to="/profile/gallery/overview">
                <li ><span className={isActive === 'overview' || !isActive ? 'galerry-active' : ''}>Tất cả ảnh của bạn</span></li>
              </Link>
              <Link to="/profile/gallery/album">
                <li ><span className={isActive === 'album' ? 'galerry-active' : ''}>Album</span></li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="galerry-content">
          <Switch>
            <Route path="/profile/gallery/overview" component={ListALl}/>
            <Route path="/profile/gallery/album" component={Album}/>
            <Route component={ListALl}/>
          </Switch>
        </div>
      </div>
    </>
  )
}


export default Gallery;
