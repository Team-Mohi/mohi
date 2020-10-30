import * as Types from './../Constants/ActionTypes.jsx';

export const fetchImagesPost = (imagesPost) => {
  return {
    type: Types.IMAGES_POST,
    imagesPost
  }
}

export const fetchPosts = (posts) => {
  return {
    type: Types.POSTS,
    posts
  }
}

export const fetchPost = (post) => {
  return {
    type: Types.POST,
    post
  }
}
