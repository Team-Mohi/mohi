import * as Types from './../Constants/ActionTypes.jsx';

const initialState = {
  loading:true,
  list : []
};

var findItem = (arr, id) => {
  var result = {
    index: -1,
    item: ''
  };

  arr.forEach((item, i) => {
    if(item.id === id){
      result.index = i;
      result.item = item;
    }
  });

  return result;
}

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
    case Types.ADD_NEW_MESSAGE_OF_LIST:
      if(action.payload.type === 'send'){
        //find message of usereceived
          var messReceived = findItem(state.list, action.payload.to.id);

          if(messReceived.index >= 0){
            state.list[messReceived.index].pivot = action.payload.message[0];
          }else {

            var newMessOfList = action.payload.to;
            newMessOfList.pivot = {};

            var newMess = action.payload.message[0];

            newMessOfList.pivot.messages_Message = newMess.messages_Message;
            newMessOfList.pivot.id = newMess.id;
            newMessOfList.pivot.messages_To = newMess.messages_To;
            newMessOfList.pivot.messages_From = newMess.messages_From;
            newMessOfList.pivot.messages_ReadAt = newMess.messages_ReadAt;
            newMessOfList.pivot.created_at = newMess.created_at;

            state.list = [newMessOfList, ...state.list]

          }
      }

      if(action.payload.type === 'received'){
        //find message of send
          var messSend = findItem(state.list, action.payload.from.id);

          if(messSend.index >= 0){
            state.list[messSend.index].pivot = action.payload.message[0];

          }else {

            var newMessOfList = action.payload.from;
            newMessOfList.pivot = {};

            var newMess = action.payload.message[0];

            newMessOfList.pivot.messages_Message = newMess.messages_Message;
            newMessOfList.pivot.id = newMess.id;
            newMessOfList.pivot.messages_To = newMess.messages_To;
            newMessOfList.pivot.messages_From = newMess.messages_From;
            newMessOfList.pivot.messages_ReadAt = newMess.messages_ReadAt;
            newMessOfList.pivot.created_at = newMess.created_at;

            state.list = [newMessOfList, ...state.list]
          }

      }

      return {...state}
      break;
    case Types.READ_MESSAGE_OF_LIST:

      var mess = findItem(state.list, action.payload.clientId);

      if(mess.index >= 0){
        state.list[mess.index].pivot.messages_ReadAt = 'read';
      }

      return {...state}
      break;
    default: return {...state}
  }
}
