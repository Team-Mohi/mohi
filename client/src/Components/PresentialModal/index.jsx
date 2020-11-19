import React, {useEffect} from 'react';
import './index.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {toggleStatusPresentialModal} from './../../Actions/index.jsx';
import ModalCreateGroup from './ModalCreateGroup.jsx';
import ModalCreatePage from './ModalCreatePage.jsx';
import ModalCountLikePage from './ModalCountLikePage.jsx';
import { HelpQuestion1, HelpQuestion2, HelpQuestion3, HelpQuestion4 } from './ModalHelpQuestion.jsx';

export const PresentialModal = ({ presentialModal }) => {
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        dispatch(toggleStatusPresentialModal())
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  const dispatch = useDispatch();
  const statusPresentialModal = useSelector(state => state.presentialModal);

  const CurrentModal = () => {
    switch(statusPresentialModal.action) {
      case 'modal_create_group':
        return <ModalCreateGroup />;
        break;
      case 'modal_create_page':
        return <ModalCreatePage />;
        break;
      case 'modal_help_question1':
          return <HelpQuestion1 />;
          break;
      case 'modal_help_question2':
          return <HelpQuestion2 />;
          break;
      case 'modal_help_question3':
          return <HelpQuestion3 />;
          break;
      case 'modal_help_question4':
          return <HelpQuestion4 />;
          break;
      case 'modal_count_like_page':
          return <ModalCountLikePage />;
          break;
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
