import axios from 'axios';

export default function editInfo(payload){
  let initialData = {
    user_homeTown: '',
    user_currentPlace: '',
    user_workPlace: '',
    user_studyPlace: '',
    user_college: '',
    user_high_school: '',
    user_website: '',
    user_first_name: '',
    user_last_name: '',
    user_username: '',
    user_nick_name: '',
    user_introduce: '',
    user_email: '',
    user_phone: '',
    user_avatar: '',
    user_cover: ''
  }

  switch (payload.type) {
    case "user_homeTown":
      initialData.user_homeTown = payload.value;
      break;
    case "user_currentPlace":
      initialData.user_currentPlace = payload.value;
      break;
    case "user_workPlace":
      initialData.user_workPlace = payload.value;
      break;
    case "user_studyPlace":
      initialData.user_studyPlace = payload.value;
      break;
    case "user_college":
      initialData.user_college = payload.value;
      break;
    case "user_high_school":
      initialData.user_high_school = payload.value;
      break;
    case "user_website":
      initialData.user_website = payload.value;
      break;
    case "user_first_name":
      initialData.user_first_name = payload.value;
      break;
    case "user_last_name":
      initialData.user_last_name = payload.value;
      break;
    case "user_nick_name":
      initialData.user_nick_name = payload.value;
      break;
    case "user_username":
      initialData.user_username = payload.value;
      break;
    case "user_introduce":
      initialData.user_introduce = payload.value;
      break;
    case "user_email":
      initialData.user_email = payload.value;
      break;
    case "user_phone":
      initialData.user_phone = payload.value;
      break;
    case "user_avatar":
      initialData.user_avatar = payload.value;
      break;
    case "user_cover":
      initialData.user_cover = payload.value;
      break;
  }

  return axios.post("https://www.api.mohi.vn/api/auth/update-info-profile", initialData)
}
