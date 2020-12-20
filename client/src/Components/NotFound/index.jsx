import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './index.css';

function NotFound(){
  const history = useHistory();
  const yearNow = new Date().getFullYear();

  const changeActiveKey = (key) => {
    history.push('/rules-mohi', {key: key});
  }

  return(
    <main className="wrapper" style={{marginTop: '64px'}}>
        <div className="main-section">
            <div className="main-section-data">
              <div className="main404">
              <p>
                Rất tiếc, Nội dung này đã bị gỡ hoặc không tồn tại
              </p>
              <h1>404</h1>
              <hr/>
              <button type="button"><Link to="/">Trở lại trang chủ</Link></button>
              </div>
              <div className="footer-not-found">
                <hr/>
                <footer>
                  <ul>
                    <li>
                      <span onClick={() => changeActiveKey(2)}>Chính sách dữ liệu</span>
                    </li>
                    <li>
                      <span onClick={() => changeActiveKey(1)}>Điều khoản và dịch vụ</span>
                    </li>
                    <li>
                      <span onClick={() => changeActiveKey(3)}>Tiêu chuẩn cộng đồng</span>
                    </li>
                    <li>
                    <span><Link to="/help">Trợ Giúp</Link></span>
                    </li>
                  </ul>
                  <div className="mohi">
                    Mohi &copy; {yearNow}
                  </div>
                </footer>
              </div>
            </div>
        </div>
      </main>
  )
}

export default NotFound;
