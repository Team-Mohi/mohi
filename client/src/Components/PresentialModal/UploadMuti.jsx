import React, { useState, useEffect} from 'react';
import './UploadMuti.css';
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import { Spin } from 'antd';

function UploadMuti(props){
  const [files, setFiles] = useState(props.imagesPost);
  const [listLoading, setListLoading] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(props.statusCreatePost && props.statusCreatePost !== 'loading'){
      setFiles([])
    }
  }, [props.statusCreatePost])

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
    await axios.post('https://api.cloudinary.com/v1_1/mohi-vn/upload', formData)
    .then((res) => {
      files.push(res.data)
    }).then(() =>{
      setListLoading([])
      setLoading(false);
      props.uploadMuti(files)
    })
  }

  const deleteFile = (index) => {
    const newFile = [...files]
    newFile.splice(index, 1)
    setFiles(newFile)
    props.uploadMuti(newFile)
  }

  const renderFile = source => {
    return(
    <React.Fragment>
      {source.map((photo, index) => {
        if(photo.post_images_Type){
          if(photo.post_images_Type === 'image'){
            return (
                <div className="list-preview-item" key={index}>
                  <img src={photo.post_images_Url} />
                  <div className={"list-preview-item-presential "+index}><AiOutlineClose onClick={() => deleteFile(index)}/></div>
                </div>
            )
            }else {
              return (
                <div className="list-preview-item video-item" key={index}>
                  <video>
                       <source src={photo.post_images_Url} />
                       Your browser does not support HTML5 video.
                  </video>
                  <div className={"list-preview-item-presential "+index}><AiOutlineClose onClick={() => deleteFile(index)}/></div>
                </div>
              )
            }
        }else {
          if(photo.resource_type === 'image'){
            return (
                <div className="list-preview-item" key={index}>
                  <img src={photo.secure_url} />
                  <div className={"list-preview-item-presential "+index}><AiOutlineClose onClick={() => deleteFile(index)}/></div>
                </div>
            )
            }else {
              return (
                <div className="list-preview-item video-item" key={index}>
                  <video>
                       <source src={photo.secure_url} />
                       Your browser does not support HTML5 video.
                  </video>
                  <div className={"list-preview-item-presential "+index}><AiOutlineClose onClick={() => deleteFile(index)}/></div>
                </div>
              )
            }
        }
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
      <div className="list-preview-next-item" >
        <label htmlFor="update_post_upload_image"><FiPlus/></label>
      </div>
    </React.Fragment>
    )
  }

  return(
    <div className="list-preview-container">
      <div className="list-preview-wrap">
        <div className="list-preview" >
          {renderFile(files)}
        </div>
      </div>
        <input id="update_post_upload_image" type="file" multiple onChange={onChange} accept="image/*,video/*"/>
    </div>
  )
}

export default UploadMuti;
