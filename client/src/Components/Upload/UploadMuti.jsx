import React, { useState} from 'react';
import './UploadMuti.css';
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import { Spin } from 'antd';

function UploadMuti(props){
  const [files, setFiles] = useState([]);
  const [listLoading, setListLoading] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    let arrLoading = [];

      Array.from(e.target.files).map( async (file, index) => {
        arrLoading.push(index)
        setListLoading(arrLoading)
        setLoading(true);

        const formData = new FormData();
        formData.append('upload_preset', 'mohi_video');
        formData.append('file', file);
        upload(formData)

      })
  }

  const upload = async (formData) => {
    await axios.post('https://api.cloudinary.com/v1_1/mohi-vn/image/upload', formData)
    .then((res) => {
      files.push(res.data)
    }).then(() =>{
      setListLoading([])
      setLoading(false);
    })
  }

  const deleteFile = (index) => {
    const newFile = [...files]
    newFile.splice(index, 1)
    setFiles(newFile)
  }

  const renderFile = source => {
    return(
    <React.Fragment>
      {source.map((photo, index) => {
        return (
            <div className="list-preview-item" key={index}>
              <img src={photo.secure_url} />
              <div className={"list-preview-item-presential "+index}><AiOutlineClose onClick={() => deleteFile(index)}/></div>
            </div>
        )
      })}
      {loading ? <>
        {listLoading.map((load, index) => {
          return(
            <div className="list-preview-next-item" key={index}>
              <Spin />
            </div>
          )
        })}
      </> : null}
      {files.length ? <div className="list-preview-next-item" >
        <label htmlFor="create_post_upload_image"><FiPlus/></label>
      </div> : null}
    </React.Fragment>
    )
  }

  return(
    <div className="list-preview-container">
      { props.showModalCreatePost ?
      <div className="list-preview-wrap">
        <div className="list-preview" >
          {renderFile(files)}
        </div>
      </div>
      : null}
        <input id="create_post_upload_image" type="file" multiple onChange={onChange} />
    </div>
  )
}

export default UploadMuti;
