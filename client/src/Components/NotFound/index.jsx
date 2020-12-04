import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(){
  return(
    <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="main404">
              <p>
                Rất tiếc, Nội dung này đã bị gỡ hoặc không tồn tại
              </p>
              <h1>404</h1>
              <hr/>
              <button type="button"><Link to="/">Trở lại trang chủ</Link></button>
              </div>
              <div className="container">
                <hr/>
                <footer>
                  <ul >
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Chính sách và điều khoản</a></li>
                    <li><a href="#">Ngôn ngữ</a></li>
                    <li><a href="#">Trợ giúp</a></li>
                  </ul>
                  <div className="mohi">
                    Mohi &copy; 2020
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default NotFound;
