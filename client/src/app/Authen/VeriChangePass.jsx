import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {RiErrorWarningLine} from "react-icons/ri";
import {Tooltip} from 'antd';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../../Actions/index.jsx';
import { useCookies } from "react-cookie";

function VeriChangePass(props){
  const history = useHistory();
  if(!history.location.state){
    history.push('/')
  }
  const [cookies, setCookie] = useCookies(["vrct"]);
  const dispatch = useDispatch();
  const avatar = history.location.state ? history.location.state.user_avatar : '';
  const name = history.location.state ? history.location.state.user_name : '';
  const code = history.location.state ? history.location.state.code : '';
  const email = history.location.state ? history.location.state.user_email : '';
  const idUser = history.location.state ? history.location.state.id_user : '';
  const {register, handleSubmit, errors, setError} = useForm();
  const [errorEmailAndPhone, setErrorEmailAndPhone] = useState('Vui lòng nhập mã gồm 6 số');
  const now = new Date().getTime();

  useEffect(() => {
    if(code){
      const timeExpiredCode = now + 300000;
      setCookie("vrct", timeExpiredCode, {
        path: "/"
      })
    }
  }, [code]);

  const onSubmit = (data) => {
    //load Spin
    dispatch(toggleStatusSpin())

    if(code === Number(data.code_change_pass)){
      if(cookies.vrct - new Date().getTime() > 0){
        cookies.remove("vrct");
        history.push('/change-password',{idUser: idUser, user_email: email})
      }else {
        setError("code_change_pass", {
              type: "manual",
              message: "Mã xác nhận đã hết hạn"
            });
        setErrorEmailAndPhone('Mã xác nhận đã hết hạn')
      }
    }else {
      setError("code_change_pass", {
            type: "manual",
            message: "Mã xác nhận không khớp với mã chúng tôi đã gửi"
          });
      setErrorEmailAndPhone('Mã xác nhận không khớp với mã chúng tôi đã gửi')
    }

    //close Spin
    dispatch(toggleStatusSpin())
  }

  const validateInputCode = (value) => {
    if(!value) return false
    if(!Number(value)) return false

    return true
  }

  return(
    <React.Fragment>
      <div className="veri-code-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 style={{marginBottom: '20px'}}>Xác nhận đổi mật khẩu</h2>
          <div className="preview-info-user">
            <div className="preview-info-user-avatar">
              <img src={avatar} alt={name} />
            </div>
            <div className="preview-info-user-name">{name}</div>
          </div>
          <div className="veri-code-message">
            <span style={{color: 'black'}}>Chúng tôi đã gửi mã xác nhận đến </span>{email}
            <span style={{color: 'black'}}>. Mã này sẽ tồn tại trong vòng 5 phút. Vui lòng kiểm tra và hoàn tất quá trình đổi mật khẩu.</span>
          </div>
          <div className="submit-error-veri-code"></div>
          <div className="form-veri-code-group">
            <input
              type="text"
              name="code_change_pass"
              placeholder="Nhập mã gồm 6 số"
              ref={register({
                  validate: value => validateInputCode(value)
                })}
              style={errors.code_change_pass ? {border: '1px solid red'} : null}
            />
          {errors.code_change_pass && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >{errorEmailAndPhone}</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
          </div>
          <div className="form-veri-code-group">
            <button type="submit">Xác nhận</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default VeriChangePass;
