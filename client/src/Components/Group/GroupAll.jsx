import React, { useState } from "react";
import './GroupAll.css';
import { Link } from 'react-router-dom';
import { GrGroup } from "react-icons/gr";
import { BsPlus } from "react-icons/bs";
import ButtonJoin from './buttonJoin.jsx';
import {useSelector, useDispatch} from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import {skeletonMyGroupInSider} from './../Skeleton/index.jsx';

function Group(props) {
    const dispatch = useDispatch();
    const groups = useSelector(state => state.myGroups);

    const  CreataGroupFunc = () =>{
        dispatch(toggleStatusPresentialModal('modal_create_group'));
    }

    return (
        <div className="wrapper">
            <div className="group-container">
                <div className="group-main-left">
                    <div style={{ position: "fixed", width: '275px' }}>
                        <div className="group-main-left-title">
                            <GrGroup />
                            <h5>Nhóm</h5>
                        </div>
                        <div className="group-main-left-title-button">
                            <button onClick={CreataGroupFunc}><BsPlus />Tạo nhóm</button>
                        </div>
                        <div className="group-list">
                            <div className="group-list-title">
                                <h6>Nhóm bạn quản lý</h6>
                            </div>
                            <ul className="group-list-ul">
                              {props.loading ? skeletonMyGroupInSider :
                                <>
                                {groups.filter(groupfill => groupfill.pivot.group_users_Role === "adminstrators" || groupfill.pivot.group_users_Role === "censor").map((group, index) => {
                                  return(
                                    <Link to={"groups/" + group.group_FakeId} key={index}>
                                      <li className="group-list-li">
                                          <div className="group-list-li-avt">
                                            {group.group_Avatar && <img src={group.group_Avatar} alt={group.group_Name} />}
                                          </div>
                                          <span>{group.group_Name}</span>
                                      </li>
                                    </Link>
                                  )
                                })}
                                </>
                              }
                            </ul>
                        </div>
                        <div className="group-list">
                            <div className="group-list-title">
                                <h6>Nhóm bạn tham gia</h6>
                            </div>
                            <ul className="group-list-ul">
                              {props.loading ? skeletonMyGroupInSider :
                                <>
                                {groups.filter(groupfill => groupfill.pivot.group_users_Role === "member").map((group,index) => {
                                  return(
                                    <Link to={"groups/" + group.group_FakeId} key={index}>
                                    <li className="group-list-li" >
                                        <div className="group-list-li-avt">
                                            {group.group_Avatar && <img src={group.group_Avatar} alt={group.group_Name} />}
                                        </div>
                                        <span>{group.group_Name}</span>
                                    </li>
                                  </Link>
                                  )
                                })}
                                </>
                              }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="group-main-right">
                    <div className="group-main-right-title">
                        <h5>Gợi ý cho bạn</h5>
                        <p>Nhóm mà bạn có thể quan tâm.</p>
                    </div>
                    <div className="group-main-right-content">
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K thành viên </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonJoin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Group;
