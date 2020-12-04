import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:false,
  loadingMore:false,
  list: [],
  infoUser: {},
  currentPage: 1,
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
    default: return {...state}
  }
}
