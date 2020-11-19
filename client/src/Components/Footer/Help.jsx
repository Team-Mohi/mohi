import React from 'react';
import './Help.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toggleStatusPresentialModal} from './../../Actions/index.jsx';
import { PUBLIC_URL} from './../../Constants/public.jsx';
function Help() {

  const dispatch = useDispatch();

  const QuestionFunc1 = () => {
    dispatch(toggleStatusPresentialModal('modal_help_question1'));
  }
  const QuestionFunc2 = () => {
    dispatch(toggleStatusPresentialModal('modal_help_question2'));
  }
  const QuestionFunc3 = () => {
    dispatch(toggleStatusPresentialModal('modal_help_question3'));
  }
  const QuestionFunc4 = () => {
    dispatch(toggleStatusPresentialModal('modal_help_question4'));
  }
  return (<React.Fragment>
    <div className="wrapper">
      <div className="help-container">
        <div className="help-main">
          <div className="help-question">
            <h5>Câu hỏi bạn có thể có ?</h5>
            <ul>
              <li onClick={QuestionFunc1}>
                <Link>Tôi có thể tìm thấy phần cài đặt Mohi ở đâu ?</Link>
              </li>
              <li onClick={QuestionFunc2}>
                <Link>Làm cách nào để thay đổi hoặc đặt lại mật khẩu Mohi ?</Link>
              </li>
              <li onClick={QuestionFunc3}>
                <Link>Làm cách nào để chọn nội dung tôi sẽ nhận thông báo trên Mohi ?</Link>
              </li>
              <li onClick={QuestionFunc4}>
                <Link>Những tên nào được chấp nhận trên Mohi</Link>
              </li>
            </ul>
          </div>
          <div className="help-banner">
            <img src={PUBLIC_URL + "help.jpg"} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>)

}

export default Help;
