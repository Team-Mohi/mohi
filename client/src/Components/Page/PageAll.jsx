import React, { useState } from "react";
import './PageAll.css';
import { Link } from 'react-router-dom';
import { AiFillFlag } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import ButtonLikePage from './buttonLikePage.jsx';
import { useDispatch} from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import {skeletonMyPagesInSider} from './../Skeleton/index.jsx';

function PageAll(props) {
    const dispatch = useDispatch();
    const  CreataPageFunc = () =>{
        dispatch(toggleStatusPresentialModal('modal_create_page'));
    }

    return (
        <div className="wrapper">
            <div className="group-container">
                <div className="group-main-left">
                    <div style={{ position: "fixed", width: '275px' }}>
                        <div className="group-main-left-title">
                            <AiFillFlag />
                            <h5>Trang</h5>
                        </div>
                        <div className="group-main-left-title-button">
                            <button onClick={CreataPageFunc}><BsPlus />Tạo Trang</button>
                        </div>
                        <div className="group-list">
                            <div className="group-list-title">
                                <h6>Trang bạn quản lý</h6>
                            </div>
                            <ul className="group-list-ul">
                              {props.loading ? skeletonMyPagesInSider :
                                <>
                                {props.pages.map((page, index) => {
                                  return(
                                    <Link to={"pages/" + page.page_FakeId} key={index}>
                                      <li className="group-list-li" >
                                          <div className="group-list-li-avt">
                                            {page.page_Avatar && <img src={page.page_Avatar} alt={page.page_Name} />}
                                          </div>
                                          <span>{page.page_Name}</span>
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
                        <p>Trang mà bạn có thể quan tâm.</p>
                    </div>
                    <div className="group-main-right-content">
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                        <div className="group-content-box">
                            <div className="group-content-box-img">
                                <img src="https://i.pinimg.com/564x/c3/39/bf/c339bf6586afb4576f07d5e573387d49.jpg" alt="" />
                            </div>
                            <div className="group-content-box-title">
                                <Link to="">Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint Thủ thuật Word, Excel, PowerPoint</Link>
                                <span>59K người thích trang </span>
                            </div>

                            <div className="group-content-box-button">
                                <ButtonLikePage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageAll;
