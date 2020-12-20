import React, { useEffect } from 'react';
import './index.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import ModalCreateGroup from './ModalCreateGroup.jsx';
import ModalCreatePage from './ModalCreatePage.jsx';
import ModalCountLikePage from './ModalCountLikePage.jsx';
import ModalCountJoinGroup from './ModalCountJoinGroup.jsx';
import ModalRequestJoinGroup from './ModalRequestJoinGroup.jsx';
import { HelpQuestion1, HelpQuestion2, HelpQuestion3, HelpQuestion4 } from './ModalHelpQuestion.jsx';
import ModalAddWorkSpace from './ModalAddWorkSpace.jsx';
import ModalAddStudySpace from './ModalAddStudySpace.jsx';
import ModalAddLiveSpace from './ModalAddLiveSpace.jsx';
import ModalEditWorkSpace from './ModalEditWorkSpace.jsx';
import ModalEditStudySpace from './ModalEditStudySpace.jsx';
import ModalEditStudyHighSchool from './ModalEditStudyHighSchool.jsx';
import ModalAddStudyHighSchool from './ModalAddStudyHighSchool.jsx';
import ModalAddEmail from './ModalAddEmail.jsx';
import ModalEditEmail from './ModalEditEmail.jsx';
import ModalAddPhone from './ModalAddPhone.jsx';
import ModalEditPhone from './ModalEditPhone.jsx';
import ModalAddWebsite from './ModalAddWebsite.jsx';
import ModalEditWebsite from './ModalEditWebsite.jsx';
import ModalAddIntroduce from './ModalAddIntroduce.jsx';
import ModalEditIntroduce from './ModalEditIntroduce.jsx';
import ModalAddNickName from './ModalAddNickName.jsx';
import ModalEditNickName from './ModalEditNickName.jsx';
import ModalEditLiveSpace from './ModalEditLiveSpace.jsx';
import ModalUpLoadAvatarProfile from './ModalUpLoadAvatarProfile.jsx';
import ModalSharePost from './ModalSharePost.jsx';
import ModalViewImage from './ModalViewImage.jsx';
import ModalEditComment from './ModalEditComment.jsx';
import ModalEditCommentProfile from './ModalEditCommentProfile.jsx';
import ModalUpdatePostProfile from './ModalUpdatePostProfile.jsx';
import ModalViewStory from './ModalViewStory.jsx';
import ModalForgotPassVerification from './ModalForgotPassVerification.jsx';
import ModalForgotPass from './ModalForgotPass.jsx';
import ModalNewPass from './ModalNewPass.jsx';

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
    switch (statusPresentialModal.action) {
      case 'modal_forgot_pass_verification':
        return <ModalForgotPassVerification />;
        break;
      case 'modal_forgot_pass':
        return <ModalForgotPass />;
        break;
      case 'modal_new_pass':
        return <ModalNewPass />;
        break;
      case 'view_story':
        return <ModalViewStory />;
        break;
      case 'update_post_profile':
        return <ModalUpdatePostProfile />;
        break;
      case 'edit_comment_profile':
        return <ModalEditCommentProfile />;
        break;
      case 'edit_comment':
        return <ModalEditComment />;
        break;
      case 'view_image':
        return <ModalViewImage />;
        break;
      case 'modal_share_post':
        return <ModalSharePost />;
        break;
      case 'modal_upload_avatar_profile':
        return <ModalUpLoadAvatarProfile />;
        break;
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
      case 'modal_count_join_group':
        return <ModalCountJoinGroup />;
        break;
      case 'modal_request_join_group':
        return <ModalRequestJoinGroup />;
        break;
      case 'modal_add_work_space':
        return <ModalAddWorkSpace />;
        break;
      case 'modal_add_study_space':
        return <ModalAddStudySpace />;
        break;
      case 'modal_add_live_space':
        return <ModalAddLiveSpace />;
        break;
      case 'modal_edit_work_space':
        return <ModalEditWorkSpace />;
        break;
      case 'modal_edit_study_space':
        return <ModalEditStudySpace />;
        break;
      case 'modal_add_study_high_school':
        return <ModalAddStudyHighSchool />;
        break;
      case 'modal_edit_study_high_school':
        return <ModalEditStudyHighSchool />;
        break;
      case 'modal_add_email':
        return <ModalAddEmail />;
        break;
      case 'modal_edit_email':
        return <ModalEditEmail />;
        break;
      case 'modal_add_phone':
        return <ModalAddPhone />;
        break;
      case 'modal_edit_phone':
        return <ModalEditPhone />;
        break;
      case 'modal_add_website':
        return <ModalAddWebsite />;
        break;
      case 'modal_edit_website':
        return <ModalEditWebsite />;
        break;
      case 'modal_add_introduce':
        return <ModalAddIntroduce />;
        break;
      case 'modal_edit_introduce':
        return <ModalEditIntroduce />;
        break;
      case 'modal_add_nick_name':
        return <ModalAddNickName />;
        break;
      case 'modal_edit_nick_name':
        return <ModalEditNickName />;
        break;
      case 'modal_edit_live_space':
        return <ModalEditLiveSpace />;
        break;
      default:
        return 'foo';
    }
  }

  return (
    <div className="modal-public">
      <div className="presential-modal" onClick={() => dispatch(toggleStatusPresentialModal())}><AiOutlineClose className="close-presential-modal" /></div>
      <CurrentModal />
    </div>
  )
}
