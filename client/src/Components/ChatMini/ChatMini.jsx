import React, {useState, forwardRef, useImperativeHandle} from 'react';
import './ChatMini.css';
import {Link} from 'react-router-dom';
import {BsThreeDotsVertical, BsFillCameraVideoFill, BsImage} from 'react-icons/bs';
import {GiPhone} from 'react-icons/gi';
import {FaSmile} from 'react-icons/fa';
import {AiOutlineClose, AiTwotoneLike, AiFillFile, AiFillCamera} from 'react-icons/ai';

const ChatMini = forwardRef((props, ref) => {

  const [triggerChatMini, setTriggerChatMini] = useState(false)

  useImperativeHandle(ref, () => ({
    showChatMiniFunc(){
      setTriggerChatMini(true)
    }
  }));

  function triggerChatMiniFunc(){
    if(triggerChatMini) {
      setTriggerChatMini(false)
      return
    }
    setTriggerChatMini(true)
  }

  function closeChatMiniFunc(iduser){
    props.closeChatMini(iduser)
  }

  return(
    <div className="chatmini-container">
      <div className="chatmini-title" onClick={() => triggerChatMiniFunc()}>
        <div className="chatmini-title-avatar">
          <img src={`https://3.bp.blogspot.com/-Y7IfT_OllGQ/W4_NSyUHNAI/AAAAAAAAxQQ/odew4t8fIWYBcTvWhxgDuKYNVL8YowaMACLcBGAs/s1600/anh-girl-xinh-fa-2.jpg`} alt=""/>
        </div>
        <Link to=""><span>test{props.iduser}</span><div className="is-online"></div></Link>
        <div className="chatmini-title-option">
          <GiPhone />
          <BsFillCameraVideoFill />
          <BsThreeDotsVertical />
          <AiOutlineClose onClick={() => closeChatMiniFunc(props.iduser)}/>
        </div>
      </div>
        <div className={"chatmini-body user-" + props.iduser}  style={{display: triggerChatMini ? 'block' : 'none'}}>
          <div className="body-mess">
            <div className="chatmini-messenger-my-chat">
              <div className="chatmini-messenger-my-chat-content">
                <p>Để lên án nhằm giảm bớt tình trạng trên, chúng tôi thấy rằng cần cụ thể hóa những quy định trong Luật bằng xử phạt hành chính. Vì vậy, trong nghị định của Chính phủ quy định xử phạt hành chính trong lĩnh vực y tế đã đề ra các mức phạt tương ứng với từng hành vi.</p>
                <div className="chatmini-messenger-my-chat-content-status">
                  <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                </div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="chatmini-messenger-user-chat">
              <div className="chatmini-messenger-user-chat-content">
                <div className="chatmini-messenger-user-chat-content-avatar">
                  <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                </div>
              <p>Tương tự, những hành vi ép buộc, xúi giục, kích động, lôi kéo người khác uống rượu bia cũng có thể phân tích được dựa vào tính chất. Chẳng hạn ép buộc là bắt người khác làm trái với ý muốn của họ. Họ không muốn uống, đã từ chối nhưng vẫn bị ép uống.</p>
              </div>
            </div>
          </div>
          <div className="chatmini-messenger-input">
            <div className="chatmini-messenger-input-text">
              <input type="text" placeholder="Nhập tin nhắn..."/>
            </div>
            <div className="chatmini-messenger-input-react">
              <AiFillCamera />
              <AiFillFile />
              <FaSmile />
              <BsImage />
              <AiTwotoneLike />
            </div>
          </div>
        </div>
    </div>
  )
})

export default ChatMini;
