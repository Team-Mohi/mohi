import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading: true,
  data: ''
};

export const onePost = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_ONE_POST:
      state.loading = true;
      return {...state}
      break;
    case Types.RESPONSE_ONE_POST:
      state.loading = false;
      state.data = action.payload;
      return {...state}
      break;
    default: return {...state}
  }
}
