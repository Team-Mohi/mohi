import React, { useState, useEffect } from 'react';
import './Setting.css';
import { FiSettings } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { Descriptions, Collapse, message, Space } from 'antd';
import { useForm } from "react-hook-form";
import { responseUpdateProfile } from './../../Actions/index.jsx';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { requestUpdateProfile } from './../../Actions/index.jsx';
import editInfo from './../../axios/axiosEditInfoProfile.jsx';
import { WaveLoading } from 'react-loadingg';
import { useDispatch } from 'react-redux';
import { requestInfoProfile } from './../../Actions/index.jsx';
import { responseInfoProfile } from './../../Actions/index.jsx';
import axios from 'axios';
import {RiErrorWarningLine} from "react-icons/ri";
import {Tooltip} from 'antd';

const { Panel } = Collapse;

const General = (props) => {
  const [styleInputAddContact, setStyleInputAddContact] = useState();

  const onSubmitUpdateName = (data) => {
    props.onSubmitUpdateName(data)
  }

  const onSubmitUpdateUserName = (data) => {
    props.onSubmitUpdateUserName(data)
  }

  return (
    <div className="general-container">
      <div className="general-title">
        <h5> Cài đặt tài khoản chung</h5>
      </div>
      <div className="general-content">
        <Collapse defaultActiveKey={['0']} accordion>
          <Panel header={<SettingGeneralName ustk={props.ustk}/>} key="1">
            <PanelName onSubmitUpdateName={onSubmitUpdateName} loadingUpdateName={props.loadingUpdateName} ustk={props.ustk}/>
          </Panel>
          <Panel header={<SettingGeneralNameUser ustk={props.ustk}/>} key="2">
            <PanelUserName erruserName={props.erruserName} onSubmitUpdateUserName={onSubmitUpdateUserName} loadingUpdateUsername={props.loadingUpdateUsername} ustk={props.ustk}/>
          </Panel>
      </Collapse>
      </div>
    </div>
  )
}

const PanelName = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    if(data.user_first_name !== props.ustk.user_first_name || data.user_last_name !== props.ustk.user_last_name){
      props.onSubmitUpdateName(data)
    }
  }
  return(
      <div className="setting-general-name">
        <b>Tên của bạn sẽ thay đổi trên Mohi</b>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="setting-form-edit-name">
            <label htmlFor="">Họ</label>
            <div className="setting-form-input">
            <input type="text" defaultValue={props.ustk.user_first_name }  name="user_first_name" ref={register({required: true})} style={errors.user_first_name
                ? {
                  border: '1px solid red'
                }
                : null}/>
              {errors.user_first_name && <Tooltip placement="bottom" title={<p className = "error_sex_tooltip" > Vui lòng nhập họ của bạn</p>}><RiErrorWarningLine className="error_sex err_setting"/></Tooltip>}
            </div>
          </div>
          <div className="setting-form-edit-name">
            <label htmlFor="">Tên</label>
            <div className="setting-form-input">
            <input type="text" defaultValue={props.ustk.user_last_name } name="user_last_name" ref={register({required: true})} style={errors.user_last_name
                ? {
                  border: '1px solid red'
                }
                : null}/>
              {errors.user_last_name && <Tooltip placement="bottom" title={<p className = "error_sex_tooltip" > Vui lòng nhập tên của bạn</p>}><RiErrorWarningLine className="error_sex err_setting"/></Tooltip>}
            </div>
          </div>
          <div className="setting-form-edit-name-button">
            <button type="submit">Xác nhận thay đổi</button>
          </div>
        </form>
        { props.loadingUpdateName && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
      </div>
  )
}

const PanelUserName = (props) => {
  const { register, handleSubmit, watch, errors, setError } = useForm();
  const [errUserName, setErruserName] = useState('Tên người dùng phải là chữ thường không dấu và không chứa kí tự đặc biệt');
  const [valueUserName, setValueUserName] = useState(props.ustk.user_username);

  useEffect(() => {
    if(props.erruserName){
      setError("user_username", {
            type: "manual",
            message: "Tên người dùng đã tồn tại"
      });
      setErruserName('Tên người dùng đã tồn tại')
    }
  }, [props.erruserName])

  const validateInputUserName = (value) => {
    /* lowcase character Test */
    if (value !== value.toLowerCase()) {
      return false;
    }

    /* lowcase character Test */
    var filter1 = /[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/;
    if (filter1.test(value)) {
      return false;
    }
    /* Special character Test */
    var filter = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
    if (filter.test(value)) {
      return false;
    }
    return true;
  }

  const onChange = (e) => {
    setValueUserName(e.target.value)
  }

  const onSubmit = (data) => {
    if(valueUserName !== props.ustk.user_username ){
      props.onSubmitUpdateUserName({user_username: valueUserName})
    }
  }
  return(
      <div className="setting-general-name">
        <b>Tên người dùng công khai của bạn giống với tên trong địa chỉ dòng thời gian của bạn</b>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="setting-form-edit-name">
            <label htmlFor="">Tên người dùng</label>
            <div className="setting-form-input">
              <input type="text" defaultValue={valueUserName} onChange={onChange} name="user_username" ref={register({
                  validate: value => validateInputUserName(value)
                })} style={errors.user_username
                ? {
                  border: '1px solid red'
                }
                : null}/>
              {errors.user_username && <Tooltip placement="bottom" title={<p className = "error_sex_tooltip" >{errUserName}</p>}><RiErrorWarningLine className="error_sex err_setting"/></Tooltip>}
            </div>
          </div>
          <div className="setting-form-edit-name-button">
            <button type="submit">Xác nhận thay đổi</button>
          </div>
        </form>
        { props.loadingUpdateUsername && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
      </div>
  )
}
const SettingGeneralName = (props) => {
  return (
    <>
      <Descriptions className="general-information">
        <Descriptions.Item className="general-item">Tên</Descriptions.Item>
        <Descriptions.Item >
        <p>{props.ustk.user_first_name + ' ' + props.ustk.user_last_name}</p>
        </Descriptions.Item>
        <Descriptions.Item className="setting-general-button">
          <button type="submit" type="info">Chỉnh sửa</button>
        </Descriptions.Item>
        <SettingGeneralName />
      </Descriptions>
    </>
  );
}

const SettingGeneralNameUser = (props) => {
  return (
    <Descriptions className="general-information">
      <Descriptions.Item className="general-item">Tên người dùng</Descriptions.Item>
      <Descriptions.Item>
        https://www.mohi.vn/profile/{props.ustk.user_username}
          </Descriptions.Item>
      <Descriptions.Item className="setting-general-button">
        <button type="submit">Chỉnh sửa</button>
      </Descriptions.Item>
    </Descriptions>
  );
}

const Password = () => {
  const { register, handleSubmit, watch, errors, setError, setValue } = useForm();
  const dispatch = useDispatch();
  const [errorConfirmPass, setErrorConfirmPass] = useState('Vui lòng nhập lại mật khẩu');
  const [errorPass, setErrorPass] = useState('Vui lòng nhập mật khẩu cũ');
  const [loadingPass, setLoadingPass] = useState(false);

  const openPopupChangePasswordFunc = () => {
    dispatch(toggleStatusPresentialModal('modal_forgot_pass'));
    // dispatch(toggleStatusPresentialModal('modal_forgot_pass_verification'));
  }

  const onSubmit = async (data) => {
    if(data.user_new_password !== data.user_confirm_password){
      setError("user_confirm_password", {
            type: "manual",
            message: "Nhập lại mật khẩu không đúng"
          });
      setErrorConfirmPass('Nhập lại mật khẩu không đúng')
    }else {
      setLoadingPass(true)
      setErrorConfirmPass('')
      // call api change password
      await axios.post("https://www.api.mohi.vn/api/auth/setting-password", {old_password: data.user_password, new_password: data.user_new_password})
      .then((res) => {
        setValue('user_password', '')
        setValue('user_new_password', '')
        setValue('user_confirm_password', '')
        setLoadingPass(false)
        message.success('Đổi mật khẩu thành công');
      })
      .catch((e) => {
        setLoadingPass(false)
        if(e.response.status === 402){
          setError("user_password", {
                type: "manual",
                message: "Mật khẩu cũ không đúng"
              });
          setErrorPass('Mật khẩu cũ không đúng')
        }else {
          message.error('Đã xảy ra lỗi không mong muốn vui lòng thử lại');
        }
      })
    }
  }

  return (
    <>
      <div className="general-container">
        <div className="general-title">
          <h5> Đổi mật khẩu</h5>
        </div>

        <div className="setting-password">
          <h6>	Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác</h6>
          <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="setting-form-edit-password">
              <label htmlFor="">Mật khẩu hiện tại</label>
              <div className="modal-add-email-main-input">
              <input type="password" ref={register({required:true})} name="user_password" style={errors.user_password ? {border: '1px solid red'} : null}/>
                {errors.user_password && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >{errorPass}</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
              </div>
            </div>
            <div className="setting-form-edit-password">
              <label htmlFor="">Mật khẩu mới</label>
                <div className="modal-add-email-main-input">
              <input type="password" ref={register({required:true})} name="user_new_password" style={errors.user_new_password ? {border: '1px solid red'} : null}/>
              {errors.user_new_password && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >Vui lòng nhập mật khẩu mới</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
            </div>
            </div>
            <div className="setting-form-edit-password">
              <label htmlFor="">Nhập lại mật khẩu mới</label>
                <div className="modal-add-email-main-input">
              <input type="password" ref={register({required:true})} name="user_confirm_password" style={errors.user_confirm_password ? {border: '1px solid red'} : null}/>
              {errors.user_confirm_password && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >{errorConfirmPass}</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
            </div>
          </div>
            <div className="setting-form-edit-name-button">
              <button type="submit">Xác nhận thay đổi</button>
            </div>
          </form>
          { loadingPass && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
        </div>
      </div>
    </>
  )
}

function Setting() {
  const path = useLocation().pathname.split('/');
  const isActive = path[2];
  const [ustk, setUstk] =  useState(JSON.parse(localStorage.getItem('ustk')).info);
  const [loadingUpdateUsername, setLoadingUpdateUsername] =  useState(false);
  const [loadingUpdateName, setLoadingUpdateName] =  useState(false);
  const [erruserName, setErruserName] =  useState();
  const dispatch = useDispatch();

  useEffect(() => {
      fetchInfoProfile()
  }, [])

  const fetchInfoProfile = async () => {
    dispatch(requestInfoProfile())

    await axios.get('https://www.api.mohi.vn/api/auth/get-info-profile/'+ ustk.user_username)
    .then((res) => {
      dispatch(responseInfoProfile(res.data))
    })
    .catch((e) => {
      dispatch(responseInfoProfile(''))
    })
  }

  const onSubmitUpdateUserName = (data) => {
      dispatch(requestUpdateProfile())
      setLoadingUpdateUsername(true)
      editInfo({type: 'user_username', value: data.user_username})
      .then((res) => {
        let newUstk = JSON.parse(localStorage.getItem('ustk'));
        newUstk.info.user_username = data.user_username;
        localStorage.setItem('ustk', JSON.stringify(newUstk));
        setUstk(JSON.parse(localStorage.getItem('ustk')).info)
        dispatch(responseUpdateProfile({type: 'user_username', value: data.user_username}))
        setLoadingUpdateUsername(false)
        setErruserName()
        message.success('Bạn đã đổi tên người dùng thành công');
      })
      .catch((e) => {
        if(e.response.status === 400){
          setLoadingUpdateUsername(false)
          setErruserName(Math.random())
        }
      })
  }

  const onSubmitUpdateName = async (data) => {
    dispatch(requestUpdateProfile())
    setLoadingUpdateName(true)

    await axios.post('https://www.api.mohi.vn/api/auth/update-info-profile', {user_first_name: data.user_first_name, user_last_name: data.user_last_name})
    .then(res => {
      let newUstk = JSON.parse(localStorage.getItem('ustk'));
      newUstk.info.user_first_name = data.user_first_name;
      newUstk.info.user_last_name = data.user_last_name;
      localStorage.setItem('ustk', JSON.stringify(newUstk));
      setUstk(JSON.parse(localStorage.getItem('ustk')).info)
      dispatch(responseUpdateProfile({type: 'user_first_name', value: data.user_last_name}))
      dispatch(responseUpdateProfile({type: 'user_last_name', value: data.user_last_name}))
      setLoadingUpdateName(false)
      message.success('Bạn đã đổi tên thành công');
    })

  }
  return (
      <div className="setting-container">
        <div className="setting-content">
          <div className="setting-content-left">
            <ul>
              <Link to="/setting/general">
                <li className={isActive === 'general' || !isActive ? 'active' : ''}>
                  <span><FiSettings /> Cài đặt chung</span>
                </li>
              </Link>
              <Link to="/setting/password">
                <li className={isActive === 'password' ? 'active' : ''}>
                  <span><MdSecurity /> Đổi mật khẩu</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="setting-content-right">
            <Switch>
              <Route path="/setting/general">
                <General ustk={ustk} erruserName={erruserName} onSubmitUpdateName={onSubmitUpdateName} onSubmitUpdateUserName={onSubmitUpdateUserName} loadingUpdateUsername={loadingUpdateUsername} loadingUpdateName={loadingUpdateName}/>
              </Route>
              <Route path="/setting/password">
                <Password ustk={ustk} />
              </Route>
              <Route component={General}>
                <General ustk={ustk} erruserName={erruserName} onSubmitUpdateName={onSubmitUpdateName} onSubmitUpdateUserName={onSubmitUpdateUserName} loadingUpdateUsername={loadingUpdateUsername} loadingUpdateName={loadingUpdateName}/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
  )
}
export default Setting;
