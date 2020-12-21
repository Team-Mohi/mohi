import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  list : []
};

export const notifycations = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_LIST_NOTIFICATION:
      return {
        ...state
      }
      break;
    case Types.RESPONSE_LIST_USER_NOTIFICATION:
      return {
        loading: !state.loading,
        list: [...action.notifycation]
      }
      break;
    case Types.DELETE_ONE_NOTI:
      const newList = state.list.filter(no => no.id !== action.payload)
      return {
        loading: false,
        list: newList
      }
      break;
    case Types.READ_NOTI:
      state.list.forEach((item, i) => {
        state.list[i].notification_IsRead = 'readed';
      });

      return {
        ...state
      }
      break;
    default: return state
  }
}
