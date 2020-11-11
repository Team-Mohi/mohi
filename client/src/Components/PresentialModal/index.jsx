import React from 'react';
import './index.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {toggleStatusPresentialModal} from './../../Actions/index.jsx';
import ModalCreateGroup from './ModalCreateGroup.jsx';

export const PresentialModal = ({ presentialModal }) => {

  const dispatch = useDispatch();
  const statusPresentialModal = useSelector(state => state.presentialModal);

  const CurrentModal = () => {
    switch(statusPresentialModal.action) {
      case 'modal_create_group':
        return <ModalCreateGroup />;
      default:
        return 'foo';
    }
  }
  
  return(
    <div className="modal-public">
      <div className="presential-modal" onClick={() => dispatch(toggleStatusPresentialModal())}><AiOutlineClose  className="close-presential-modal"/></div>
      <CurrentModal />
    </div>
  )
}
