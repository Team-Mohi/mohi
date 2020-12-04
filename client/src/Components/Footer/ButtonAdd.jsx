import React, {useState} from 'react';

export const Button = (props) => {
  const [isShow, setIsShow] = useState(false);
  const requestAdd = (id) => {
    setIsShow(true)
    props.addFriend(id)
  }

  return(
    <React.Fragment>
      {isShow ? <button>Đã gửi lời mời</button> : <button onClick={() => requestAdd(props.id)}>Thêm bạn bè</button>}
    </React.Fragment>
  )
}
