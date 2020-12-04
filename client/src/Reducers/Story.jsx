import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading: true,
  listStory: [],
  loadingNewStory: false
};

export const stories = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_LIST_STORY:
      return {
        loading: true,
        listStory: [...state.listStory]
      }
      break;
    case Types.RECEIVED_LIST_STORY:
      return {
        loading: false,
        listStory: action.stories
      }
      break;
    case Types.REQUEST_ADD_NEW_STORY:
      return {
        ...state,
        loading: false,
        loadingNewStory: true
      }
      break;
    case Types.ADD_NEW_STORY:
    state.listStory = action.payload
      return {
        ...state,
        loading: false,
        loadingNewStory: false
      }
      break;
    default: return state
  }
}
