import React, {useState} from 'react';
import './ChatSider.css';
import {AiTwotoneSetting} from 'react-icons/ai';
import { useCookies } from "react-cookie";

function ChatSider(props){
  const [cookie, setCookie, removeCookie] = useCookies(["showChatSider"]);
  const [showChatSider,setShowChatSider] = useState(false);

  function showChatSiderFunc(){
    if(showChatSider || cookie.showChatSider) {
      setShowChatSider(false)
      removeCookie("showChatSider")
    }else{
      setShowChatSider(true)
      setCookie("showChatSider", true, {path: "/"})
    }
  }

  function showChatMini(iduser){
    props.increaseChatMini(iduser)
  }

  return(
    <div>
      <div className="chat-sider-container">
        <div className="chat-sider-head" onClick={() => showChatSiderFunc()}>
          <span>Trò chuyện</span>
          <span><AiTwotoneSetting /></span>
        </div>
        {showChatSider || cookie.showChatSider ?
        <div className="chat-sider-body">
          <div className="chat-sider-body-someone">
            <span className="chat-sider-body-title">Bạn bè</span>
            <ul>
                <li onClick={() => showChatMini(1)}>
                  <div className="chat-sider-avatar">
                    <img src={`https://4.bp.blogspot.com/-bADFuWfJJcA/VS4YIco8o_I/AAAAAAAAEpc/fZdJ9VhriTc/s1600/hinh%2Banh%2Bhot%2Bgirl%2Bdep%2Bnhat%2Bfacebook%2B2015%2B(21).jpg`} alt="" />
                  </div>
                  <span>Nguyễn Tô Ngọc Thy1</span>
                  <div className="is-online"></div>
                </li>
                <li onClick={() => showChatMini(2)}>
                  <div className="chat-sider-avatar">
                    <img src={`https://4.bp.blogspot.com/-bADFuWfJJcA/VS4YIco8o_I/AAAAAAAAEpc/fZdJ9VhriTc/s1600/hinh%2Banh%2Bhot%2Bgirl%2Bdep%2Bnhat%2Bfacebook%2B2015%2B(21).jpg`} alt="" />
                  </div>
                  <span>Nguyễn Tô Ngọc Thy2</span>
                  <div className="is-online"></div>
                </li>
                <li onClick={() => showChatMini(4)}>
                  <div className="chat-sider-avatar">
                    <img src={`https://4.bp.blogspot.com/-bADFuWfJJcA/VS4YIco8o_I/AAAAAAAAEpc/fZdJ9VhriTc/s1600/hinh%2Banh%2Bhot%2Bgirl%2Bdep%2Bnhat%2Bfacebook%2B2015%2B(21).jpg`} alt="" />
                  </div>
                  <span>Nguyễn Tô Ngọc Thy4</span>
                  <div className="is-online"></div>
                </li>
                <li onClick={() => showChatMini(5)}>
                  <div className="chat-sider-avatar">
                    <img src={`https://4.bp.blogspot.com/-bADFuWfJJcA/VS4YIco8o_I/AAAAAAAAEpc/fZdJ9VhriTc/s1600/hinh%2Banh%2Bhot%2Bgirl%2Bdep%2Bnhat%2Bfacebook%2B2015%2B(21).jpg`} alt="" />
                  </div>
                  <span>Nguyễn Tô Ngọc Thy5</span>
                  <div className="is-online"></div>
                </li>
            </ul>
          </div>
          <div className="chat-sider-body-someroom">
            <span className="chat-sider-body-title">Nhóm</span>
            <ul>
                <li onClick={() => showChatMini(3)}>
                  <div className="chat-sider-avatar">
                    <img src={`https://4.bp.blogspot.com/-bADFuWfJJcA/VS4YIco8o_I/AAAAAAAAEpc/fZdJ9VhriTc/s1600/hinh%2Banh%2Bhot%2Bgirl%2Bdep%2Bnhat%2Bfacebook%2B2015%2B(21).jpg`} alt="" />
                  </div>
                  <span>ReactJS Việt Nam3</span>
                  <div className="is-online"></div>
                </li>
            </ul>
          </div>
        </div>
        : null}
      </div>
    </div>
  )
}

export default ChatSider;
