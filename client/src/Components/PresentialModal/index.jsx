import React from 'react';
import './index.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {toggleStatusPresentialModal} from './../../Actions/index.jsx';

export const PresentialModal = ({ presentialModal }) => {

  const dispatch = useDispatch();

  return(
    <div className="presential-modal" onClick={() => dispatch(toggleStatusPresentialModal())}><AiOutlineClose  className="close-presential-modal"/></div>
  )
}
