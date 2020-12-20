import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:false,
  loadingMore:false,
  list: [],
  infoUser: {},
  currentPage: 1,
  typing: false,
  hasMore: false
};

export const oneMessage = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_ONE_MESSAGE:
      state.loading = true
      state.list = []
      state.currentPage = 1
      return {...state}
      break;
    case Types.RESPONSE_ONE_MESSAGE:
      return {
        ...state,
        loadingMore: false,
        loading: false,
        list: action.payload.message_detail.data.reverse(),
        infoUser: action.payload.info,
        hasMore: action.payload.message_detail.last_page > action.payload.message_detail.current_page
      }
      break;
    case Types.SET_CURRENT_ONE_MESSAGE:
      state.currentPage = state.currentPage + 1
      return {...state}
      break;
    case Types.REQUEST_MORE_ONE_MESSAGE:
      return {
              ...state,
              loadingMore: true,
              loading: false,
            }
      break;
    case Types.RESPONSE_MORE_ONE_MESSAGE:
      state.list = [...action.payload.message_detail.data.reverse(), ...state.list]
      state.loadingMore = false
      state.hasMore = action.payload.message_detail.last_page > action.payload.message_detail.current_page
      return {...state}
      break;
    case Types.ADD_NEW_MESSAGE:
      if(state.infoUser.id === action.payload[0].messages_To || state.infoUser.id === action.payload[0].messages_From){
        state.list = [...state.list, ...action.payload];
      }
      return {...state}
      break;
    case Types.READ_MESSAGE:
      state.list.forEach((message, i) => {
        if(message.messages_From === action.payload.id && action.payload.clientId === state.infoUser.id){
          state.list[i].messages_ReadAt = 'read';
        }
      });
      return {...state}
      break;
    case Types.READ_MY_MESSAGE:
      state.list.forEach((message, i) => {
        if(message.messages_From === action.payload && action.payload === state.infoUser.id){
          state.list[i].messages_ReadAt = 'read';
          console.log(state);
        }
      });
      return {...state}
      break;
    case Types.TYPING_MESS:
      if(action.payload.from === state.infoUser.id && action.payload.status){
        state.typing = true;
      }else {
        state.typing = false;
      }
      return {...state}
      break;
    default: return {...state}
  }
}
