import React, {useState} from 'react';
import {FaUserAlt} from "react-icons/fa";
import {AiOutlinePlusCircle, AiFillEdit} from "react-icons/ai";
import {MdDelete} from "react-icons/md";
import {FcSettings} from "react-icons/fc";
import {Link, Route, Switch, useLocation, useParams} from 'react-router-dom';
import {Tooltip, Spin} from 'antd';
import {useDispatch} from 'react-redux';
import {toggleStatusPresentialModal} from './../../../Actions/index.jsx';
import {requestDeleteInfoProfile} from './../../../Actions/index.jsx';
import {responseDeleteInfoProfile} from './../../../Actions/index.jsx';
import {useSelector} from 'react-redux';
import axios from 'axios';

const OverView = (props) => {

  const dispatch = useDispatch();

  function editStudySpace(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_study_space', data));
  }

  function editLiveSpace(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_live_space', data));
  }

  function addWorkSpace() {
    dispatch(toggleStatusPresentialModal('modal_add_work_space'));
  }

  function addStudySpace() {
    dispatch(toggleStatusPresentialModal('modal_add_study_space'));
  }

  function addLiveSpace() {
    dispatch(toggleStatusPresentialModal('modal_add_live_space'));
  }

  function editWorkSpace(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_work_space', data));
  }

  function addWorkSpace() {
    dispatch(toggleStatusPresentialModal('modal_add_work_space'));
  }

  const onSubmitWorkSpace = (data) => {
    props.onSubmitWorkSpace(data);
  }

  const deleteInfo = async (payload) => {
    props.deleteInfo(payload)
  }

  const ButtonOptionWork = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editWorkSpace(props.workSpace)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_workPlace', value: 'delete'})}><MdDelete/>
          Xóa</span>
      </div>
    </React.Fragment>)

  }

  const ButtonOptionLive = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editLiveSpace(props.liveSpace)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_currentPlace', value: 'delete'})}><MdDelete/>
          Xóa</span>
      </div>
    </React.Fragment>)

  }

  const ButtonOptionStudy = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editStudySpace(props.study)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_studyPlace', value: 'delete'})}><MdDelete/>Xóa</span>
      </div>
    </React.Fragment>)

  }

  return (<div className="about-content-right-overview">
    <div className="about-content-right-first">
      <div className="about-content-right-first-place-work">
        {
          !props.info.user_workPlace && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
            ? <div className="add-something">
                <div className="icon-add">
                  <AiOutlinePlusCircle/>
                </div>
                <div className="title-add" onClick={addWorkSpace}>
                  <span >Thêm một nơi làm việc</span>
                </div>
              </div>
            :
            <React.Fragment>
              {!props.info.user_workPlace ?
                <div className="job-item">
                  Không có dữ liệu để hiển thị
                </div>
                :
              <div className="job-item">
                {props.info.user_workPlace}
                {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
                <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionWork workSpace={props.info.user_workPlace}/>}>
                  <span className="edit-work-space-button"><FcSettings/></span>
                </Tooltip>
                }
              </div>
              }
            </React.Fragment>
        }
      </div>
      <div className="about-content-right-first-place-study">
        {
          !props.info.user_studyPlace && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
            ? <div className="add-something">
                <div className="icon-add">
                  <AiOutlinePlusCircle/>
                </div>
                <div className="title-add" onClick={addStudySpace}>
                  <span >Thêm một trường cao đẳng/đại học</span>
                </div>
              </div>
            :
            <React.Fragment>
              {!props.info.user_studyPlace ?
                <div className="job-item">
                  Không có dữ liệu để hiển thị
                </div>
                :
              <div className="collegs-item">
                {props.info.user_studyPlace}
                {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
                <Tooltip trigger="click" placement="rightTop" title={<ButtonOptionStudy study={props.info.user_studyPlace}/>}>
                  <span className="edit-work-space-button"><FcSettings/></span>
                </Tooltip>
                }
              </div>
            }
          </React.Fragment>
        }
      </div>
      <div className="about-content-right-first-place-live">
        {
          !props.info.user_currentPlace && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
            ? <div className="add-something">
                <div className="icon-add">
                  <AiOutlinePlusCircle/>
                </div>
                <div className="title-add" onClick={addLiveSpace}>
                  <span >Thêm nơi ở hiện tại</span>
                </div>
              </div>
            :
            <React.Fragment>
              {!props.info.user_currentPlace ?
                <div className="job-item">
                  Không có dữ liệu để hiển thị
                </div>
                :
              <div className="job-item">
                {props.info.user_currentPlace}
                {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
                <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionLive liveSpace={props.info.user_currentPlace} />}>
                  <span className="edit-work-space-button"><FcSettings/></span>
                </Tooltip>
                }
              </div>
            }
          </React.Fragment>
        }
      </div>
    </div>
    <div className="about-content-right-second">
      <ul>
        <li>
          {props.info.user_phone ? `0`+props.info.user_phone: null}
        </li>
        <li>
          {props.info.user_email}
        </li>
        <li>
          {props.info.user_birthday}
        </li>
        {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
        <li>
            <Link to={"/profile/" + props.idProfile + "/about/contact-info"}>
            <span>Chỉnh sửa thông tin liên hệ và cơ bản</span>
          </Link>
        </li>
        }
      </ul>
    </div>
  </div>)
}

const Education = (props) => {

  const dispatch = useDispatch();

  const deleteInfo = async (payload) => {
    props.deleteInfo(payload)
  }

  function addWorkSpace() {
    dispatch(toggleStatusPresentialModal('modal_add_work_space'));
  }
  function editWorkSpace(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_work_space', data));
  }
  function addStudySpace() {
    dispatch(toggleStatusPresentialModal('modal_add_study_space'));
  }
  function editStudySpace(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_study_space', data));
  }
  function addStudyHighSchool() {
    dispatch(toggleStatusPresentialModal('modal_add_study_high_school'));
  }
  function editStudyHighSchool(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_study_high_school', data));
  }

  const ButtonOptionWork = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editWorkSpace(props.workSpace)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_workPlace', value: 'delete'})}><MdDelete/>
          Xóa</span>
      </div>
    </React.Fragment>)

  }
  const ButtonOptionStudy = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editStudySpace(props.study)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_studyPlace', value: 'delete'})}><MdDelete/>Xóa</span>
      </div>
    </React.Fragment>)

  }

  const ButtonOptionStudyHighSchool = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editStudyHighSchool(props.school)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_high_school', value: 'delete'})}><MdDelete/>Xóa</span>
      </div>
    </React.Fragment>)

  }

  return (<> < div className = "about-content-education" > <div className="job">
    <h6>Công việc</h6>
      {
        !props.info.user_workPlace && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addWorkSpace}>
                <span >Thêm một nơi làm việc</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_workPlace ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_workPlace}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionWork workSpace={props.info.user_workPlace}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
  <div className="collegs">
    <h6>Cao đẳng/đại học</h6>
      {
        !props.info.user_studyPlace && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addStudySpace}>
                <span >Thêm một trường cao đẳng/đại học</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_studyPlace ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_studyPlace}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionStudy study={props.info.user_studyPlace}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
  <div className="school">
    <h6>Trung học</h6>
      {
        !props.info.user_high_school && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addStudyHighSchool}>
                <span >Thêm một trường trung học</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_high_school ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_high_school}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionStudyHighSchool school={props.info.user_high_school}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
</div>
</>)
}

const ContactInfo = (props) => {
  const dispatch = useDispatch();

  const deleteInfo = async (payload) => {
    props.deleteInfo(payload)
  }

  function addEmail() {
    dispatch(toggleStatusPresentialModal('modal_add_email'));
  }
  function editEmail(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_email', data));
  }
  function addPhone() {
    dispatch(toggleStatusPresentialModal('modal_add_phone'));
  }
  function editPhone(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_phone', data));
  }
  function addWebsite() {
    dispatch(toggleStatusPresentialModal('modal_add_website'));
  }
  function editWebsite(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_website', data));
  }

  const ButtonOptionEmail = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editEmail(props.email)}><AiFillEdit/>
          Chỉnh sửa</span>
      </div>
    </React.Fragment>)

  }

  const ButtonOptionPhone = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editPhone(props.phone)}><AiFillEdit/>
          Chỉnh sửa</span>
      </div>
    </React.Fragment>)

  }

  const ButtonOptionWebsite = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editWebsite(props.website)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_website', value: 'delete'})}><MdDelete/>
          Xóa</span>
      </div>
    </React.Fragment>)

  }

  return (<> < div className = "about-content-education" > <div className="job">
    <h6>Email</h6>
      {
        !props.info.user_email && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addEmail}>
                <span >Thêm một email</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_email ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_email}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionEmail email={props.info.user_email}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
  <div className="collegs">
    <h6>Số điện thoại</h6>
      {
        !props.info.user_phone && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addPhone}>
                <span >Thêm một số điện thoại</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_phone ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
            {props.info.user_phone ? `0`+props.info.user_phone: null}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionPhone phone={props.info.user_phone}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
  <div className="school">
    <h6>Website</h6>
      {
        !props.info.user_website && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addWebsite}>
                <span >Thêm một link website</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_website ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_website}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionWebsite website={props.info.user_website}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
</div>
</>)
}

const Bio = (props) => {

  const dispatch = useDispatch();

  const deleteInfo = async (payload) => {
    props.deleteInfo(payload)
  }

  function addIntroduce() {
    dispatch(toggleStatusPresentialModal('modal_add_introduce'));
  }
  function editIntroduce(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_introduce', data));
  }
  function addNickName() {
    dispatch(toggleStatusPresentialModal('modal_add_nick_name'));
  }
  function editNickName(data) {
    dispatch(toggleStatusPresentialModal('modal_edit_nick_name', data));
  }

  const ButtonOptionIntroduce = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editIntroduce(props.introduce)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_introduce', value: 'delete'})}><MdDelete/>
          Xóa</span>
      </div>
    </React.Fragment>)

  }

  const ButtonOptionNickName = (props) => {

    return (<React.Fragment>
      <div className="button-option">
        <span onClick={() => editNickName(props.nickname)}><AiFillEdit/>
          Chỉnh sửa</span>
        <span onClick={() => deleteInfo({type: 'user_nick_name', value: 'delete'})}><MdDelete/>
          Xóa</span>
      </div>
    </React.Fragment>)

  }
  return (<> < div className = "about-content-education" > <div className="job">
    <h6>Giới thiệu về bản thân</h6>
      {
        !props.info.user_introduce && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addIntroduce}>
                <span >Viết vài điều về bản thân bạn</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_introduce ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_introduce}
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionIntroduce introduce={props.info.user_introduce}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
  <div className="collegs">
    <h6>Các tên khác</h6>
      {
        !props.info.user_nick_name && props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id
          ? <div className="add-something">
              <div className="icon-add">
                <AiOutlinePlusCircle/>
              </div>
              <div className="title-add" onClick={addNickName}>
                <span >Thêm một biệt danh hoặc tên khai sinh của bạn</span>
              </div>
            </div>
          :
          <React.Fragment>
            {!props.info.user_nick_name ?
              <div className="job-item">
                Không có dữ liệu để hiển thị
              </div>
              :
          <div className="job-item">
              {props.info.user_nick_name}
              <span>
                <small>(Hiển thị ở đầu trang cá nhân)</small>
              </span>
              {props.info.id === JSON.parse(localStorage.getItem('ustk')).info.id &&
              <Tooltip trigger="click" placement="rightBottom" title={<ButtonOptionNickName nickname={props.info.user_nick_name}/>}>
                <span className="edit-work-space-button"><FcSettings/></span>
              </Tooltip>
              }
            </div>
          }
        </React.Fragment>
      }
  </div>
</div>
</>)
}

function About({profile}) {

  const {idProfile} = useParams();
  const path = useLocation().pathname.split('/');
  const isActive = path[4];
  const {loading, info} = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const deleteInfo = async (payload) => {
    dispatch(requestDeleteInfoProfile())
    let initialData = {
      user_homeTown: '',
      user_currentPlace: '',
      user_workPlace: '',
      user_studyPlace: '',
      user_college: '',
      user_high_school: '',
      user_website: '',
      user_username: '',
      user_nick_name: '',
      user_introduce: ''
    }

    switch (payload.type) {
      case "user_homeTown":
        initialData.user_homeTown = payload.value;
        break;
      case "user_currentPlace":
        initialData.user_currentPlace = payload.value;
        break;
      case "user_workPlace":
        initialData.user_workPlace = payload.value;
        break;
      case "user_studyPlace":
        initialData.user_studyPlace = payload.value;
        break;
      case "user_college":
        initialData.user_college = payload.value;
        break;
      case "user_high_school":
        initialData.user_high_school = payload.value;
        break;
      case "user_website":
        initialData.user_website = payload.value;
        break;
      case "user_nick_name":
        initialData.user_nick_name = payload.value;
        break;
      case "user_introduce":
        initialData.user_introduce = payload.value;
        break;
    }

    await axios.post("https://www.api.mohi.vn/api/auth/delete-info-profile", initialData)
    .then((res) => {
      dispatch(responseDeleteInfoProfile({type: payload.type, value: ''}))
    })
  }

  if (loading && !info) {
    return (<div className="about-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px'
      }}>
      <Spin/>
    </div>)
  }

  return (<> < div className = "about-container" > <div className="about-header">
    <FaUserAlt/>
    <h5>Giới thiệu</h5>
  </div>
  <div className="about-content">
    <div className="about-content-left">
      <ul>
        <Link to={"/profile/" + idProfile + "/about/overview"}>
          <li className={isActive === 'overview' || !isActive
              ? 'active'
              : ''}>
            <span>Tổng quan</span>
          </li>
        </Link>
        <Link to={"/profile/" + idProfile + "/about/education"}>
          <li className={isActive === 'education'
              ? 'active'
              : ''}>
            <span>Công việc và học vấn</span>
          </li>
        </Link>
        <Link to={"/profile/" + idProfile + "/about/contact-info"}>
          <li className={isActive === 'contact-info'
              ? 'active'
              : ''}>
            <span>Thông tin liên hệ và cơ bản</span>
          </li>
        </Link>
        <Link to={"/profile/" + idProfile + "/about/bio"}>
          <li className={isActive === 'bio'
              ? 'active'
              : ''}>
            <span>Chi tiết về bạn</span>
          </li>
        </Link>
      </ul>
    </div>
    <div className="about-content-right">
      <Switch>
        <Route path="/profile/:idProfile/about/overview"><OverView idProfile={idProfile} info={info} deleteInfo={deleteInfo}/></Route>
        <Route path="/profile/:idProfile/about/education"><Education info={info} deleteInfo={deleteInfo}/></Route>
        <Route path="/profile/:idProfile/about/contact-info"><ContactInfo info={info} deleteInfo={deleteInfo}/></Route>
        <Route path="/profile/:idProfile/about/bio"><Bio info={info} deleteInfo={deleteInfo}/></Route>
        <Route><OverView idProfile={idProfile} info={info} deleteInfo={deleteInfo}/></Route>
      </Switch>
    </div>
  </div> < /div>
</ >)
}

export default About;
