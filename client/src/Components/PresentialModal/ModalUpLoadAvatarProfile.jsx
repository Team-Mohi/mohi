import React, { useRef, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import {toggleStatusPresentialModal} from './../../Actions/index.jsx';
import {responseUpdateAvatar} from './../../Actions/index.jsx';
import {requestUpdateAvatar} from './../../Actions/index.jsx';
import {responseAddPostsProfile} from './../../Actions/index.jsx';
import axios from 'axios';
import { WaveLoading } from 'react-loadingg';

function ModalUpLoadAvatarProfile({presentialModal, profile}){
  const {data} = useSelector(state => state.presentialModal);
  const {loadingUpdateAvatar} = useSelector(state => state.profile);
  const refCropper = useRef();
  const dispatch = useDispatch();
  const [imageX, setImageX] = useState();
  const [imageY, setImageY] = useState();
  const [imageW, setImageW] = useState();
  const [imageH, setImageH] = useState();

  useEffect(() => {
    const current = refCropper.current;
    const cropper = new Cropper(current, {
      aspectRatio: 1,
      zoomable: false,
      scalable: false,
      crop(event) {
        setImageX(event.detail.x)
        setImageY(event.detail.y)
        setImageW(event.detail.width)
        setImageH(event.detail.height)
      },
    });
  }, [])

  const saveAvatar = () => {
    dispatch(requestUpdateAvatar())

    const formData = new FormData();
    formData.append('upload_preset', 'mohi_video');
    formData.append('file', data);
    upload(formData)
  }

  const upload = async (formData) => {
    await axios.post('https://api.cloudinary.com/v1_1/mohi-vn/upload', formData)
    .then((res) => {
      updateDtb(res.data.public_id)
    })
  }

  const updateDtb = async (img) => {
    await axios.post('https://www.api.mohi.vn/api/auth/update-info-profile', {
      user_avatar: img,
      user_avatar_cropX: imageX,
      user_avatar_cropY: imageY,
      user_avatar_cropW: imageW,
      user_avatar_cropH: imageH,
    }).then((res) => {
      dispatch(responseUpdateAvatar({
        user_avatar: img,
        user_avatar_cropX: Math.round(imageX),
        user_avatar_cropY: Math.round(imageY),
        user_avatar_cropW: Math.round(imageW),
        user_avatar_cropH: Math.round(imageH),
      }))
      dispatch(responseAddPostsProfile(res.data.new_avatar))
      let ustk = JSON.parse(localStorage.getItem('ustk'));
      ustk.info.user_avatar = img;
      ustk.info.user_avatar_cropX = Math.round(imageX);
      ustk.info.user_avatar_cropY = Math.round(imageY);
      ustk.info.user_avatar_cropW = Math.round(imageW);
      ustk.info.user_avatar_cropH = Math.round(imageH);
      localStorage.setItem('ustk', JSON.stringify(ustk))
      dispatch(toggleStatusPresentialModal())
    })
  }

  return(
    <React.Fragment>
      <div className="modal-custom">
        <div className="image-cropper">
          <img src={URL.createObjectURL(data)} ref={refCropper} alt="" />
        </div>
        <div className="action-cropper">
          <button onClick={() => saveAvatar()}>Lưu</button>
          <button onClick={() => dispatch(toggleStatusPresentialModal())}>Hủy</button>
        </div>
        { loadingUpdateAvatar && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
      </div>
    </React.Fragment>
  )
}

export default ModalUpLoadAvatarProfile;
