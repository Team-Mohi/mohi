import React, {useState, useEffect} from 'react';
import './EditPage.css';
import {Link} from 'react-router-dom';
import { Editor, EditorState } from 'draft-js';
import style from 'styled-components';
import {useForm} from 'react-hook-form';

function EditPage(props){
    const {register, handleSubmit, errors} = useForm();
    const editorContent = EditorState.createEmpty();
    const [editorState, setEditorState] = useState({ editorState: editorContent });

    const handleEditorChange = (editorState) => {
      setEditorState({ editorState });
    }

    const closeEditPage = () => {
      props.closeEditPage()
    }

    const onSubmit = (data) => {
      console.log(data);
    }
    const StyleEditor = style.div`
      width: 500px;
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 3px;
      min-height:50px;
      max-height: 150px;
      overflow-y: auto;
    `;
    return(
      <div className="popup-edit-page-full">
        <div className="popup-edit-page-presentation" onClick={closeEditPage}>
        </div>
        <div className="popup-edit-page-ctn">
          <div className="popup-edit-page-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5 className="page-name-edit"><Link to="">ReactJS Việt Nam</Link></h5>
            {props.editPage.action === 'description' || props.editPage.action === 'full' ?
              <div className="popup-edit-form-group">
                <label>Mô tả</label>
                <StyleEditor>
                  <Editor
                    placeholder="Nhập mô tả..."
                    editorState={editorState.editorState}
                    onChange={handleEditorChange}
                  />
              </StyleEditor>
              </div>
              : null}
              {props.editPage.action === 'phone' || props.editPage.action === 'full' ?
              <div className="popup-edit-form-group">
                <label>Số điện thoại</label>
                <input type="text" name="user_phone" placeholder="Nhập số điện thoại" ref={register}/>
              </div>
              : null}
              {props.editPage.action === 'email' || props.editPage.action === 'full' ?
              <div className="popup-edit-form-group">
                <label>Email </label>
              <input type="text" name="user_email" placeholder="Nhập email" ref={register}/>
              </div>
              : null}
              <div className="popup-edit-form-group form-button">
                <button type='submit'>Lưu</button>
                <button onClick={closeEditPage}>Đóng</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default EditPage;
