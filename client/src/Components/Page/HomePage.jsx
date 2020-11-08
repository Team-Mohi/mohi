import React, {useState, useMemo} from 'react';
import './HomePage.css';
import EditorEmoji from './EditorEmoji.jsx';
import PopupEditPage from './PopupEditPage.jsx';
import EditPage from './EditPage.jsx';
import EditorMention from './EditorMention.jsx';
import Post from './../Post/Post.jsx';
import {Select, Switch, Button, Tooltip, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import { FaUserTag, FaImage, FaUserFriends, FaLock, FaMapMarkerAlt, FaListAlt} from "react-icons/fa";
import {MdPublic} from "react-icons/md";
import {AiFillInfoCircle, AiOutlinePlus, AiFillLike, AiFillFlag} from "react-icons/ai";
import { FiBarChart } from "react-icons/fi";
import { GiPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import {  useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './../../Actions/index.jsx';

function HomePage(props, { posts }){
  const dispatch = useDispatch();
  const listPosts = useSelector(state => state.posts);
  const {Option} = Select;
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [valueEditor, setValueEditor] = useState();
  const [isShowInputTag, setIsShowInputTag] = useState(false);
  const [listMention, setListMention] = useState([]);
  const [firstMention, setFirstMention] = useState();
  const [closeEditLocationPage, setCloseEditLocationPage] = useState(true);
  const [editPage, setEditPage] = useState({
    status: false,
    action: ''
  });
  const listGalleryDemo = [
    'https://1.bp.blogspot.com/-HfDzvytpbDI/U0z-eqAMV8I/AAAAAAAABtI/YBOXzwY4d6I/s1600/anh-girl-xinh__Hinhnendl.com+(4).jpg',
    'https://2.bp.blogspot.com/-AX9DuH5Sjos/UeAs8QFXCGI/AAAAAAAAE5o/LbVCOeVHBv8/s1600/hinh-anh-gai-xinh-hd-taihinhnendep.com-4.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.U6pbrevWbaMinSykSxlyvwHaHh&pid=Api&P=0&w=300&h=300',
    'https://keomoi.com/wp-content/uploads/2019/05/gai-xinh-mac-bikini-do-hinh-4.jpg',
    'https://tse1.mm.bing.net/th?id=OIP.s-aYa7PN_gfZu2WKbBQ_JwHaNK&pid=Api&P=0&w=300&h=300'
  ]
// func show modal create post
  function showModalCreatePostFunc(){
    props.showModalCreatePostFunc()
  }

// func create post when submit
  function submitCreatePost(){
    setIsLoadingSubmit(true)
  }

  const changeStatusButtonSubmit = (value) => {
    setValueEditor(value)
  }

  const showEditPage = (action) => {
    setEditPage({
      status: true,
      action: action
    })
  }

  const closeEditPage = () => {
    setEditPage({
      status: false,
      action: ''
    })
  }

  function showInputTag(){
    setIsShowInputTag(true)
  }

  function showMentionList(mention){
    if(!firstMention) setFirstMention(mention)
    if(firstMention) setListMention([...listMention, mention])
  }

  const closeEditLocationPageFunc = () => {
    setCloseEditLocationPage(true)
  }

  const showEditLocationPage = () => {
    setCloseEditLocationPage(false)
  }

  const moreMention = () => {
    return(
      <ul className="create-post-more-mention">
        {listMention.map((mention, index) => {
          return(
            <li key={index}><Link to={mention.link}>{mention.name}</Link></li>
          )
        })}
      </ul>
    )
  }

  const postComponent = useMemo(() =>
          listPosts.map((post, index) => <Post key={index} post={post} showModalCreatePostFunc={showModalCreatePostFunc}/>), [listPosts]
        )
  return(
    <div>
    <div className="page-home-container">
      <div className="page-left">
        <div className="create-post" onClick={() => showModalCreatePostFunc()} style={props.showModalCreatePost ? {zIndex: '10'} : null}>
          <div className="create-post-input">
            <div className="create-post-avatar">
              <img src="http://xemanhdep.com/wp-content/uploads/2016/04/hinh-anh-girl-xinh-dep-nhat-2016-10.jpg" alt="" />
            </div>
            <div className="create-post-editor">
              <EditorEmoji showModalCreatePost={props.showModalCreatePost} changeStatusButtonSubmit={changeStatusButtonSubmit}/>
            </div>
          </div>
          {isShowInputTag ?
            <>
              <div className="create-post-input-tag">
                <EditorMention showMentionList={showMentionList}/>
              </div>
              {firstMention ?
              <div className="creat-post-tag-list">
                <span>Cùng với</span>
                <span>
                  <Link to={firstMention.link}> {firstMention.name} </Link> {/*mention đầu tiên*/}
                  {listMention.length <= 2 ?
                    <>
                      {listMention.map((mention, index) => {
                        return(
                          <span  key={index}>
                            và
                            <Link to={mention.link}> {mention.name} </Link> {/*mention kế trừ mention đầu*/}
                          </span>
                        )
                      })}
                    </>
                  :
                    <span className="create-post-mention">
                      <Tooltip title={moreMention} color={`black`}>
                          và {listMention.length} người khác
                      </Tooltip>
                    </span>
                  }
                </span>
              </div>
              : null}
            </>
          :null}
          <div className="create-post-option">
            <div className="create-post-choose-image">
              <label htmlFor="choose-image">
                <FaImage style={{ fontSize: "20px", marginRight: '7px' }} />
                Ảnh/video
              </label>
              <input type="file" id="choose-image" />
            </div>
            <div className="create-post-tag" onClick={() => showInputTag()}>
              <FaUserTag style={{ fontSize: "20px", marginRight: '7px' }} />
              Gắn thẻ
            </div>
          </div>
          {props.showModalCreatePost ?
            <div>
              <div className="create-post-choose-place-post">
                <div className="create-post-newfeed-place">
                  <div>
                      <Switch></Switch>
                      <span className="place-post">Tin của bạn</span>
                  </div>
                  <Select className="select-privacy" defaultValue="public" style={{ width: 140 }} loading>
                      <Option value="public"><MdPublic /> Công khai</Option>
                      <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                      <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                  </Select>
                </div>
                <div className="create-post-story-place">
                  <div>
                      <Switch defaultChecked></Switch>
                      <span className="place-post">Bảng tin</span>
                  </div>
                  <Select className="select-privacy" defaultValue="public" style={{ width: 140 }} loading>
                      <Option value="public"><MdPublic /> Công khai</Option>
                      <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                      <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                  </Select>
                </div>
              </div>
              <div className="create-post-submit">
                {isLoadingSubmit ?
                  <Button loading>Đăng</Button>
                :
                <>
                {valueEditor ?

                  <Button onClick={() => submitCreatePost()} >Đăng</Button>
                  :
                  <Button disabled>Đăng</Button>
                }
                </>
              }
              </div>
            </div>
          : null}
        </div>
        {listPosts.length > 0 ?
          postComponent
        :
        <div className="no-post">
          <div className="arrow-no-post" onClick={props.showModalCreatePostFunc}>
            <AiOutlinePlus />
          </div>
          <p>Tạo bài viết mới</p>
        </div>
        }
        <div className="page-create-at page-create-at-time-line">
          <p>Trang được tạo vào</p>
          <p>Ngày tháng năm</p>
        </div>
      </div>
      <div className="page-right">
      <div className={props.sidebarFixed ? "page-right-fixed" : null}>
        <div className="page-introduce">
          <h5>Giới thiệu</h5>
          <ul>
            <li>
              <span className="page-introduce-icon">
                <FaMapMarkerAlt />
              </span>
              <span onClick={showEditLocationPage}>
                Nhập vị trí
              </span>
            </li>
            <li>
              <span className="page-introduce-icon">
                <AiFillInfoCircle />
              </span>
              <span onClick={() => showEditPage('description')}>
                Mô tả
              </span>
            </li>
            <li>
              <span className="page-introduce-icon">
                <AiFillLike />
              </span>
              <span className="page-introduce-not-popup">
                133 người thích trang này
              </span>
            </li>
            <li>
              <span className="page-introduce-icon">
                <FiBarChart />
              </span>
              <span className="page-introduce-not-popup">
                133 người theo dõi trang này
              </span>
            </li>
            <li>
              <span className="page-introduce-icon">
                <GiPhone />
              </span>
              <span onClick={() => showEditPage('phone')}>
                Nhập số điện thoại
              </span>
            </li>
            <li>
              <span className="page-introduce-icon">
                <MdEmail />
              </span>
              <span onClick={() => showEditPage('email')}>
                Nhập email
              </span>
            </li>
            <li>
              <span className="page-introduce-icon">
                <FaListAlt />
              </span>
              <span >
                Thể loại page
              </span>
            </li>
          </ul>
          <button onClick={() => showEditPage('full')}>Chỉnh sửa thông tin trang</button>
        </div>
        <div className="page-gallery">
          <h5>Ảnh <span className="page-gallery-more"><Link to="">Xem thêm</Link></span></h5>
          <Row>
          {listGalleryDemo.slice(0, 2).map((image, index) => {
              return(
                  <Col span={12}  key={index}>
                    <div className="page-gallery-img img-top">
                      <img src={image} alt="" />
                    </div>
                  </Col>
              )
          })}
          {listGalleryDemo.slice(2).map((image, index) => {
              return(
                  <Col span={8}  key={index}>
                    <div className="page-gallery-img img-bottom">
                      <img src={image} alt="" />
                    </div>
                  </Col>
              )
          })}
        </Row>
        </div>
        <div className="page-create-at">
          <h5>Name page</h5>
          <p>Mohi sẽ hiển thị thông tin để bạn hiểu rõ hơn về mục đích của Trang. Hãy xem hành động của những người quản lý và đăng nội dung.</p>
          <div className="page-create-time">
            <AiFillFlag />
            <span>Trang được tạo vào....</span>
          </div>
        </div>
        </div>
      </div>
    </div>
    {!closeEditLocationPage && <PopupEditPage closeEditLocationPageFunc={closeEditLocationPageFunc}/>}
    {editPage.status && <EditPage editPage={editPage} closeEditPage={closeEditPage}/>}
    </div>
  )
}

export default HomePage;
