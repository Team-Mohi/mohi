import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading: true,
  info: '',
  loadingUpdateProfile: false,
  loadingUpdateCover: false,
  loadingUpdateAvatar: false,
  loadingAddInfoProfile: false,
  loadingDeleteInfoProfile: false,
  listImage: [],
  lastImageOfList: 16,
  listVideo: [],
  lastVideoOfList: 4,
  loadingListImageAndVideo: true
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_UPDATE_COVER:
      return {
              ...state,
              loadingUpdateCover: true
            }
      break;
    case Types.RESPONSE_UPDATE_COVER:
      state.info.user_cover = action.payload.user_cover;
      state.info.user_cover_cropX = action.payload.user_cover_cropX;
      state.info.user_cover_cropY = action.payload.user_cover_cropY;
      return {
              ...state,
              loadingUpdateCover: false
            }
      break;
    case Types.REQUEST_UPDATE_AVATAR:
      return {
              ...state,
              loadingUpdateAvatar: true
            }
      break;
    case Types.RESPONSE_UPDATE_AVATAR:
      state.info.user_avatar = action.payload.user_avatar;
      state.info.user_avatar_cropX = action.payload.user_avatar_cropX;
      state.info.user_avatar_cropY = action.payload.user_avatar_cropY;
      state.info.user_avatar_cropW = action.payload.user_avatar_cropW;
      state.info.user_avatar_cropH = action.payload.user_avatar_cropH;
      return {
              ...state,
              loadingUpdateAvatar: false
            }
      break;
    case Types.FECTH_INFO_PROFILE:
      return {
              ...state,
              loading: true
            }
      break;
    case Types.RESPONSE_INFO_PROFILE:
      state.info = action.payload
      state.loading = false
      return {...state}
      break;
    case Types.REQUEST_IMAGE_PROFILE:
      state.loadingListImage = true
      return {...state}
      break;
    case Types.RESPONSE_IMAGE_PROFILE:
      state.listImage = action.payload.filter(img => img.post_images_Type === 'image')
      state.listVideo = action.payload.filter(img => img.post_images_Type === 'video')
      state.loadingListImage = false
      return {...state}
      break;
    case Types.RESPONSE_MORE_IMAGE_PROFILE:
      state.listImage = [...state.listImage]
      state.lastImageOfList = state.lastImageOfList + 16
      return {...state}
      break;
    case Types.RESPONSE_MORE_VIDEO_PROFILE:
      state.listVideo = [...state.listVideo]
      state.lastVideoOfList = state.lastVideoOfList + 4
      return {...state}
      break;
    case Types.LOAD_MORE_iMAGE_VIDEO_DEFAULT:
      state.lastImageOfList = 16
      state.lastVideoOfList = 4
      return {...state}
      break;
    case Types.REQUEST_UPDATE_PROFILE:
      state.loadingUpdateProfile = true
      return {...state}
      break;
    case Types.RESPONSE_UPDATE_PROFILE:
      state.loadingUpdateProfile = false
      switch (action.payload.type) {
        case "user_homeTown":
          state.info.user_homeTown = action.payload.value;
          break;
        case "user_currentPlace":
          state.info.user_currentPlace = action.payload.value;
          break;
        case "user_workPlace":
          state.info.user_workPlace = action.payload.value;
          break;
        case "user_studyPlace":
          state.info.user_studyPlace = action.payload.value;
          break;
        case "user_college":
          state.info.user_college = action.payload.value;
          break;
        case "user_high_school":
          state.info.user_high_school = action.payload.value;
          break;
        case "user_website":
          state.info.user_website = action.payload.value;
          break;
        case "user_first_name":
          state.info.user_first_name = action.payload.value;
          break;
        case "user_last_name":
          state.info.user_last_name = action.payload.value;
          break;
        case "user_nick_name":
          state.info.user_nick_name = action.payload.value;
          break;
        case "user_introduce":
          state.info.user_introduce = action.payload.value;
          break;
        case "user_email":
          state.info.user_email = action.payload.value;
          break;
        case "user_phone":
          state.info.user_phone = action.payload.value;
          break;
        case "user_avatar":
          state.info.user_avatar = action.payload.value;
          break;
        case "user_cover":
          state.info.user_cover = action.payload.value;
          break;
        case "user_username":
          state.info.user_username = action.payload.value;
          break;
      }
      return {...state}
      break;
    case Types.REQUEST_ADD_INFO_PROFILE:
      state.loadingAddInfoProfile = true
      return {...state}
      break;
    case Types.RESPONSE_ADD_INFO_PROFILE:
      state.loadingAddInfoProfile = false
      switch (action.payload.type) {
        case "user_homeTown":
          state.info.user_homeTown = action.payload.value;
          break;
        case "user_currentPlace":
          state.info.user_currentPlace = action.payload.value;
          break;
        case "user_workPlace":
          state.info.user_workPlace = action.payload.value;
          break;
        case "user_studyPlace":
          state.info.user_studyPlace = action.payload.value;
          break;
        case "user_college":
          state.info.user_college = action.payload.value;
          break;
        case "user_high_school":
          state.info.user_high_school = action.payload.value;
          break;
        case "user_website":
          state.info.user_website = action.payload.value;
          break;
        case "user_first_name":
          state.info.user_first_name = action.payload.value;
          break;
        case "user_last_name":
          state.info.user_last_name = action.payload.value;
          break;
        case "user_nick_name":
          state.info.user_nick_name = action.payload.value;
          break;
        case "user_introduce":
          state.info.user_introduce = action.payload.value;
          break;
        case "user_email":
          state.info.user_email = action.payload.value;
          break;
        case "user_phone":
          state.info.user_phone = action.payload.value;
          break;
        case "user_avatar":
          state.info.user_avatar = action.payload.value;
          break;
        case "user_cover":
          state.info.user_cover = action.payload.value;
          break;
      }
      return {...state}
      break;
    case Types.REQUEST_DELETE_INFO_PROFILE:
      state.loadingDeleteInfoProfile = true
      return {...state}
      break;
    case Types.RESPONSE_DELETE_INFO_PROFILE:
      state.loadingDeleteInfoProfile = false
      switch (action.payload.type) {
        case "user_homeTown":
          state.info.user_homeTown = "";
          break;
        case "user_currentPlace":
          state.info.user_currentPlace = "";
          break;
        case "user_workPlace":
          state.info.user_workPlace = "";
          break;
        case "user_studyPlace":
          state.info.user_studyPlace = "";
          break;
        case "user_college":
          state.info.user_college = "";
          break;
        case "user_high_school":
          state.info.user_high_school = "";
          break;
        case "user_website":
          state.info.user_website = "";
          break;
        case "user_first_name":
          state.info.user_first_name = "";
          break;
        case "user_last_name":
          state.info.user_last_name = "";
          break;
        case "user_nick_name":
          state.info.user_nick_name = "";
          break;
        case "user_introduce":
          state.info.user_introduce = "";
          break;
        case "user_email":
          state.info.user_email = "";
          break;
        case "user_phone":
          state.info.user_phone = "";
          break;
        case "user_avatar":
          state.info.user_avatar = "";
          break;
        case "user_cover":
          state.info.user_cover = "";
          break;
      }
      return {...state}
      break;
    default: return state
  }
}
