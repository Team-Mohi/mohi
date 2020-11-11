import React, { useState } from "react";
import './Group.css';
import { Link } from 'react-router-dom';
import { GrGroup } from "react-icons/gr";
import { BsPlus } from "react-icons/bs";
import ButtonJoin from './buttonJoin.jsx';
import { useDispatch} from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';

function Group() {
    const dispatch = useDispatch();

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
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Thiết kế trang web</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">HTLM/CSS/JS từ cơ bản đến nâng cao HTLM/CSS/JS từ cơ bản đến nâng caov HTLM/CSS/JS từ cơ bản đến nâng cao</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Gái xinh á âu</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="group-list">
                            <div className="group-list-title">
                                <h6>Nhóm bạn tham gia</h6>
                            </div>
                            <ul className="group-list-ul">
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
                                <li className="group-list-li">
                                    <div className="group-list-li-avt">
                                        <img src="https://i.pinimg.com/564x/e3/e4/21/e3e421f8437218f35c1167099cb0940f.jpg" alt="" />
                                    </div>
                                    <Link to="">Nhóm gái đẹp</Link>
                                </li>
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