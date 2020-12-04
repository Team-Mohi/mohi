import React from 'react';
import {Link} from 'react-router-dom';
import {List} from 'antd';
import {skeletonMyPagesInSider} from './../Skeleton/index.jsx';

function YourGroupInSider(props){
  const totalSkeleton = [1];

  if(props.loading){
    return(
      <React.Fragment>
        <div className="box-your-pages-title">Trang của bạn</div>
          {skeletonMyPagesInSider}
      </React.Fragment>
    )
  }

  return(
    <React.Fragment>
      <div className="box-your-pages-title">Trang của bạn</div>
      {props.pages.length ? <>
      {props.pages.map((page, index) =>{
        return(
          <List.Item key={index}>
            <Link to={"pages/" + page.page_FakeId}>
                <div className="box-your-pages-item">
                  <div className="box-your-pages-item-avatar">
                    <img src={page.page_Avatar} alt={page.page_Name} />
                  </div>
                  <div className="box-your-pages-item-info">
                    <span>{page.page_Name}</span>
                  </div>
                </div>
            </Link>
          </List.Item>
        )
      })} <Link to="/pages">Xem thêm</Link></> : <div>Bạn chưa tạo trang</div>}
    </React.Fragment>
  )
}

export default YourGroupInSider;
