import React from 'react';
import {Link} from 'react-router-dom';
import {List} from 'antd';
import {skeletonMyGroupInSider} from './../Skeleton/index.jsx';

function YourPageInSider(props){

  if(props.loading){
    return(
      <React.Fragment>
        <div className="box-your-pages-title">Nhóm của bạn</div>
          {skeletonMyGroupInSider}
      </React.Fragment>
    )
  }
  return(
    <React.Fragment>
      <div className="box-your-groups-title">Nhóm của bạn</div>
      {props.groups.length ? <>
      {props.groups.map((group, index) =>{
        return(
        <List.Item key={index}>
          <Link to={"groups/" + group.group_FakeId}>
              <div className="box-your-pages-item">
                <div className="box-your-groups-item-avatar">
                  <img src={group.group_Avatar} alt={group.group_Name} />
                </div>
                <div className="box-your-pages-item-info">
                  <span>{group.group_Name}</span>
                </div>
              </div>
          </Link>
        </List.Item>
      )
    })} <Link to="/groups">Xem thêm</Link></> : <div>Bạn chưa tạo nhóm</div>}
    </React.Fragment>
  )
}

export default YourPageInSider;
