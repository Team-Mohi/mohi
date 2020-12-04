import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  list : []
};

export const message = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_MESSAGE_POPUP:
      return {
        ...state
      }
      break;
    case Types.RESPONSE_MESSAGE_POPUP:
      return {
        loading: !state.loading,
        list: action.payload
      }
      break;
    default: return {...state}
  }
}
