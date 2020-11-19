import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading: true,
  listStory: []
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
    default: return state
  }
}
