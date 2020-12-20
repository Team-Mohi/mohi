import React, {useEffect, useRef, useState} from 'react';
import {Col, Row} from 'antd';
import { GiEarthAmerica } from "react-icons/gi";
import { BsFillImageFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {Image,Transformation} from 'cloudinary-react';

function SiderRightProfile({ profile }){
  const {loadingListImage, listImage} = useSelector(state => state.profile);
  const yearNow = new Date().getFullYear();
  const [styleSide, setStyleSider] = useState(false);
  const refSiderLeft = useRef();
  const {idProfile} = useParams();

  useEffect(() => {
    document.addEventListener('scroll', fixedOptionHead, false);

    return () => document.removeEventListener('scroll', removeFixedOptionHead, false)
  })

  const fixedOptionHead = () => {
    let curentRef = refSiderLeft.current
    if(curentRef){
      if(window.scrollY - 520 > 0){
        setStyleSider(true)
      }else {
        setStyleSider(false)
      }
    }
  }

  const removeFixedOptionHead = () => {
     setStyleSider(false)
  }

  if(!listImage.length){
    return(
      <Col span={6}>
        <div className={`sider-profile`} ref={refSiderLeft} style={styleSide ? {position: 'fixed', top: '134px', width: '285px'} : null}>
          <div className="profile-galerry">
            <h6><BsFillImageFill />Ảnh</h6>
              <div style={{textAlign: 'center'}}>Không có ảnh để hiển thị</div>
          </div>
          </div>
      </Col>
    )
  }

  return(
    <>
      <Col span={6}>
        <div className={`sider-profile`} ref={refSiderLeft} style={styleSide ? {position: 'fixed', top: '134px', width: '285px'} : null}>
          <div className="profile-galerry">
            <h6><BsFillImageFill />Ảnh</h6>
              <Row>
                {listImage.filter(img => img.post_images_Type === 'image').slice(0,6).map((image, index) => {
                  return(
                    <Col span={12} key={index}>
                      <div className="profile-galerry-img">
                          {image.post_images_Url.toLowerCase().indexOf('https://') !== -1 ?
                            <img src={image.post_images_Url} alt=""/>
                            :
                            <Image cloudName="mohi-vn" publicId={image.post_images_Url+ ".jpg"} version="1607061343">
                              <Transformation />
                            </Image>
                          }
                      </div>
                    </Col>
                  )
                })}
              </Row>
              {listImage.length > 6 && <Link to={`/profile/`+idProfile+`/gallery`}>Xem thêm</Link>}
          </div>
          </div>
      </Col>
    </>
  )
}

export default SiderRightProfile;
